import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Classic European barbershop interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-primary-foreground/80 font-sans tracking-widest uppercase text-sm mb-4">
            Fresh Cuts. Friendly Service. Perfect Results.
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6 leading-tight">
            Diyar Kapper
          </h1>
          <p className="text-xl text-primary-foreground/90 font-sans font-light mb-8 max-w-xl leading-relaxed">
            Looking for a reliable hairdresser in Almere? At Diyar Kapper, every haircut is delivered with attention to detail, professional craftsmanship, and a welcoming atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground border-none">
              Book Appointment
            </Button>
            <div className="text-primary-foreground/80 font-sans text-sm">
              <span className="block">Or call us:</span>
              <a href="tel:0615204855" className="text-lg font-medium hover:text-primary transition-colors">
                06 15204855
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
