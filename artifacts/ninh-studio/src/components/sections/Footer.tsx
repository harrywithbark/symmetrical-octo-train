import { motion } from 'framer-motion'
import { STUDIO_NAME, CONTACT_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-rose text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-[family-name:var(--font-script)] mb-2">Ninh</h3>
            <p className="text-white/80 text-sm uppercase tracking-widest">Studio</p>
            <p className="text-white/60 text-sm mt-2">Premium photography in East Vancouver</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  Instagram <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 pt-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>© {currentYear} {STUDIO_NAME}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Crafted with creativity in East Vancouver</p>
        </div>
      </div>
    </footer>
  )
}
