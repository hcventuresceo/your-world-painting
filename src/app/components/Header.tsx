import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "@/assets/ywp-logo.png";
import { Button } from "./ui/button";

interface HeaderProps {
  onEstimateClick: (hookText?: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ onEstimateClick, currentPage = "home", onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Gallery", page: "gallery" },
    { label: "About", page: "about" },
  ] as const;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }

    setIsMobileMenuOpen(false);
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
            <img src={logoImg} alt="Your World Painting" className="h-24 w-auto" />
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
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-[#3a3a3a] hover:text-[#111827] transition-colors font-medium ${
                  currentPage === item.page ? "text-[#111827]" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => onEstimateClick()}
              className="bg-[#111827] hover:bg-[#1f2937] text-white text-base font-semibold px-6 py-3 min-h-[48px]"
            >
              Free Estimate
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:7168150333"
              className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-semibold px-4 py-3 min-h-[48px] rounded-md"
            >
              <Phone className="size-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border border-[#d1d5db] text-[#111827] transition-colors hover:bg-[#f8f8f8]"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#e5e7eb] py-4 md:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.page)}
                    className={`rounded-md px-4 py-3 text-left text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#111827] text-white"
                        : "bg-[#f8f8f8] text-[#111827] hover:bg-[#ececec]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEstimateClick();
                }}
                className="mt-2 rounded-md bg-[#111827] px-4 py-3 text-sm font-semibold text-white"
              >
                Free Estimate
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
