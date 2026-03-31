import { Shield, MapPin, CheckCircle2, MessageCircle, Award, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Your home and investment are protected. We carry full insurance and maintain all required Buffalo-area licenses.",
  },
  {
    icon: MapPin,
    title: "Buffalo Local Since Day One",
    description:
      "Not a franchise. We live here, work here, and care about our reputation in this community.",
  },
  {
    icon: CheckCircle2,
    title: "Complete Project Management",
    description:
      "From permits to cleanup, we handle everything. You get one point of contact and zero surprises.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description:
      "No pressure sales. Clear quotes. Real timelines. We tell you what you need, not what costs the most.",
  },
  {
    icon: Award,
    title: "Quality Workmanship Guaranteed",
    description:
      "We stand behind our work. If it's not right, we make it right—simple as that.",
  },
  {
    icon: Clock,
    title: "Rapid Response & Clear Timelines",
    description:
      "Fast callbacks, honest schedules, and projects that actually start when promised. No guessing.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Why Choose Your World Painting
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Experience the difference of working with a trusted local
            painting professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#111827] rounded-full">
                    <Icon className="size-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#5a5a5a]">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}