"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes: Record<string, string> = {
  hero: "Welcome to QuantCraft! Ready to build the future?",
  about: "Galgotias University is where the magic happens.",
  tracks: "Which path will you choose? AI, Cyber, Crypto, or Games?",
  timeline: "Keep an eye on the clock! May is going to be intense.",
  prizes: "₹35,000 up for grabs! Plus goodies for everyone.",
  team: "The dream team behind the scenes. Meet the Quanta crew!",
  faq: "Got questions? We've got answers.",
};

export default function AvatarAssistant() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="fixed bottom-4 left-[-4rem] z-50 pointer-events-none flex items-center gap-0">
      {/* The Avatar Image - Kept at w-72, moved more left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-72 h-72 pointer-events-auto cursor-help flex-shrink-0"
      >
        <img 
          src="/assets/avator.png" 
          alt="Avatar" 
          className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* The Quote Bubble - Only visible on hover */}
      <div className="flex items-center -ml-20"> 
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              className="relative flex items-center pointer-events-auto"
            >
              {/* Bubble Tail */}
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white z-10" />
              
              {/* Main Bubble Box */}
              <div className="bg-[#A000FF] border-[2px] border-white px-6 py-4 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] min-w-[240px] max-w-[320px]">
                <p className="text-white font-pixel text-sm leading-tight uppercase tracking-widest">
                  {quotes[currentSection] || "Build. Solve. Conquer."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
