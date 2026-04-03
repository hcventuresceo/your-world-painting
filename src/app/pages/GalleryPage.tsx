import { useState } from "react";
import { Phone } from "lucide-react";

// Interior
import interiorMalik from "@/assets/gallery/gallery-interior-malik-painting.jpg";
import interiorHallway from "@/assets/gallery/gallery-interior-hallway-after.jpg";
import interiorStairwell from "@/assets/gallery/gallery-interior-stairwell-after.jpg";
import interiorBathroom from "@/assets/gallery/gallery-interior-bathroom-after.jpg";
import interiorBedroom from "@/assets/gallery/gallery-interior-bedroom-after.jpg";
import interiorCeiling from "@/assets/gallery/gallery-interior-ceiling-painting.jpg";
import interiorRoom from "@/assets/gallery/gallery-interior-room-after.jpg";

// Accent Walls
import accentWallBefore from "@/assets/gallery/gallery-accent-wall-before.jpg";
import accentChalkboard from "@/assets/gallery/gallery-accent-chalkboard-wall.jpg";
import accentKidsRoom from "@/assets/gallery/gallery-accent-kids-room.jpg";
import accentInProgress from "@/assets/gallery/gallery-accent-room-in-progress.jpg";

// Exterior
import exteriorHouseSiding from "@/assets/gallery/gallery-exterior-house-siding.jpg";
import exteriorInProgress from "@/assets/gallery/gallery-exterior-in-progress.jpg";
import exteriorSidingAfter from "@/assets/gallery/gallery-exterior-siding-after.jpg";
import exteriorDoorBefore from "@/assets/gallery/gallery-exterior-door-before.jpg";
import exteriorBlackDoor from "@/assets/gallery/gallery-exterior-black-door.jpg";
import exteriorBlueDoors from "@/assets/gallery/gallery-exterior-blue-doors.jpg";
import exteriorArchBefore from "@/assets/gallery/gallery-exterior-arch-before.jpg";
import exteriorArchAfter from "@/assets/gallery/gallery-exterior-arch-entrance-after.jpg";
import exteriorArchPorch from "@/assets/gallery/gallery-exterior-arch-porch.jpg";

// Deck & Porch
import deckBefore from "@/assets/gallery/gallery-deck-before.jpg";
import deckStained from "@/assets/gallery/gallery-deck-stained-after.jpg";
import deckFence from "@/assets/gallery/gallery-deck-fence-before.jpg";

type Phase = "Before" | "In Progress" | "After";

interface ProjectPhoto {
  src: string;
  phase: Phase;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  photos: ProjectPhoto[];
}

const PHASE_STYLES: Record<Phase, string> = {
  Before: "bg-gray-600 text-white",
  "In Progress": "bg-yellow-500 text-white",
  After: "bg-[#16a34a] text-white",
};

const projects: Project[] = [
  {
    id: "door-refinish",
    title: "Front Door Refinish",
    category: "Exterior",
    description: "Weathered wood door stripped and repainted gloss black. Total curb appeal transformation.",
    photos: [
      { src: exteriorDoorBefore, phase: "Before", caption: "Peeling, faded wood — worn down from the elements" },
      { src: exteriorBlackDoor, phase: "After", caption: "Painted gloss black — bold, clean, brand new look" },
    ],
  },
  {
    id: "arch-porch",
    title: "Exterior Porch & Arch Repaint",
    category: "Exterior",
    description: "Full porch repaint on a curved-arch entrance. Cleaned up years of wear and weather damage.",
    photos: [
      { src: exteriorArchBefore, phase: "Before", caption: "Weathered porch with exposed wood and patching needed" },
      { src: exteriorArchAfter, phase: "After", caption: "Fresh repaint — crisp white trim and arch detail" },
      { src: exteriorArchPorch, phase: "After", caption: "Curved porch ceiling and walls — fully restored" },
    ],
  },
  {
    id: "exterior-house",
    title: "Full Exterior House Painting",
    category: "Exterior",
    description: "Multi-story exterior painted top to bottom. Siding, trim, and detail work all included.",
    photos: [
      { src: exteriorHouseSiding, phase: "Before", caption: "Faded siding — dull color, showing age" },
      { src: exteriorInProgress, phase: "In Progress", caption: "Malik's crew working the walls — prepped and rolling" },
      { src: exteriorSidingAfter, phase: "After", caption: "Two-tone siding complete — sharp contrast, clean lines" },
    ],
  },
  {
    id: "blue-doors",
    title: "Garage Door Color Change",
    category: "Exterior",
    description: "Client wanted a bold color upgrade. Went from dull to standout blue — exactly what they asked for.",
    photos: [
      { src: exteriorBlueDoors, phase: "After", caption: "Bright blue doors — exactly what the client wanted" },
    ],
  },
  {
    id: "chalkboard-wall",
    title: "Chalkboard Accent Wall — Kids Room",
    category: "Accent Walls",
    description: "Converted a plain wall into a full chalkboard feature. Kid-friendly, fully functional, and sharp.",
    photos: [
      { src: accentWallBefore, phase: "Before", caption: "Old chalkboard wall — chalked up, worn, needed a reset" },
      { src: accentInProgress, phase: "In Progress", caption: "Room prepped and taped — transformation underway" },
      { src: accentChalkboard, phase: "After", caption: "Fresh chalkboard wall — smooth, deep black, ready to use" },
      { src: accentKidsRoom, phase: "After", caption: "Full room view — accent wall anchors the whole space" },
    ],
  },
  {
    id: "interior-stairwell",
    title: "Interior Hallway & Stairwell",
    category: "Interior",
    description: "Full repaint of a tight stairwell and hallway. Bright white walls, clean trim — makes the space feel twice as big.",
    photos: [
      { src: interiorMalik, phase: "In Progress", caption: "Malik rolling the ceiling — full coverage, no drips" },
      { src: interiorHallway, phase: "After", caption: "Hallway after — bright white from floor to ceiling" },
      { src: interiorStairwell, phase: "After", caption: "Stairwell fully repainted — clean lines down every step" },
    ],
  },
  {
    id: "interior-rooms",
    title: "Interior Room Repaints",
    category: "Interior",
    description: "Bedroom, bathroom, and living spaces refreshed. Wall color changes, ceiling work, and trim throughout.",
    photos: [
      { src: interiorCeiling, phase: "In Progress", caption: "Ceiling coat being applied — even coverage throughout" },
      { src: interiorRoom, phase: "After", caption: "Room after — fresh walls and crisp white ceiling" },
      { src: interiorBedroom, phase: "After", caption: "Bedroom complete — coffered ceiling and painted walls" },
      { src: interiorBathroom, phase: "After", caption: "Bathroom refreshed in a cool gray tone" },
    ],
  },
  {
    id: "deck-staining",
    title: "Deck Staining & Restoration",
    category: "Deck & Porch",
    description: "Weathered, graying deck brought back to life. Cleaned, prepped, stained, and sealed.",
    photos: [
      { src: deckBefore, phase: "Before", caption: "Gray, weathered boards — cracking and worn through" },
      { src: deckFence, phase: "Before", caption: "Fence boards in rough shape — splitting, faded" },
      { src: deckStained, phase: "After", caption: "Stained and sealed — rich color, fully protected" },
    ],
  },
];

const categories = ["All", "Exterior", "Interior", "Accent Walls", "Deck & Porch"];

interface GalleryPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function GalleryPage({ onEstimateClick }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="bg-[#111827] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Our Work Speaks for Itself
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Real jobs. Real results. See the full transformation — before, during, and after.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-[calc(33px+72px)] z-30 bg-white border-b border-[#e5e7eb] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeCategory === cat
                    ? "bg-[#111827] text-white border-[#111827]"
                    : "bg-white text-[#3a3a3a] border-[#e5e7eb] hover:border-[#111827] hover:text-[#111827]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="container mx-auto px-4 py-10 space-y-14">
        {filtered.map((project) => (
          <div key={project.id} className="border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm">
            {/* Project header */}
            <div className="bg-[#f8f8f8] border-b border-[#e5e7eb] px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#dc2626] mb-1 block">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#111827]">{project.title}</h2>
                  <p className="text-[#5a5a5a] text-sm mt-1">{project.description}</p>
                </div>
                {/* Phase legend */}
                <div className="hidden sm:flex flex-col gap-1 shrink-0 text-xs">
                  {(["Before", "In Progress", "After"] as Phase[]).map((phase) => (
                    <span key={phase} className={`px-2 py-0.5 rounded font-bold ${PHASE_STYLES[phase]}`}>
                      {phase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo strip */}
            <div className={`grid gap-0 ${
              project.photos.length === 1 ? "grid-cols-1" :
              project.photos.length === 2 ? "grid-cols-2" :
              project.photos.length === 3 ? "grid-cols-3" :
              "grid-cols-2 sm:grid-cols-4"
            }`}>
              {project.photos.map((photo, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden aspect-square"
                  onClick={() => setLightboxSrc(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Phase badge — always visible */}
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded shadow ${PHASE_STYLES[photo.phase]}`}>
                      {photo.phase}
                    </span>
                  </div>
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-snug">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#f8f8f8] border-t border-[#e5e7eb] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
          Want Results Like These?
        </h2>
        <p className="text-[#5a5a5a] max-w-md mx-auto mb-6">
          Malik offers free estimates on all jobs across Rochester and Western New York.
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
            className="flex items-center gap-2 border border-[#111827] text-[#111827] font-semibold px-7 py-3 rounded-md text-base min-h-[48px] hover:bg-[#111827] hover:text-white transition-colors"
          >
            <Phone className="size-4" />
            716-815-0333
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold leading-none hover:text-gray-300"
            onClick={() => setLightboxSrc(null)}
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt="Gallery photo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
