import { Wind, Droplet, Sparkles } from "lucide-react";

interface DiagnosticCard {
  label: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

const diagnosticCards: DiagnosticCard[] = [
  {
    label: "Drafty or Cold Rooms",
    subtext: "Uneven temperatures or cold spots in your home.",
    icon: Wind,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Visible Wood Rot or Peeling Paint",
    subtext: "Interior trim damage or walls needing attention.",
    icon: Droplet,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-700",
  },
  {
    label: "Outdated or Cramped Interior",
    subtext: "Kitchens, bathrooms, or basements that need updating.",
    icon: Sparkles,
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600",
  },
];

interface HomeHealthDiagnosticProps {
  onCardClick: (hookText?: string, service?: string, header?: string) => void;
}

export function HomeHealthDiagnostic({ onCardClick }: HomeHealthDiagnosticProps) {
  const handleCardClick = (cardIndex: number) => {
    let hookText = "Most Buffalo homes face this. Ricardo can fix it in as little as 3 days. Where should he send your custom quote?";
    let service = "";
    let header = "";

    // Map each card to specific service and header
    switch (cardIndex) {
      case 0: // Drafty or Cold Rooms
        service = "doors-windows";
        header = "Let's Stop Those Drafts";
        hookText = "Ricardo can assess your energy loss this week. Where should he send your quote?";
        break;
      case 1: // Visible Wood Rot or Peeling Paint
        service = "painting";
        header = "Protect Your Home's Structure";
        hookText = "Tell Ricardo where the rot is so he can bring the right tools. Where should he send your quote?";
        break;
      case 2: // Outdated or Cramped Interior
        service = "bathroom";
        header = "Let's Modernize Your Space";
        hookText = "Ricardo specializes in kitchen and bathroom transformations. Where should he send your quote?";
        break;
    }

    onCardClick(hookText, service, header);
  };

  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3 text-center">
            Home Health Diagnostic
          </h2>
          <p className="text-lg text-[#5a5a5a] mb-10 text-center max-w-2xl mx-auto">
            Which of these issues is affecting your Buffalo home? Click to get your custom solution.
          </p>

          {/* Diagnostic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {diagnosticCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`
                    ${card.bgColor}
                    border-2 border-transparent
                    rounded-[24px]
                    p-8 md:p-10
                    shadow-md
                    transition-all duration-300 ease-out
                    hover:shadow-xl
                    hover:-translate-y-2
                    hover:border-[#f97316]
                    hover:border-2
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#f97316]/30
                    cursor-pointer
                    group
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`${card.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="size-16 md:size-20" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#3a3a3a]">
                      {card.label}
                    </h3>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">
                      {card.subtext}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-center text-[#5a5a5a] mt-8">
            You don't need five different contractors. You need one you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}