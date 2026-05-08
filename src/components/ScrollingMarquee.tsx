"use client";

import { motion } from "framer-motion";

export default function ScrollingMarquee() {
  return (
    <div className="relative w-full z-[150] overflow-hidden bg-gradient-to-r from-[#001833] via-[#004d7a] to-[#001833] border-y-2 border-cyan-400/40 shadow-[0_0_25px_rgba(0,212,255,0.2)] py-1">
      <div className="flex whitespace-nowrap py-2 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-minecraft text-[10px] md:text-sm mx-12 text-white drop-shadow-[2px_2px_0_#000] uppercase tracking-[0.15em]">
            QUANTA CRAFT 1.0 IS HERE! ~ MAY 25-26 ~ 
          </span>
        ))}
      </div>
    </div>
  );
}
