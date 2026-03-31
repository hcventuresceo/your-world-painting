import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import interiorHallway from "@/assets/interior-hallway-after.jpg";
import interiorAccentWall from "@/assets/interior-accent-wall.jpg";
import interiorBedroom from "@/assets/interior-bedroom-after.jpg";
import interiorTrim from "@/assets/interior-trim-after.jpg";
import interiorCabinets from "@/assets/interior-cabinets.jpg";
import exteriorDoor from "@/assets/exterior-door-black.jpg";
import exteriorHouseBlue from "@/assets/exterior-house-blue.jpg";

const projects = [
  {
    category: "Interior – Staircase & Hallway Full Repaint",
    label: "AFTER",
    image: interiorHallway,
  },
  {
    category: "Kids' Room – Chalkboard Accent Wall",
    label: "BEFORE",
    image: interiorAccentWall,
  },
  {
    category: "Kids' Room – Chalkboard Accent Wall",
    label: "AFTER",
    image: interiorBedroom,
  },
  {
    category: "Interior – Bedroom with Fresh Trim & Closet",
    label: "AFTER",
    image: interiorTrim,
  },
  {
    category: "Interior – Cabinet Refinishing",
    label: "DURING",
    image: interiorCabinets,
  },
  {
    category: "Exterior – Gloss Black Door",
    label: "AFTER",
    image: exteriorDoor,
  },
  {
    category: "Exterior – Full House Repaint (Blue/Charcoal)",
    label: "AFTER",
    image: exteriorHouseBlue,
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
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            See the Transformation
          </h2>
          <p className="text-[#5a5a5a] text-lg">Real jobs. Real results. Right here in Greater Rochester.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-[#111827]">
              {projects[currentIndex].category}
            </h3>
          </div>

          <div className="relative">
            <div className="w-full h-[420px] md:h-[560px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={`${projects[currentIndex].category}`}
                className="w-full h-full object-cover object-center"
              />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded text-sm font-bold text-white ${
                projects[currentIndex].label === "BEFORE" ? "bg-red-600" :
                projects[currentIndex].label === "DURING" ? "bg-amber-500" :
                "bg-[#111827]"
              }`}>
                {projects[currentIndex].label}
              </div>
            </div>

            {projects.length > 1 && (
              <>
                <Button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111827] rounded-full p-3 shadow-lg"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="size-6" />
                </Button>

                <Button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111827] rounded-full p-3 shadow-lg"
                  aria-label="Next project"
                >
                  <ChevronRight className="size-6" />
                </Button>
              </>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#111827]" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
