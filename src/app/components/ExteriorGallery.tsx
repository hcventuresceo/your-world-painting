import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import heroExterior from "@/assets/hero-exterior.jpg";
import sidingRedDoor from "@/assets/siding-red-door.jpg";
import sidingFull from "@/assets/siding-full.jpg";
import sidingGreyHouse from "@/assets/siding-grey-house.jpg";
import sidingGreyEntrance from "@/assets/siding-grey-entrance.jpg";
import sidingCrewAction from "@/assets/siding-crew-action.jpg";
import crewLift from "@/assets/crew-lift.jpg";
import crewJobSite from "@/assets/crew-job-site.jpg";
import crewRoofline from "@/assets/crew-roofline.jpg";

const projects = [
  {
    category: "Siding – Full House Exterior (Grey)",
    image: sidingGreyHouse,
  },
  {
    category: "Siding – Front Entrance & New Steps",
    image: sidingGreyEntrance,
  },
  {
    category: "Siding – Crew Installing (Action Shot)",
    image: sidingCrewAction,
  },
  {
    category: "Siding – Full House Exterior (Tan)",
    image: heroExterior,
  },
  {
    category: "Siding – Front Entrance & Curb Appeal",
    image: sidingRedDoor,
  },
  {
    category: "Siding – Clean Finish Detail",
    image: sidingFull,
  },
  {
    category: "Crew in Action – Lift Work",
    image: crewLift,
  },
  {
    category: "Crew on the Job – Full Site",
    image: crewJobSite,
  },
  {
    category: "Crew on the Job – Roofline Detail",
    image: crewRoofline,
  },
];

export function ExteriorGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f4f9f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-4">
            Our Exterior Work
          </h2>
          <p className="text-[#5a5a5a] text-lg">Real projects, real results — right here in Rochester.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Project Label */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#1e6b22]">
              {projects[currentIndex].category}
            </h3>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-full h-[420px] md:h-[560px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].category}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-[#1e6b22] rounded-full p-3 shadow-lg"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-[#1e6b22] rounded-full p-3 shadow-lg"
              aria-label="Next photo"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#1e6b22]" : "bg-gray-300"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
