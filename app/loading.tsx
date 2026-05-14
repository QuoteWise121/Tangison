'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center">
        <div className="relative w-16 h-16 mb-8">
          {/* Inner pulsating box */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-rust-signal/20 border border-rust-signal"
          />
          {/* Outer rotating borders */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -inset-2 border border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute -inset-4 border border-white/5"
          />
        </div>
        
        <div className="font-mono text-xs text-rust-signal uppercase tracking-[0.2em] animate-pulse">
          Establishing Secure Link...
        </div>
      </div>
    </div>
  );
}
