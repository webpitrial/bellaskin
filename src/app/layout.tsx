import './globals'
import Providers from './providers'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata } from 'next'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bella Skin Studio — Aesthetic Clinic Website Concept',
  description: 'A modern, editorial-minimal website concept for aesthetic and dermatology clinics.',
  metadataBase: new URL('https://bellaskin.webpaitech.com'),
  openGraph: {
    title: 'Bella Skin Studio — Aesthetic Clinic Website Concept',
    description: 'A modern, editorial-minimal website concept for aesthetic and dermatology clinics.',
    url: 'https://bellaskin.webpaitech.com',
    siteName: 'Webpai Tech',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bella Skin Studio — Aesthetic Clinic Website Concept',
    description: 'A modern, editorial-minimal website concept for aesthetic and dermatology clinics.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased text-brand-body bg-brand-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}