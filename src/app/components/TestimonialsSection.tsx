import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Darnell W.",
    location: "Rochester, NY",
    text: "I've hired three painters in the last five years and every one left me disappointed. Malik was different from the first call. Showed up on time, covered everything before touching a wall, and the finished product was better than I imagined. Living room, hallway, stairwell — two days. Already booked him back.",
    rating: 5,
  },
  {
    name: "Latoya H.",
    location: "Irondequoit, NY",
    text: "My kitchen cabinets were embarrassing me. I almost spent $8k on replacements until a friend said call Malik first. He refinished them for a fraction of the cost and they look better than new cabinets would have. The color he suggested was perfect. This man knows what he's doing.",
    rating: 5,
  },
  {
    name: "Marcus B.",
    location: "Pittsford, NY",
    text: "We were listing our house and needed the exterior to pop. Malik came out, gave us an honest quote same day, power washed and prepped everything, and finished ahead of schedule. Our realtor called it a game changer. Four offers the first weekend. Worth every dollar.",
    rating: 5,
  },
  {
    name: "Sandra R.",
    location: "Greece, NY",
    text: "Turned our spare room into a home office and wanted an accent wall but had no clue where to start. Malik asked me three questions about the lighting and furniture and came back with two options. The one we picked looks like something out of a magazine. Fast, clean, no drama.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-8 fill-[#f59e0b] text-[#f59e0b]"
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
            Rated 5.0 by Rochester Homeowners
          </h2>
          <p className="text-lg text-[#5a5a5a]">
            Real reviews from real local customers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] border-2 border-[#e5e7eb] p-6 rounded-lg"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="text-[#3a3a3a] mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              {/* Name + Location */}
              <p className="font-semibold text-[#111827]">
                — {testimonial.name}
              </p>
              <p className="text-sm text-[#5a5a5a]">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
