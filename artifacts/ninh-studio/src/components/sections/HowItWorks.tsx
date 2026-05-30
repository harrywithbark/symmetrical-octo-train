import { motion } from 'framer-motion'
import { staggerContainerVariants, fadeInVariants } from '@/lib/animations'

const steps = [
  {
    number: '01',
    title: 'Book Your Session',
    description:
      'Choose your session type and date through our contact form. We will confirm within 24 hours and send a prep guide.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'The Photo Session',
    description:
      'Arrive at our East Vancouver studio. We will handle lighting, direction, and styling so you can relax and be yourself.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Your Gallery',
    description:
      'Receive professionally edited high-resolution photos within 5–7 days. Download, share, and print directly from your private gallery.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 bg-canvas-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps from booking to your final photos
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* connector line on desktop */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-accent-rose/30" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInVariants}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-rose text-white mb-6">
                {step.icon}
              </div>

              <div className="inline-block px-3 py-1 mb-4 text-sm font-serif text-accent-rose bg-accent-rose/10 rounded-full">
                Step {step.number}
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
