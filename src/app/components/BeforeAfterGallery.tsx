import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import bathroomAfter1 from "@/assets/bathroom-after-1.jpg";
import bathroomAfter2 from "@/assets/bathroom-after-2.jpg";
import bathroomTileShower from "@/assets/bathroom-tile-shower.jpg";
import bathroomFullRoom from "@/assets/bathroom-full-room.jpg";
import deckBefore from "@/assets/deck-before.jpg";
import deckProgress from "@/assets/deck-progress.jpg";
import deckAfter1 from "@/assets/deck-after-1.jpg";
import deckAfter2 from "@/assets/deck-after-2.jpg";
import kitchenAfter1 from "@/assets/kitchen-after-1.jpg";
import kitchenAfter2 from "@/assets/kitchen-after-2.jpg";
import kitchenAfter3 from "@/assets/kitchen-after-3.jpg";

const projects = [
  {
    category: "Kitchen Remodel – Full View",
    label: "AFTER",
    image: kitchenAfter1,
  },
  {
    category: "Kitchen Remodel – Countertops & Backsplash",
    label: "AFTER",
    image: kitchenAfter2,
  },
  {
    category: "Kitchen Remodel – Cabinetry Detail",
    label: "AFTER",
    image: kitchenAfter3,
  },
  {
    category: "Deck Rebuild – Before",
    label: "BEFORE",
    image: deckBefore,
  },
  {
    category: "Deck Rebuild – In Progress",
    label: "DURING",
    image: deckProgress,
  },
  {
    category: "Deck Rebuild – Finished (Top View)",
    label: "AFTER",
    image: deckAfter1,
  },
  {
    category: "Deck Rebuild – Finished (Side View)",
    label: "AFTER",
    image: deckAfter2,
  },
  {
    category: "Bathroom Remodel – Marble Tile & Matte Black Fixtures",
    label: "AFTER",
    image: bathroomTileShower,
  },
  {
    category: "Bathroom Remodel – Full Room Finish",
    label: "AFTER",
    image: bathroomFullRoom,
  },
  {
    category: "Bathroom Remodel – Marble Shower Niche",
    label: "AFTER",
    image: bathroomAfter1,
  },
  {
    category: "Bathroom Remodel – Luxury Panel System",
    label: "AFTER",
    image: bathroomAfter2,
  },
];

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f9f7f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-4">
            See the Transformation
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Project Label */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#1e6b22]">
              {projects[currentIndex].category}
            </h3>
          </div>

          {/* Before/After Image */}
          <div className="relative">
            <div className="w-full h-[420px] md:h-[560px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={`${projects[currentIndex].category}`}
                className="w-full h-full object-cover object-center"
              />
              {/* Phase badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded text-sm font-bold text-white ${
                projects[currentIndex].label === "BEFORE" ? "bg-red-600" :
                projects[currentIndex].label === "DURING" ? "bg-amber-500" :
                "bg-[#1e6b22]"
              }`}>
                {projects[currentIndex].label}
              </div>
            </div>

            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <Button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e6b22] rounded-full p-3 shadow-lg"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="size-6" />
                </Button>

                <Button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e6b22] rounded-full p-3 shadow-lg"
                  aria-label="Next project"
                >
                  <ChevronRight className="size-6" />
                </Button>
              </>
            )}
          </div>

          {/* Dots */}
          {projects.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#1e6b22]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}