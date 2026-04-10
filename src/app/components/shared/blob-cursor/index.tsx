'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlobCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    // GSAP handles the centering natively
    gsap.set(blob, { 
      xPercent: -50, 
      yPercent: -50, 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    });

    // Kept at 0.25 for that snappy, smooth performance
    const xTo = gsap.quickTo(blob, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(blob, 'y', { duration: 0.25, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        ref={blobRef}
        // CHANGED: opacity-40 is now opacity-[0.45] to increase visibility by exactly 5%
        className="absolute top-0 left-0 w-[400px] lg:w-[600px] aspect-square rounded-full mix-blend-multiply opacity-[0.45]"
        style={{
          background: 'radial-gradient(circle, rgba(203, 183, 158, 0.8) 0%, rgba(203, 183, 158, 0.3) 40%, transparent 70%)',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}