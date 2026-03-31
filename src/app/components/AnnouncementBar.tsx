import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  // Determine the message based on current month
  const getMessage = () => {
    const currentMonth = new Date().getMonth(); // 0 = January, 11 = December

    // March (2), April (3), May (4)
    if (currentMonth >= 2 && currentMonth <= 4) {
      return "🌸 Spring Special: Book your exterior paint job now before the summer rush — limited slots available!";
    }
    else if (currentMonth >= 9 || currentMonth === 0) {
      return "❄️ Winter Interior Special: Now's the perfect time for interior painting — free color consultation included.";
    }
    else {
      return "☀️ Summer's Here: Transform your home's curb appeal before the season ends — get a free estimate today!";
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
