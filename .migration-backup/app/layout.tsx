import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4, Great_Vibes } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })
const _greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"], variable: '--font-script' })

export const metadata: Metadata = {
  title: 'Ninh Studio | Premium Photography in East Vancouver',
  description: 'Premium photography studio in East Vancouver specializing in fashion, portraits, and maternity sessions. Book your session today.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ninh Studio | Premium Photography in East Vancouver',
    description: 'Premium photography studio in East Vancouver specializing in fashion, portraits, and maternity sessions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth bg-canvas-white ${_greatVibes.variable}`}>
      <body className="font-sans antialiased bg-canvas-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
