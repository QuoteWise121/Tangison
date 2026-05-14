import { TangisonLogo, TangisonWordmark } from './logo';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0B0C] pt-24 pb-8 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <a href="/" className="flex items-center gap-4 mb-6 group">
            <TangisonLogo className="w-16 h-16 md:w-20 md:h-20 text-white/80 group-hover:text-rust-signal transition-colors duration-500" />
            <TangisonWordmark className="text-2xl text-white/90" />
          </a>
          <p className="font-mono text-xs text-white/40 max-w-xs leading-relaxed">
            Sovereign intelligence infrastructure.<br/>
            Operating from the Atlantic coast.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 font-mono text-xs text-white/50 uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <a href="/strategy" className="hover:text-white transition-colors">Strategy</a>
            <a href="/systems" className="hover:text-white transition-colors">Architecture</a>
            <a href="/brand" className="hover:text-white flex items-center gap-2 transition-colors">
              Brand System <div className="w-2 h-2 rounded-full bg-rust-signal" />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="/contact" className="hover:text-white transition-colors">Client Portal</a>
            <a href="/security" className="hover:text-white transition-colors">Security</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-white/30 uppercase">
        <p>© {new Date().getFullYear()} TANGISON GROUP. ALL RIGHTS RESERVED.</p>
        <p>LOCATION: WINDHOEK, NAMIBIA</p>
        <p>IDENTIFIER: TNG-NAM-01</p>
      </div>
    </footer>
  );
};
