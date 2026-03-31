import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface ContactProps {
  onEstimateClick: (hookText?: string) => void;
}

export function Contact({ onEstimateClick }: ContactProps) {
  return (
    <section className="py-16 md:py-24 bg-[#111827] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get Your Free Estimate Today
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Left side - Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="size-6 fill-[#f59e0b] text-[#f59e0b]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl italic text-white mb-4 leading-relaxed">
              "Quick response, fair price, great quality. Malik even helped me pick the final color. Very happy with the whole experience."
            </p>
            <p className="font-semibold text-gray-200">— Sandra R.</p>
            <p className="text-sm text-gray-300">Tonawanda, NY</p>
          </div>

          {/* Right side - CTA */}
          <div className="text-center lg:text-left">
            <p className="text-xl mb-6 text-gray-100">
              Ready to transform your space? Contact Malik to discuss your project and get a no-obligation estimate.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4 mb-6">
              <a
                href="tel:7168150333"
                className="flex items-center gap-2 text-lg hover:underline"
              >
                <Phone className="size-5" />
                <span>716-815-0333</span>
              </a>

              <a
                href="mailto:yourworldpainting@gmail.com"
                className="flex items-center gap-2 text-lg hover:underline"
              >
                <Mail className="size-5" />
                <span>yourworldpainting@gmail.com</span>
              </a>
            </div>

            <Button
              onClick={() => onEstimateClick()}
              className="bg-white text-[#111827] hover:bg-gray-100 text-lg font-medium px-8 py-4 min-h-[56px] w-full sm:w-auto"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}