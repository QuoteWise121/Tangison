'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full border border-rust-signal/30 bg-[#162024] p-12 relative overflow-hidden">
        {/* Warning pattern background */}
        <div className="absolute top-0 left-0 w-full h-2 bg-rust-signal" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center"
        >
          <AlertTriangle className="w-12 h-12 text-rust-signal mb-6" />
          
          <h1 className="font-display text-3xl font-bold text-skeleton-bone tracking-tight mb-4">
            Critical System Failure
          </h1>
          
          <p className="font-mono text-xs text-fog-gray/80 uppercase tracking-widest leading-relaxed mb-8">
            An unexpected error occurred during protocol execution.
            <br />
            {error.message || "Unknown error encountered."}
          </p>
          
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-3 bg-transparent border border-rust-signal text-rust-signal px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-rust-signal hover:text-atlantic-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-signal rounded-sm"
          >
            <RefreshCw className="w-4 h-4" /> Reinitialize
          </button>
        </motion.div>
      </div>
    </div>
  );
}
