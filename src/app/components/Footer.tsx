import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/ywp-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logoImg} alt="Your World Painting" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully licensed &amp; insured painting professionals serving Rochester, NY and all of Greater Rochester.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:7168150333"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="size-4 text-[#4ade80]" />
                <span>716-815-0333</span>
              </a>
              <a
                href="mailto:yourworldpainting@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="size-4 text-[#4ade80]" />
                <span>yourworldpainting@gmail.com</span>
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
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Irondequoit</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Greece</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Pittsford</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Brighton</li>
              <li className="flex items-center gap-1.5"><MapPin className="size-3 text-[#4ade80]" /> Webster</li>
              <li className="text-gray-500">& all of Monroe County</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Accent &amp; Feature Walls</li>
              <li>Cabinet Refinishing</li>
              <li>Deck &amp; Porch Staining</li>
              <li>Door &amp; Trim Painting</li>
              <li>Color Consultation</li>
              <li>Commercial Painting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Your World Painting · Rochester, NY · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
