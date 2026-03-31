import { Phone, Shield, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-exterior.jpg";

interface HeroProps {
  onEstimateClick: (hookText?: string) => void;
}

export function Hero({ onEstimateClick }: HeroProps) {
  return (
    <section className="relative min-h-[580px] md:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ricardo's Home Repair - Completed siding project in Rochester NY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-0 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Home Repair &amp; Remodeling in Rochester, NY
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Bathrooms · Decks · Siding · Flooring · More
          </p>

          {/* Trust Bullets */}
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="tel:5856903190"
              className="hidden sm:flex items-center justify-center gap-2 px-8 py-4 bg-[#1e6b22] hover:bg-[#15571a] text-white rounded-md transition-colors text-lg font-semibold min-h-[56px]"
            >
              <Phone className="size-5" />
              <span>Call 585-690-3190</span>
            </a>

            <button
              onClick={() => onEstimateClick()}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#1e6b22] rounded-md transition-colors text-lg font-semibold min-h-[56px]"
            >
              Get Free Estimate
            </button>
          </div>

          <p className="text-sm text-gray-300">
            No obligation · Fast response · Serving Rochester &amp; Buffalo areas
          </p>
        </div>
      </div>
    </section>
  );
}