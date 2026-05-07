"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PrizeData {
  id: string;
  closedSrc: string;
  openSrc: string;
  label: string;
  amount: string;
  glowColor: string;
  sizeClass: string;
  glowClass: string;
  labelClass: string;
  amountClass: string;
  idleOpacity: number[];
  glowRadius: string;
}

export default function PrizeChest({ data }: { data: PrizeData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleInteraction = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <motion.div
      onMouseEnter={() => handleInteraction(true)}
      onMouseLeave={() => handleInteraction(false)}
      onClick={() => setIsOpen(!isOpen)}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col items-center text-center cursor-pointer group w-full"
    >
      {/* Container for Chest and Glow to maintain center alignment */}
      <div className={`relative flex items-center justify-center ${data.sizeClass} aspect-square`}>
        {/* Background Glow Pool */}
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1] ${data.glowClass}`}
          initial={{ opacity: data.idleOpacity[0], scale: 1 }}
          animate={{
            opacity: isOpen ? 1.0 : data.idleOpacity,
            scale: isOpen ? 1.4 : 1,
          }}
          transition={{
            opacity: {
              duration: isOpen ? 0.4 : 3,
              repeat: isOpen ? 0 : Infinity,
              ease: isOpen ? "easeOut" : "easeInOut",
            },
            scale: { duration: 0.4, ease: "easeOut" },
          }}
          style={{
            background: `radial-gradient(ellipse at center, ${data.glowColor}99 0%, transparent ${data.glowRadius})`,
          }}
        />

        {/* Chest Image Container */}
        <div className="relative w-full h-full z-[2]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.img
                key="closed"
                src={data.closedSrc}
                alt="Closed Chest"
                className="w-full h-full object-contain drop-shadow-2xl"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2, ease: "easeIn" },
                }}
              />
            ) : (
              <motion.img
                key="open"
                src={data.openSrc}
                alt="Open Chest"
                className="w-full h-full object-contain drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.3, ease: "easeOut" },
                  scale: { duration: 0.3, ease: "easeOut" },
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="mt-[12px] flex flex-col items-center drop-shadow-md text-center w-full relative z-[3]">
        <span 
          className="font-pixel text-[#ffffff] text-[18px] leading-none mb-1"
          style={{ textShadow: `0 0 10px ${data.glowColor}` }}
        >
          {data.id === 'participants' ? '' : `#${data.id === 'first' ? '1' : data.id === 'second' ? '2' : data.id === 'third' ? '3' : ''}`}
        </span>
        <h3 
          className={`font-pixel text-[#ffffff] uppercase tracking-[1px] leading-tight ${data.labelClass}`} 
          style={{ textShadow: `0 0 10px ${data.glowColor}` }}
        >
          {data.label}
        </h3>
        <p 
          className={`font-pixel text-white mt-1 ${data.amountClass}`} 
          style={{ textShadow: `0 0 15px ${data.glowColor}` }}
        >
          {data.amount}
        </p>
      </div>
    </motion.div>
  );
}
