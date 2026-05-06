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
      
      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center justify-center gap-0">
        {/* Main Logo - Floating Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0] // Smooth floating bobbing
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
          className="w-full max-w-xl px-6 pointer-events-none select-none relative z-20"
        >
          <img 
            src="/assets/main Logo.png" 
            alt="QuantCraft Logo" 
            className="w-full h-auto filter drop-shadow-[0_0_60px_rgba(85,255,85,0.4)] brightness-110"
          />
        </motion.div>

        {/* Hero Platform Group */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: [0, 15, 0] // Gentle bobbing for the whole platform group
          }}
          transition={{ 
            opacity: { delay: 0.5, duration: 1 },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          className="relative flex flex-col items-center -mt-20 md:-mt-32"
        >
          {/* Heroes standing on the platform */}
          <div className="flex justify-center items-end -mb-8 md:-mb-16 z-10 px-4">
            {[
              "/assets/tracks/AIMl1-removebg-preview.png",
              "/assets/tracks/cyber1-removebg-preview.png",
              "/assets/tracks/blockchain1-removebg-preview.png",
              "/assets/tracks/GameDevelopment1-removebg-preview.png"
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Hero ${i}`}
                className={`w-24 md:w-44 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] ${
                  i === 0 || i === 3 ? "scale-90 opacity-90" : "scale-100 z-20"
                } ${i === 1 || i === 2 ? "-mx-4 md:-mx-8" : ""}`}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, i % 2 === 0 ? 1 : -1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + i * 0.5, 
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>

          {/* The Platform Image */}
          <img 
            src="/assets/ui/hero_platform.png" 
            alt="Platform" 
            className="w-[450px] md:w-[750px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] opacity-95 brightness-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
