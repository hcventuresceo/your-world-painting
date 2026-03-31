import { useState } from "react";
import { X } from "lucide-react";

interface AnnouncementBarProps {
  onEstimateClick: () => void;
}

export function AnnouncementBar({ onEstimateClick }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  const getMessage = () => {
    const currentMonth = new Date().getMonth();
    if (currentMonth >= 2 && currentMonth <= 4) {
      return "Spring Special: Protect your home before summer — exterior paint now booking. Limited slots.";
    } else if (currentMonth >= 9 || currentMonth === 0) {
      return "Winter Interior Special: Perfect time to repaint inside — free color consult included.";
    } else {
      return "Avoid costly repairs later — secure your exterior paint job before peak season ends.";
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <button
          onClick={onEstimateClick}
          className="flex-1 text-center hover:opacity-90 transition-opacity"
        >
          <p className="text-xs md:text-sm font-semibold text-[#1a1a1a] leading-tight">
            {getMessage()} <span className="underline">Get a free estimate →</span>
          </p>
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-[#1a1a1a] hover:text-[#3a3a3a] transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="size-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
