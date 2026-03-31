import { Phone, Star, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/interior-malik-painting.jpg";

interface FlyrPageProps {
  onEstimateClick: (hookText?: string, service?: string) => void;
}

export function FlyrPage({ onEstimateClick }: FlyrPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — above fold, mobile-first */}
      <section className="relative min-h-[520px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Your World Painting — Rochester, NY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 text-white text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-[#f59e0b] text-[#f59e0b]" />
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Rochester's #1 Painting Crew
          </h1>
          <p className="text-lg text-gray-200 mb-2">
            Interior · Exterior · Power Washing · Drywall Repairs
          </p>
          <p className="text-sm text-gray-300 mb-8">
            Fully licensed &amp; insured · Rochester, NY &amp; Greater Rochester
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="tel:7168150333"
              className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xl py-5 px-8 rounded-lg transition-colors"
            >
              <Phone className="size-6" />
              Call 716-815-0333
            </a>
            <button
              onClick={() => onEstimateClick("You scanned our flyer — let's get your project quoted fast.")}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#111827] font-bold text-xl py-5 px-8 rounded-lg transition-colors"
            >
              Get a Free Estimate
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            No obligation · Fast response · We come to you
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#111827] text-white py-6">
        <div className="max-w-2xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[#dc2626]">5★</p>
            <p className="text-xs text-gray-400 mt-1">Google Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#dc2626]">100+</p>
            <p className="text-xs text-gray-400 mt-1">Jobs Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#dc2626]">ROC</p>
            <p className="text-xs text-gray-400 mt-1">Based &amp; Trusted</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-[#111827] text-center mb-6">
          What We Do
        </h2>
        <ul className="space-y-3">
          {[
            "Interior Painting — walls, ceilings, trim",
            "Exterior Painting — full repaints, prep included",
            "Accent & Feature Walls",
            "Cabinet Refinishing",
            "Power Washing",
            "Wood Staining & Finishing",
            "Drywall & Surface Repairs",
            "Water Damage Repair & Restoration",
          ].map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="size-5 text-[#dc2626] shrink-0 mt-0.5" />
              <span className="text-[#3a3a3a]">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Social proof */}
      <section className="bg-[#f8f8f8] py-10 px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <p className="text-[#3a3a3a] leading-relaxed mb-3">
              "Malik and his crew did an amazing job on our living room and hallway. Clean lines, no drips, everything was covered and protected. Finished in one day and left the place spotless."
            </p>
            <p className="font-semibold text-[#111827] text-sm">— Darnell W., Rochester, NY</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-6 bg-white text-center">
        <div className="max-w-lg mx-auto">
          <Shield className="size-10 text-[#dc2626] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Fully Licensed &amp; Insured
          </h2>
          <p className="text-[#5a5a5a] mb-8">
            Every job is backed by our quality guarantee. Not happy? We make it right.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => onEstimateClick("You scanned our flyer — let's get your project quoted fast.")}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xl py-5 px-8 rounded-lg transition-colors"
            >
              Get My Free Estimate
            </button>
            <a
              href="tel:7168150333"
              className="text-[#111827] font-semibold text-lg underline"
            >
              Or call (716) 815-0333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
