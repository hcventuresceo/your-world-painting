import { getPhoneHref, siteContract } from "../src/config/siteContract.js";

declare const process: {
  env: Record<string, string | undefined>;
};

export default function handler(_req: unknown, res: any) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    ok: true,
    contract: siteContract,
    resolved: {
      phoneHref: getPhoneHref(),
    },
    deployment: {
      env: process.env.VERCEL_ENV ?? null,
      branch: process.env.VERCEL_GIT_COMMIT_REF ?? null,
      commitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
      commitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE ?? null,
      url: process.env.VERCEL_URL ?? null,
    },
    generatedAt: new Date().toISOString(),
  });
}
