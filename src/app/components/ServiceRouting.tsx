import bathroomImg from "@/assets/bathroom-after-1.jpg";
import deckImg from "@/assets/deck-after-1.jpg";
import sidingImg from "@/assets/siding-full.jpg";
import doorImg from "@/assets/siding-red-door.jpg";
import interiorImg from "@/assets/bathroom-after-2.jpg";
import crewImg from "@/assets/crew-job-site.jpg";

interface ServiceRoutingProps {
  onNavigate?: (page: string) => void;
  onEstimateClick?: (hookText?: string, service?: string) => void;
}

const serviceRoutes = [
  {
    title: "Bathroom Remodel",
    description: "Full tile, vanity, fixtures, and finishes",
    image: bathroomImg,
    page: "interior",
    service: "bathroom",
  },
  {
    title: "Deck & Porch Repair",
    description: "Rebuilds, refinishing, rotted wood replacement",
    image: deckImg,
    page: "exterior",
    service: "deck",
  },
  {
    title: "Siding & Soffit",
    description: "Vinyl siding install, repair, and fascia work",
    image: sidingImg,
    page: "exterior",
    service: "siding",
  },
  {
    title: "Doors & Windows",
    description: "Exterior door install, window replacement, sealing",
    image: doorImg,
    page: "exterior",
    service: "doors-windows",
  },
  {
    title: "Flooring & Interior",
    description: "Flooring, painting, drywall, and framing",
    image: interiorImg,
    page: "interior",
    service: "flooring",
  },
  {
    title: "General Home Repairs",
    description: "Handyman, rotted wood, weatherproofing & more",
    image: crewImg,
    page: "exterior",
    service: "general",
  },
];

export function ServiceRouting({ onNavigate, onEstimateClick }: ServiceRoutingProps) {
  const handleClick = (route: typeof serviceRoutes[number]) => {
    if (onEstimateClick) {
      onEstimateClick(undefined, route.service);
    } else if (onNavigate) {
      onNavigate(route.page);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f4f9f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-4">
            What Do You Need Done?
          </h2>
          <p className="text-lg text-[#5a5a5a]">
            Tap a service to get a free estimate — we handle it all
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {serviceRoutes.map((route, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(route)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-left aspect-[4/3]"
            >
              {/* Photo */}
              <img
                src={route.image}
                alt={route.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <h3 className="text-sm md:text-base font-bold leading-tight mb-0.5">
                  {route.title}
                </h3>
                <p className="text-xs text-gray-300 hidden md:block leading-snug">
                  {route.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
