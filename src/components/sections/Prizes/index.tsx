"use client";

import { motion } from "framer-motion";
import PrizeChest from "@/components/ui/PrizeChest";
import SectionHeader from "@/components/ui/SectionHeader";

const prizesData = [
  {
    id: "first",
    closedSrc: "/assets/prizes/1stclosed.png",
    openSrc: "/assets/prizes/1stopen.png",
    label: "1ST PLACE",
    amount: "₹15,000",
    glowColor: "#7c3aed",
    sizeClass: "w-[200px] md:w-[320px]",
    glowClass: "w-[200px] h-[100px] md:w-[320px] md:h-[140px]",
    labelClass: "text-[10px] md:text-[13px]",
    amountClass: "text-[16px] md:text-[24px]",
    idleOpacity: [0.6, 1.0, 0.6],
    glowRadius: "80%",
  },
  {
    id: "second",
    closedSrc: "/assets/prizes/2ndclosed.png",
    openSrc: "/assets/prizes/2nd%20open.png",
    label: "2ND PLACE",
    amount: "₹10,000",
    glowColor: "#f59e0b",
    sizeClass: "w-[200px] md:w-[240px]",
    glowClass: "w-[200px] h-[100px] md:w-[240px] md:h-[110px]",
    labelClass: "text-[10px] md:text-[11px]",
    amountClass: "text-[16px] md:text-[20px]",
    idleOpacity: [0.5, 0.8, 0.5],
    glowRadius: "75%",
  },
  {
    id: "third",
    closedSrc: "/assets/prizes/3rdcloset.png",
    openSrc: "/assets/prizes/3rdopen.png",
    label: "3RD PLACE",
    amount: "₹5,000",
    glowColor: "#94a3b8",
    sizeClass: "w-[200px] md:w-[240px]",
    glowClass: "w-[200px] h-[100px] md:w-[240px] md:h-[110px]",
    labelClass: "text-[10px] md:text-[11px]",
    amountClass: "text-[16px] md:text-[20px]",
    idleOpacity: [0.5, 0.8, 0.5],
    glowRadius: "75%",
  },
  {
    id: "special",
    closedSrc: "/assets/prizes/specialclosed.png",
    openSrc: "/assets/prizes/specialopen.png",
    label: "SPECIAL PRIZE",
    amount: "Sponsors",
    glowColor: "#ea580c",
    sizeClass: "w-[200px] md:w-[200px]",
    glowClass: "w-[200px] h-[100px] md:w-[200px] md:h-[90px]",
    labelClass: "text-[10px] md:text-[9px]",
    amountClass: "text-[16px] md:text-[16px]",
    idleOpacity: [0.4, 0.7, 0.4],
    glowRadius: "70%",
  },
  {
    id: "participants",
    closedSrc: "/assets/prizes/particpiationclosed.png",
    openSrc: "/assets/prizes/participationclosead.png",
    label: "ALL PARTICIPANTS",
    amount: "Goodies",
    glowColor: "#92400e",
    sizeClass: "w-[200px] md:w-[200px]",
    glowClass: "w-[200px] h-[100px] md:w-[200px] md:h-[90px]",
    labelClass: "text-[10px] md:text-[9px]",
    amountClass: "text-[16px] md:text-[16px]",
    idleOpacity: [0.4, 0.7, 0.4],
    glowRadius: "70%",
  },
];

export default function Prizes() {
  return (
    <section 
      id="prizes" 
      className="pt-[120px] pb-[40px] px-4 relative overflow-hidden min-h-[100vh] flex flex-col justify-center"
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
          className="mb-12"
        />

        {/* Desktop Layout: 2 flex rows */}
        <div className="hidden md:flex flex-col items-center justify-center gap-0 w-full">
          {/* Row 1: 2nd, 1st, 3rd */}
          <div className="flex flex-row items-end justify-center gap-[20px] w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <PrizeChest data={prizesData[1]} /> {/* 2nd */}
            </motion.div>
            <motion.div className="mb-[80px] z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
              <PrizeChest data={prizesData[0]} /> {/* 1st */}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <PrizeChest data={prizesData[2]} /> {/* 3rd */}
            </motion.div>
          </div>

          {/* Row 2: Special, Participants */}
          <div className="flex flex-row justify-center gap-[140px] -mt-[60px] w-full z-20 relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
              <PrizeChest data={prizesData[3]} /> {/* Special */}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <PrizeChest data={prizesData[4]} /> {/* Participants */}
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout: Single column */}
        <div className="flex flex-col md:hidden items-center gap-[24px]">
          {prizesData.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <PrizeChest data={prize} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
