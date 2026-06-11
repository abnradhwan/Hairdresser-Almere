import { Star } from "lucide-react";

const reviews = [
  {
    text: "I've been a regular customer for three years and it's always great. Always a perfect cut, a great atmosphere, and excellent service.",
    author: "Regular Client"
  },
  {
    text: "Perfect!",
    author: "Happy Customer"
  },
  {
    text: "Super friendly hairdresser and highly skilled in the profession.",
    author: "Local Resident"
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Word on the Street</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card p-8 border border-border">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-foreground mb-6 line-clamp-4">
                "{review.text}"
              </p>
              <div className="text-muted-foreground font-sans text-sm uppercase tracking-wider">
                — {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
