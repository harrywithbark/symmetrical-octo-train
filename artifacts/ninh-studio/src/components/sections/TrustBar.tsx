import { motion } from 'framer-motion'
import { TRUST_ITEMS } from '@/lib/constants'

export function TrustBar() {
  return (
    <section className="w-full py-6 bg-accent-rose overflow-hidden">
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap min-w-max"
        >
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <span key={index} className="text-white font-serif text-lg tracking-wide">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
