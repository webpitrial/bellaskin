'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '15k+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Specialists' },
  { value: '99%', label: 'Satisfaction Rate' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const textToReveal = "Bella Skin combines expert care with advanced treatments to enhance your skin's health and beauty. Our board-certified team is dedicated to helping you achieve glowing, confident skin.";
const words = textToReveal.split(" ");

// --- 2x Faster Stepped Animation Logic ---
// Total loop duration is 10 seconds.
// Movement happens in 0.5s bursts (5% of 10s), followed by a 2s pause (20% of 10s).
const starKeyframes = [0, 90, 90, 180, 180, 270, 270, 360, 360];
const starTimes = [
  0,      // Start at 0deg
  0.05,   // Rotate to 90deg quickly (0.5s)
  0.25,   // Pause at 90deg for 2s
  0.30,   // Rotate to 180deg quickly (0.5s)
  0.50,   // Pause at 180deg for 2s
  0.55,   // Rotate to 270deg quickly (0.5s)
  0.75,   // Pause at 270deg for 2s
  0.80,   // Rotate to 360deg quickly (0.5s)
  1       // Pause at 360deg for 2s before loop restarts
];

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export default function AboutSection() {
  const textRef = useRef<HTMLHeadingElement>(null);

  // Finishes exactly when the middle of the text reaches the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "center 50%"]
  });

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#CBB79E] py-24 overflow-hidden">
      
      {/* --- RESPONSIVE STEPPED ROTATION STARS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Star */}
        <motion.div 
          animate={{ rotate: starKeyframes }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", times: starTimes }}
          style={{ willChange: "transform" }}
          className="absolute top-[5%] sm:top-[10%] lg:top-[15%] left-[2%] sm:left-[5%] lg:left-[10%] opacity-30"
        >
          <Image src="/images/home/Star.png" alt="Star graphic" width={64} height={64} className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
        </motion.div>
        
        {/* Bottom Right Star */}
        <motion.div 
          animate={{ rotate: starKeyframes }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", times: starTimes, delay: 0.5 }}
          style={{ willChange: "transform" }}
          className="absolute bottom-[5%] sm:bottom-[10%] lg:bottom-[15%] right-[2%] sm:right-[5%] lg:right-[10%] opacity-30"
        >
          <Image src="/images/home/Star.png" alt="Star graphic" width={96} height={96} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
        </motion.div>
        
        {/* Top Right Star */}
        <motion.div 
          animate={{ rotate: starKeyframes }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", times: starTimes, delay: 1 }}
          style={{ willChange: "transform" }}
          className="absolute top-[18%] sm:top-[22%] lg:top-[25%] right-[5%] sm:right-[10%] lg:right-[15%] opacity-20"
        >
          <Image src="/images/home/Star.png" alt="Star graphic" width={32} height={32} className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </motion.div>
        
        {/* Bottom Left Star */}
        <motion.div 
          animate={{ rotate: starKeyframes }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", times: starTimes, delay: 1.5 }}
          style={{ willChange: "transform" }}
          className="absolute bottom-[18%] sm:bottom-[22%] lg:bottom-[25%] left-[5%] sm:left-[10%] lg:left-[15%] opacity-20"
        >
          <Image src="/images/home/Star.png" alt="Star graphic" width={40} height={40} className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </motion.div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-5 sm:px-7 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow Label */}
        <motion.div 
          variants={fadeUp}
          className="flex items-center gap-2 mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80">
              About Us
            </span>
          </div>
        </motion.div>

        {/* --- SCROLL HIGHLIGHT TYPOGRAPHY --- */}
        <h2 
          ref={textRef} 
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-serif text-[#141414] leading-[1.15] md:leading-[1.1] mb-10 md:mb-14 max-w-4xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            return (
              <React.Fragment key={i}>
                <Word progress={scrollYProgress} range={[start, end]}>{word}</Word>
                {i < words.length - 1 && " "}
              </React.Fragment>
            )
          })}
        </h2>

        {/* Buttons */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-28 w-full sm:w-auto"
        >
          <Link href="/about" className="group px-8 py-3.5 w-full sm:w-auto shadow-sm text-sm rounded-full bg-[#141414] text-[#CBB79E] hover:bg-[#141414]/90 transition-colors font-medium">
            Learn More
          </Link>
          <Link href="/services" className="flex items-center justify-center px-8 py-3.5 w-full sm:w-auto rounded-full border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#CBB79E] transition-colors font-medium uppercase tracking-wide text-sm">
            Our Services
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-12 md:pt-16 border-t border-[#141414]/10"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center gap-1 md:gap-2 relative"
            >
              <span 
                className="text-4xl md:text-5xl text-[#141414] leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#141414]/60 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}