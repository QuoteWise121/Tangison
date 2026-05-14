'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, Shield, Terminal, Database, Radio, Anchor, Hexagon } from 'lucide-react';
import { TangisonLogo } from '@/components/logo';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden bg-atlantic-black">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image 
              src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=2078&auto=format&fit=crop" 
              alt="Skeleton Coast Fog covering the sand dunes and ocean" 
              fill
              referrerPolicy="no-referrer"
              className="object-cover cinematic-image opacity-30"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" />
            <span className="font-mono text-xs text-fog-gray uppercase tracking-widest">Sovereign Infrastructure</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-skeleton-bone mb-8"
          >
            Digital Sovereignty <br className="hidden md:block"/>
            Forged in Iron.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 max-w-3xl"
          >
            <p className="text-fog-gray font-sans text-lg md:text-xl leading-relaxed font-light">
              We engineer mission-critical systems and localized AI infrastructure designed for resilience across the African continent and beyond. True autonomy operates where the cloud breaks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a href="/contact" className="min-h-[44px] min-w-[44px] bg-skeleton-bone text-atlantic-black px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-fog-gray transition-colors flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">
              Initiate Engagement <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </a>
            <a href="/brand" className="min-h-[44px] min-w-[44px] border border-white/20 text-skeleton-bone px-8 py-5 font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">
              System Capabilities
            </a>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[10px] text-white/50 tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-4 bg-white/60 absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* BENTO GRID SYSTEMS */}
      <section className="py-32 md:py-48 px-4 md:px-12 bg-atlantic-black">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">Core Architecture</h2>
              <p className="font-mono text-sm text-fog-gray/60 uppercase tracking-widest max-w-md">
                Operational capabilities spanning data sovereignty, signal analysis, and resilient infrastructure.
              </p>
            </div>
            <a href="/systems" className="font-mono text-xs tracking-widest uppercase text-rust-signal border-b border-rust-signal/30 pb-1 hover:border-rust-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm p-1 inline-flex min-h-[44px] items-center">
              View All Systems →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-min md:auto-rows-[300px] gap-4 grid-flow-dense">
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#162024] border border-white/5 min-h-[300px]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                fill
                referrerPolicy="no-referrer"
                className="object-cover cinematic-image opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000"
                alt="A large rack of data servers showcasing infrastructure"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                <Shield className="w-8 h-8 text-rust-signal mb-6" />
                <h3 className="font-display text-3xl mb-4">Sovereign Data Facilities</h3>
                <p className="font-sans text-fog-gray text-base max-w-md leading-relaxed">Physical and digital fortresses protecting institutional intelligence within African borders. Immutable, secure, and isolated from external volatility.</p>
              </div>
              <div className="absolute top-6 right-6 font-mono text-[10px] text-white/30">[ CAPABILITY_01 ]</div>
            </motion.div>

            <motion.div className="bg-[#0A0B0C] border border-white/10 p-8 flex flex-col justify-between font-mono relative overflow-hidden group hover:border-rust-signal/30 transition-colors">
              <div className="text-rust-signal text-xs mb-4 flex justify-between">
                <span>SYS.STATUS</span>
                <span>[ ONLINE ]</span>
              </div>
              <div className="space-y-2 text-xs text-green-500/60 mb-auto">
                <p>{">"} INITIALIZING PROTOCOL...</p>
                <p>{">"} CONNECTING NODES: 428</p>
                <p>{">"} ENCRYPTION: MIL-SPEC</p>
                <p className="animate-pulse">{">"} _</p>
              </div>
              <h3 className="font-display text-2xl text-white mt-8 tracking-tight">Signal Routing</h3>
            </motion.div>

            <motion.div className="bg-[#1C1E22] border border-white/5 p-8 flex flex-col justify-center hover:bg-[#202226] transition-colors min-h-[250px]">
              <Hexagon className="w-8 h-8 text-fog-gray/40 mb-6" aria-hidden="true" />
              <h3 className="font-display text-2xl mb-3 tracking-tight">On-Premise AI Deployment</h3>
              <p className="font-sans text-sm text-fog-gray/70 leading-relaxed">Localizing state-of-the-art models inside disconnected, physical enclaves. Protect proprietary assets far from shared cloud risks.</p>
            </motion.div>

            <motion.div className="bg-atlantic-black border border-white/10 p-8 flex flex-col justify-between hover:bg-[#15171a] transition-colors min-h-[250px]">
              <div className="text-5xl font-display font-bold text-skeleton-bone tracking-tighter">99.99<span className="text-rust-signal">%</span></div>
              <div>
                <div className="h-[1px] w-full bg-white/10 mb-4" />
                <div className="font-mono text-xs text-fog-gray/60 uppercase tracking-widest leading-relaxed">Sub-Saharan<br/>Operational Standard</div>
              </div>
            </motion.div>

            <motion.div className="md:col-span-2 relative overflow-hidden bg-deep-ocean border border-white/5 group min-h-[300px]">
               <Image 
                src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop" 
                fill
                referrerPolicy="no-referrer"
                className="object-cover cinematic-image opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                alt="Close-up of harsh basalt rock formations on the ocean coast"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center z-10 max-w-sm">
                <h3 className="font-display text-3xl mb-4 tracking-tight">Resilient Platforms</h3>
                <p className="font-sans text-sm text-fog-gray/80 leading-relaxed">Systems designed to function when primary networks fail. Built for the reality of the continent.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY / NARRATIVE */}
      <section className="relative py-32 md:py-48 px-4 md:px-12 bg-[#0A0B0C] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="w-12 h-[2px] bg-rust-signal mb-8" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8">
                Survival requires structure.
              </h2>
              <p className="font-sans text-fog-gray text-lg mb-10 font-light leading-relaxed">
                We look to the Skeleton Coast. Where ships break, the structures that remain are built differently. Tangison applies this philosophy to digital infrastructure.
              </p>
              <div className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] space-y-4">
                <div className="flex items-center gap-4"><span className="text-rust-signal">01</span> Minimal Force</div>
                <div className="flex items-center gap-4"><span className="text-rust-signal">02</span> Redundant Systems</div>
                <div className="flex items-center gap-4"><span className="text-rust-signal">03</span> Absolute Sovereignty</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              className="bg-atlantic-black border border-white/5 p-8 md:p-16 hover:border-white/10 transition-colors"
            >
              <Terminal className="w-10 h-10 text-rust-signal mb-8" />
              <h3 className="font-display text-3xl mb-6">Strategic Intelligence</h3>
              <p className="font-sans text-fog-gray/80 text-lg leading-relaxed">
                We synthesize unstructured data into clear operational directives. Moving beyond generic dashboards to deliver raw, actionable signal to decision-makers.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              className="bg-atlantic-black border border-white/5 p-8 md:p-16 hover:border-white/10 transition-colors"
            >
              <Database className="w-10 h-10 text-rust-signal mb-8" />
              <h3 className="font-display text-3xl mb-6">Data Autonomy</h3>
              <p className="font-sans text-fog-gray/80 text-lg leading-relaxed">
                African data must reside on African infrastructure. We design closed-loop systems that protect institutional memory from offshore extraction and disruption.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              className="bg-deep-ocean/50 border border-deep-ocean p-8 md:p-16 relative overflow-hidden group hover:bg-deep-ocean transition-colors"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="relative z-10">
                <Radio className="w-10 h-10 text-skeleton-bone mb-8" />
                <h3 className="font-display text-3xl mb-6 text-skeleton-bone">Signal Architecture</h3>
                <p className="font-sans text-fog-gray/90 text-lg leading-relaxed">
                  Low-bandwidth, high-reliability communication arrays for disparate operations. Ensuring the signal cuts through the noise, regardless of the environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="py-48 px-6 md:px-12 bg-atlantic-black flex items-center justify-center min-h-[80vh] border-y border-white/5 relative overflow-hidden">
        {/* Subtle radial gradient behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rust-signal/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-200px" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-skeleton-bone"
          >
            <span className="text-fog-gray/40 block mb-8 font-serif italic text-3xl md:text-5xl font-light tracking-normal">Clarity under pressure.</span>
            Resilience is not a feature.<br/>
            It is the infrastructure.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 flex justify-center"
          >
             <TangisonLogo className="w-32 h-32 md:w-48 md:h-48 text-rust-signal" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden bg-deep-ocean">
        <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black to-deep-ocean/80 opacity-100" />
        <div className="absolute -right-64 -top-64 w-[1000px] h-[1000px] border-[1px] border-white/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            Build systems <br/> that endure.
          </h2>
          <p className="font-sans text-fog-gray text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Engage Tangison for strategic infrastructure planning, digital sovereignty audits, or custom system architecture.
          </p>
          
          <a href="/contact" className="min-h-[44px] min-w-[44px] bg-skeleton-bone text-atlantic-black px-12 py-6 font-mono text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 max-w-sm mx-auto group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">
            Engage Engineering Unit 
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </a>

          <div className="mt-24 flex items-center justify-center gap-4 font-mono text-xs text-white/40 tracking-[0.2em]">
            <Anchor className="w-4 h-4" />
            <span>HQ: WINDHOEK, NAMIBIA</span>
          </div>
        </div>
      </section>
    </div>
  );
}
