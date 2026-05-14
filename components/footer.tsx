import { TangisonLogo, TangisonWordmark } from './logo';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0B0C] pt-24 pb-8 px-6 md:px-12 border-t border-white/5 relative z-10" role="contentinfo">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <a href="/" className="flex items-center gap-4 mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm p-1 -ml-1">
            <TangisonLogo className="w-16 h-16 md:w-20 md:h-20 text-white/80 group-hover:text-rust-signal transition-colors duration-500" aria-hidden="true" />
            <span className="sr-only">Tangison Home</span>
            <TangisonWordmark className="text-2xl text-white/90" />
          </a>
          <p className="font-mono text-xs text-white/40 max-w-xs leading-relaxed">
            Sovereign intelligence infrastructure.<br/>
            Operating from the Atlantic coast.
          </p>
        </div>

        <nav className="flex flex-col sm:flex-row gap-12 sm:gap-24 font-mono text-xs text-white/50 uppercase tracking-widest" aria-label="Footer navigation">
          <ul className="flex flex-col">
            <li><a href="/strategy" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Strategy</a></li>
            <li><a href="/systems" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Architecture</a></li>
            <li><a href="/brand" className="min-h-[44px] hover:text-white inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">
              Brand System <span className="w-2 h-2 rounded-full bg-rust-signal inline-block" aria-hidden="true" />
            </a></li>
          </ul>
          <ul className="flex flex-col">
            <li><a href="/contact" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Client Portal</a></li>
            <li><a href="/security" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Security</a></li>
            <li><a href="/terms" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Terms</a></li>
            <li><a href="/privacy" className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-white/30 uppercase">
        <p>© {new Date().getFullYear()} TANGISON GROUP. ALL RIGHTS RESERVED.</p>
        <p>LOCATION: WINDHOEK, NAMIBIA</p>
        <p>IDENTIFIER: TNG-NAM-01</p>
      </div>
    </footer>
  );
};
