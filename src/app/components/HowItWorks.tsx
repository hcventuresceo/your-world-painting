import { FileText, Home, Hammer } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Request Free Estimate",
    description:
      "Fill out our quick form or give us a call to describe your project.",
  },
  {
    icon: Home,
    title: "On-Site Evaluation",
    description:
      "Ricardo will visit your home to assess the work and provide a detailed quote.",
  },
  {
    icon: Hammer,
    title: "Professional Repair or Remodel",
    description:
      "We complete your project with quality craftsmanship and attention to detail.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f9f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e6b22] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Getting started with your home repair or remodel is simple.
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
                    <div className="absolute -top-2 -right-2 bg-[#1e6b22] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1e6b22] mb-2">
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
