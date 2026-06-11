import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-foreground tracking-wider">
            DIYAR<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
            <a href="tel:0615204855" className="text-foreground hover:text-primary transition-colors">06 15204855</a>
          </div>
        </div>
      </header>
      
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
