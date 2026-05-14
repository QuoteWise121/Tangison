import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tangison',
  description: 'Data handling, sovereignty and privacy protocols at Tangison.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-4xl mx-auto min-h-screen">
      <div className="mb-16">
        <div className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-4">SYS.DOC: PRIVACY_VER_1.0</div>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-skeleton-bone">Privacy Protocols</h1>
        <p className="font-mono text-xs text-fog-gray/60 uppercase tracking-widest">Last Updated: October 24, 2024</p>
      </div>

      <div className="prose prose-invert prose-lg prose-p:font-sans prose-p:font-light prose-p:text-fog-gray prose-headings:font-display prose-headings:text-skeleton-bone max-w-none">
        
        <h2>1. Sovereign Data Commitment</h2>
        <p>
          At Tangison, data sovereignty is not an afterthought; it is our foundational premise. This Privacy Protocol outlines how we handle, process, and ultimately protect your information. We do not extract African data for training external models without explicit consent, and our infrastructure emphasizes local containment.
        </p>

        <h2>2. Information Collection Mechanics</h2>
        <p>
          We employ a principle of minimal force regarding data collection. We only collect the explicit signal necessary to execute our operations. This includes:
        </p>
        <ul>
          <li><strong>Direct Comms:</strong> Information explicitly provided via our Client Portal (name, email, organizational affiliation).</li>
          <li><strong>System Logs:</strong> Non-identifying telemetric data required to maintain the uptime and integrity of our web infrastructure.</li>
        </ul>

        <h2>3. Data Processing and Location</h2>
        <p>
          Unlike standard cloud providers, our priority is keeping data within the continent or on sovereign-controlled nodes. Processing is handled securely, and where possible, via disconnected or highly encrypted air-gapped systems when handling classified client intelligence.
        </p>

        <h2>4. Third-Party Intelligence Sharing</h2>
        <p>
          We do not sell, rent, or trade your data. We strictly prohibit external vendor access to our client intelligence repositories unless operationally required and bound by military-grade NDAs.
        </p>

        <h2>5. Cryptographic Standards</h2>
        <p>
          All data at rest is encrypted using AES-256 standards or higher. Data in transit is secured via TLS 1.3 to ensure no signal degradation or interception occurs between your terminal and our servers.
        </p>

        <h2>6. Rights to Erasure</h2>
        <p>
          You retain absolute sovereignty over your entity's data. If you require complete deletion of your records from the Tangison network, transmit a formal directive to <code>privacy@tangison.com</code>. Erasure protocols will be executed across all active nodes and backups within 72 hours.
        </p>
      </div>
    </div>
  );
}
