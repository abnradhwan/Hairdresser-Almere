import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-primary-foreground">Book Your Appointment Today</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl font-sans font-light mb-12 text-primary-foreground/80">
              Call now and schedule your appointment with Diyar Kapper. We're ready when you are.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                  <p className="font-sans text-primary-foreground/70">
                    Diyar Kapper<br />
                    Markerkant 12, 6 22<br />
                    1314 AK Almere
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="font-sans text-primary-foreground/70">
                    06 15204855
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Hours</h4>
                  <p className="font-sans text-primary-foreground/70">
                    Monday – Saturday<br />
                    10:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] bg-muted relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2436.565983792376!2d5.2155!3d52.3795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c617b0b6016c51%3A0xc33e215f7f2b186b!2sMarkerkant%2012%206%2022%2C%201314%20AK%20Almere%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Diyar Kapper Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
