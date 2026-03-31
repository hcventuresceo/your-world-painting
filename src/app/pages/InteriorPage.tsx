import { Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { BeforeAfterGallery } from "../components/BeforeAfterGallery";
import { HomeHealthDiagnostic } from "../components/HomeHealthDiagnostic";

interface InteriorPageProps {
  onEstimateClick: (hookText?: string) => void;
}

const interiorTestimonials = [
  {
    name: "Evangelyn M.",
    location: "Rochester, NY",
    text: "I am so pleased to give this review. It is a pleasure to have Mr. Ricardo Shaw do some work in my house. I am so pleased with his work I would recommend him to people in a heartbeat. I look forward to continuing working with him and his company. So if you're looking for someone who will get the job done and you will be happy with the work, call Ricardo and his company. Five stars is not enough. Thank you so very much Mr. Ricardo again for your help.",
    rating: 5,
  },
  {
    name: "Denise Thomas",
    location: "Rochester, NY",
    text: "Ricardo did an excellent job!! Trustworthy, easy to work with, reasonable cost, and does an outstanding job in a timely manner. I will be using his service again without a doubt!! HIGHLY RECOMMENDED!!!",
    rating: 5,
  },
];

const interiorServices = [
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovations from tubs to tile, vanities to lighting. Transform your outdated bathroom into a modern, functional space.",
  },
  {
    title: "Kitchen Remodeling",
    description: "Custom kitchen upgrades including cabinets, countertops, backsplashes, and flooring. Make your kitchen the heart of your home.",
  },
  {
    title: "Basement Finishing",
    description: "Turn your unfinished basement into usable living space. Framing, drywall, flooring, and complete buildouts.",
  },
  {
    title: "Flooring Installation",
    description: "Hardwood, laminate, tile, and vinyl flooring. Professional installation with attention to detail and lasting results.",
  },
  {
    title: "Painting & Drywall",
    description: "Interior painting, drywall repair, texture matching, and finishing. Clean lines and smooth surfaces guaranteed.",
  },
  {
    title: "Custom Carpentry",
    description: "Built-in shelving, trim work, crown molding, wainscoting, and custom woodwork tailored to your home.",
  },
];

const painPoints = [
  "Outdated bathroom that makes your whole house feel old",
  "Cramped kitchen with no counter space or storage",
  "Wasted basement space collecting dust",
  "Uneven, worn-out floors that need replacing",
  "Drywall cracks and paint touch-ups you keep putting off",
];

export function InteriorPage({ onEstimateClick }: InteriorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e6b22] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Interior Home Remodeling & Repairs in Rochester, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Bathrooms • Kitchens • Basements • Flooring • Carpentry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5856903190"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e6b22] hover:bg-gray-100 rounded-md transition-colors text-lg font-medium min-h-[56px]"
              >
                <Phone className="size-5" />
                <span>585-690-3190</span>
              </a>
              <button
                onClick={() => onEstimateClick()}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white rounded-md transition-colors text-lg font-medium min-h-[56px]"
              >
                Book an Interior Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Home Health Diagnostic */}
      <HomeHealthDiagnostic onCardClick={onEstimateClick} />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-12 text-center">
            Interior Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interiorServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#f4f9f4] border-2 border-[#9dbfa0] p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5a5a5a]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* Testimonials */}
      <section className="py-16 bg-[#f4f9f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {interiorTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#9dbfa0] p-6 rounded-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>
                <p className="text-[#3a3a3a] mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-[#1e6b22]">
                  — {testimonial.name}
                </p>
                <p className="text-sm text-[#5a5a5a]">
                  {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#1e6b22] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Interior?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Get a free estimate today. We'll walk through your space and give you an honest quote.
          </p>
          <Button
            onClick={() => onEstimateClick()}
            className="bg-white text-[#1e6b22] hover:bg-gray-100 text-lg font-medium px-8 py-4 min-h-[56px]"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}