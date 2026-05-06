"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Media (GIF as video background) */}
      <img
        src="/assets/hero%20background%203.gif"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,255,85,0.15),transparent_70%)] z-[2]" />
      
      {/* Main Logo in Centre - Floating Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -25, 0] // Smooth floating bobbing
        }}
        transition={{ 
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          y: { 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }
        }}
        className="z-10 w-full max-w-xl px-6 pointer-events-none select-none"
      >
        <img 
          src="/assets/main Logo.png" 
          alt="QuantCraft Logo" 
          className="w-full h-auto filter drop-shadow-[0_0_60px_rgba(85,255,85,0.4)] brightness-110"
        />
      </motion.div>
    </section>
  );
}
