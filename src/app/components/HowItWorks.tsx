import { FileText, Home, Hammer } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Request a Free Estimate",
    description:
      "Fill out our quick form or give us a call. Takes less than 2 minutes. Text photos if you have them.",
  },
  {
    icon: Home,
    title: "On-Site Walkthrough",
    description:
      "Malik visits your home, walks the project, and gives you a clear quote — no surprises.",
  },
  {
    icon: Hammer,
    title: "We Paint, You Relax",
    description:
      "We show up on time, protect everything, and leave your space looking sharp. Guaranteed.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Getting started is simple. Here's how it works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="p-5 bg-[#3a3a3a] rounded-full">
                      <Icon className="size-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#111827] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5a5a5a]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
