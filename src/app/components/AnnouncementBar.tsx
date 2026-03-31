import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  // Determine the message based on current month
  const getMessage = () => {
    const currentMonth = new Date().getMonth(); // 0 = January, 11 = December

    // March (2), April (3), May (4)
    if (currentMonth >= 2 && currentMonth <= 4) {
      return "🌧️ Spring Rain Alert: Get a Free Gutter & Siding Integrity Check with any quote this month.";
    }
    // October (9), November (10), December (11), January (0)
    else if (currentMonth >= 9 || currentMonth === 0) {
      return "❄️ Heat Loss Alert: Is your front door costing you $50/month? Get a Free Energy Audit with any quote.";
    }
    // Summer/Fall (June-September)
    else {
      return "☀️ Summer Special: Get a Free 10-Point Exterior Integrity Check with any quote this month.";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#f59e0b] to-[#f97316] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-bold text-[#1a1a1a] leading-tight">
            {getMessage()}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-[#1a1a1a] hover:text-[#3a3a3a] transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="size-5" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
