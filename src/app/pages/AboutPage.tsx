import { Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import malikHeadshot from "@/assets/malik-headshot.jpg";

interface AboutPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function AboutPage({ onEstimateClick }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#111827] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Your World Painting</h1>
            <p className="text-xl text-gray-200">
              Rochester-based. Quality-obsessed. Built on reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={malikHeadshot}
                alt="Malik — Owner of Your World Painting"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Meet Malik
              </h2>
              <p className="text-[#5a5a5a] text-lg leading-relaxed mb-4">
                Your World Painting was built on one simple belief: every home deserves to look its best, and every homeowner deserves a painter they can trust.
              </p>
              <p className="text-[#5a5a5a] text-lg leading-relaxed mb-4">
                I started YWP right here in Rochester because I saw too many people get burned by painters who overpromised and underdelivered. Sloppy edges, skipped prep, no-shows. I wanted to do it differently.
              </p>
              <p className="text-[#5a5a5a] text-lg leading-relaxed mb-6">
                Every job I take — from a single accent wall to a full exterior repaint — gets the same attention to detail. I show up on time, I do the prep right, and I don't leave until the job looks exactly how it should.
              </p>
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-6 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
                <span className="text-[#111827] font-semibold text-lg ml-1">5.0 · Rochester, NY</span>
              </div>
              <Button
                onClick={() => onEstimateClick()}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg font-semibold px-8 py-4 min-h-[56px]"
              >
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border-2 border-[#e5e7eb]">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Craftsmanship</h3>
              <p className="text-[#5a5a5a]">No shortcuts. Proper prep, quality materials, and clean lines every single time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#e5e7eb]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Reliability</h3>
              <p className="text-[#5a5a5a]">We show up when we say we will and finish when we say we will. No guessing games.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#e5e7eb]">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Communication</h3>
              <p className="text-[#5a5a5a]">You'll always know where the job stands. Clear pricing, honest timelines, no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111827] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-xl mx-auto">
            Call or text Malik directly at 716-815-0333, or fill out the form for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7168150333"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#111827] hover:bg-gray-100 rounded-md text-lg font-semibold min-h-[56px]"
            >
              <Phone className="size-5" />
              Call 716-815-0333
            </a>
            <Button
              onClick={() => onEstimateClick()}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg font-semibold px-8 py-4 min-h-[56px]"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
