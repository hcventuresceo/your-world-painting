import { useState } from "react";
import { Phone, Play } from "lucide-react";

// ── Stairwell & Drywall Repair ──────────────────────────────────────────────
import stairwellBefore from "@/assets/gallery/gallery-stairwell-before.jpg";
import interiorHallwayAfter from "@/assets/gallery/gallery-interior-hallway-after.jpg";
import interiorStairwellAfter from "@/assets/gallery/gallery-interior-stairwell-after.jpg";
import videoStairwell from "@/assets/gallery/videos/video-stairwell.mp4";

// ── Kids Bedroom + Chalkboard Accent Wall ───────────────────────────────────
import bedroomBefore from "@/assets/gallery/gallery-bedroom-before.jpg";
import accentWallBefore from "@/assets/gallery/gallery-accent-wall-before.jpg";
import accentInProgress from "@/assets/gallery/gallery-accent-room-in-progress.jpg";
import bedroomAfter from "@/assets/gallery/gallery-interior-bedroom-after.jpg";
import bedroomWallsAfter from "@/assets/gallery/gallery-bedroom-walls-after.jpg";
import videoBedroom from "@/assets/gallery/videos/video-bedroom.mp4";

// ── Deck Staining ────────────────────────────────────────────────────────────
import deckBefore from "@/assets/gallery/gallery-deck-real-before.jpg";
import deckAfter from "@/assets/gallery/gallery-deck-real-after.jpg";
import videoDeck from "@/assets/gallery/videos/video-deck.mp4";

// ── Front Door & Entryway ────────────────────────────────────────────────────
import doorEntryBefore from "@/assets/gallery/gallery-door-entryway-before.jpg";
import doorExteriorBefore from "@/assets/gallery/gallery-exterior-door-before.jpg";
import doorInProgress from "@/assets/gallery/gallery-door-in-progress.jpg";
import doorAfter from "@/assets/gallery/gallery-door-after.jpg";
import doorAfter2 from "@/assets/gallery/gallery-door-after2.jpg";

// ── Exterior Arch Porch ──────────────────────────────────────────────────────
import archBefore from "@/assets/gallery/gallery-exterior-arch-before.jpg";
import malikInsideInProgress from "@/assets/gallery/gallery-interior-malik-painting.jpg";
import archEntranceAfter from "@/assets/gallery/gallery-exterior-arch-entrance-after.jpg";
import archPorchAfter from "@/assets/gallery/gallery-exterior-arch-porch.jpg";
import archPorchDetail from "@/assets/gallery/gallery-arch-porch-after-detail.jpg";
import archExteriorFull from "@/assets/gallery/gallery-arch-exterior-full.jpg";
import videoArchPorch from "@/assets/gallery/videos/video-arch-porch.mp4";

// ── Exterior Siding ──────────────────────────────────────────────────────────
import sidingInProgress from "@/assets/gallery/gallery-exterior-in-progress.jpg";
import sidingAfter from "@/assets/gallery/gallery-exterior-siding-after.jpg";

// ── Bathroom ─────────────────────────────────────────────────────────────────
import bathroomAfter from "@/assets/gallery/gallery-interior-bathroom-after.jpg";

type Phase = "Before" | "In Progress" | "After";
type MediaItem =
  | { type: "image"; src: string; phase: Phase; caption: string }
  | { type: "video"; src: string; phase: Phase; caption: string };

interface Project {
  id: string;
  title: string;
  services: string[];
  description: string;
  media: MediaItem[];
}

const PHASE_BADGE: Record<Phase, string> = {
  Before: "bg-[#374151] text-white",
  "In Progress": "bg-[#d97706] text-white",
  After: "bg-[#16a34a] text-white",
};

const projects: Project[] = [
  {
    id: "arch-porch",
    title: "Exterior Arch Porch & Full Exterior Repaint",
    services: ["Exterior Painting"],
    description:
      "Curved porch entrance repainted top to bottom — trim, siding, ceilings, and detail work. Malik also handled interior work on the same property.",
    media: [
      { type: "image", src: archBefore, phase: "Before", caption: "Weathered porch entrance — exposed wood, faded paint, needed full restoration" },
      { type: "video", src: videoArchPorch, phase: "In Progress", caption: "Malik's crew working the arch porch — prep, prime, and paint" },
      { type: "image", src: malikInsideInProgress, phase: "In Progress", caption: "Interior work on the same property — walls and ceilings" },
      { type: "image", src: archEntranceAfter, phase: "After", caption: "Arch entrance — fresh white, clean lines" },
      { type: "image", src: archPorchDetail, phase: "After", caption: "Porch ceiling and wall detail — crisp finish throughout" },
      { type: "image", src: archPorchAfter, phase: "After", caption: "Curved arch soffit repainted — professional edge work" },
      { type: "image", src: archExteriorFull, phase: "After", caption: "Full exterior view — complete transformation" },
    ],
  },
  {
    id: "stairwell-drywall",
    title: "Stairwell, Hallway & Drywall Repair",
    services: ["Interior Painting", "Drywall & Surface Repair"],
    description:
      "Cracked ceiling, dingy walls, worn trim. Full drywall repair followed by complete repaint — walls, ceilings, and hallway throughout.",
    media: [
      { type: "image", src: stairwellBefore, phase: "Before", caption: "Cracked ceiling and dated walls — drywall repair needed before any paint" },
      { type: "video", src: videoStairwell, phase: "In Progress", caption: "Prep work in progress — drywall, sanding, priming" },
      { type: "image", src: interiorHallwayAfter, phase: "After", caption: "Hallway after — bright white walls, ceiling fully repaired" },
      { type: "image", src: interiorStairwellAfter, phase: "After", caption: "Stairwell after — clean from top to bottom" },
    ],
  },
  {
    id: "bedroom-accent-wall",
    title: "Kids Bedroom Full Repaint + Chalkboard Accent Wall",
    services: ["Interior Painting", "Accent Walls"],
    description:
      "Transformed a dated bedroom with peach walls and a wrecked chalkboard into a fully refreshed space — new wall colors, clean chalkboard accent wall, and a coffered ceiling.",
    media: [
      { type: "image", src: bedroomBefore, phase: "Before", caption: "Warm peach walls — dated look, needed a full refresh" },
      { type: "image", src: accentWallBefore, phase: "Before", caption: "Old chalkboard wall — years of chalk buildup and scuffs" },
      { type: "image", src: accentInProgress, phase: "In Progress", caption: "Room masked and prepped — walls, ceiling, and accent all being worked" },
      { type: "video", src: videoBedroom, phase: "In Progress", caption: "Mid-job footage — transformation underway" },
      { type: "image", src: bedroomAfter, phase: "After", caption: "Coffered ceiling repainted — clean, sharp finish" },
      { type: "image", src: bedroomWallsAfter, phase: "After", caption: "Freshly painted bedroom walls — smooth, even coat throughout" },
    ],
  },
  {
    id: "deck-staining",
    title: "Deck Staining & Restoration",
    services: ["Wood Staining & Finishing"],
    description:
      "Grayed-out, weathered deck boards cleaned, prepped, and stained. Fence structure included — brought back to life.",
    media: [
      { type: "image", src: deckBefore, phase: "Before", caption: "Gray, splitting boards — years of weather damage" },
      { type: "video", src: videoDeck, phase: "In Progress", caption: "Deck restoration in progress — cleaning and staining" },
      { type: "image", src: deckAfter, phase: "After", caption: "Rich brown stain applied — sealed and protected" },
    ],
  },
  {
    id: "door-entryway",
    title: "Front Door & Entryway Transformation",
    services: ["Interior Painting", "Exterior Painting"],
    description:
      "Exterior door stripped and repainted. Interior entryway walls and trim fully refreshed. Same job, inside and out.",
    media: [
      { type: "image", src: doorExteriorBefore, phase: "Before", caption: "Front door — old wood, faded and worn" },
      { type: "image", src: doorEntryBefore, phase: "Before", caption: "Interior entryway — dark, dingy, outdated trim" },
      { type: "image", src: doorInProgress, phase: "In Progress", caption: "Door prepped — patched and primed before topcoat" },
      { type: "image", src: doorAfter, phase: "After", caption: "Entryway repainted — clean and refreshed" },
      { type: "image", src: doorAfter2, phase: "After", caption: "Door painted charcoal — bold, clean result" },
    ],
  },
  {
    id: "exterior-siding",
    title: "Full Exterior Siding Repaint",
    services: ["Exterior Painting"],
    description:
      "Multi-story house repainted exterior — full coverage on siding, trim, and fascia. Crew work, done right.",
    media: [
      { type: "image", src: sidingInProgress, phase: "In Progress", caption: "Crew painting the siding — scaffolding, full coverage" },
      { type: "image", src: sidingAfter, phase: "After", caption: "Multi-story siding complete — sharp contrast, clean lines" },
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Repaint",
    services: ["Interior Painting"],
    description:
      "Small bathroom, big difference. Fresh color throughout — walls, trim, and ceiling.",
    media: [
      { type: "image", src: bathroomAfter, phase: "After", caption: "Bathroom refreshed — cool gray tone, clean finish" },
    ],
  },
];

const ALL_SERVICES = [
  "All",
  "Interior Painting",
  "Exterior Painting",
  "Accent Walls",
  "Wood Staining & Finishing",
  "Drywall & Surface Repair",
];

interface GalleryPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function GalleryPage({ onEstimateClick }: GalleryPageProps) {
  const [activeService, setActiveService] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeService === "All"
      ? projects
      : projects.filter((p) => p.services.includes(activeService));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#111827] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Real Jobs. Full Story.
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Every project below is documented start to finish — before, in progress, and after. This is how we work.
        </p>
      </div>

      {/* Service filter */}
      <div className="sticky top-[calc(33px+72px)] z-30 bg-white border-b border-[#e5e7eb] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {ALL_SERVICES.map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeService === s
                    ? "bg-[#111827] text-white border-[#111827]"
                    : "bg-white text-[#3a3a3a] border-[#e5e7eb] hover:border-[#111827] hover:text-[#111827]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project cards */}
      <div className="container mx-auto px-4 py-10 space-y-16">
        {filtered.map((project) => (
          <div key={project.id} className="border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm">

            {/* Project header */}
            <div className="bg-[#f8f8f8] border-b border-[#e5e7eb] px-6 py-5">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-bold uppercase tracking-wide text-[#dc2626] border border-[#dc2626]/30 bg-[#dc2626]/5 px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-[#111827] mb-1">{project.title}</h2>
              <p className="text-[#5a5a5a] text-sm">{project.description}</p>

              {/* Phase legend */}
              <div className="flex gap-3 mt-3">
                {(["Before", "In Progress", "After"] as Phase[]).map((p) => (
                  <span key={p} className={`text-xs font-bold px-2 py-0.5 rounded ${PHASE_BADGE[p]}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Media grid */}
            <div className={`grid grid-cols-2 ${project.media.length >= 4 ? "md:grid-cols-4" : project.media.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-0`}>
              {project.media.map((item, i) => (
                <div key={i} className="relative group overflow-hidden aspect-square bg-black">

                  {item.type === "video" ? (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover opacity-90"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/40 rounded-full p-3">
                          <Play className="size-6 text-white fill-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      loading="lazy"
                      onClick={() => setLightbox(item.src)}
                    />
                  )}

                  {/* Phase badge — always visible */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className={`text-xs font-bold px-2 py-1 rounded shadow-sm ${PHASE_BADGE[item.phase]}`}>
                      {item.phase}
                    </span>
                  </div>

                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <p className="text-white text-xs leading-snug">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#111827] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Want Results Like These?
        </h2>
        <p className="text-gray-300 max-w-md mx-auto mb-6">
          Free estimates on all jobs. Interior, exterior, drywall, staining — Malik handles it all across Rochester and Western New York.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => onEstimateClick("I saw your gallery and I'm interested")}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] transition-colors"
          >
            Get a Free Estimate
          </button>
          <a
            href="tel:7168150333"
            className="flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" />
            716-815-0333
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold leading-none hover:text-gray-300"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
