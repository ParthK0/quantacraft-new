"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const goldenSponsors = [
  { name: "Golden Sponsor 1", logo: "/assets/sponsor/Golden Sponsor 1.png", scale: 1.1 },
  { name: "Golden Sponsor 2", logo: "/assets/sponsor/Golden sponsor 2.png", scale: 1.5 },
];

const bronzeSponsors = [
  { name: "Bronze Sponsor 1", logo: "/assets/sponsor/Bronze Sponsor 1.png", scale: 1.0 },
  { name: "Bronze Sponsor 2", logo: "/assets/sponsor/Bronze Sponsor 2.png", scale: 1.0 },
];

interface SponsorCardProps {
  sponsor: { name: string; logo: string; scale?: number };
  tier: "golden" | "bronze";
  index: number;
}

function SponsorCard({ sponsor, tier, index }: SponsorCardProps) {
  const isGolden = tier === "golden";

  // Minecraft Pixel Palette
  const colors = isGolden ? {
    primary: "#f7e34d",    // Minecraft Gold
    dark: "#b59a24",       // Gold Shadow
    light: "#fff9ab",      // Gold Highlight
    glow: "rgba(247, 227, 77, 0.3)"
  } : {
    primary: "#c46c3d",    // Minecraft Copper/Bronze
    dark: "#8c4d2d",       // Copper Shadow
    light: "#e8a685",      // Copper Highlight
    glow: "rgba(196, 108, 61, 0.2)"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 0, 0, 0, 0]
        }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute inset-[-30px] rounded-full blur-[50px] opacity-100 z-0"
          style={{ backgroundColor: colors.glow }}
        />

        <div className="w-40 h-40 md:w-64 md:h-64 relative flex items-center justify-center">
          {/* Pixelated Frame Container */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Outer Dark Rim (Pixel Effect) */}
            <div className="absolute inset-0 border-[4px] border-black/40" />

            {/* Main Frame Body */}
            <div
              className="absolute inset-[4px] border-[8px]"
              style={{ borderColor: colors.primary }}
            />

            {/* Inner Highlight/Shadow Lines */}
            <div
              className="absolute inset-[4px] border-t-[4px] border-l-[4px]"
              style={{ borderColor: colors.light }}
            />
            <div
              className="absolute inset-[4px] border-b-[4px] border-r-[4px]"
              style={{ borderColor: colors.dark }}
            />

            {/* Corner Pixel Blocks (Instead of nails) */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-black/60" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-black/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-black/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-black/60" />

            {/* Accent Pixels */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/20" />
          </div>

          {/* Inner Texture / Backdrop */}
          <img
            src="/assets/sponsor/sponsor back.png"
            alt="Sponsor Backdrop"
            className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover z-10 brightness-[0.9] group-hover:brightness-110 transition-all duration-300"
          />

          {/* Sponsor Logo */}
          <div className="absolute inset-[12px] z-30 flex items-center justify-center p-8">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              style={{ transform: `scale(${sponsor.scale || 1})` }}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-40 px-4 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Image - Restored visibility */}
      <img
        src="/assets/sponsor/sponsor.jpg"
        alt="Sponsors Backdrop"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80"
      />

      {/* Subtle Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[1] pointer-events-none" />

      <SectionHeader 
        title="OUR SPONSORS" 
        subtext="Forged in Alliance"
        titleShadow="#bc00ff"
        className="mb-20"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mt-32 space-y-32">
          {/* Golden Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-20">
            {goldenSponsors.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} tier="golden" index={idx} />
            ))}
          </div>

          {/* Bronze Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-20">
            {bronzeSponsors.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} tier="bronze" index={idx + 2} />
            ))}
          </div>
        </div>
      </div>

      {/* Large Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
