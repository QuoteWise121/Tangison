export const TangisonLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Abstracted Shipwreck Mast - Based on the provided imagery */}
    {/* Main vertical mast */}
    <path d="M48 5 L48 95" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    
    {/* Top crossbar */}
    <path d="M28 25 L68 20" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    
    {/* Middle angled structure (T-like shape) */}
    <path d="M25 45 L38 45 L38 85" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    <path d="M20 60 L38 60" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />

    {/* Right side abstract shapes (A/K mix) */}
    <path d="M55 40 L70 65" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    <path d="M72 45 L62 50 L68 60" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
    
    {/* Bottom angled struts */}
    <path d="M30 85 L48 70" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    <path d="M55 70 L75 95" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    <path d="M55 90 L70 90" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
  </svg>
);

export const TangisonWordmark = ({ className = "h-6" }: { className?: string }) => (
  <div className={`font-display font-bold tracking-[0.25em] uppercase text-white flex items-center ${className}`}>
    T<span className="inline-block transform -translate-y-0.5 ml-0.5 mr-0.5">Λ</span>NGISON
  </div>
);
