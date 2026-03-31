import { useState, useEffect } from "react";
import { X, Smartphone, MessageCircle, Loader2 } from "lucide-react";

interface EstimateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hookText?: string;
  preSelectedService?: string;
  customHeader?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  bathroom: "Bathroom Remodel",
  kitchen: "Kitchen Remodel",
  basement: "Basement Finish",
  flooring: "Flooring Install",
  painting: "Painting",
  drywall: "Drywall & Framing",
  deck: "Deck & Porch Repair",
  "doors-windows": "Doors & Windows",
  siding: "Siding & Soffit",
  general: "General Repairs",
  other: "Other",
};

export function EstimateModal({
  open,
  onOpenChange,
  hookText,
  preSelectedService,
  customHeader,
}: EstimateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState(preSelectedService ?? "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Sync service when preSelectedService changes
  useEffect(() => {
    setService(preSelectedService ?? "");
  }, [preSelectedService]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setName("");
    setPhone("");
    setService(preSelectedService ?? "");
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/ricardoshomerepair@outlook.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service: SERVICE_LABELS[service] || service,
          _subject: `New Estimate Request – ${name}`,
          _template: "table",
        }),
      });
    } catch (_) {
      // show success anyway
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }}
      />

      {/* Panel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "24px",
        }}
      >
        {/* X */}
        <button
          onClick={close}
          style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {isSubmitting ? (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <Loader2 size={56} color="#1e6b22" style={{ animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
            <p style={{ color: "#5a5a5a", fontSize: "18px", fontWeight: 500 }}>Sending your request to Ricardo...</p>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : submitted ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
              <Smartphone size={72} color="#1e6b22" strokeWidth={1.5} />
              <div style={{ position: "absolute", top: "-4px", right: "-4px", background: "#1e6b22", borderRadius: "50%", padding: "6px" }}>
                <MessageCircle size={16} color="white" fill="white" />
              </div>
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#1e6b22", marginBottom: "12px" }}>✅ Request Received!</div>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#3a3a3a", marginBottom: "12px" }}>Ricardo will reach out shortly.</p>
            <p style={{ fontSize: "14px", color: "#5a5a5a", lineHeight: 1.6, marginBottom: "24px" }}>
              To speed things up, text a photo of the project to{" "}
              <a href="sms:5856903190" style={{ color: "#1e6b22", fontWeight: 600 }}>(585) 690-3190</a>.
            </p>
            <button
              onClick={close}
              style={{ backgroundColor: "#1e6b22", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#1e6b22", marginBottom: "4px", marginTop: 0, paddingRight: "32px" }}>
              {customHeader || "Get Your Free Estimate"}
            </h2>
            <p style={{ fontSize: "14px", color: "#5a5a5a", marginBottom: "20px" }}>
              {hookText || "Fill out the form and Ricardo will contact you within the hour."}
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="John Smith"
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #9dbfa0", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  placeholder="(585) 000-0000"
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #9dbfa0", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Service Type *</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  required
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #9dbfa0", borderRadius: "6px", fontSize: "16px", backgroundColor: "white", boxSizing: "border-box" }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="basement">Basement Finish</option>
                  <option value="flooring">Flooring Install</option>
                  <option value="painting">Painting</option>
                  <option value="drywall">Drywall & Framing</option>
                  <option value="deck">Deck & Porch Repair</option>
                  <option value="doors-windows">Doors & Windows</option>
                  <option value="siding">Siding & Soffit</option>
                  <option value="general">General Repairs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                style={{ width: "100%", backgroundColor: "#1e6b22", color: "white", border: "none", borderRadius: "8px", padding: "16px", fontSize: "18px", fontWeight: 600, cursor: "pointer" }}
              >
                Send My Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
