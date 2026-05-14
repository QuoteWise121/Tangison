'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Anchor } from 'lucide-react';
import { TangisonLogo } from '@/components/logo';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-skeleton-bone">About Tangison</h1>
        <p className="font-sans text-fog-gray text-lg md:text-xl max-w-2xl font-light">
          Operating from the Atlantic coast of Africa, we build digital infrastructure designed to withstand harsh environments and unpredictable conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <div className="prose prose-invert prose-lg font-sans text-fog-gray/80 leading-relaxed font-light">
          <p>
            Tangison was founded on a singular observation: the global software ecosystem assumes idealized conditions. High-bandwidth, low-latency, and uninterrupted power are not global realities. When systems built for these conditions are deployed in volatile environments, they break.
          </p>
          <p>
            We take a different approach. Inspired by the resilience of structures along the Skeleton Coast—where the Atlantic Ocean meets the Namib Desert—we engineer systems designed from the ground up to endure.
          </p>
          <p>
            We believe that African enterprise requires sovereign intelligence infrastructure. Data generated on the continent must be processed, analyzed, and stored locally to ensure true autonomy and security.
          </p>
        </div>
        
        <div className="bg-[#1C1E22] border border-white/5 p-12">
           <TangisonLogo className="w-24 h-24 text-rust-signal mb-12" />
           <div className="font-mono text-xs text-white/50 space-y-6 tracking-widest uppercase">
             <div>
               <div className="text-rust-signal mb-1">Location</div>
               WINDHOEK, NAMIBIA
             </div>
             <div>
               <div className="text-rust-signal mb-1">Focus</div>
               SOVEREIGN AI & INFRASTRUCTURE
             </div>
             <div>
               <div className="text-rust-signal mb-1">Philosophy</div>
               MINIMAL FORCE. REDUNDANCY.
             </div>
           </div>
        </div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto py-16 border-t border-white/10">
        <h2 className="font-display text-3xl md:text-4xl mb-8 text-skeleton-bone">Partner with Tangison</h2>
        <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-black rounded-sm">
          Initiate Contact <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
