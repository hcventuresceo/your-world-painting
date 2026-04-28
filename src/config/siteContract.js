export const siteContract = {
  version: "2026-04-28.2",
  business: {
    name: "Your World Painting",
    owner: "Malik",
    market: "Rochester, NY",
    phoneDisplay: "716-815-0333",
    phoneDigits: "7168150333",
  },
  header: {
    mobilePrimaryCtaLabel: "Call Now",
    mobileMenuItems: ["Gallery", "About"],
    desktopItems: ["Gallery", "About", "Free Estimate"],
  },
  hero: {
    mustClipOverflow: true,
  },
  integrity: {
    bannedForeignNames: ["Ricardo", "ricardo"],
    guardedFiles: [
      "src/app/components/Header.tsx",
      "src/app/components/Hero.tsx",
      "src/app/components/HomeHealthDiagnostic.tsx",
      "src/app/components/ExteriorHealthDiagnostic.tsx",
    ],
  },
};

export function getPhoneHref() {
  return `tel:${siteContract.business.phoneDigits}`;
}
