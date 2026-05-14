'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      <div className="max-w-4xl mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-rust-signal" />
          <span className="font-mono text-xs text-fog-gray uppercase tracking-widest">Client Portal</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-skeleton-bone">
          Engage Operations
        </h1>
        <p className="font-sans text-fog-gray text-lg md:text-xl font-light leading-relaxed">
          Initiate contact for strategic infrastructure planning, digital sovereignty audits, and sovereign AI deployments across the African continent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="bg-[#1C1E22] border border-white/5 p-8 md:p-12">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-24"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="font-display text-3xl text-skeleton-bone mb-4">Transmission Received</h3>
                <p className="font-mono text-xs text-fog-gray uppercase tracking-widest line-clamp-2">
                  Our engineering team will decrypt and review your request. <br/> Expect a response within 24 hours.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-12 text-rust-signal font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send another transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-xs text-fog-gray uppercase tracking-widest block">Agent / Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      disabled={formState === 'submitting'}
                      className="w-full bg-atlantic-black border border-white/10 px-4 py-3 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors font-sans disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-xs text-fog-gray uppercase tracking-widest block">Secure Comms (Email)</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      disabled={formState === 'submitting'}
                      className="w-full bg-atlantic-black border border-white/10 px-4 py-3 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors font-sans disabled:opacity-50"
                      placeholder="your@organization.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="font-mono text-xs text-fog-gray uppercase tracking-widest block">Organization / Entity</label>
                  <input 
                    type="text" 
                    id="organization" 
                    required
                    disabled={formState === 'submitting'}
                    className="w-full bg-atlantic-black border border-white/10 px-4 py-3 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors font-sans disabled:opacity-50"
                    placeholder="Organization name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry_type" className="font-mono text-xs text-fog-gray uppercase tracking-widest block">Mission Scope</label>
                  <select 
                    id="inquiry_type" 
                    className="w-full bg-atlantic-black border border-white/10 px-4 py-3 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors font-sans appearance-none disabled:opacity-50"
                  >
                    <option value="infrastructure">Sovereign Data Infrastructure</option>
                    <option value="ai_deployment">Local AI Deployment</option>
                    <option value="audit">Strategic Audit & Consulting</option>
                    <option value="other">Other Operations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-xs text-fog-gray uppercase tracking-widest block">Directive / Details</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    required
                    disabled={formState === 'submitting'}
                    className="w-full bg-atlantic-black border border-white/10 px-4 py-3 text-skeleton-bone focus:outline-none focus:border-rust-signal transition-colors font-sans resize-none disabled:opacity-50"
                    placeholder="Provide mission parameters..."
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-3 text-red-500 font-mono text-xs uppercase bg-red-500/10 p-4 border border-red-500/20">
                    <AlertCircle className="w-4 h-4" /> 
                    Transmission failed. Please attempt again.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-skeleton-bone text-atlantic-black px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm flex justify-center items-center gap-3 disabled:opacity-70"
                >
                  {formState === 'submitting' ? (
                    'Transmitting...'
                  ) : (
                    <>Transmit Directive <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#0A0B0C] border border-white/5 p-8">
            <h3 className="font-display text-2xl text-skeleton-bone mb-6">Headquarters</h3>
            <div className="font-mono text-xs text-white/50 space-y-6 tracking-widest uppercase">
              <div>
                <div className="text-rust-signal mb-1">Primary Node</div>
                Windhoek, Namibia<br/>
                Sub-Saharan Africa
              </div>
              <div>
                <div className="text-rust-signal mb-1">Coordinates</div>
                22.5594° S, 17.0658° E
              </div>
              <div>
                <div className="text-rust-signal mb-1">Direct Comms</div>
                ops@tangison.com
              </div>
            </div>
          </div>

          <div className="bg-[#1C1E22] border border-white/5 p-8">
             <h3 className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-4">Encryption Standard</h3>
             <p className="font-sans text-sm text-fog-gray/80 leading-relaxed">
               All communications initiated through this portal are secured using end-to-end military-grade protocols. Intellectual property and strategic intent will remain confidential.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
