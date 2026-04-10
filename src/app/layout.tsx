'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import BlobCursor from './components/shared/blob-cursor' // <-- Imported here
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'

// 1. Configure the Luxury Heading Font
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif', // We will tell Tailwind to look for this
  display: 'swap',
})

// 2. Configure the Crisp UI/Number Font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans', // We will tell Tailwind to look for this
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 3. Inject the font variables into the HTML tag
    <html lang='en' suppressHydrationWarning className={`${cormorant.variable} ${jakarta.variable}`}>
      
      {/* 4. Apply the default sans-serif font and brand colors to the body */}
      <body className="font-sans antialiased text-brand-body bg-brand-bg">
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          
          {/* Global Custom Cursor */}
          <BlobCursor />

          {/* ---------------------Header Starts-----------------  */}
          <Header />
          {/* ---------------------Header Ends-------------------  */}
          
          {children}
          
          {/* ---------------------Footer Starts-----------------  */}
          <Footer />
          {/* ---------------------Footer Ends-----------------  */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}