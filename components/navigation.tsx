'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { TangisonWordmark } from './logo';

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center"
      aria-label="Main navigation"
    >
      <a href="/" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm" aria-label="Tangison Home">
        <TangisonWordmark className="text-xl" />
      </a>
      
      <div className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-widest text-white/70">
        <a href="/strategy" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm px-1">Strategy</a>
        <a href="/systems" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm px-1">Systems</a>
        <a href="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm px-1">About</a>
        <a href="/contact" className="hover:text-rust-signal transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm px-1">
          Contact <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>

      <button className="md:hidden text-white flex flex-col justify-center gap-[5px] w-8 h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm p-1" aria-label="Toggle mobile menu" aria-expanded="false">
        <div className="w-6 h-[2px] bg-white rounded-full transition-transform"></div>
        <div className="w-6 h-[2px] bg-white rounded-full transition-transform"></div>
      </button>
    </motion.nav>
  );
};
