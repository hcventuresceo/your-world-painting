import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoImg from "@/assets/ywp-logo.png";

interface HeaderProps {
  onEstimateClick: (hookText?: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ onEstimateClick, currentPage = "home", onNavigate }: HeaderProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-[33px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img src={logoImg} alt="Your World Painting" className="h-16 w-auto" />
          </button>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="tel:7168150333"
              className="flex items-center gap-1.5 text-[#111827] font-semibold hover:text-[#1f2937] transition-colors"
            >
              <Phone className="size-4" />
              <span>716-815-0333</span>
            </a>
            <button
              onClick={() => handleNavClick("gallery")}
              className={`text-[#3a3a3a] hover:text-[#111827] transition-colors font-medium ${
                currentPage === "gallery" ? "text-[#111827]" : ""
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`text-[#3a3a3a] hover:text-[#111827] transition-colors font-medium ${
                currentPage === "about" ? "text-[#111827]" : ""
              }`}
            >
              About
            </button>
            <Button
              onClick={() => onEstimateClick()}
              className="bg-[#111827] hover:bg-[#1f2937] text-white text-base font-semibold px-6 py-3 min-h-[48px]"
            >
              Free Estimate
            </Button>
          </nav>

          {/* Mobile: just logo + estimate button, sticky bar handles call */}
          <button
            onClick={() => onEstimateClick()}
            className="md:hidden bg-[#111827] hover:bg-[#1f2937] text-white text-base font-semibold px-5 py-3 min-h-[48px] rounded-md"
          >
            Free Estimate
          </button>
        </div>
      </div>
    </header>
  );
}