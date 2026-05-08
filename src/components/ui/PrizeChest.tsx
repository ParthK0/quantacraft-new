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
  labelImg?: string;
  openScale?: number;
  labelImgHeight?: string;
  labelOffset?: string;
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
        {/* Background Glow Pool with Pulse */}
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1] ${data.glowClass}`}
          initial={{ opacity: data.idleOpacity[0], scale: 1 }}
          animate={{
            opacity: isOpen ? 1.0 : [data.idleOpacity[0], data.idleOpacity[1], data.idleOpacity[0]],
            scale: isOpen ? 1.4 : [1, 1.05, 1],
          }}
          transition={{
            opacity: {
              duration: isOpen ? 0.4 : 3,
              repeat: isOpen ? 0 : Infinity,
              ease: isOpen ? "easeOut" : "easeInOut",
            },
            scale: {
              duration: isOpen ? 0.4 : 4,
              repeat: isOpen ? 0 : Infinity,
              ease: "easeInOut"
            },
          }}
          style={{
            background: `radial-gradient(ellipse at center, ${data.glowColor}99 0%, transparent ${data.glowRadius})`,
            filter: `blur(8px) drop-shadow(0 0 10px ${data.glowColor})`,
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
                  y: [0, -10, 0], // Floating animation
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.2 },
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  scale: { duration: 0.2, ease: "easeIn" },
                }}
              />
            ) : (
              <motion.img
                key="open"
                src={data.openSrc}
                alt="Open Chest"
                className="w-full h-full object-contain drop-shadow-2xl"
                initial={{ opacity: 0, scale: (data.openScale || 1) * 0.95 }}
                animate={{ opacity: 1, scale: data.openScale || 1 }}
                exit={{ opacity: 0, scale: (data.openScale || 1) * 0.95 }}
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
      <div className={`${data.labelOffset || "mt-[-80px] md:mt-[-128px]"} flex flex-col items-center drop-shadow-md text-center w-full relative z-[3]`}>
        {data.labelImg ? (
          <img
            src={data.labelImg}
            alt={data.label}
            className={`${data.labelImgHeight || "h-[100px] md:h-[192px] lg:h-[202px]"} object-contain mb-2`}
          />
        ) : (
          <h3
            className={`font-minecraft uppercase tracking-wider leading-none mb-1.5 ${data.labelClass}`}
            style={{ color: data.glowColor, textShadow: `0 0 12px ${data.glowColor}aa` }}
          >
            {data.label}
          </h3>
        )}
      </div>
    </motion.div>
  );
}
