"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtext: string;
  className?: string;
  titleClassName?: string;
  titleShadow?: string;
}

export default function SectionHeader({
  title,
  subtext,
  className = "",
  titleClassName = "",
  titleShadow = "#A000FF"
}: SectionHeaderProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 mb-12 relative z-10 flex flex-col items-center pt-12 md:pt-16 ${className}`}>
      {/* Main Title */}
      <h2 
        className={`text-center !mb-0 ${titleClassName}`}
        style={{ '--title-shadow': titleShadow } as React.CSSProperties}
      >
        {title}
      </h2>

      {/* Minecraft Style Divider & Subtext Container */}
      <div className="relative mt-8 flex flex-col items-center">
        {/* White and Purple Shadow Minecraft Divider */}
        <div 
          className="flex items-center text-white relative"
          style={{ filter: `drop-shadow(0 0 8px ${titleShadow})` }}
        >
          {/* Left Arrow Tip */}
          <div className="w-0 h-0 border-t-[4px] md:border-t-[6px] border-t-transparent border-b-[4px] md:border-b-[6px] border-b-transparent border-r-[8px] md:border-r-[12px] border-r-current" />

          {/* Solid Bold Line */}
          <div className="h-[4px] md:h-[6px] w-[60px] md:w-[250px] bg-current" />

          {/* Center Star/Diamond Cluster */}
          <div className="flex gap-1 items-center mx-2">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-current rotate-45" />
            <div className="w-4 h-4 md:w-6 md:h-6 bg-current rotate-45 -mx-2 md:-mx-3 border-2 border-zinc-900" />
            <div className="w-3 h-3 md:w-4 md:h-4 bg-current rotate-45" />
          </div>

          {/* Solid Bold Line */}
          <div className="h-[4px] md:h-[6px] w-[60px] md:w-[250px] bg-current" />

          {/* Right Arrow Tip */}
          <div className="w-0 h-0 border-t-[4px] md:border-t-[6px] border-t-transparent border-b-[4px] md:border-b-[6px] border-b-transparent border-l-[8px] md:border-l-[12px] border-l-current" />
        </div>

        {/* Tilted Cursive Subtext - Hidden on Mobile, Shown on Desktop */}
        <div className="absolute -right-8 md:-right-48 bottom-[-20px] md:bottom-[-25px] hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-[16px] md:text-[32px] text-white rotate-[-12deg] whitespace-nowrap"
            style={{ filter: `drop-shadow(3px 3px 0px ${titleShadow})` }}
          >
            {subtext}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
