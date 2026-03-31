import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoImg from "@/assets/logo.png";

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
    <header className="bg-white shadow-sm sticky top-[52px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img src={logoImg} alt="Ricardo's Home Repair LLC" className="h-12 w-auto" />
          </button>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="tel:5856903190"
              className="flex items-center gap-1.5 text-[#1e6b22] font-semibold hover:text-[#15571a] transition-colors"
            >
              <Phone className="size-4" />
              <span>585-690-3190</span>
            </a>
            <button
              onClick={() => handleNavClick("interior")}
              className={`text-[#3a3a3a] hover:text-[#1e6b22] transition-colors font-medium ${
                currentPage === "interior" ? "text-[#1e6b22]" : ""
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => handleNavClick("exterior")}
              className={`text-[#3a3a3a] hover:text-[#1e6b22] transition-colors font-medium ${
                currentPage === "exterior" ? "text-[#1e6b22]" : ""
              }`}
            >
              Exterior
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`text-[#3a3a3a] hover:text-[#1e6b22] transition-colors font-medium ${
                currentPage === "about" ? "text-[#1e6b22]" : ""
              }`}
            >
              About
            </button>
            <Button
              onClick={() => onEstimateClick()}
              className="bg-[#1e6b22] hover:bg-[#15571a] text-white text-base font-semibold px-6 py-3 min-h-[48px]"
            >
              Free Estimate
            </Button>
          </nav>

          {/* Mobile: just logo + estimate button, sticky bar handles call */}
          <button
            onClick={() => onEstimateClick()}
            className="md:hidden bg-[#1e6b22] hover:bg-[#15571a] text-white text-base font-semibold px-5 py-3 min-h-[48px] rounded-md"
          >
            Free Estimate
          </button>
        </div>
      </div>
    </header>
  );
}