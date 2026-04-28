import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteContract } from "../src/config/siteContract.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertContains(haystack, needle, context) {
  if (!haystack.includes(needle)) {
    throw new Error(`Missing ${context}: ${needle}`);
  }
}

const headerSource = read("src/app/components/Header.tsx");
const heroSource = read("src/app/components/Hero.tsx");

assertContains(headerSource, siteContract.business.phoneDisplay, "header phone");
assertContains(headerSource, siteContract.header.mobilePrimaryCtaLabel, "mobile CTA");

for (const label of siteContract.header.mobileMenuItems) {
  assertContains(headerSource, label, `mobile menu label`);
}

for (const label of siteContract.header.desktopItems) {
  assertContains(headerSource, label, `desktop nav label`);
}

if (siteContract.hero.mustClipOverflow) {
  assertContains(heroSource, "overflow-hidden", "hero overflow guard");
}

for (const guardedFile of siteContract.integrity.guardedFiles) {
  const contents = read(guardedFile);
  for (const banned of siteContract.integrity.bannedForeignNames) {
    if (contents.includes(banned)) {
      throw new Error(`Foreign client name found in ${guardedFile}: ${banned}`);
    }
  }
}

if (
  process.env.VERCEL === "1" &&
  process.env.VERCEL_ENV === "production" &&
  process.env.VERCEL_GIT_COMMIT_REF &&
  process.env.VERCEL_GIT_COMMIT_REF !== "main"
) {
  throw new Error(
    `Production deploy blocked from non-main branch: ${process.env.VERCEL_GIT_COMMIT_REF}`,
  );
}

console.log(
  JSON.stringify(
    {
      ok: true,
      contractVersion: siteContract.version,
      market: siteContract.business.market,
      guardedFiles: siteContract.integrity.guardedFiles.length,
    },
    null,
    2,
  ),
);
