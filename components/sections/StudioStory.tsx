'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideInLeftVariants, slideInRightVariants } from '@/lib/animations'

export function StudioStory() {
  return (
    <section id="story" className="py-20 bg-canvas-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="/images/studio-interior.png"
              alt="Ninh Studio Interior - 597 Sq Ft Creative Haven"
              fill
              className="object-cover"
            />
            {/* Tag Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
              <p className="font-serif font-bold text-accent-rose">
                597 Sq Ft Creative Haven
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
                Photography with Heart
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ninh Studio isn&apos;t just a space—it&apos;s a sanctuary for creativity and authenticity. Nestled in the heart of East Vancouver, our intimate studio combines professional-grade equipment with warmth and personalized attention that makes every session feel personal.
                </p>

                <p>
                  Every photograph tells a story, and we&apos;re here to help tell yours. Whether you&apos;re stepping in front of the camera for the first time or you&apos;re a seasoned model, we create an environment where you feel confident, comfortable, and celebrated.
                </p>

                <p>
                  With custom backdrops, professional lighting rigs, and thoughtfully curated music, we&apos;ve designed every detail to inspire. We believe in the power of a great photograph—not just to capture a moment, but to capture the essence of who you are.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <p className="font-serif italic text-2xl text-accent-rose">
                — Ninh
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
