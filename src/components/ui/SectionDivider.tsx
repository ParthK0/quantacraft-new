"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full flex items-center justify-center h-0 z-30">
      {/* Bolder White Line */}
      <div className="absolute left-0 right-0 h-[4px] bg-white opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
      
      {/* The Central Star (Hexagon) - 1/5th BIGGER with Shading */}
      <motion.div 
        initial={{ rotate: 0, scale: 0.9 }}
        whileInView={{ rotate: 360, scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative z-10 w-14 h-16 flex items-center justify-center"
      >
        {/* Outer Hexagon (Highlight) */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ 
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
          }}
        />
        
        {/* Middle Layer (Shading) */}
        <div 
          className="absolute inset-[3px] bg-zinc-200"
          style={{ 
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
          }}
        />
        
        {/* Inner Core (Deep Shading/Depth) */}
        <div 
          className="relative w-4 h-4 bg-zinc-400 opacity-60"
          style={{ 
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
          }}
        />
      </motion.div>

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-40" />
    </div>
  );
}
