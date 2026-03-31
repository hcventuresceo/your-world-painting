import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Darnell W.",
    location: "Buffalo, NY",
    text: "Malik and his crew knocked out our living room, hallway, and stairwell in two days. Everything was taped, covered, and protected before they even opened a can. Zero mess. The walls look cleaner than when we moved in. Already booked them back for the upstairs.",
    rating: 5,
  },
  {
    name: "Latoya H.",
    location: "Cheektowaga, NY",
    text: "I was going back and forth on whether to replace my kitchen cabinets or refinish them. Malik talked me through it, showed me some examples, and the refinish came out looking brand new. Saved me thousands. Couldn't be happier with how it turned out.",
    rating: 5,
  },
  {
    name: "Marcus B.",
    location: "Amherst, NY",
    text: "We had the exterior done before listing our house. Malik showed up when he said he would, power washed everything first, and the repaint was immaculate. Our realtor said it was one of the best curb appeal upgrades she'd seen. We had multiple offers in the first week.",
    rating: 5,
  },
  {
    name: "Sandra R.",
    location: "Tonawanda, NY",
    text: "Needed an accent wall for my home office and had no idea what color to go with. Malik helped me pick something that actually worked with the lighting in the room. Came out exactly how I pictured it. Fast, clean, and priced right.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Rated 5.0 by Buffalo Homeowners
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