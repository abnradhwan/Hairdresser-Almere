import { Scissors, Coffee, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Expert Haircuts",
    description: "From classic styles to modern trends, every haircut is tailored to suit your look and personality.",
    icon: Scissors
  },
  {
    title: "Friendly Atmosphere",
    description: "Customers appreciate the relaxed environment and personal attention during every visit.",
    icon: Coffee
  },
  {
    title: "Consistent Quality",
    description: "Many clients have been returning for years because of the reliable service and excellent results.",
    icon: Clock
  },
  {
    title: "Affordable & Professional",
    description: "Quality haircuts without unnecessary complexity.",
    icon: BadgeCheck
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground font-sans text-lg">
            We believe in doing one thing and doing it perfectly. No pretension, just great haircuts in a place you can call your own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 rounded-none bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
