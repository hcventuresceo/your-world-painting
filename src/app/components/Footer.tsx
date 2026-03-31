import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logoImg} alt="Ricardo's Home Repair LLC" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully licensed &amp; insured contractor serving Rochester, NY and surrounding areas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:5856903190"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="size-4 text-[#4ade80]" />
                <span>585-690-3190</span>
              </a>
              <a
                href="mailto:ricardoshomerepair@outlook.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="size-4 text-[#4ade80]" />
                <span>ricardoshomerepair@outlook.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <Clock className="size-4 text-[#4ade80] mt-0.5 shrink-0" />
                <div>
                  <p>Mon–Fri: 7am – 6pm</p>
                  <p>Sat: 8am – 4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Rochester, NY</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Buffalo, NY</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Greece</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Irondequoit</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Brighton</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Penfield</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Webster</li>
              <li className="text-gray-500">& surrounding areas</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Bathroom Remodeling</li>
              <li>Kitchen Remodeling</li>
              <li>Deck &amp; Porch Repair</li>
              <li>Siding &amp; Soffit</li>
              <li>Doors &amp; Windows</li>
              <li>Flooring</li>
              <li>Drywall &amp; Framing</li>
              <li>General Repairs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Ricardo's Home Repair LLC · Rochester, NY · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
