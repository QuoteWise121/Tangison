import { Metadata } from 'next';
import { Shield, Lock, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Posture | Tangison',
  description: 'Our uncompromising approach to systemic security and infrastructure protection.',
};

export default function SecurityPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-24 max-w-4xl">
        <div className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-4">CONFIDENTIALITY: UNCLASSIFIED</div>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-skeleton-bone">Security Posture</h1>
        <p className="font-sans text-fog-gray text-lg md:text-xl font-light leading-relaxed">
          Security at Tangison is not achieved through software patches alone. It is achieved through physical reality, strict air-gapping when necessary, and deep encryption methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-[#1C1E22] border border-white/5 p-8">
          <Shield className="w-8 h-8 text-rust-signal mb-6" />
          <h3 className="font-display text-2xl text-skeleton-bone mb-4">Zero-Trust Architecture</h3>
          <p className="font-sans text-sm text-fog-gray/80 leading-relaxed">
            Every layer of our network, regardless of origin, requires explicit authentication and authorization. We assume the perimeter has already been breached and design internally from that stance.
          </p>
        </div>
        
        <div className="bg-[#1C1E22] border border-white/5 p-8">
          <Server className="w-8 h-8 text-rust-signal mb-6" />
          <h3 className="font-display text-2xl text-skeleton-bone mb-4">Physical Isolation</h3>
          <p className="font-sans text-sm text-fog-gray/80 leading-relaxed">
            Critical machine learning inference tasks for sensitive clients are executed on hardware that holds no physical connection to the external internet. Updates are pushed via secured physical media protocols.
          </p>
        </div>

        <div className="bg-[#1C1E22] border border-white/5 p-8">
          <Lock className="w-8 h-8 text-rust-signal mb-6" />
          <h3 className="font-display text-2xl text-skeleton-bone mb-4">Cryptographic Integrity</h3>
          <p className="font-sans text-sm text-fog-gray/80 leading-relaxed">
            All stored models and intelligence databases are encrypted at rest with hardware-backed keys. Key management schemas rotate aggressively and automatically.
          </p>
        </div>
      </div>

      <div className="bg-deep-ocean border border-white/10 p-12 max-w-4xl">
        <h2 className="font-display text-3xl text-skeleton-bone mb-6">Vulnerability Reporting</h2>
        <p className="font-sans text-fog-gray/80 mb-6 leading-relaxed">
          We maintain an open channel for responsible disclosure of security vulnerabilities affecting Tangison public infrastructure. We engage with security researchers who prioritize the integrity of the systems over immediate public disclosure.
        </p>
        <p className="font-mono text-xs text-rust-signal uppercase tracking-widest">
          Transmit reports to: security@tangison.com
        </p>
      </div>
    </div>
  );
}
