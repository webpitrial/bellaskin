'use client'
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // Cleaned up classes to ensure no purple backgrounds remain
      className={`fixed bottom-8 right-8 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-brand-bg shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-brand-sage-hover hover:-translate-y-2 group ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-6 invisible pointer-events-none'
      }`}
    >
      {/* Modern Long Arrow Icon with a slight slide-up animation on hover */}
      <Icon 
        icon="ph:arrow-up-light" 
        width="24" 
        height="24" 
        className="transform transition-transform duration-300"
      />
    </button>
  );
}