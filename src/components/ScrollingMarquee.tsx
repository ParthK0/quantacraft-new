"use client";

import { motion } from "framer-motion";

export default function ScrollingMarquee() {
  return (
    <div className="relative w-full z-[40] overflow-hidden bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 border-y-4 border-white/20 shadow-[0_0_40px_rgba(160,0,255,0.6)] py-2">
      <div className="flex whitespace-nowrap py-2 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-pixel text-xl mx-12 text-white drop-shadow-[3px_3px_0_#000] uppercase tracking-[0.2em]">
            QUANTCRAFT IS HERE! ~ MAY 25-26 ~ 48 HOURS OF BUILDING ~ JOIN THE ADVENTURE ~ 
          </span>
        ))}
      </div>
    </div>
  );
}
