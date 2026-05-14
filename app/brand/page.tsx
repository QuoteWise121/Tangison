'use client';

import { useState } from 'react';
import { TangisonLogo, TangisonWordmark } from '@/components/logo';
import { CheckCircle2, Copy } from 'lucide-react';

export default function BrandPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const brandData = {
    brandName: "Tangison",
    mission: "Architecting the transition to a sovereign, AI-driven African economy.",
    taglines: [
      "Intelligence built on what remains.",
      "Survival requires structure.",
      "Resilience is not a feature. It is the infrastructure."
    ],
    colors: {
      atlanticBlack: "#111315",
      skeletonBone: "#F6F4EF",
      fogGray: "#D9D7D2",
      deepOcean: "#16353D",
      rustSignal: "#C56A4A"
    },
    typography: {
      primarySans: "Satoshi (Clean. Modern. Technical.)",
      secondaryDisplay: "Cabinet Grotesk (Editorial. Refined. Timeless.)",
      monospace: "JetBrains Mono (System details. Raw signal.)"
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-skeleton-bone">Brand System</h1>
          <p className="font-sans text-fog-gray text-lg max-w-2xl font-light">
            The official visual grammar for Tangison. Built on the principles of minimal force, absolute sovereignty, and raw intelligence.
          </p>
        </div>
        <button 
          onClick={() => copyToClipboard(JSON.stringify(brandData, null, 2), 'all')}
          className="bg-skeleton-bone text-atlantic-black px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-fog-gray transition-colors flex items-center gap-2"
        >
          {copiedSection === 'all' ? <CheckCircle2 className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
          Copy JSON Ruleset
        </button>
      </div>

      {/* Primary Logos */}
      <section className="mb-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">01. Identity Marks</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1C1E22] border border-white/5 p-16 flex flex-col items-center justify-center relative group">
            <TangisonLogo className="w-32 h-32 text-skeleton-bone mb-8 group-hover:text-rust-signal transition-colors duration-500" />
            <TangisonWordmark className="text-xl" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/30 uppercase tracking-widest">Primary Lockup</div>
          </div>
          <div className="bg-skeleton-bone border border-white/5 p-16 flex flex-col items-center justify-center relative group">
            <TangisonLogo className="w-32 h-32 text-atlantic-black mb-8 group-hover:text-rust-signal transition-colors duration-500" />
            <TangisonWordmark className="text-xl text-atlantic-black" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-black/30 uppercase tracking-widest">Light Variant</div>
          </div>
          <div className="bg-deep-ocean border border-white/5 p-16 flex items-center justify-center relative">
            <TangisonLogo className="w-48 h-48 text-skeleton-bone opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <TangisonLogo className="w-16 h-16 text-rust-signal" />
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/30 uppercase tracking-widest">Mark Spatial / Avatar</div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">02. Color Architecture</h2>
          <button 
            onClick={() => copyToClipboard(JSON.stringify(brandData.colors, null, 2), 'colors')}
            className="text-white/40 hover:text-white transition-colors"
          >
            {copiedSection === 'colors' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch name="Atlantic Black" hex="#111315" bgClass="bg-[#111315]" textClass="text-white" border />
          <ColorSwatch name="Skeleton Bone" hex="#F6F4EF" bgClass="bg-[#F6F4EF]" textClass="text-black" />
          <ColorSwatch name="Fog Gray" hex="#D9D7D2" bgClass="bg-[#D9D7D2]" textClass="text-black" />
          <ColorSwatch name="Deep Ocean" hex="#16353D" bgClass="bg-[#16353D]" textClass="text-white" />
          <ColorSwatch name="Rust Signal" hex="#C56A4A" bgClass="bg-[#C56A4A]" textClass="text-white" />
        </div>
      </section>

      {/* Typography */}
      <section className="mb-32">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">03. Typographic Scale</h2>
          <button 
            onClick={() => copyToClipboard(JSON.stringify(brandData.typography, null, 2), 'typography')}
            className="text-white/40 hover:text-white transition-colors"
          >
            {copiedSection === 'typography' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-8xl mb-4 text-skeleton-bone">Aa</h3>
              <p className="font-display text-2xl tracking-tighter mb-2">Cabinet Grotesk</p>
              <p className="font-sans text-sm text-fog-gray mb-6">Primary Display. Editorial. Refined. Timeless.</p>
              <p className="font-display break-words opacity-60">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            </div>
            <div className="bg-[#1C1E22] border border-white/5 p-8 flex items-center">
              <p className="font-display text-4xl leading-tight">Intelligence built on what remains.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
            <div>
              <h3 className="font-sans font-bold text-8xl mb-4 text-skeleton-bone tracking-tight">Aa</h3>
              <p className="font-display text-2xl tracking-tighter mb-2">Satoshi</p>
              <p className="font-sans text-sm text-fog-gray mb-6">Primary Body. Clean. Modern. Technical.</p>
              <p className="font-sans break-words opacity-60">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            </div>
            <div className="bg-[#1C1E22] border border-white/5 p-8 flex items-center">
              <p className="font-sans text-lg font-light leading-relaxed text-fog-gray">
                We build strategic systems, AI-native infrastructure, and resilient operational platforms for African enterprise and institutions. African data must reside on African infrastructure.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
            <div>
              <h3 className="font-mono text-6xl mb-6 text-skeleton-bone">01</h3>
              <p className="font-display text-2xl tracking-tighter mb-2">JetBrains Mono</p>
              <p className="font-sans text-sm text-fog-gray mb-6">Monospace. System details. Raw signal.</p>
            </div>
            <div className="bg-[#1C1E22] border border-white/5 p-8 flex items-center">
              <div className="font-mono text-xs text-rust-signal space-y-2 uppercase tracking-widest">
                <p>SYS.STATUS: [ ONLINE ]</p>
                <p>ENCRYPTION: MIL-SPEC</p>
                <p>IDENTIFIER: TNG-NAM-01</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">04. Image Generation Prompts</h2>
        </div>
        <p className="font-sans text-fog-gray mb-8">Use these JSON-formatted prompts with AI image generators (Midjourney, Stable Diffusion, Recraft) to systematically generate the 7 core website assets matching the Tangison aesthetic.</p>

        <div className="grid gap-6">
          <PromptCard 
            title="01: Hero Background - Skeleton Coast Minimal" 
            prompt={{
              subject: "Vast, sweeping sand dunes meeting a dark, turbulent ocean with deep fog rolling in. Extreme minimalism.",
              style: "Aerial photography, abstract nature texture, cinematic, moody.",
              colors: "Dark desaturated blues, stark shadows on sand, high contrast monochrome feel, deep ocean navy, bleached bone white.",
              lighting: "Overcast, diffuse soft daylight, long sharp shadows.",
              aspect_ratio: "16:9",
              use_case: "Website hero section background."
            }}
          />
          <PromptCard 
            title="02: Sovereign Data Facilities" 
            prompt={{
              subject: "Minimalist brutalist server racks arranged in a dimly lit concrete bunker.",
              style: "Cinematic, dark, monolithic, architectural photography.",
              colors: "Charcoal, deep black, concrete grey, subtle amber/rust indicator lights.",
              lighting: "Volumetric light shafts cutting through dust, low key lighting, high contrast.",
              aspect_ratio: "4:3",
              use_case: "Bento grid large image card."
            }}
          />
          <PromptCard 
            title="03: Resilient Platforms" 
            prompt={{
              subject: "Abstract close up of dark, weathered basalt rock formations resisting crashing waves.",
              style: "Macro landscape photography, high detail, striking composition.",
              colors: "Deep ocean blues, dark greys, white foam.",
              lighting: "Harsh, dramatic directional lighting.",
              aspect_ratio: "16:9",
              use_case: "Bento grid wide image card."
            }}
          />
          <PromptCard 
            title="04: Signal Architecture" 
            prompt={{
              subject: "Abstract close-up of a highly textured, brutalist communication antenna array against a dark sky.",
              style: "Industrial design, macro photography, technical, stark, hyper-realistic.",
              colors: "Matte black metal, dark teal metallic reflections, single rust-orange wire.",
              lighting: "Silhouette, rim lighting, atmospheric depth.",
              aspect_ratio: "1:1",
              use_case: "Narrative section supporting image."
            }}
          />
          <PromptCard 
            title="05: Data Autonomy" 
            prompt={{
              subject: "A monolithic, perfectly smooth black cube half-buried in a desolate, minimalist desert landscape.",
              style: "Sci-fi minimalism, surrealist photography, immense scale.",
              colors: "Vantablack, dark sand, foggy muted grey sky.",
              lighting: "Soft ambient fog light, zero harsh shadows on the cube.",
              aspect_ratio: "4:3",
              use_case: "Narrative section supporting image."
            }}
          />
          <PromptCard 
            title="06: Strategic Intelligence" 
            prompt={{
              subject: "Abstract geometric representation of topography lines and data streams intersecting.",
              style: "Generative art, data visualization, minimalist vector style.",
              colors: "Atlantic black background, rust orange thin lines, skeleton bone highlights.",
              lighting: "Flat graphic lighting.",
              aspect_ratio: "16:9",
              use_case: "Background texture or feature image."
            }}
          />
          <PromptCard 
            title="07: Shipwreck Metaphor - The Logo Origin" 
            prompt={{
              subject: "Abstract geometric remnant of a shipwreck mast standing alone in a vast, foggy desert landscape.",
              style: "Fine art photography, wide angle, monumental, desolate, striking composition.",
              colors: "Bleached bone white, deep ocean navy, dark sand, muted foggy skies.",
              lighting: "Overcast, diffuse soft daylight.",
              aspect_ratio: "16:9",
              use_case: "Philosophy section background or brand presentation."
            }}
          />
        </div>
      </section>

    </div>
  );
}

function ColorSwatch({ name, hex, bgClass, textClass, border }: { name: string, hex: string, bgClass: string, textClass: string, border?: boolean }) {
  return (
    <div className={`p-4 aspect-square flex flex-col justify-between ${bgClass} ${border ? 'border border-white/10' : ''}`}>
      <div className={`font-display font-medium ${textClass}`}>{name}</div>
      <div className={`font-mono text-xs tracking-widest uppercase ${textClass} opacity-70`}>{hex}</div>
    </div>
  );
}

function PromptCard({ title, prompt }: { title: string, prompt: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1C1E22] border border-white/5 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group">
      <div className="flex-grow">
        <h3 className="font-mono text-sm text-rust-signal mb-2 uppercase tracking-widest">{title}</h3>
        <pre className="font-mono text-xs text-fog-gray whitespace-pre-wrap opacity-70">
          {JSON.stringify(prompt, null, 2)}
        </pre>
      </div>
      <button 
        onClick={handleCopy}
        className="shrink-0 bg-white/5 hover:bg-white/10 text-white p-3 border border-white/10 transition-colors flex items-center justify-center"
        aria-label="Copy Prompt"
      >
        {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
}
