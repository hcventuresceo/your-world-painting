import { Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { ExteriorGallery } from "../components/ExteriorGallery";
import { ExteriorHealthDiagnostic } from "../components/ExteriorHealthDiagnostic";

interface ExteriorPageProps {
  onEstimateClick: (hookText?: string) => void;
}

const exteriorTestimonials = [
  {
    name: "Kevin Kless",
    location: "Rochester, NY",
    text: "Ricardo and his crew did an excellent job painting, cleaning, and sprucing up our garage. Clear communication, reasonable cost, outstanding attention to detail and craftsmanship. We couldn't be happier with the work he's done. Highest recommendation! We will be working with him again!",
    rating: 5,
  },
  {
    name: "Tonjua Levens",
    location: "Rochester, NY",
    text: "I've had several repairs and I'm always pleased with the results. If you ever need him just call and he's right there. The best part is he is reasonable.",
    rating: 5,
  },
];

const exteriorServices = [
  {
    title: "Siding & Soffit",
    description: "Vinyl siding installation and repair, soffit and fascia replacement. Protect your home and boost curb appeal.",
  },
  {
    title: "Doors & Windows",
    description: "Exterior door installation and replacement, window installation, weather sealing, and frame repair.",
  },
  {
    title: "Porch & Deck Repair",
    description: "Rotted wood replacement, deck refinishing, porch rebuilds, and structural repairs for outdoor living spaces.",
  },
  {
    title: "Exterior Painting",
    description: "Professional exterior painting for siding, trim, doors, and shutters. Weather-resistant finishes that last.",
  },
  {
    title: "Trim & Carpentry",
    description: "Exterior trim work, corner boards, window casings, and custom carpentry to finish your home's look.",
  },
  {
    title: "General Exterior Repairs",
    description: "Rotted wood replacement, minor roofing issues, gutter work, and weatherproofing solutions.",
  },
];

export function ExteriorPage({ onEstimateClick }: ExteriorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e6b22] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Exterior Home Repair & Improvements in Rochester, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Siding • Doors • Windows • Porch Repair • Light Carpentry
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
                Book an Exterior Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Health Diagnostic */}
      <ExteriorHealthDiagnostic onCardClick={onEstimateClick} />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-12 text-center">
            Exterior Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exteriorServices.map((service, index) => (
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

      {/* Exterior Photo Gallery */}
      <ExteriorGallery />

      {/* Why Exterior Matters */}
      <section className="py-16 bg-[#f4f9f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-6">
              Why Exterior Work Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                  Protect Your Investment
                </h3>
                <p className="text-[#5a5a5a]">
                  Your home is your biggest asset. Exterior maintenance prevents costly structural damage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                  Lower Energy Bills
                </h3>
                <p className="text-[#5a5a5a]">
                  Properly sealed doors, windows, and siding keep heat in during Rochester winters.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                  Curb Appeal
                </h3>
                <p className="text-[#5a5a5a]">
                  First impressions matter. A well-maintained exterior increases home value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {exteriorTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f4f9f4] border-2 border-[#9dbfa0] p-6 rounded-lg"
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
            Ready to Protect Your Home's Exterior?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Get a free estimate today. We'll assess your exterior needs and provide an honest quote.
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
