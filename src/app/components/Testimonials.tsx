import { Star } from "lucide-react";

const testimonials = [
  { name: "Darnell W.", location: "Rochester, NY", rating: 5 },
  { name: "Latoya H.", location: "Irondequoit, NY", rating: 5 },
  { name: "Marcus B.", location: "Pittsford, NY", rating: 5 },
  { name: "Sandra R.", location: "Greece, NY", rating: 5 },
  { name: "James P.", location: "Rochester, NY", rating: 5 },
  { name: "Keisha M.", location: "Brighton, NY", rating: 5 },
  { name: "Jasmine R.", location: "Rochester, NY", rating: 5 },
  { name: "Marcus T.", location: "Irondequoit, NY", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="relative">
        {/* Auto-scroll marquee */}
        <div className="flex animate-scroll">
          {/* Render testimonials twice for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
              <span className="text-[#3a3a3a] font-medium">
                {testimonial.name}
              </span>
              <span className="text-[#5a5a5a]">—</span>
              <span className="text-[#5a5a5a]">{testimonial.location}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}