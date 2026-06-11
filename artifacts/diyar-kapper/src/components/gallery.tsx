import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

export function Gallery() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative aspect-[4/5] overflow-hidden">
            <img 
              src={gallery1} 
              alt="Vintage barber tools" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-700" />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden md:-translate-y-8">
            <img 
              src={gallery2} 
              alt="Barber at work" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-700" />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden">
            <img 
              src={gallery3} 
              alt="Classic barber chair" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
