"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtext: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({ 
  title, 
  subtext, 
  className = "", 
  titleClassName = "" 
}: SectionHeaderProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 mb-24 relative z-10 flex flex-col items-center ${className}`}>
      {/* Main Title */}
      <h2 className={`text-center !mb-0 ${titleClassName}`}>{title}</h2>

      {/* Minecraft Style Divider & Subtext Container */}
      <div className="relative mt-4 flex flex-col items-center">
        {/* White and Purple Shadow Minecraft Divider */}
        <div className="flex items-center text-white relative drop-shadow-[0_0_8px_#A000FF]">
          {/* Left Arrow Tip */}
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[12px] border-r-current" />

          {/* Solid Bold Line */}
          <div className="h-[6px] w-[180px] md:w-[250px] bg-current" />

          {/* Center Star/Diamond Cluster */}
          <div className="flex gap-1 items-center mx-2">
            <div className="w-4 h-4 bg-current rotate-45" />
            <div className="w-6 h-6 bg-current rotate-45 -mx-3 border-2 border-zinc-900" />
            <div className="w-4 h-4 bg-current rotate-45" />
          </div>

          {/* Solid Bold Line */}
          <div className="h-[6px] w-[180px] md:w-[250px] bg-current" />

          {/* Right Arrow Tip */}
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-current" />
        </div>

        {/* Tilted Cursive Subtext */}
        <div className="absolute -right-8 md:-right-48 bottom-[-20px] md:bottom-[-25px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-[24px] md:text-[32px] text-white rotate-[-12deg] drop-shadow-[3px_3px_0px_#A000FF] whitespace-nowrap"
          >
            {subtext}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
