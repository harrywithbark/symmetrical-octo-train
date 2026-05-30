import { useState } from 'react'
import { IntroSplash } from '@/components/sections/IntroSplash'
import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { Marquee } from '@/components/sections/Marquee'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { StudioStory } from '@/components/sections/StudioStory'
import { ContactForm } from '@/components/sections/ContactForm'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { Footer } from '@/components/sections/Footer'

function App() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <IntroSplash onComplete={() => setShowContent(true)} />
      {showContent && (
        <main className="w-full overflow-hidden">
          <Navigation />
          <HeroSection />
          <TrustBar />
          <ServicesGrid />
          <PortfolioGrid />
          <Marquee />
          <ReviewsSection />
          <StudioStory />
          <ContactForm />
          <GoogleMap />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
