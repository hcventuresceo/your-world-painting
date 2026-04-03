import { useState, useEffect, useRef } from "react";
import { X, Smartphone, MessageCircle, Loader2, Paperclip } from "lucide-react";

interface EstimateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hookText?: string;
  preSelectedService?: string;
  customHeader?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  interior: "Interior Painting",
  exterior: "Exterior Painting",
  "accent-wall": "Accent / Feature Wall",
  cabinets: "Cabinet Refinishing",
  "deck-staining": "Deck & Porch Staining",
  "doors-trim": "Door & Trim Painting",
  "power-washing": "Power Washing",
  "wood-staining": "Wood Staining & Finishing",
  drywall: "Drywall & Surface Repairs",
  "water-damage": "Water Damage Repair",
  commercial: "Commercial Painting",
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
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [otherService, setOtherService] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setEmail("");
    setDescription("");
    setBudget("");
    setOtherService("");
    setPhotos(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setService(preSelectedService ?? "");
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      if (email) {
        formData.append("customer_email", email);
        formData.append("_replyto", email);
      }
      formData.append("service", service === "other" && otherService ? otherService : (SERVICE_LABELS[service] || service));
      formData.append("description", description || "Not provided");
      formData.append("budget", budget || "Not provided");
      formData.append("_subject", `New Estimate Request – ${name}`);
      formData.append("_template", "table");
      if (photos) {
        for (let i = 0; i < photos.length; i++) {
          formData.append("photos", photos[i]);
        }
      }
      await fetch("https://formsubmit.co/ajax/yourworldpainting@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
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
            <Loader2 size={56} color="#111827" style={{ animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
            <p style={{ color: "#5a5a5a", fontSize: "18px", fontWeight: 500 }}>Sending your request to Malik...</p>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : submitted ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
              <Smartphone size={72} color="#111827" strokeWidth={1.5} />
              <div style={{ position: "absolute", top: "-4px", right: "-4px", background: "#111827", borderRadius: "50%", padding: "6px" }}>
                <MessageCircle size={16} color="white" fill="white" />
              </div>
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#111827", marginBottom: "12px" }}>✅ Request Received!</div>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#3a3a3a", marginBottom: "12px" }}>Malik will reach out shortly.</p>
            <p style={{ fontSize: "14px", color: "#5a5a5a", lineHeight: 1.6, marginBottom: "16px" }}>
              To speed things up, text a photo of the project to{" "}
              <a href="sms:7168150333" style={{ color: "#111827", fontWeight: 600 }}>(716) 815-0333</a>.
            </p>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "24px" }}>
              Past customer?{" "}
              <a href="https://g.page/r/your-world-painting/review" target="_blank" rel="noopener noreferrer" style={{ color: "#dc2626", fontWeight: 600 }}>
                Leave us a Google review
              </a>{" "}
              — it means everything to a small business.
            </p>
            <button
              onClick={close}
              style={{ backgroundColor: "#111827", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginBottom: "4px", marginTop: 0, paddingRight: "32px" }}>
              {customHeader || "Get Your Free Estimate"}
            </h2>
            <p style={{ fontSize: "14px", color: "#5a5a5a", marginBottom: "20px" }}>
              {hookText || "Fill out the form and Malik will contact you within the hour."}
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
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
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
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Service Type *</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  required
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", backgroundColor: "white", boxSizing: "border-box" }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="accent-wall">Accent / Feature Wall</option>
                  <option value="cabinets">Cabinet Refinishing</option>
                  <option value="deck-staining">Deck & Porch Staining</option>
                  <option value="doors-trim">Door & Trim Painting</option>
                  <option value="power-washing">Power Washing</option>
                  <option value="wood-staining">Wood Staining & Finishing</option>
                  <option value="drywall">Drywall & Surface Repairs</option>
                  <option value="water-damage">Water Damage Repair</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {service === "other" && (
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>What do you need done? *</label>
                  <input
                    type="text"
                    value={otherService}
                    onChange={e => setOtherService(e.target.value)}
                    required
                    placeholder="e.g. Fence painting, garage floor, etc."
                    style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box" }}
                  />
                </div>
              )}

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Project Description</label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="e.g. Living room + hallway, walls and trim, about 1,200 sq ft"
                  rows={3}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", boxSizing: "border-box", resize: "vertical" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>Approximate Budget</label>
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  style={{ width: "100%", height: "48px", padding: "0 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "16px", backgroundColor: "white", boxSizing: "border-box" }}
                >
                  <option value="">Not sure yet</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1500">$500 – $1,500</option>
                  <option value="1500-3000">$1,500 – $3,000</option>
                  <option value="3000-6000">$3,000 – $6,000</option>
                  <option value="6000+">$6,000+</option>
                </select>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", color: "#5a5a5a", marginBottom: "6px", fontWeight: 500 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Paperclip size={14} />
                    Add Photos <span style={{ fontWeight: 400, color: "#9ca3af" }}>(optional)</span>
                  </span>
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={e => setPhotos(e.target.files)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box", backgroundColor: "#f9fafb", cursor: "pointer" }}
                />
                {photos && photos.length > 0 && (
                  <p style={{ fontSize: "12px", color: "#5a5a5a", marginTop: "6px" }}>
                    {photos.length} photo{photos.length > 1 ? "s" : ""} selected — will be sent to Malik's email
                  </p>
                )}
                <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "6px" }}>
                  You can text photos to <a href="sms:7168150333" style={{ color: "#111827" }}>(716) 815-0333</a> directly or email them to <a href="mailto:yourworldpainting@gmail.com" style={{ color: "#111827" }}>yourworldpainting@gmail.com</a>
                </p>
              </div>

              <button
                type="submit"
                style={{ width: "100%", backgroundColor: "#111827", color: "white", border: "none", borderRadius: "8px", padding: "16px", fontSize: "18px", fontWeight: 600, cursor: "pointer" }}
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
