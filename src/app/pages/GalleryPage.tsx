import { Play } from "lucide-react";

type StageLabel = "BEFORE" | "AFTER" | "DURING";
type DetailLabel =
  | "Door"
  | "Stairs"
  | "Bathroom"
  | "Basement"
  | "Deck"
  | "Exterior"
  | "Interior";

type GalleryMedia = {
  type: "image" | "video";
  src: string;
  stage: StageLabel;
  detail?: DetailLabel;
  caption?: string;
};

type GallerySet = {
  title: string;
  description?: string;
  items: GalleryMedia[];
};

const GALLERY_SETS: readonly GallerySet[] = [
  {
    title: "Full Exterior Restoration",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9338.MOV",
        stage: "AFTER",
        detail: "Exterior",
      },
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9339.MOV",
        stage: "AFTER",
        detail: "Exterior",
      },
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9340.MOV",
        stage: "AFTER",
        detail: "Exterior",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_9341.HEIC.png",
        stage: "AFTER",
        detail: "Exterior",
      },
    ],
  },
  {
    title: "Hallway Stair Restoration",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3669.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3675.HEIC.png",
        stage: "DURING",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3676.HEIC.png",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Exterior Door Repaint",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3603.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3605.HEIC.png",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Deck Restoration",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3591.HEIC.png",
        stage: "AFTER",
        detail: "Deck",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3593.HEIC.png",
        stage: "AFTER",
        detail: "Deck",
      },
    ],
  },
  {
    title: "Front Porch Repainting",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3635.HEIC.png",
        stage: "AFTER",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3636.HEIC.png",
        stage: "AFTER",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3637.HEIC.png",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Basement Stairs",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3681.HEIC.png",
        stage: "BEFORE",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3682.HEIC.png",
        stage: "BEFORE",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3683.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3684.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
    ],
  },
  {
    title: "Basement Full",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3680.HEIC.png",
        stage: "BEFORE",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3685.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3686.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3687.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3689.HEIC.png",
        stage: "AFTER",
        detail: "Basement",
      },
    ],
  },
  {
    title: "Bathroom (toilet area)",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3692.HEIC.png",
        stage: "BEFORE",
        detail: "Bathroom",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3693.HEIC.png",
        stage: "AFTER",
        detail: "Bathroom",
      },
    ],
  },
  {
    title: "Bathroom (full)",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3690.HEIC.png",
        stage: "BEFORE",
        detail: "Bathroom",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3691.HEIC.png",
        stage: "BEFORE",
        detail: "Bathroom",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3694.HEIC.png",
        stage: "AFTER",
        detail: "Bathroom",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3696.HEIC.png",
        stage: "AFTER",
        detail: "Bathroom",
      },
    ],
  },
  {
    title: "Bedroom repaint",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_7130.HEIC.png",
        stage: "BEFORE",
        detail: "Interior",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_8362.HEIC.png",
        stage: "AFTER",
        detail: "Interior",
      },
      {
        type: "video",
        src: "/ywp-album/videos/IMG_8363.MOV",
        stage: "AFTER",
        detail: "Interior",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_8364.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
    ],
  },
  {
    title: "Bedroom (second room same house)",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_8365.MOV",
        stage: "AFTER",
        detail: "Interior",
      },
    ],
  },
  {
    title: "Hallway door",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3700.HEIC.png",
        stage: "BEFORE",
        detail: "Door",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3699.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
    ],
  },
  {
    title: "Special request doors (AFTERS ONLY)",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3701.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_5629.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_5630.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_8364.HEIC.png",
        stage: "AFTER",
        detail: "Door",
      },
    ],
  },
  {
    title: "Deck + Stair Combo Job (SECOND PROPERTY)",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_1742.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_1743.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3598.HEIC.png",
        stage: "AFTER",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3599.HEIC.png",
        stage: "AFTER",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3601.HEIC.png",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Power Washing",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_3607.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3608.HEIC.png",
        stage: "AFTER",
      },      
      {
        type: "image",
        src: "/ywp-album/images/IMG_3609.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3610.HEIC.png",
        stage: "AFTER",
      },      
      {
        type: "image",
        src: "/ywp-album/images/IMG_3611.HEIC.png",
        stage: "BEFORE",
      },
      {
        type: "image",
        src: "/ywp-album/images/IMG_3612.HEIC.png",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Full Interior Restoration",
    description: "Full interior repaint for a Rochester suburban home.",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9096.MOV",
        stage: "DURING",
      },
    ],
  },
  {
    title: "Ceiling Paint Job",
    description:
      "We were called in for an emergency job to fix and repaint a ceiling damaged by water.",
    items: [
      {
        type: "image",
        src: "/ywp-album/images/IMG_9055.HEIC.png",
        stage: "DURING",
      },
    ],
  },
  {
    title: "CONTRACT / UNIVERSITY JOB",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9073.MOV",
        stage: "BEFORE",
      },
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9080.MOV",
        stage: "AFTER",
      },
    ],
  },
  {
    title: "Exterior",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9099.MOV",
        stage: "AFTER",
        detail: "Exterior",
      },
    ],
  },
  {
    title: "Interior Ceiling",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9100.MOV",
        stage: "AFTER",
        detail: "Interior",
      },
    ],
  },
  {
    title: "Bathroom (same house)",
    items: [
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9101.MOV",
        stage: "BEFORE",
        detail: "Bathroom",
      },
      {
        type: "video",
        src: "/ywp-album/videos/IMG_9137.MOV",
        stage: "AFTER",
        detail: "Bathroom",
      },
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
          alt={item.stage}
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
                {setItem.description ? (
                  <p className="text-sm text-[#5a5a5a]">{setItem.description}</p>
                ) : null}
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
