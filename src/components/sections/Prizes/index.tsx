"use client";

import { motion } from "framer-motion";
import PrizeChest from "@/components/ui/PrizeChest";
import SectionHeader from "@/components/ui/SectionHeader";

const prizesData = [
  {
    id: "first",
    closedSrc: "/assets/prizes/1stclosed.png",
    openSrc: "/assets/prizes/1stopen.png",
    label: "ENDER CACHE",
    amount: "₹15,000",
    glowColor: "#bc00ff", // Neon Purple
    sizeClass: "w-[240px] md:w-[400px]", // Scaled up significantly
    glowClass: "w-[240px] h-[120px] md:w-[400px] md:h-[180px]",
    labelClass: "text-[16px] md:text-[20px]",
    amountClass: "text-[18px] md:text-[26px]",
    idleOpacity: [0.6, 0.9, 0.6],
    glowRadius: "85%",
  },
  {
    id: "second",
    closedSrc: "/assets/prizes/2ndclosed.png",
    openSrc: "/assets/prizes/2nd%20open.png",
    label: "GOLDEN CRATE",
    amount: "₹10,000",
    glowColor: "#ffcc00", // Bright Gold
    sizeClass: "w-[200px] md:w-[280px]",
    glowClass: "w-[200px] h-[100px] md:w-[280px] md:h-[130px]",
    labelClass: "text-[14px] md:text-[16px]",
    amountClass: "text-[16px] md:text-[20px]",
    idleOpacity: [0.5, 0.8, 0.5],
    glowRadius: "75%",
  },
  {
    id: "third",
    closedSrc: "/assets/prizes/3rdcloset.png",
    openSrc: "/assets/prizes/3rdopen.png",
    label: "IRON VAULT",
    amount: "₹5,000",
    glowColor: "#e2e8f0", // Silver/White
    sizeClass: "w-[180px] md:w-[260px]",
    glowClass: "w-[180px] h-[90px] md:w-[260px] md:h-[120px]",
    labelClass: "text-[12px] md:text-[14px]",
    amountClass: "text-[14px] md:text-[18px]",
    idleOpacity: [0.5, 0.7, 0.5],
    glowRadius: "75%",
  },
  {
    id: "special",
    closedSrc: "/assets/prizes/specialclosed.png",
    openSrc: "/assets/prizes/specialopen.png",
    label: "NETHER CACHE",
    amount: "Sponsors",
    glowColor: "#ff4d00", // Magma Orange/Red
    sizeClass: "w-[160px] md:w-[220px]",
    glowClass: "w-[160px] h-[80px] md:w-[220px] md:h-[100px]",
    labelClass: "text-[11px] md:text-[12px]",
    amountClass: "text-[12px] md:text-[15px]",
    idleOpacity: [0.6, 1.0, 0.6], // Stronger pulse for magma
    glowRadius: "70%",
  },
  {
    id: "participants",
    closedSrc: "/assets/prizes/particpiationclosed.png",
    openSrc: "/assets/prizes/participationclosead.png",
    label: "WOOD BOX",
    amount: "Goodies",
    glowColor: "#92400e", // Brown
    sizeClass: "w-[140px] md:w-[180px]", // Smallest
    glowClass: "w-[140px] h-[70px] md:w-[180px] md:h-[80px]",
    labelClass: "text-[10px] md:text-[11px]",
    amountClass: "text-[11px] md:text-[13px]",
    idleOpacity: [0.4, 0.6, 0.4],
    glowRadius: "60%",
  },
];

export default function Prizes() {
  return (
    <section 
      id="prizes" 
      className="py-16 md:py-24 px-4 relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/assets/prizes/bg1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Central Spotlight Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #2d1b6933 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        <SectionHeader
          title="PRIZE POOL"
          subtext="Loot Table Revealed"
          className="mb-16"
        />

        {/* Desktop Layout: 2 flex rows */}
        <div className="hidden md:flex flex-col items-center justify-center w-full">
          {/* Row 1: 2nd, 1st, 3rd - Symmetrical layout */}
          <div className="grid grid-cols-[1fr_400px_1fr] items-end w-full max-w-[1200px] gap-4 md:gap-8">
            {/* Slot for 2nd */}
            <div className="flex justify-end">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="w-full max-w-[280px]">
                <PrizeChest data={prizesData[1]} />
              </motion.div>
            </div>

            {/* Slot for 1st - Lifted */}
            <div className="flex justify-center">
              <motion.div className="mb-[60px] z-10 w-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
                <PrizeChest data={prizesData[0]} />
              </motion.div>
            </div>

            {/* Slot for 3rd */}
            <div className="flex justify-start">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="w-full max-w-[280px]">
                <PrizeChest data={prizesData[2]} />
              </motion.div>
            </div>
          </div>

          {/* Row 2: Special, Participants - Tightened spacing */}
          <div className="flex flex-row justify-center gap-24 -mt-[40px] w-full z-20 relative">
            <div className="w-[220px] flex justify-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                <PrizeChest data={prizesData[3]} />
              </motion.div>
            </div>
            <div className="w-[220px] flex justify-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <PrizeChest data={prizesData[4]} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Single column */}
        <div className="flex flex-col md:hidden items-center gap-[40px]">
          {prizesData.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-[280px]"
            >
              <PrizeChest data={prize} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
