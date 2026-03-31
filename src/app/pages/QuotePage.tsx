import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";

export function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-10 text-center">
          <CheckCircle className="size-16 text-[#16a34a] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Request Sent!</h2>
          <p className="text-[#5a5a5a] mb-4">
            Malik will review your project details and reach out within the hour.
          </p>
          <p className="text-sm text-[#9ca3af]">
            Need to reach him now?{" "}
            <a href="tel:7168150333" className="text-[#dc2626] font-semibold">
              Call (716) 815-0333
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111827] mb-2">
            Request a Detailed Quote
          </h1>
          <p className="text-[#5a5a5a]">
            Tell us everything about your project — including photos. Malik will respond fast.
          </p>
        </div>

        {/* formsubmit.co supports file uploads via multipart form POST */}
        <form
          action="https://formsubmit.co/yourworldpainting@gmail.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
          className="bg-white rounded-xl shadow-sm p-8 space-y-5"
        >
          {/* formsubmit config */}
          <input type="hidden" name="_subject" value="New Detailed Quote Request — Your World Painting" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="about:blank" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(716) 000-0000"
                className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#111827]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#111827]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Service Address *</label>
            <input
              type="text"
              name="address"
              required
              placeholder="123 Main St, Rochester, NY"
              className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#111827]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Service Needed *</label>
            <select
              name="service"
              required
              className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#111827]"
            >
              <option value="">Select a service</option>
              <option>Interior Painting</option>
              <option>Exterior Painting</option>
              <option>Accent / Feature Wall</option>
              <option>Cabinet Refinishing</option>
              <option>Deck & Porch Staining</option>
              <option>Door & Trim Painting</option>
              <option>Power Washing</option>
              <option>Wood Staining & Finishing</option>
              <option>Drywall & Surface Repairs</option>
              <option>Water Damage Repair</option>
              <option>Commercial Painting</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Project Description *</label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Describe the project — rooms involved, current condition, any specific requests..."
              className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#111827] resize-vertical"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Approximate Budget</label>
              <select
                name="budget"
                className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#111827]"
              >
                <option value="">Not sure yet</option>
                <option>Under $500</option>
                <option>$500 – $1,500</option>
                <option>$1,500 – $3,000</option>
                <option>$3,000 – $6,000</option>
                <option>$6,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">Preferred Timeline</label>
              <select
                name="timeline"
                className="w-full h-12 px-3 border border-[#e5e7eb] rounded-lg text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#111827]"
              >
                <option value="">Flexible</option>
                <option>ASAP</option>
                <option>Within 2 weeks</option>
                <option>Within a month</option>
                <option>Just planning ahead</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5a5a5a] mb-1.5">
              <span className="flex items-center gap-2">
                <Upload className="size-4" />
                Upload Project Photos (optional)
              </span>
            </label>
            <input
              type="file"
              name="photos"
              accept="image/*"
              multiple
              className="w-full text-sm text-[#5a5a5a] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#111827] file:text-white hover:file:bg-[#1f2937] cursor-pointer"
            />
            <p className="text-xs text-[#9ca3af] mt-1">JPG, PNG, HEIC accepted. Up to 5 photos.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#111827] hover:bg-[#1f2937] text-white font-bold text-lg py-4 rounded-lg transition-colors"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}
