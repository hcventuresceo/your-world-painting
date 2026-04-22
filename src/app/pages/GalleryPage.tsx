import { Play } from "lucide-react";

type StageLabel = "BEFORE" | "AFTER";

type GalleryMedia = {
  type: "image" | "video";
  src: string;
  stage: StageLabel;
  detail?: string;
};

type GallerySet = {
  title: string;
  items: GalleryMedia[];
};

function image(id: string, stage: StageLabel, detail?: string): GalleryMedia {
  return {
    type: "image",
    src: `/ywp-album/images/IMG_${id}.jpg`,
    stage,
    detail,
  };
}

function video(id: string, stage: StageLabel, detail?: string): GalleryMedia {
  return {
    type: "video",
    src: `/ywp-album/videos/IMG_${id}.MOV`,
    stage,
    detail,
  };
}

const GALLERY_SETS: readonly GallerySet[] = [
  {
    title: "Project 1 — Brown House: Exterior",
    items: [
      video("9338", "BEFORE", "Exterior"),
      video("9339", "BEFORE", "Exterior"),
      video("9340", "BEFORE", "Exterior"),
      image("9341", "BEFORE", "Exterior"),
      video("0827", "AFTER", "Exterior"),
      video("0828", "AFTER", "Exterior"),
      video("0829", "AFTER", "Exterior"),
      video("0830", "AFTER", "Exterior"),
    ],
  },
  {
    title: "Project 1 — Brown House: Basement",
    items: [
      image("3680", "BEFORE", "Basement"),
      image("3681", "BEFORE", "Basement"),
      image("3682", "BEFORE", "Basement"),
      image("3683", "AFTER", "Basement"),
      image("3684", "AFTER", "Basement"),
      image("3685", "AFTER", "Basement"),
      image("3686", "AFTER", "Basement"),
      image("3687", "AFTER", "Basement"),
      image("3688", "AFTER", "Basement"),
      image("3689", "AFTER", "Basement"),
    ],
  },
  {
    title: "Project 1 — Brown House: Bathroom",
    items: [
      image("3690", "BEFORE", "Bathroom"),
      image("3691", "BEFORE", "Bathroom"),
      image("3692", "BEFORE", "Bathroom"),
      image("3693", "AFTER", "Bathroom"),
      image("3694", "AFTER", "Bathroom"),
      image("3695", "AFTER", "Bathroom"),
      image("3696", "AFTER", "Bathroom"),
    ],
  },
  {
    title: "Project 2 — Full Exterior + Entrances + Touch Ups: Exterior/Porch",
    items: [
      video("2006", "BEFORE", "Exterior/Porch"),
      video("2007", "BEFORE", "Exterior/Porch"),
      video("2008", "BEFORE", "Exterior/Porch"),
      video("2009", "BEFORE", "Exterior/Porch"),
      image("2210", "BEFORE", "Exterior/Porch"),
      image("3635", "AFTER", "Exterior/Porch"),
      image("3636", "AFTER", "Exterior/Porch"),
      image("3637", "AFTER", "Exterior/Porch"),
      image("3641", "AFTER", "Exterior/Porch"),
      image("3642", "AFTER", "Exterior/Porch"),
      image("3643", "AFTER", "Exterior/Porch"),
      image("3644", "AFTER", "Exterior/Porch"),
      image("3645", "AFTER", "Exterior/Porch"),
      image("3646", "AFTER", "Exterior/Porch"),
    ],
  },
  {
    title: "Project 2 — Full Exterior + Entrances + Touch Ups: Front Entrance",
    items: [
      image("3661", "BEFORE", "Front Entrance"),
      image("3662", "BEFORE", "Front Entrance"),
      image("3663", "BEFORE", "Front Entrance"),
      image("3664", "BEFORE", "Front Entrance"),
      image("3665", "BEFORE", "Front Entrance"),
      image("3666", "BEFORE", "Front Entrance"),
      image("3667", "BEFORE", "Front Entrance"),
      image("3668", "BEFORE", "Front Entrance"),
      image("3669", "BEFORE", "Front Entrance"),
      image("3670", "BEFORE", "Front Entrance"),
      image("3675", "BEFORE", "Front Entrance"),
      image("3671", "AFTER", "Front Entrance"),
      image("3672", "AFTER", "Front Entrance"),
      image("3673", "AFTER", "Front Entrance"),
      image("3674", "AFTER", "Front Entrance"),
      image("3676", "AFTER", "Front Entrance"),
    ],
  },
  {
    title: "Project 2 — Full Exterior + Entrances + Touch Ups: Back Entrance",
    items: [
      image("3677", "AFTER", "Back Entrance"),
      image("3678", "AFTER", "Back Entrance"),
      image("3679", "AFTER", "Back Entrance"),
    ],
  },
  {
    title: "Project 2 — Full Exterior + Entrances + Touch Ups: Door Touch Up",
    items: [image("3700", "BEFORE", "Door Touch Up"), image("3699", "AFTER", "Door Touch Up")],
  },
  {
    title: "Project 2 — Full Exterior + Entrances + Touch Ups: Wall Touch",
    items: [image("3698", "BEFORE", "Wall Touch"), image("3697", "AFTER", "Wall Touch")],
  },
  {
    title: "Project 3 — Porch + Patio + Entrances: Front Porch",
    items: [
      image("3622", "AFTER", "Front Porch"),
      image("3623", "AFTER", "Front Porch"),
      image("3624", "AFTER", "Front Porch"),
      image("3625", "AFTER", "Front Porch"),
      image("3603", "AFTER", "Front Porch"),
    ],
  },
  {
    title: "Project 3 — Porch + Patio + Entrances: Back Patio",
    items: [
      image("1741", "BEFORE", "Back Patio"),
      image("1742", "BEFORE", "Back Patio"),
      image("1743", "BEFORE", "Back Patio"),
      image("1744", "BEFORE", "Back Patio"),
      image("3598", "AFTER", "Back Patio"),
      image("3599", "AFTER", "Back Patio"),
      image("3600", "AFTER", "Back Patio"),
      image("3601", "AFTER", "Back Patio"),
      image("3602", "AFTER", "Back Patio"),
      image("3605", "AFTER", "Back Patio"),
    ],
  },
  {
    title: "Project 3 — Porch + Patio + Entrances: Side Entrance",
    items: [
      image("3628", "AFTER", "Side Entrance"),
      image("3629", "AFTER", "Side Entrance"),
      image("3630", "AFTER", "Side Entrance"),
      image("3631", "AFTER", "Side Entrance"),
      image("3632", "AFTER", "Side Entrance"),
    ],
  },
  {
    title: "Project 3 — Porch + Patio + Entrances: Basement Entrance",
    items: [
      image("3627", "BEFORE", "Basement Entrance"),
      image("3626", "AFTER", "Basement Entrance"),
      image("3647", "AFTER", "Basement Entrance"),
    ],
  },
  {
    title: "Project 4 — Water Damage Ceiling",
    items: [
      image("3563", "BEFORE", "Ceiling"),
      image("3564", "BEFORE", "Ceiling"),
      image("3565", "BEFORE", "Ceiling"),
      image("3566", "AFTER", "Ceiling"),
      image("9055", "AFTER", "Ceiling"),
    ],
  },
  {
    title: "Project 5 — Back Patio + Power Wash",
    items: [
      image("9938", "BEFORE", "Back Patio + Power Wash"),
      image("9941", "BEFORE", "Back Patio + Power Wash"),
      image("9944", "BEFORE", "Back Patio + Power Wash"),
      image("3591", "AFTER", "Back Patio + Power Wash"),
      image("3592", "AFTER", "Back Patio + Power Wash"),
      image("3593", "AFTER", "Back Patio + Power Wash"),
    ],
  },
  {
    title: "Project 6 — Power Washing",
    items: [
      image("3606", "BEFORE", "Power Washing"),
      image("3607", "BEFORE", "Power Washing"),
      image("3609", "BEFORE", "Power Washing"),
      image("3611", "BEFORE", "Power Washing"),
      image("3608", "AFTER", "Power Washing"),
      image("3610", "AFTER", "Power Washing"),
      image("3612", "AFTER", "Power Washing"),
    ],
  },
  {
    title: "Project 7 — Bedrooms + Shutters: Bedroom 1",
    items: [
      image("9154", "BEFORE", "Bedroom 1"),
      image("9155", "BEFORE", "Bedroom 1"),
      image("9156", "BEFORE", "Bedroom 1"),
      image("7130", "AFTER", "Bedroom 1"),
      image("8362", "AFTER", "Bedroom 1"),
      video("8363", "AFTER", "Bedroom 1"),
      image("8364", "AFTER", "Bedroom 1"),
    ],
  },
  {
    title: "Project 7 — Bedrooms + Shutters: Bedroom 2",
    items: [
      video("8365", "AFTER", "Bedroom 2"),
      image("8366", "AFTER", "Bedroom 2"),
      image("8367", "AFTER", "Bedroom 2"),
    ],
  },
  {
    title: "Project 7 — Bedrooms + Shutters: Shutters",
    items: [image("5629", "AFTER", "Shutters"), image("5630", "AFTER", "Shutters")],
  },
  {
    title: "Project 8 — School Office",
    items: [video("9080", "AFTER", "School Office")],
  },
  {
    title: "Project 9 — Full Interior + Garage",
    items: [
      video("9096", "BEFORE", "Full Interior + Garage"),
      image("9098", "BEFORE", "Full Interior + Garage"),
      video("9099", "BEFORE", "Full Interior + Garage"),
      video("9100", "BEFORE", "Full Interior + Garage"),
      video("9101", "BEFORE", "Full Interior + Garage"),
      video("9137", "AFTER", "Full Interior + Garage"),
      image("9138", "AFTER", "Full Interior + Garage"),
      video("9140", "AFTER", "Full Interior + Garage"),
      video("9141", "AFTER", "Full Interior + Garage"),
      video("9142", "AFTER", "Full Interior + Garage"),
      image("3701", "AFTER", "Full Interior + Garage"),
    ],
  },
  {
    title: "Project 10 — Front Entrance (Separate Set)",
    items: [
      image("9343", "BEFORE", "Front Entrance"),
      image("9344", "BEFORE", "Front Entrance"),
      image("9345", "BEFORE", "Front Entrance"),
      image("9346", "BEFORE", "Front Entrance"),
      image("9348", "BEFORE", "Front Entrance"),
      image("9729", "AFTER", "Front Entrance"),
      image("9731", "AFTER", "Front Entrance"),
      image("9732", "AFTER", "Front Entrance"),
      image("9734", "AFTER", "Front Entrance"),
    ],
  },
] as const;

function MediaTile({ item }: { item: GalleryMedia }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8]">
      <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#111827] px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white">
          {item.stage}
        </span>
        {item.detail ? (
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#111827]">
            {item.detail}
          </span>
        ) : null}
      </div>

      {item.type === "image" ? (
        <img
          src={item.src}
          alt={`${item.detail ?? "Gallery item"} ${item.stage}`}
          className="h-full min-h-[260px] w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="relative">
          <video
            controls
            preload="metadata"
            playsInline
            className="h-full min-h-[260px] w-full object-cover"
          >
            <source src={item.src} />
          </video>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/60 p-4 text-white">
              <Play className="size-8 fill-current" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface GalleryPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function GalleryPage({ onEstimateClick: _onEstimateClick }: GalleryPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[#e5e7eb] bg-[#111827] px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            The Your World Painting Gallery
          </h1>
          <p className="mt-3 text-base text-gray-300 md:text-lg">
            Rochester-shot. Transformation-focused. Built on real work.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="space-y-10">
          {GALLERY_SETS.map((setItem) => (
            <section key={setItem.title} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-[#111827]">{setItem.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {setItem.items.map((item) => (
                  <MediaTile key={`${setItem.title}-${item.src}`} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
