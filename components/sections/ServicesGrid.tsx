'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'
import { staggerContainerVariants, fadeInVariants } from '@/lib/animations'

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-canvas-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography packages tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInVariants}
              className="group relative bg-canvas-ivory rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-accent-rose"
              />

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-accent-rose font-serif text-3xl font-bold mb-4">
                  {service.price}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-2 text-accent-rose font-serif hover:gap-3 transition-all">
                  Inquire About This Session →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
