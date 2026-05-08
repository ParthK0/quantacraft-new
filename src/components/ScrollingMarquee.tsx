"use client";

import { motion } from "framer-motion";

export default function ScrollingMarquee() {
  return (
    <div className="relative w-full z-[150] overflow-hidden bg-gradient-to-r from-blue-900 via-emerald-800 to-blue-900 border-y-4 border-white/30 shadow-[0_0_40px_rgba(0,255,150,0.4)] py-2">
      <div className="flex whitespace-nowrap py-2 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-minecraft text-[10px] md:text-sm mx-12 text-white drop-shadow-[2px_2px_0_#000] uppercase tracking-widest">
            QUANTCRAFT IS HERE! ~ MAY 25-26 ~ 24 HOURS OF BUILDING ~ JOIN THE ADVENTURE ~ 
          </span>
        ))}
      </div>
    </div>
  );
}
