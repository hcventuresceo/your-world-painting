import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function LeadCaptureSlideIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed or submitted
    if (isDismissed || isSubmitted) return;

    // Show after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if cursor is leaving from the top of the viewport
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDismissed, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark as submitted
    setIsSubmitted(true);
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 w-[360px] bg-white rounded-lg shadow-2xl border-2 border-[#1e6b22] transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
      }`}
      style={{ maxWidth: "calc(100vw - 3rem)" }}
    >
      {/* Close Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-[#5a5a5a] hover:text-[#3a3a3a] transition-colors"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>

      <div className="p-6">
        {isSubmitted ? (
          // Success State
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-[#1e6b22] mb-2">
              🎉 You're in!
            </div>
            <p className="text-[#5a5a5a]">
              Check your texts for your $25 discount code!
            </p>
          </div>
        ) : (
          // Form State
          <>
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e6b22] rounded-full p-3">
                <Gift className="size-8 text-white" />
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl font-bold text-[#1e6b22] text-center mb-2">
              🎁 Save $25 on your first repair!
            </h3>

            {/* Sub-heading */}
            <p className="text-sm text-[#5a5a5a] text-center mb-5 leading-relaxed">
              Join Ricardo's VIP list for seasonal maintenance tips and exclusive
              local discounts.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="(585) 000-0000"
                required
                className="border-[#9dbfa0] h-11 text-base"
              />

              <Button
                type="submit"
                className="w-full bg-[#1e6b22] hover:bg-[#15571a] text-white px-8 py-4 text-base font-semibold"
              >
                Get My Discount
              </Button>
            </form>

            {/* Fine Print */}
            <p className="text-xs text-[#5a5a5a] text-center mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
