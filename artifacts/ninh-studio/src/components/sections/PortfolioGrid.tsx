import { motion } from 'framer-motion'
import { PORTFOLIO_IMAGES } from '@/lib/constants'
import { staggerContainerVariants } from '@/lib/animations'

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 bg-canvas-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            A Glimpse of the Magic
          </h2>
          <p className="text-lg text-gray-600">
            Explore our recent work and photography sessions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={`/images/portfolio-${image.id}.png`}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <h3 className="text-white font-serif text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com/ninhstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-rose text-white font-serif rounded-full hover:bg-accent-rose/90 transition-all transform hover:scale-105"
          >
            Follow on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
