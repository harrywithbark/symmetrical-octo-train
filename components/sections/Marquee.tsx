'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Marquee() {
  const marqueeImages = Array.from({ length: 6 }, (_, i) => `/images/marquee-${i + 1}.png`)

  return (
    <section className="py-12 bg-canvas-white overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-4 w-max"
        >
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div key={index} className="relative w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="Portfolio"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-4 w-max"
        >
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div key={index} className="relative w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="Portfolio"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
