import { Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { ExteriorGallery } from "../components/ExteriorGallery";

interface ExteriorPageProps {
  onEstimateClick: (hookText?: string) => void;
}

const exteriorTestimonials = [
  {
    name: "Darius W.",
    location: "Webster, NY",
    text: "Our house hadn't been painted in 15 years — peeling, faded, embarrassing. Malik came out, looked at everything, and gave me a straight price with no hidden fees. His crew power washed, scraped, primed, and painted the whole thing in three days. Looks like a brand new house. Three neighbors have already asked for his number.",
    rating: 5,
  },
  {
    name: "Tiffany L.",
    location: "Brighton, NY",
    text: "I manage a few rental properties in Rochester and finding a reliable painter has always been a nightmare. Malik is now my go-to for everything. Painted the exterior on two of my units, redid the porch on a third. Always on time, always clean, always communicates. That's rare.",
    rating: 5,
  },
];

const exteriorServices = [
  {
    title: "Full Exterior House Painting",
    description: "Complete exterior repaints from prep to final coat. Power washing, caulking, priming, and a durable finish that lasts for years.",
  },
  {
    title: "Door & Trim Painting",
    description: "Fresh doors, window trim, shutters, and fascia boards. Small details that make a huge difference in curb appeal.",
  },
  {
    title: "Porch & Deck Staining",
    description: "Weathered decks and porches brought back to life. Staining, sealing, and painting for protection and great looks.",
  },
  {
    title: "Garage & Shed Painting",
    description: "Garages, outbuildings, and sheds painted to match or complement your home. Consistent curb appeal across your whole property.",
  },
  {
    title: "Fence Painting & Staining",
    description: "Wood and metal fences restored with stain or paint. Protection from Rochester winters and a clean, finished look.",
  },
  {
    title: "Commercial Exterior",
    description: "Storefronts, office buildings, and multi-family properties. Professional results, minimal disruption to your business.",
  },
];

export function ExteriorPage({ onEstimateClick }: ExteriorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#111827] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Exterior Painting in Rochester, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Houses · Doors · Trim · Decks · Fences · Commercial
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
                Book an Exterior Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">
            Exterior Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exteriorServices.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onEstimateClick(`Interested in ${service.title} — get a free estimate.`, "exterior")}
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

      <ExteriorGallery />

      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">Why Exterior Paint Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">Protect Your Home</h3>
                <p className="text-[#5a5a5a]">Rochester winters are brutal. Fresh exterior paint seals your home against moisture, ice, and rot.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">Boost Home Value</h3>
                <p className="text-[#5a5a5a]">A fresh exterior paint job is one of the highest ROI improvements you can make before selling.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">Curb Appeal</h3>
                <p className="text-[#5a5a5a]">First impressions last. A well-painted home stands out on the block and makes you proud to pull up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {exteriorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f8f8f8] border-2 border-[#e5e7eb] p-6 rounded-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Curb Appeal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Get a free estimate today. We'll assess your exterior and give you an honest quote.
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
