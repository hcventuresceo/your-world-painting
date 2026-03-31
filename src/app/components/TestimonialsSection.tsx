import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Evangelyn M.",
    location: "Rochester, NY",
    text: "I am so pleased to give this review. It is a pleasure to have Mr. Ricardo Shaw do some work in my house. I am so pleased with his work I would recommend him to people in a heartbeat. I look forward to continuing working with him and his company. So if you're looking for someone who will get the job done and you will be happy with the work, call Ricardo and his company. Five stars is not enough. Thank you so very much Mr. Ricardo again for your help.",
    rating: 5,
  },
  {
    name: "Kevin Kless",
    location: "Rochester, NY",
    text: "Ricardo and his crew did an excellent job painting, cleaning, and sprucing up our garage. Clear communication, reasonable cost, outstanding attention to detail and craftsmanship. We couldn't be happier with the work he's done. Highest recommendation! We will be working with him again!",
    rating: 5,
  },
  {
    name: "Denise Thomas",
    location: "Rochester, NY",
    text: "Ricardo did an excellent job!! Trustworthy, easy to work with, reasonable cost, and does an outstanding job in a timely manner. I will be using his service again without a doubt!! HIGHLY RECOMMENDED!!!",
    rating: 5,
  },
  {
    name: "Tonjua Levens",
    location: "Rochester, NY",
    text: "I've had several repairs and I'm always pleased with the results. If you ever need him just call and he's right there. The best part is he is reasonable.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-3">
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
              className="bg-[#f4f9f4] border-2 border-[#9dbfa0] p-6 rounded-lg"
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
              <p className="font-semibold text-[#1e6b22]">
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