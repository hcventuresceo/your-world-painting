import interiorWallImg from "@/assets/interior-hallway-after.jpg";
import interiorAccentImg from "@/assets/interior-accent-wall.jpg";
import interiorCabinetImg from "@/assets/interior-cabinets.jpg";
import exteriorHouseImg from "@/assets/exterior-house-blue.jpg";
import exteriorDoorImg from "@/assets/exterior-door-black.jpg";
import exteriorDeckImg from "@/assets/exterior-house-tan.jpg";

interface ServiceRoutingProps {
  onNavigate?: (page: string) => void;
  onEstimateClick?: (hookText?: string, service?: string) => void;
}

const serviceRoutes = [
  {
    title: "Interior Painting",
    description: "Walls, ceilings, trim — flawless finish guaranteed",
    image: interiorWallImg,
    page: "interior",
    service: "interior",
  },
  {
    title: "Accent & Feature Walls",
    description: "Bold statements, chalkboard, two-tone designs",
    image: interiorAccentImg,
    page: "interior",
    service: "accent-wall",
  },
  {
    title: "Cabinet Refinishing",
    description: "Fresh cabinets without the cost of replacement",
    image: interiorCabinetImg,
    page: "interior",
    service: "cabinets",
  },
  {
    title: "Exterior House Painting",
    description: "Full exterior repaints, power wash & prep included",
    image: exteriorHouseImg,
    page: "exterior",
    service: "exterior",
  },
  {
    title: "Door & Trim Painting",
    description: "Doors, shutters, fascia — curb appeal upgrade",
    image: exteriorDoorImg,
    page: "exterior",
    service: "doors-trim",
  },
  {
    title: "Deck & Porch Staining",
    description: "Weathered wood restored and protected",
    image: exteriorDeckImg,
    page: "exterior",
    service: "deck-staining",
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
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
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
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#dc2626]/0 group-hover:bg-[#dc2626]/70 transition-all duration-300" />
              {/* Default text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white group-hover:opacity-0 transition-opacity duration-200">
                <h3 className="text-sm md:text-base font-bold leading-tight mb-0.5">
                  {route.title}
                </h3>
                <p className="text-xs text-gray-300 hidden md:block leading-snug">
                  {route.description}
                </p>
              </div>
              {/* Hover CTA */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4">
                <h3 className="text-sm md:text-base font-bold text-center mb-2 leading-tight">
                  {route.title}
                </h3>
                <span className="text-xs md:text-sm font-semibold bg-white text-[#dc2626] px-4 py-2 rounded-full">
                  Get Free Estimate →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
