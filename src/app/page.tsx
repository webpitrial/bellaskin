'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from "./components/shared/loader"
import HeroSection from "./components/home/hero"
import AboutSection from "./components/home/about"
import Faq from "./components/home/faq"
import ServicesSection from './components/home/services'
import WhyChooseUsSection from './components/home/whychooseus'
import TestimonialsSection from './components/home/testimonials'

// Import the BlobCursor globally
import BlobCursor from './components/shared/blob-cursor'

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  // ONLY lock the scroll here. We will unlock it after the animation ends.
  useEffect(() => {
    // Force scroll to top on reload so the user doesn't start halfway down the page
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    // Cleanup function just in case the component unmounts unexpectedly
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      
      {/* GLOBAL BLOB CURSOR */}
      {/* Sitting at -z-10, it will track everywhere but hide behind solid sections like the footer */}
      <BlobCursor />

      {/* onExitComplete ensures the scrollbar only appears AFTER the 
        preloader has completely slid off the screen, preventing the "jump". 
      */}
      <AnimatePresence 
        mode="wait" 
        onExitComplete={() => {
          document.body.style.overflow = ''; // Unlocks scroll exactly when safe
        }}
      >
        {!isPreloaderDone && (
          <Preloader key="preloader" setPreloaderDone={setIsPreloaderDone} />
        )}
      </AnimatePresence>

      {/* Hero Entrance Gate */}
      <div className={isPreloaderDone ? "opacity-100 transition-opacity duration-500" : "opacity-0"}>
        <HeroSection isPreloaderDone={isPreloaderDone} />
      </div>

      {isPreloaderDone && (
        <>
          {/* Other sections only render/animate once hero is ready */}
          <AboutSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <Faq />
        </>
      )}
    </main>
  );
}