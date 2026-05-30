import { motion } from 'framer-motion'
import { staggerContainerVariants, fadeInVariants } from '@/lib/animations'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio-hero.png"
          alt="Ninh Studio - Premium Photography Studio"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInVariants}>
            <p className="text-accent-rose text-sm uppercase tracking-[0.2em] font-medium mb-6">
              — East Vancouver's Creative Photography Studio
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInVariants}>
            <h1 className="sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 text-[71px] font-normal text-center">
              Your Story
              <br />
              Deserves to Be
              <br />
              <span className="underline decoration-accent-rose decoration-4 underline-offset-4">Seen.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInVariants}>
            <p className="text-white/70 text-sm uppercase tracking-[0.15em] mb-4">
              Events &amp; Parties
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeInVariants} className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Capturing timeless, high-quality images with a modern, artistic touch
            <br className="hidden sm:block" />
            — right here on Joyce Street in East Van.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-accent-rose text-white font-serif font-semibold rounded-lg hover:bg-accent-rose/90 transition-all transform hover:scale-105 active:scale-95"
            >
              Book a Session
            </button>
            <button
              onClick={() => scrollToSection('studio')}
              className="px-8 py-4 border-2 border-white/50 text-white font-serif font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Rent the Studio
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom trust bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-rose text-sm">★</span>
                ))}
              </div>
              <span className="font-medium">Google Rated</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.367 2.184a1.125 1.125 0 001.006 0l4.625-2.281" />
              </svg>
              <span>Joyce-Collingwood SkyTrain</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5a1.125 1.125 0 001.125-1.125V14.25m-7.5-10.5V3.375c0-.621-.504-1.125-1.125-1.125H2.625c-.621 0-1.125.504-1.125 1.125v3.375" />
              </svg>
              <span>Free Parking</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <span>Natural Light Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
