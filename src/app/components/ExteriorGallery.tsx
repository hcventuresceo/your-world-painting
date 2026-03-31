import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import exteriorHouseBlue from "@/assets/exterior-house-blue.jpg";
import exteriorDoor from "@/assets/exterior-door-black.jpg";
import exteriorPorchTrim from "@/assets/exterior-porch-trim.jpg";
import exteriorHouseTan from "@/assets/exterior-house-tan.jpg";
import exteriorCrewWorking from "@/assets/exterior-crew-working.jpg";

const projects = [
  { category: "Exterior – Full House Repaint (Blue/Charcoal + Cream Trim)", image: exteriorHouseBlue },
  { category: "Exterior – Gloss Black Door", image: exteriorDoor },
  { category: "Exterior – Fresh White Porch Column & Entry Trim", image: exteriorPorchTrim },
  { category: "Exterior – House & Deck Repaint (Tan/Beige + Black Trim)", image: exteriorHouseTan },
  { category: "Exterior – Painted Front Porch & Steps", image: exteriorCrewWorking },
];

export function ExteriorGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Our Exterior Work</h2>
          <p className="text-[#5a5a5a] text-lg">Real projects, real results — right here in Greater Rochester.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#111827]">{projects[currentIndex].category}</h3>
          </div>
          <div className="relative">
            <div className="w-full h-[420px] md:h-[560px] rounded-lg shadow-lg overflow-hidden">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].category} className="w-full h-full object-cover object-center" />
            </div>
            <Button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-[#111827] rounded-full p-3 shadow-lg" aria-label="Previous photo">
              <ChevronLeft className="size-6" />
            </Button>
            <Button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-[#111827] rounded-full p-3 shadow-lg" aria-label="Next photo">
              <ChevronRight className="size-6" />
            </Button>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-[#111827]" : "bg-gray-300"}`} aria-label={`Go to photo ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
