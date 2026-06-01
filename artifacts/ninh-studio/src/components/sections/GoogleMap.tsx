import { STUDIO_COORDINATES, CONTACT_INFO } from '@/lib/constants'
import { MapPin, Train, Car, Mail, Instagram, Clock } from 'lucide-react'

export function GoogleMap() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.026543984584!2d${STUDIO_COORDINATES.lng}!3d${STUDIO_COORDINATES.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5483a39c3e3e3e3d%3A0x3e3e3e3e3e3e3e3e!2sEast%20Vancouver!5e0!3m2!1sen!2sca!4v1234567890`

  return (
    <section id="location" className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Location info & transit cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
                — Visit the Space
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif text-foreground font-normal leading-tight">
                Our East Van
                <br />
                Creative Studio
              </h2>
              <p className="mt-4 text-muted-foreground text-base max-w-md">
                Located in a vibrant creative hub of East Vancouver. Our natural-light studio is exceptionally accessible by both transit and car.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address card */}
              <div className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/60 hover:border-border transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-0.5">Physical Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Joyce Street, East Vancouver, BC
                  </p>
                </div>
              </div>

              {/* SkyTrain card */}
              <div className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/60 hover:border-border transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-0.5">SkyTrain Access</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Just a 3-minute walk from the **Joyce-Collingwood SkyTrain Station**. Fast, direct access from downtown.
                  </p>
                </div>
              </div>

              {/* Parking card */}
              <div className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/60 hover:border-border transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-0.5">Free Parking</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Free dedicated on-site parking stall provided for all photoshoot clients and studio rental bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact bar */}
            <div className="pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>{CONTACT_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Embedded Map framed elegantly */}
          <div className="lg:col-span-7 h-[450px] w-full relative">
            {/* Visual design frame shadows */}
            <div className="absolute inset-0 -m-3 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-3xl blur-xl opacity-60 z-0 pointer-events-none" />
            
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border shadow-xl bg-card transition-all duration-300 hover:shadow-2xl">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ninh Studio Location"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
