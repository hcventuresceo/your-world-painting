import { Phone, Shield, Star, MapPin, Images } from "lucide-react";
import malikHeadshot from "@/assets/malik-headshot.jpg";

interface HeroProps {
  onEstimateClick: (hookText?: string) => void;
  onNavigate: (page: string) => void;
}

export function Hero({ onEstimateClick, onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[75vh] md:min-h-[90vh] overflow-hidden flex items-start">
      <div className="absolute inset-0 z-0">
        <img
          src={malikHeadshot}
          alt="Malik — Owner of Your World Painting"
          className="h-full w-full scale-110 translate-y-12 object-cover object-top md:scale-100 md:translate-y-0 md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-16 md:pt-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Your World Painting
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Interior · Exterior · Accent Walls · Cabinet Refinishing
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm md:text-base">
            <span className="flex items-center gap-1.5">
              <Shield className="size-4 text-[#4ade80]" />
              Fully Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-[#f59e0b] text-[#f59e0b]" />
              5-Star Rated
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-[#4ade80]" />
              Rochester, NY Local
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="tel:7168150333"
              className="hidden sm:flex items-center justify-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-md transition-colors text-lg font-semibold min-h-[56px]"
            >
              <Phone className="size-5" />
              <span>Call 716-815-0333</span>
            </a>

            <button
              onClick={() => onEstimateClick()}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#111827] rounded-md transition-colors text-lg font-semibold min-h-[56px]"
            >
              Get Free Estimate
            </button>
          </div>

          <button
            onClick={() => onNavigate("gallery")}
            className="flex items-center gap-2 mt-2 mb-2 px-6 py-3 bg-transparent border border-white/60 hover:border-white hover:bg-white/10 text-white rounded-md transition-colors text-base font-medium"
          >
            <Images className="size-5" />
            See Our Work — View the Full Gallery
          </button>

          <p className="text-sm text-gray-300">
            No obligation · Fast response · Serving Rochester &amp; Monroe County
          </p>
        </div>
      </div>
    </section>
  );
}
