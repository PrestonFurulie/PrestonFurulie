'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * IsometricGameWrapper - Loads CyberWorld MMO directly
 * Integrated directly into the website, no external links
 */
export default function IsometricGameWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current || iframeRef.current) return;

    // Create iframe to load CyberWorld game
    const iframe = document.createElement('iframe');
    iframe.src = '/cyberworld/game.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.background = '#000000';
    iframe.allow = 'gamepad; fullscreen';
    iframe.allowFullscreen = true;
    
    containerRef.current.appendChild(iframe);
    iframeRef.current = iframe;

    // Handle iframe load
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };
    
    iframe.addEventListener('load', handleLoad);
    const gameLoadTimeout = setTimeout(() => setIsLoading(false), 10000);

    return () => {
      clearTimeout(gameLoadTimeout);
      iframe.removeEventListener('load', handleLoad);
      if (iframeRef.current && containerRef.current) {
        containerRef.current.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-black relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-4xl text-[#00f3ff] mb-4 font-mono" style={{ textShadow: '0 0 20px rgba(0,243,255,0.8)' }}>
              💾 CYBERWORLD MMO
            </div>
            <div className="text-lg text-[#00ff41] font-mono animate-pulse">
              Loading game...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
