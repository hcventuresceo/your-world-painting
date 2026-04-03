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
import accentChalkboard from "@/assets/gallery/gallery-accent-chalkboard-wall.jpg";
import accentKidsRoom from "@/assets/gallery/gallery-accent-kids-room.jpg";
import accentInProgress from "@/assets/gallery/gallery-accent-room-in-progress.jpg";

// Exterior
import exteriorHouseSiding from "@/assets/gallery/gallery-exterior-house-siding.jpg";
import exteriorInProgress from "@/assets/gallery/gallery-exterior-in-progress.jpg";
import exteriorSidingAfter from "@/assets/gallery/gallery-exterior-siding-after.jpg";
import exteriorBlackDoor from "@/assets/gallery/gallery-exterior-black-door.jpg";
import exteriorBlueDoors from "@/assets/gallery/gallery-exterior-blue-doors.jpg";
import exteriorArchAfter from "@/assets/gallery/gallery-exterior-arch-entrance-after.jpg";
import exteriorArchPorch from "@/assets/gallery/gallery-exterior-arch-porch.jpg";
import exteriorArch from "@/assets/gallery/gallery-exterior-arch-entrance.jpg";

// Deck & Porch
import deckStained from "@/assets/gallery/gallery-deck-stained-after.jpg";
import deckBefore from "@/assets/gallery/gallery-deck-before.jpg";
import deckFence from "@/assets/gallery/gallery-deck-fence-before.jpg";

interface GalleryItem {
  src: string;
  category: string;
  label: string;
  description: string;
}

const allPhotos: GalleryItem[] = [
  // Interior
  {
    src: interiorMalik,
    category: "Interior",
    label: "Interior Painting",
    description: "Malik on the job — interior walls, clean lines",
  },
  {
    src: interiorHallway,
    category: "Interior",
    label: "Interior Painting",
    description: "Fresh hallway repaint — bright white throughout",
  },
  {
    src: interiorStairwell,
    category: "Interior",
    label: "Interior Painting",
    description: "Stairwell walls repainted — crisp and clean",
  },
  {
    src: interiorBathroom,
    category: "Interior",
    label: "Interior Painting",
    description: "Bathroom walls refreshed in a cool gray tone",
  },
  {
    src: interiorBedroom,
    category: "Interior",
    label: "Interior Painting",
    description: "Bedroom walls and coffered ceiling — finished to perfection",
  },
  {
    src: interiorCeiling,
    category: "Interior",
    label: "Interior Painting",
    description: "Ceiling painting — we cover every inch",
  },
  {
    src: interiorRoom,
    category: "Interior",
    label: "Interior Painting",
    description: "Full room repaint — walls, trim, and ceiling",
  },

  // Accent Walls
  {
    src: accentChalkboard,
    category: "Accent Walls",
    label: "Accent Wall",
    description: "Custom chalkboard accent wall — functional and stylish",
  },
  {
    src: accentKidsRoom,
    category: "Accent Walls",
    label: "Accent Wall",
    description: "Kids room chalkboard wall — a space they'll love",
  },
  {
    src: accentInProgress,
    category: "Accent Walls",
    label: "Accent Wall",
    description: "Accent wall transformation in progress — mid-job",
  },

  // Exterior
  {
    src: exteriorHouseSiding,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Full exterior repaint — fresh siding, clean finish",
  },
  {
    src: exteriorInProgress,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Exterior job in progress — walls prepped and coated",
  },
  {
    src: exteriorSidingAfter,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Multi-story exterior — two-tone siding completed",
  },
  {
    src: exteriorBlackDoor,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Black door refinish — bold, glossy, curb-appeal ready",
  },
  {
    src: exteriorBlueDoors,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Garage doors painted blue — dramatic before/after",
  },
  {
    src: exteriorArchAfter,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Curved porch entrance — fully repainted after",
  },
  {
    src: exteriorArchPorch,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Arch porch repaint — clean white detail work",
  },
  {
    src: exteriorArch,
    category: "Exterior",
    label: "Exterior Painting",
    description: "Porch exterior — trim and siding refinished",
  },

  // Deck & Porch
  {
    src: deckStained,
    category: "Deck & Porch",
    label: "Deck Staining",
    description: "Deck stained and sealed — protected for the season",
  },
  {
    src: deckBefore,
    category: "Deck & Porch",
    label: "Deck Staining",
    description: "Weathered deck before treatment — worn and gray",
  },
  {
    src: deckFence,
    category: "Deck & Porch",
    label: "Deck Staining",
    description: "Fence and deck boards — restored from rough condition",
  },
];

const categories = ["All", "Interior", "Accent Walls", "Exterior", "Deck & Porch"];

interface GalleryPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function GalleryPage({ onEstimateClick }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="bg-[#111827] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Our Work Speaks for Itself
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Real jobs. Real results. Browse our portfolio of completed projects across
          Buffalo and Western New York.
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
                    ({allPhotos.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-10">
        <p className="text-[#5a5a5a] text-sm mb-6">
          Showing <span className="font-semibold text-[#111827]">{filtered.length}</span> photos
          {activeCategory !== "All" && (
            <span> in <span className="font-semibold text-[#111827]">{activeCategory}</span></span>
          )}
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] hover:shadow-md transition-shadow"
              onClick={() => setLightboxSrc(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.description}
                className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#dc2626] text-white text-xs font-bold px-2 py-0.5 rounded mb-1">
                  {photo.label}
                </span>
                <p className="text-white text-sm leading-snug">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-[#f8f8f8] border-t border-[#e5e7eb] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
          Like What You See?
        </h2>
        <p className="text-[#5a5a5a] max-w-md mx-auto mb-6">
          Let's talk about your project. Malik offers free estimates for all jobs
          across Buffalo and Western New York.
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
