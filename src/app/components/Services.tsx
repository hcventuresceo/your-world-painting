import {
  Home,
  Bath,
  Hammer,
  DoorOpen,
  Paintbrush,
  SquareStack,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Attics & Basements",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1623955277601-2aa7bb3fb240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmZpbmlzaGVkJTIwYmFzZW1lbnQlMjBjb25jcmV0ZXxlbnwxfHx8fDE3NzEyNjg1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Bath & Kitchen Remodeling",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Bath,
    image:
      "https://images.unsplash.com/photo-1628746234554-3bb28b7dfd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbW9kZWwlMjBpbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTI2ODU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Custom Wood Designs & Countertops",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZyUyMHRvb2xzfGVufDF8fHx8MTc3MTE5MzY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Doors & Windows",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: DoorOpen,
    image:
      "https://images.unsplash.com/photo-1606383446602-2e92e9d5d792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHByb2dyZXNzJTIwbWVzc3l8ZW58MXx8fHwxNzcxMjY4NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Framing & Drywall",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: SquareStack,
    image:
      "https://images.unsplash.com/photo-1702392183172-17fdef8002b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnl3YWxsJTIwaW5zdGFsbGF0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc3MTI2ODU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Flooring",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: SquareStack,
    image:
      "https://images.unsplash.com/photo-1666418093542-95ef85253732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMGNvbnRyYWN0b3J8ZW58MXx8fHwxNzcxMjY4NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Painting",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1769013649052-add139112bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGNvbnRyYWN0b3IlMjB3b3JrfGVufDF8fHx8MTc3MTI2ODU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Siding & Soffit",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1768321916027-d0f69289227f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjByZW1vZGVsaW5nJTIwaG9tZXxlbnwxfHx8fDE3NzEyNjg1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Tiling",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: SquareStack,
    image:
      "https://images.unsplash.com/photo-1628746234554-3bb28b7dfd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbW9kZWwlMjBpbiUyMHByb2dyZXNzfGVufDF8fHx8MTc3MTI2ODU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "General Home Repairs",
    description:
      "Professional installation, repairs, and upgrades tailored to your home.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMHdvcmslMjBwcm9ncmVzc3xlbnwxfHx8fDE3NzEyNjg1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            From minor repairs to complete remodels, we handle it all with
            precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#111827]/10 rounded">
                      <Icon className="size-6 text-[#111827]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#5a5a5a]">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}