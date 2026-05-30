import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CONTACT_INFO } from '@/lib/constants'
import { staggerContainerVariants, fadeInVariants } from '@/lib/animations'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  sessionType: z.string().min(1, 'Please select a session type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

async function submitContactForm(formData: ContactFormData) {
  console.log('Form submission received:', formData)
  return { success: true, message: "Thank you! We'll be in touch soon." }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await submitContactForm(data)
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message,
      })
      if (result.success) {
        reset()
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-canvas-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ready to Create Magic?
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us to book your photography session
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Have questions? We'd love to hear from you. Reach out through any of these channels or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-serif font-bold text-accent-rose uppercase tracking-wide mb-2">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/ninhstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-accent-rose transition-colors flex items-center gap-2"
                >
                  {CONTACT_INFO.instagram} <span>↗</span>
                </a>
              </div>

              <div>
                <p className="text-sm font-serif font-bold text-accent-rose uppercase tracking-wide mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-900 hover:text-accent-rose transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div>
                <p className="text-sm font-serif font-bold text-accent-rose uppercase tracking-wide mb-2">
                  Studio Location
                </p>
                <p className="text-gray-900">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-serif font-bold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-accent-rose focus:border-transparent'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-serif font-bold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-accent-rose focus:border-transparent'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="sessionType" className="block text-sm font-serif font-bold text-gray-900 mb-2">
                  Session Type
                </label>
                <select
                  id="sessionType"
                  {...register('sessionType')}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
                    errors.sessionType
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-accent-rose focus:border-transparent'
                  }`}
                >
                  <option value="">Select a session type</option>
                  <option value="fashion">Fashion & Modeling</option>
                  <option value="portraits">Portraits & Headshots</option>
                  <option value="maternity">Maternity & Family</option>
                  <option value="other">Other</option>
                </select>
                {errors.sessionType && (
                  <p className="text-red-500 text-sm mt-1">{errors.sessionType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-serif font-bold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-accent-rose focus:border-transparent'
                  }`}
                  placeholder="Tell us about your vision..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-rose text-white font-serif rounded-full hover:bg-accent-rose/90 disabled:bg-gray-400 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Enquiry →'
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
