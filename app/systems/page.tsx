'use client';

import { motion } from 'motion/react';
import { Shield, Hexagon, Database, Radio, ArrowUpRight } from 'lucide-react';

export default function SystemsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-24">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-skeleton-bone">Architecture & Systems</h1>
        <p className="font-sans text-fog-gray text-lg md:text-xl max-w-2xl font-light">
          Operational capabilities spanning data sovereignty, signal analysis, and resilient infrastructure. Built to outlast the storm.
        </p>
      </div>

      <div className="space-y-8 mb-32">
        <div className="bg-[#0A0B0C] border border-white/10 p-12 md:p-16 flex flex-col md:flex-row gap-12 group hover:border-white/20 transition-colors">
          <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-white/5 rounded-none border border-white/10 group-hover:border-rust-signal/50 transition-colors">
            <Shield className="w-8 h-8 text-rust-signal" />
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-4 text-skeleton-bone">Sovereign Data Facilities</h3>
            <p className="font-sans text-fog-gray/80 text-lg leading-relaxed max-w-4xl">
              Physical and digital fortresses protecting institutional intelligence within African borders. We design Immutable, secure protocols that isolate sensitive operational data from external volatility and offshore extraction.
            </p>
          </div>
        </div>

        <div className="bg-[#0A0B0C] border border-white/10 p-12 md:p-16 flex flex-col md:flex-row gap-12 group hover:border-white/20 transition-colors">
          <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-white/5 rounded-none border border-white/10 group-hover:border-rust-signal/50 transition-colors">
            <Hexagon className="w-8 h-8 text-rust-signal" />
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-4 text-skeleton-bone">AI Infrastructure</h3>
            <p className="font-sans text-fog-gray/80 text-lg leading-relaxed max-w-4xl">
              Deploying localized models trained on regional context, bypassing offshore dependencies. We construct the hardware logic and inference APIs necessary to run sovereign intelligence workloads locally.
            </p>
          </div>
        </div>

        <div className="bg-[#0A0B0C] border border-white/10 p-12 md:p-16 flex flex-col md:flex-row gap-12 group hover:border-white/20 transition-colors">
          <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-white/5 rounded-none border border-white/10 group-hover:border-rust-signal/50 transition-colors">
            <Radio className="w-8 h-8 text-rust-signal" />
          </div>
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-4 text-skeleton-bone">Signal Routing</h3>
            <p className="font-sans text-fog-gray/80 text-lg leading-relaxed max-w-4xl">
              Low-bandwidth, high-reliability communication arrays for disparate operations. We ensure the signal cuts through the noise, maintaining 99.99% uptime regardless of the physical limits of the environment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto py-16 border-y border-white/10">
        <h2 className="font-display text-4xl md:text-5xl mb-8 text-skeleton-bone">Ready to build resilient systems?</h2>
        <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
          Request Access <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
