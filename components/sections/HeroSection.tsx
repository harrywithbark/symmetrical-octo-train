'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { textRevealVariants, staggerContainerVariants, kenBurnsVariants, clipPathRevealVariants } from '@/lib/animations'

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
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-canvas-blush via-canvas-white to-canvas-ivory"
    >
      {/* Background Ken Burns Effect */}
      <motion.div
        variants={kenBurnsVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-portrait.png"
          alt="Ninh Studio - Premium Photography"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-canvas-blush/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Column */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center space-y-6"
            >
              {/* Eyebrow */}
              <motion.div variants={textRevealVariants}>
                <p className="text-sm font-serif tracking-widest text-accent-rose uppercase">
                  East Vancouver · Photography Studio
                </p>
              </motion.div>

              {/* Headline with Clip Path Reveal */}
              <motion.div variants={clipPathRevealVariants}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight text-gray-900">
                  Timeless
                  <br />
                  Moments
                  <br />
                  Captured
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p variants={textRevealVariants} className="text-lg text-gray-600 max-w-md">
                Professional photography sessions that celebrate your unique story. From fashion to family, we capture the essence of every moment.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={textRevealVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-accent-rose text-white font-serif rounded-full hover:bg-accent-rose/90 transition-all transform hover:scale-105 active:scale-95"
                >
                  Book a Session →
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-serif rounded-full hover:bg-gray-50 transition-all"
                >
                  View Our Work
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Badge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative h-full"
            >
              {/* Review Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-20 right-10 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-rose text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-serif text-gray-900">Loved it!</p>
                    <p className="text-xs text-gray-600">5.0 Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-accent-rose">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
