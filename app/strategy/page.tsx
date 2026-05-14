'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function StrategyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-skeleton-bone">Strategic Intelligence</h1>
          <p className="font-sans text-fog-gray text-lg max-w-2xl font-light">
            We synthesize unstructured data into clear operational directives. Moving beyond generic dashboards to deliver raw, actionable signal to decision-makers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="bg-[#1C1E22] border border-white/5 p-12 lg:p-16 hover:border-rust-signal/30 transition-colors">
          <div className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-6">01. Algorithmic Auditing</div>
          <h3 className="font-display text-3xl md:text-4xl mb-6">Finding the Signal</h3>
          <p className="font-sans text-fog-gray/80 text-lg leading-relaxed">
            We identify operational inefficiencies and high-yield automation vectors within legacy data structures. Our audits cut through organizational noise to find areas where machine intelligence can act as a multiplier.
          </p>
        </div>
        <div className="bg-[#1C1E22] border border-white/5 p-12 lg:p-16 hover:border-rust-signal/30 transition-colors">
          <div className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-6">02. Framework Design</div>
          <h3 className="font-display text-3xl md:text-4xl mb-6">Executive Mental Models</h3>
          <p className="font-sans text-fog-gray/80 text-lg leading-relaxed">
            Customized mental models for executives to navigate the AI vendor landscape without capital wastage. We build the decision frameworks that let leaders separate technological reality from hype constraints.
          </p>
        </div>
      </div>
      
      <div className="bg-deep-ocean border border-white/5 p-16 md:p-24 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl mb-8 text-skeleton-bone">Ready to align your operations?</h2>
        <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
          Initiate Audit <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
