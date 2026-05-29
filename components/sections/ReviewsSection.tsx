'use client'

import { motion } from 'framer-motion'
import { REVIEWS } from '@/lib/constants'
import { staggerContainerVariants, fadeInVariants } from '@/lib/animations'

export function ReviewsSection() {
  return (
    <section className="py-20 bg-canvas-blush">
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
            Love from Our Clients
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInVariants}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent-rose text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-serif font-bold text-gray-900">
                  {review.name}
                </p>
                <p className="text-sm text-accent-rose">
                  {review.sessionType}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
