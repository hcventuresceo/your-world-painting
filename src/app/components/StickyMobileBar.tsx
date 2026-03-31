import { Phone, MessageSquare } from "lucide-react";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-2">
        <a
          href="tel:7168150333"
          className="flex items-center justify-center gap-2 py-4 bg-[#111827] text-white text-base font-semibold active:bg-[#1f2937]"
        >
          <Phone className="size-5" />
          <span>Call Now</span>
        </a>
        <a
          href="sms:7168150333"
          className="flex items-center justify-center gap-2 py-4 bg-[#3a3a3a] text-white text-base font-semibold active:bg-[#2a2a2a]"
        >
          <MessageSquare className="size-5" />
          <span>Text Us</span>
        </a>
      </div>
    </div>
  );
}
