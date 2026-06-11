export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl font-serif mb-4 tracking-wider">DIYAR KAPPER</h2>
        <p className="font-sans text-primary-foreground/60 uppercase tracking-widest text-sm mb-8">
          Looking Good Starts Here. Diyar Kapper – Almere
        </p>
        <div className="text-primary-foreground/40 font-sans text-sm">
          &copy; {new Date().getFullYear()} Diyar Kapper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
