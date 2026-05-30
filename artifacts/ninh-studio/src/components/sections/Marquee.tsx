import { motion } from 'framer-motion'

export function Marquee() {
  const marqueeImages = Array.from({ length: 6 }, (_, i) => `/images/marquee-${i + 1}.png`)

  return (
    <section className="py-12 bg-canvas-white overflow-hidden">
      <div className="mb-8 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div key={index} className="relative w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={image} alt="Portfolio" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div key={index} className="relative w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={image} alt="Portfolio" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
