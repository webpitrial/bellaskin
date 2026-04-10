'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  setPreloaderDone: (val: boolean) => void;
}

export default function Preloader({ setPreloaderDone }: PreloaderProps) {
  const mainDuration = 2.4;
  const smoothEase = [0.45, 0, 0.15, 1]; 
  const logoPath = "/images/logo/Logo.png";

  // --- PREVENT SCROLL & LAYOUT SHIFT DURING PRELOADER ---
  useEffect(() => {
    // 1. Calculate the exact width of the user's scrollbar
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // 2. Lock the scroll and add padding so the page doesn't shift
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      // 3. Smoothly unlock the scroll when preloader unmounts
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100vh",
        transition: { 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1 
        } 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F2EA]"
    >
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#141414]/5">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: mainDuration, ease: smoothEase }}
          className="w-full h-full bg-[#141414] origin-left"
        />
      </div>

      <div className="relative w-32 md:w-48 max-w-[200px] aspect-[3/1] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 grayscale">
           <img 
             src={logoPath} 
             alt="Logo Background" 
             className="w-full h-auto object-contain"
           />
        </div>

        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ 
            duration: mainDuration, 
            ease: smoothEase, 
          }}
          style={{ willChange: "clip-path" }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setPreloaderDone(true);
            }, 300);
          }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <img 
             src={logoPath} 
             alt="Logo Fill" 
             className="w-full h-auto object-contain"
           />
        </motion.div>
      </div>
    </motion.div>
  )
}