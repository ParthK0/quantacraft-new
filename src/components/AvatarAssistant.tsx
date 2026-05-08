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
  footer: "",
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
      { threshold: [0.1, 0.5, 0.8] }
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const isHiddenSection = currentSection === "footer" || currentSection === "faq";
  const currentQuote = quotes[currentSection];

  return (
    <div className={`fixed bottom-0 left-[-6rem] z-[9999] pointer-events-none flex items-center gap-0 ${isHiddenSection ? "pointer-events-none" : ""}`}>
      {/* The Avatar Image - Kept at w-72, moved more left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: isHiddenSection ? -300 : 0, 
          opacity: isHiddenSection ? 0 : 1 
        }}
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

      {/* The Quote Bubble - Only visible on hover and if there is a quote */}
      <div className="flex items-center -ml-20"> 
        <AnimatePresence mode="wait">
          {isHovered && currentQuote && (
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              className="relative flex items-center pointer-events-none"
            >
              {/* Bubble Tail */}
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white z-10" />
              
              {/* Main Bubble Box */}
              <div className="bg-[#A000FF] border-[4px] border-white px-6 py-4 shadow-[6px_6px_0px_rgba(0,0,0,0.6)] min-w-[280px] max-w-[400px]">
                <p className="text-white font-minecraft text-[11px] leading-[1.8] uppercase tracking-[2px]">
                  {currentQuote}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
