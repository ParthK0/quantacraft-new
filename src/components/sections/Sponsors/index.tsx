"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-40 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 data-corner-text="Forged in Alliance">OUR SPONSORS</h2>
        
        <div className="mt-20 flex flex-wrap justify-center gap-12">
          {/* Placeholder for future sponsor slots */}
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="w-48 h-24 bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center text-white/20 font-pixel text-sm"
            >
              SPONSOR {i}
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-zinc-500 font-pixel text-sm uppercase tracking-widest">
          Interested in sponsoring? Contact us!
        </p>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A000FF]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
