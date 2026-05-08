"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" }
];

export default function MobileNav({ show }: { show: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: show ? 1 : 0, 
          scale: show ? 1 : 0.5,
          pointerEvents: show ? "auto" : "none" 
        }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-[10000] p-3 bg-[#5d4037] border-4 border-[#2e1a12] text-white shadow-lg"
      >
        <Menu size={24} />
      </motion.button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[10001] bg-[#1a0a05]/95 backdrop-blur-md flex flex-col items-center justify-center p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white"
            >
              <X size={32} />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-minecraft text-xl text-white hover:text-[#55FF55] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Footer Text */}
            <div className="mt-12 text-[#55FF55] font-pixel text-[10px] opacity-50 uppercase tracking-widest">
              QuantCraft 1.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
