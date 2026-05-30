import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '@/lib/constants'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-3xl font-[family-name:var(--font-script)] text-accent-rose"
            >
              Ninh
            </button>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-accent-rose transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-accent-rose transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-gray-700 hover:text-accent-rose transition-colors"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-accent-rose text-white rounded-full hover:bg-accent-rose/90 transition-all transform hover:scale-105"
            >
              Book a Session →
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-rose"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-rose"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-rose"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-2 bg-accent-rose text-white rounded-full"
            >
              Book a Session →
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
