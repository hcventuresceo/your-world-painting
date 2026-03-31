import { Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { BeforeAfterGallery } from "../components/BeforeAfterGallery";

interface InteriorPageProps {
  onEstimateClick: (hookText?: string) => void;
}

const interiorTestimonials = [
  {
    name: "Jasmine R.",
    location: "Rochester, NY",
    text: "Malik did an amazing job on our living room and hallways. He was professional, clean, and the colors came out exactly how we envisioned. We've already booked him for two more rooms. Highly recommend Your World Painting!",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Irondequoit, NY",
    text: "Best painter I've hired. He prepped everything perfectly, no drips, no mess. The accent wall in our bedroom looks incredible. Fast, affordable, and high quality — you can't beat that.",
    rating: 5,
  },
];

const interiorServices = [
  {
    title: "Interior Wall Painting",
    description: "Full room repaints, single wall refreshes, and complete interior transformations. Flawless edges, clean lines, zero mess left behind.",
  },
  {
    title: "Accent & Feature Walls",
    description: "Bold statement walls, chalkboard paint, two-tone designs, and textured finishes. Turn any room into something that stops you in your tracks.",
  },
  {
    title: "Ceiling Painting",
    description: "Popcorn ceiling refreshes, smooth finish ceilings, and color upgrades. A fresh ceiling makes the whole room feel new.",
  },
  {
    title: "Cabinet Refinishing",
    description: "Transform dated cabinets without the cost of replacement. Professional prep, prime, and paint for a factory-smooth finish.",
  },
  {
    title: "Trim & Door Painting",
    description: "Crisp, clean baseboards, door frames, crown molding, and interior doors. The details that separate average from exceptional.",
  },
  {
    title: "Color Consultation",
    description: "Not sure what color to pick? We help you find the right palette for your space, lighting, and style — included with every estimate.",
  },
];

export function InteriorPage({ onEstimateClick }: InteriorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#111827] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Interior Painting in Rochester, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Walls · Ceilings · Cabinets · Trim · Accent Walls
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7168150333"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#111827] hover:bg-gray-100 rounded-md transition-colors text-lg font-medium min-h-[56px]"
              >
                <Phone className="size-5" />
                <span>716-815-0333</span>
              </a>
              <button
                onClick={() => onEstimateClick()}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-md transition-colors text-lg font-medium min-h-[56px]"
              >
                Book an Interior Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
            Interior Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interiorServices.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onEstimateClick(`Interested in ${service.title} — get a free estimate.`, "interior")}
                className="group bg-[#f8f8f8] border-2 border-[#e5e7eb] hover:border-[#dc2626] hover:bg-white p-6 rounded-lg text-left transition-all duration-200 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3 group-hover:text-[#dc2626] transition-colors">{service.title}</h3>
                <p className="text-[#5a5a5a] mb-4">{service.description}</p>
                <span className="text-sm font-semibold text-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity">
                  Get Free Estimate →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {interiorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border-2 border-[#e5e7eb] p-6 rounded-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#3a3a3a] mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-[#111827]">— {testimonial.name}</p>
                <p className="text-sm text-[#5a5a5a]">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111827] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Interior?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Get a free estimate today. We'll walk through your space and give you an honest quote with color recommendations included.
          </p>
          <Button
            onClick={() => onEstimateClick()}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg font-medium px-8 py-4 min-h-[56px]"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}
