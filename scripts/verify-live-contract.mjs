import { getPhoneHref, siteContract } from "../src/config/siteContract.js";

const target = process.argv[2] ?? "https://yourworldpaintingny.com";
const endpoint = new URL("/api/site-contract", target).toString();

const response = await fetch(endpoint, {
  headers: {
    accept: "application/json",
  },
});

if (!response.ok) {
  throw new Error(`Live contract request failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
if (!payload?.ok || !payload?.contract) {
  throw new Error("Live contract payload is invalid.");
}

if (payload.contract.version !== siteContract.version) {
  throw new Error(
    `Contract version mismatch. expected=${siteContract.version} actual=${payload.contract.version}`,
  );
}

if (payload.resolved?.phoneHref !== getPhoneHref()) {
  throw new Error(
    `Phone href mismatch. expected=${getPhoneHref()} actual=${payload.resolved?.phoneHref}`,
  );
}

for (const label of siteContract.header.mobileMenuItems) {
  if (!payload.contract.header?.mobileMenuItems?.includes(label)) {
    throw new Error(`Missing live mobile menu label: ${label}`);
  }
}

console.log(
  JSON.stringify(
    {
      ok: true,
      target,
      contractVersion: payload.contract.version,
      branch: payload.deployment?.branch ?? null,
      commitSha: payload.deployment?.commitSha ?? null,
    },
    null,
    2,
  ),
);
