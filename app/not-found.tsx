'use client';

import { motion } from 'motion/react';
import { Anchor, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black to-deep-ocean/50 opacity-50" />
      
      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Anchor className="w-16 h-16 text-rust-signal mx-auto mb-8 opacity-50" />
          <h1 className="font-display text-7xl md:text-9xl font-black text-skeleton-bone tracking-tighter mb-4">
            404
          </h1>
          <div className="h-[1px] w-24 bg-rust-signal mx-auto mb-8" />
          <h2 className="font-display text-2xl md:text-3xl text-fog-gray mb-6 tracking-tight">
            Signal Lost. Protocol Not Found.
          </h2>
          <p className="font-mono text-xs text-fog-gray/60 uppercase tracking-widest leading-relaxed mb-12">
            The infrastructure you are looking for does not exist or has been relocated.
            <br />
            Verify your coordinates.
          </p>
          
          <a href="/" className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">
            <ArrowLeft className="w-4 h-4" /> Return to Base
          </a>
        </motion.div>
      </div>
    </div>
  );
}
