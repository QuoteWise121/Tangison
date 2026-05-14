import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Tangison',
  description: 'Terms of operational engagement with Tangison services.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-4xl mx-auto min-h-screen">
      <div className="mb-16">
        <div className="font-mono text-xs text-rust-signal uppercase tracking-widest mb-4">SYS.DOC: TERMS_VER_1.1</div>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-skeleton-bone">Terms of Engagement</h1>
        <p className="font-mono text-xs text-fog-gray/60 uppercase tracking-widest">Last Updated: October 24, 2024</p>
      </div>

      <div className="prose prose-invert prose-lg prose-p:font-sans prose-p:font-light prose-p:text-fog-gray prose-headings:font-display prose-headings:text-skeleton-bone max-w-none">
        
        <h2>1. Operational Scope</h2>
        <p>
          By interacting with Tangison software, systems, or infrastructure, you agree to these Terms of Engagement. Our services are designated for enterprise, defense, and institutional clients. We reserve the right to refuse service to any entity acting adversely to our core mission of African digital sovereignty.
        </p>

        <h2>2. Intellectual Property and Code Autonomy</h2>
        <p>
          Unless explicitly negotiated via a custom service level agreement (SLA), Tangison retains core intellectual property rights to the generalized systems, AI models, and infrastructural frameworks we deploy. Client data processed through these systems remains fiercely and unapologetically the property of the client.
        </p>

        <h2>3. System Uptime and Reality Checks</h2>
        <p>
          While we engineer for 99.99% uptime in hostile environments, Tangison acknowledges the realities of physical infrastructure. We are not liable for total systemic collapses caused by acts of war, regional grid failures, or extreme terrestrial events, though our resilient systems are built to recover from such instances rapidly.
        </p>

        <h2>4. Malicious Usage</h2>
        <p>
          Any attempt to stress-test, penetrate, or manipulate Tangison's public-facing architecture without explicit authorization will be treated as a hostile act and resolved via legal and security countermeasures.
        </p>

        <h2>5. Jurisdictional Authority</h2>
        <p>
          These terms are governed by the laws of the Republic of Namibia. Any disputes requiring legal arbitration shall be conducted in Windhoek, prioritizing local arbitration over international courts unless stipulated otherwise in enterprise agreements.
        </p>

      </div>
    </div>
  );
}
