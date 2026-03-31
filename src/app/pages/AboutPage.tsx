import { Shield, MapPin, Award, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import ricardoHeadshot from "@/assets/ricardo-headshot.jpg";

interface AboutPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function AboutPage({ onEstimateClick }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1e6b22] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Ricardo's Home Repair
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your trusted local contractor in Rochester, NY
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={ricardoHeadshot}
                alt="Ricardo Shaw - Owner of Ricardo's Home Repair LLC"
                className="w-full h-[500px] object-cover object-top rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-6">
                Meet Ricardo Shaw
              </h2>
              <div className="space-y-4 text-lg text-[#3a3a3a]">
                <p>
                  Ricardo's Home Repair LLC has been serving Rochester and surrounding areas for years, built on a foundation of honest work, fair pricing, and genuine care for our customers.
                </p>
                <p>
                  Founded by Ricardo Shaw, our company started with a simple belief: homeowners deserve a contractor they can trust. No pressure sales. No hidden fees. Just quality craftsmanship and straightforward communication.
                </p>
                <p>
                  We're not a franchise. We're not a corporate operation. We're a local family business that takes pride in every job we do—from small repairs to complete remodels.
                </p>
                <p>
                  When you call Ricardo, you get Ricardo. One point of contact, one team you can trust, and results you can count on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#f4f9f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="size-16 text-[#1e6b22]" />
              </div>
              <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                Fully Licensed & Insured
              </h3>
              <p className="text-[#5a5a5a]">
                Your home and your investment are protected. We carry full insurance and maintain all required licenses.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="size-16 text-[#1e6b22]" />
              </div>
              <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                Rochester Local
              </h3>
              <p className="text-[#5a5a5a]">
                We live here, work here, and care about our reputation in this community. Your neighbors are our references.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="size-16 text-[#1e6b22]" />
              </div>
              <h3 className="text-xl font-bold text-[#3a3a3a] mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-[#5a5a5a]">
                We stand behind our work. If it's not right, we make it right—simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-8 text-center">
              Why Homeowners Choose Ricardo
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#1e6b22]">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">
                    No Pressure Sales
                  </h3>
                  <p className="text-[#5a5a5a]">
                    We tell you what you need, not what costs the most. Clear quotes, honest advice, zero pressure tactics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#1e6b22]">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">
                    One Contractor, Multiple Services
                  </h3>
                  <p className="text-[#5a5a5a]">
                    From bathrooms to basements, flooring to siding—we handle it all. No need to juggle five different contractors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#1e6b22]">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">
                    Fast Response Times
                  </h3>
                  <p className="text-[#5a5a5a]">
                    Quick callbacks. Clear schedules. Projects that actually start when promised. No guessing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#1e6b22]">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">
                    Reasonable Pricing
                  </h3>
                  <p className="text-[#5a5a5a]">
                    Fair rates for quality work. We're not the cheapest, but we're honest and we deliver value that lasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e6b22] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Let's discuss your project. Get a free estimate and see why Rochester homeowners trust Ricardo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5856903190"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e6b22] hover:bg-gray-100 rounded-md transition-colors text-lg font-medium min-h-[56px]"
            >
              <Phone className="size-5" />
              <span>585-690-3190</span>
            </a>
            <Button
              onClick={() => onEstimateClick()}
              className="bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white text-lg font-medium px-8 py-4 min-h-[56px]"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}