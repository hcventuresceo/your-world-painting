import wealthyBathAfter1 from "@/assets/gallery/gallery-eg-bathroom-after-sage.jpg";
import wealthyBathAfter2 from "@/assets/gallery/gallery-eg-bathroom-after-mirror.jpg";
import wealthyBasementAfter from "@/assets/gallery/gallery-interior-hallway-after.jpg";
import wealthyBathBefore from "@/assets/gallery/gallery-eg-bathroom-before.jpg";
import wealthyBasementBefore from "@/assets/gallery/gallery-eg-before-hallway.jpg";
import wealthyBasementProgress from "@/assets/gallery/gallery-eg-stairwell-in-progress.jpg";

import job1Before9938 from "@/assets/gallery/locked/job1-before-9938.jpg";
import job1Before9941 from "@/assets/gallery/locked/job1-before-9941.jpg";
import job1Before9944 from "@/assets/gallery/locked/job1-before-9944.jpg";
import job1After0827 from "@/assets/gallery/locked/IMG_0827.png";
import job1After0828 from "@/assets/gallery/locked/IMG_0828.png";
import job1After0829 from "@/assets/gallery/locked/IMG_0829.png";
import job1After0830 from "@/assets/gallery/locked/IMG_0830.png";

import job245Before1741 from "@/assets/gallery/locked/job245-before-1741.jpg";
import job245After3628 from "@/assets/gallery/locked/job245-after-3628.jpg";
import job245After3629 from "@/assets/gallery/locked/job245-after-3629.jpg";
import job245After3630 from "@/assets/gallery/locked/job245-after-3630.jpg";
import job245Support3647 from "@/assets/gallery/locked/job245-support-3647.jpg";
import job245Backdeck3591 from "@/assets/gallery/locked/job245-backdeck-3591.jpg";
import job245Backdeck3592 from "@/assets/gallery/locked/job245-backdeck-3592.jpg";
import job245Backdeck3593 from "@/assets/gallery/locked/job245-backdeck-3593.jpg";
import job245DoorBefore3603 from "@/assets/gallery/locked/job245-door-before-3603.jpg";
import job245StairsBefore3627 from "@/assets/gallery/locked/job245-stairs-before-3627.jpg";
import job245StairsAfter3626 from "@/assets/gallery/locked/job245-stairs-after-3626.jpg";

import job37Before2007 from "@/assets/gallery/locked/IMG_2007.png";
import job37After3635 from "@/assets/gallery/locked/job37-after-3635.jpg";
import job37After3636 from "@/assets/gallery/locked/job37-after-3636.jpg";
import job37After3637 from "@/assets/gallery/locked/job37-after-3637.jpg";
import job37Support3677 from "@/assets/gallery/locked/job37-support-3677.jpg";
import job37Before3642 from "@/assets/gallery/locked/job37-before-3642.jpg";

import job10Before9098 from "@/assets/gallery/locked/job10-before-9098.jpg";
import job10After9137 from "@/assets/gallery/locked/IMG_9137.png";
import job10After9140 from "@/assets/gallery/locked/IMG_9140.png";
import job10After9141 from "@/assets/gallery/locked/IMG_9141.png";
import job10After9142 from "@/assets/gallery/locked/IMG_9142.png";

import malikSilo1 from "@/assets/gallery/gallery-interior-malik-painting.jpg";
import malikSilo2 from "@/assets/gallery/gallery-accent-wall-before.jpg";
import malikAfter1 from "@/assets/gallery/gallery-accent-chalkboard-wall.jpg";
import malikAfter2 from "@/assets/gallery/gallery-accent-kids-room.jpg";
import malikSupport1 from "@/assets/gallery/gallery-bedroom-walls-after.jpg";
import malikSupport2 from "@/assets/gallery/gallery-accent-room-in-progress.jpg";

import robertsBefore from "@/assets/gallery/gallery-c-ceiling-before.jpg";
import robertsBefore2 from "@/assets/gallery/gallery-c-ceiling-before-2.jpg";
import robertsAfter from "@/assets/gallery/gallery-c-ceiling-after.jpg";
import robertsProgress from "@/assets/gallery/gallery-interior-ceiling-painting.jpg";

import job13Before9343 from "@/assets/gallery/locked/job13-before-9343.jpg";
import job13After9729 from "@/assets/gallery/locked/job13-after-9729.jpg";
import job13After9731 from "@/assets/gallery/locked/job13-after-9731.jpg";
import job13After9732 from "@/assets/gallery/locked/job13-after-9732.jpg";
import job13After9734 from "@/assets/gallery/locked/job13-after-9734.jpg";

export type ServiceTag =
  | "Interior Painting"
  | "Exterior Painting"
  | "Accent Walls"
  | "Wood Staining & Finishing"
  | "Drywall & Surface Repair"
  | "Power Washing"
  | "Door & Detail Work";

export interface MediaItem {
  type: "image";
  src: string;
  caption: string;
}

export type AssetKey =
  | "IMG_9938"
  | "IMG_9941"
  | "IMG_9944"
  | "IMG_0827"
  | "IMG_0828"
  | "IMG_0829"
  | "IMG_0830"
  | "IMG_1741"
  | "IMG_3628"
  | "IMG_3629"
  | "IMG_3630"
  | "IMG_3647"
  | "IMG_3591"
  | "IMG_3592"
  | "IMG_3593"
  | "IMG_3603"
  | "IMG_3626"
  | "IMG_3627"
  | "IMG_3642"
  | "IMG_2007"
  | "IMG_3635"
  | "IMG_3636"
  | "IMG_3637"
  | "IMG_3677"
  | "IMG_9098"
  | "IMG_9137"
  | "IMG_9140"
  | "IMG_9141"
  | "IMG_9142"
  | "IMG_9343"
  | "IMG_9729"
  | "IMG_9731"
  | "IMG_9732"
  | "IMG_9734"
  | "IMG_3680"
  | "IMG_3683"
  | "IMG_3684"
  | "IMG_3685"
  | "IMG_5629"
  | "IMG_5630"
  | "IMG_8363"
  | "IMG_8364"
  | "IMG_8365"
  | "IMG_9073"
  | "IMG_9080";

export interface GalleryProject {
  id: string;
  title: string;
  subtitle: string;
  services: ServiceTag[];
  featured: boolean;
  fullAssets: AssetKey[];
  displayAssets: AssetKey[];
}

export const assetLibrary: Record<AssetKey, MediaItem> = {
  IMG_9938: {
    type: "image",
    src: job1Before9938,
    caption: "Deck and entry detail before the repaint",
  },
  IMG_9941: {
    type: "image",
    src: job1Before9941,
    caption: "Exterior before the repaint and curb-appeal refresh",
  },
  IMG_9944: {
    type: "image",
    src: job1Before9944,
    caption: "Deck detail before the repaint",
  },
  IMG_0827: {
    type: "image",
    src: job1After0827,
    caption: "Full exterior view after the repaint",
  },
  IMG_0828: {
    type: "image",
    src: job1After0828,
    caption: "Side exterior after the repaint",
  },
  IMG_0829: {
    type: "image",
    src: job1After0829,
    caption: "Front exterior angle after the repaint",
  },
  IMG_0830: {
    type: "image",
    src: job1After0830,
    caption: "Additional exterior angle after the repaint",
  },
  IMG_1741: {
    type: "image",
    src: job245Before1741,
    caption: "Front entry before the repaint",
  },
  IMG_3628: {
    type: "image",
    src: job245After3628,
    caption: "Blue door and entry after repaint",
  },
  IMG_3629: {
    type: "image",
    src: job245After3629,
    caption: "Blue steps and wall section after repaint",
  },
  IMG_3630: {
    type: "image",
    src: job245After3630,
    caption: "Additional entry angle after repaint",
  },
  IMG_3647: {
    type: "image",
    src: job245Support3647,
    caption: "Supporting stair and entry view after repaint",
  },
  IMG_3591: {
    type: "image",
    src: job245Backdeck3591,
    caption: "Back deck area after the repaint",
  },
  IMG_3592: {
    type: "image",
    src: job245Backdeck3592,
    caption: "Additional back deck view after the repaint",
  },
  IMG_3593: {
    type: "image",
    src: job245Backdeck3593,
    caption: "Rear deck and siding view after the repaint",
  },
  IMG_3603: {
    type: "image",
    src: job245DoorBefore3603,
    caption: "Front door before the repaint",
  },
  IMG_3626: {
    type: "image",
    src: job245StairsAfter3626,
    caption: "Stairs after the blue repaint",
  },
  IMG_3627: {
    type: "image",
    src: job245StairsBefore3627,
    caption: "Concrete stairs before the repaint",
  },
  IMG_3642: {
    type: "image",
    src: job37Before3642,
    caption: "Property exterior before the repaint",
  },
  IMG_2007: {
    type: "image",
    src: job37Before2007,
    caption: "Brick porch and entry before repaint",
  },
  IMG_3635: {
    type: "image",
    src: job37After3635,
    caption: "Primary exterior angle after the brick porch repaint",
  },
  IMG_3636: {
    type: "image",
    src: job37After3636,
    caption: "Supporting exterior angle with the finished porch surfaces",
  },
  IMG_3637: {
    type: "image",
    src: job37After3637,
    caption: "Additional wall and porch finish after repaint",
  },
  IMG_3677: {
    type: "image",
    src: job37Support3677,
    caption: "Lower stair and entry support view after repaint",
  },
  IMG_9098: {
    type: "image",
    src: job10Before9098,
    caption: "Interior before the full repaint",
  },
  IMG_9137: {
    type: "image",
    src: job10After9137,
    caption: "Upstairs bathroom after repaint",
  },
  IMG_9140: {
    type: "image",
    src: job10After9140,
    caption: "Living room after the repaint",
  },
  IMG_9141: {
    type: "image",
    src: job10After9141,
    caption: "Downstairs bathroom after repaint",
  },
  IMG_9142: {
    type: "image",
    src: job10After9142,
    caption: "Hallway and dining connection after repaint",
  },
  IMG_9343: {
    type: "image",
    src: job13Before9343,
    caption: "Front entrance before repaint",
  },
  IMG_9729: {
    type: "image",
    src: job13After9729,
    caption: "Front entrance detail after repaint",
  },
  IMG_9731: {
    type: "image",
    src: job13After9731,
    caption: "Entry approach after repaint",
  },
  IMG_9732: {
    type: "image",
    src: job13After9732,
    caption: "Porch interior after repaint",
  },
  IMG_9734: {
    type: "image",
    src: job13After9734,
    caption: "Arch and porch finish after repaint",
  },
  IMG_3680: {
    type: "image",
    src: wealthyBasementBefore,
    caption: "Basement passage before repaint",
  },
  IMG_3683: {
    type: "image",
    src: wealthyBasementAfter,
    caption: "Basement passage after repaint",
  },
  IMG_3684: {
    type: "image",
    src: wealthyBathAfter1,
    caption: "Bathroom after repaint",
  },
  IMG_3685: {
    type: "image",
    src: wealthyBathAfter2,
    caption: "Additional bathroom angle after repaint",
  },
  IMG_5629: {
    type: "image",
    src: malikSilo1,
    caption: "Interior area before repaint",
  },
  IMG_5630: {
    type: "image",
    src: malikSilo2,
    caption: "Additional room before repaint",
  },
  IMG_8363: {
    type: "image",
    src: malikAfter1,
    caption: "Finished interior wall after repaint",
  },
  IMG_8364: {
    type: "image",
    src: malikAfter2,
    caption: "Additional finished room after repaint",
  },
  IMG_8365: {
    type: "image",
    src: malikSupport1,
    caption: "Supporting room angle after repaint",
  },
  IMG_9073: {
    type: "image",
    src: robertsBefore,
    caption: "Ceiling before repaint",
  },
  IMG_9080: {
    type: "image",
    src: robertsAfter,
    caption: "Ceiling after repaint",
  },
};

export function resolveAssets(assetKeys: AssetKey[]): MediaItem[] {
  return assetKeys
    .map((assetKey) => assetLibrary[assetKey])
    .filter((asset): asset is MediaItem => Boolean(asset));
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "job-1",
    title: "Wealthy Home Exterior Repaint",
    subtitle:
      "Full exterior repaint with a clean, high-contrast finish and stronger curb appeal.",
    services: ["Exterior Painting"],
    featured: true,
    fullAssets: ["IMG_9938", "IMG_9941", "IMG_9944", "IMG_0827", "IMG_0828", "IMG_0829", "IMG_0830", "IMG_3680", "IMG_3683", "IMG_3684", "IMG_3685"],
    displayAssets: ["IMG_9941", "IMG_0828", "IMG_0829", "IMG_0830", "IMG_0827"],
  },
  {
    id: "job-2",
    title: "Front Door and Deck Refresh",
    subtitle:
      "Deck boards, trim, and the front entry were refreshed for a cleaner, sharper exterior finish.",
    services: ["Exterior Painting", "Wood Staining & Finishing", "Door & Detail Work"],
    featured: true,
    fullAssets: ["IMG_3603", "IMG_3647", "IMG_3627", "IMG_3626", "IMG_1741", "IMG_3628", "IMG_3629", "IMG_3630", "IMG_3591", "IMG_3592", "IMG_3593"],
    displayAssets: ["IMG_3647", "IMG_3626", "IMG_3603", "IMG_3627"],
  },
  {
    id: "job-3",
    title: "Brick Porch Exterior Repaint",
    subtitle:
      "Brick porch and entry surfaces were refreshed for a cleaner, brighter exterior finish.",
    services: ["Exterior Painting", "Door & Detail Work"],
    featured: true,
    fullAssets: ["IMG_3642", "IMG_3635", "IMG_3636", "IMG_3637", "IMG_2007", "IMG_3677"],
    displayAssets: ["IMG_3642", "IMG_3635", "IMG_3636", "IMG_3637"],
  },
  {
    id: "job-4",
    title: "Front Steps and Entry Refresh",
    subtitle:
      "Steps, trim, and the front entry transition were repainted for a cleaner arrival.",
    services: ["Exterior Painting", "Door & Detail Work"],
    featured: false,
    fullAssets: ["IMG_3603", "IMG_3647", "IMG_3627", "IMG_3626", "IMG_1741", "IMG_3628", "IMG_3629", "IMG_3630", "IMG_3591", "IMG_3592", "IMG_3593"],
    displayAssets: [],
  },
  {
    id: "job-5",
    title: "Blue Door and Steps Repaint",
    subtitle:
      "A bold color update that gives the front door and steps an instant visual lift.",
    services: ["Exterior Painting", "Door & Detail Work"],
    featured: false,
    fullAssets: ["IMG_3603", "IMG_3647", "IMG_3627", "IMG_3626", "IMG_1741", "IMG_3628", "IMG_3629", "IMG_3630", "IMG_3591", "IMG_3592", "IMG_3593"],
    displayAssets: [],
  },
  {
    id: "job-6",
    title: "Power Washing",
    subtitle:
      "Exterior surfaces were washed down to remove buildup and brighten the finish.",
    services: ["Power Washing"],
    featured: false,
    fullAssets: [],
    displayAssets: [],
  },
  {
    id: "job-7",
    title: "Basement Steps and Door Refresh",
    subtitle:
      "Lower-level steps and entry doors refreshed to clean up the approach.",
    services: ["Door & Detail Work", "Interior Painting"],
    featured: false,
    fullAssets: ["IMG_3642", "IMG_3635", "IMG_3636", "IMG_3637", "IMG_2007", "IMG_3677"],
    displayAssets: [],
  },
  {
    id: "job-8",
    title: "Basement and Bathroom Repaint",
    subtitle:
      "Interior repaint focused on the basement passage and bathroom finish.",
    services: ["Interior Painting", "Accent Walls"],
    featured: false,
    fullAssets: ["IMG_3680", "IMG_3683", "IMG_3684", "IMG_3685"],
    displayAssets: [],
  },
  {
    id: "job-9",
    title: "Apartment Interior Repaint",
    subtitle:
      "Apartment walls and adjoining bathroom areas refreshed with a cleaner interior finish.",
    services: ["Interior Painting"],
    featured: false,
    fullAssets: [],
    displayAssets: [],
  },
  {
    id: "job-10",
    title: "Full Interior Multi-Room Repaint",
    subtitle:
      "A full interior repaint covering the living room, hallway, bath, and stair connection.",
    services: ["Interior Painting", "Drywall & Surface Repair"],
    featured: true,
    fullAssets: ["IMG_9098", "IMG_9140", "IMG_9141", "IMG_9142", "IMG_9137"],
    displayAssets: ["IMG_9098", "IMG_9140", "IMG_9141", "IMG_9142", "IMG_9137"],
  },
  {
    id: "job-11",
    title: "Interior Repaint at Malik's House",
    subtitle:
      "Interior repaint work across multiple rooms with bright, clean finished surfaces.",
    services: ["Interior Painting", "Accent Walls", "Drywall & Surface Repair"],
    featured: false,
    fullAssets: ["IMG_5629", "IMG_5630", "IMG_8363", "IMG_8364", "IMG_8365"],
    displayAssets: [],
  },
  {
    id: "job-12",
    title: "Roberts Wesleyan Ceiling Repaint",
    subtitle:
      "Ceiling repaint that brightened the room and cleaned up the finish.",
    services: ["Interior Painting", "Drywall & Surface Repair"],
    featured: false,
    fullAssets: ["IMG_9073", "IMG_9080"],
    displayAssets: ["IMG_9073", "IMG_9080"],
  },
  {
    id: "job-13",
    title: "Front Entrance Repaint",
    subtitle:
      "Front entrance repaint that sharpened the trim, porch, and curb appeal.",
    services: ["Exterior Painting", "Door & Detail Work"],
    featured: true,
    fullAssets: ["IMG_9343", "IMG_9729", "IMG_9731", "IMG_9732", "IMG_9734"],
    displayAssets: ["IMG_9343", "IMG_9729", "IMG_9731", "IMG_9732", "IMG_9734"],
  },
];

export const ALL_SERVICE_FILTERS: string[] = [
  "All",
  "Interior Painting",
  "Exterior Painting",
  "Accent Walls",
  "Wood Staining & Finishing",
  "Drywall & Surface Repair",
  "Power Washing",
  "Door & Detail Work",
];
