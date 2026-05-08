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
    labelImg: "/assets/prizes/ender text.png",
    amount: "₹15,000",
    glowColor: "#bc00ff",
    sizeClass: "w-[360px] md:w-[480px]", // Very compact
    glowClass: "w-[120px] h-[60px] md:w-[240px] md:h-[120px]",
    labelClass: "text-[12px] md:text-[14px]",
    amountClass: "text-[14px] md:text-[19px]",
    idleOpacity: [0.6, 0.9, 0.6],
    glowRadius: "85%",
    openScale: 0.85,
    labelImgHeight: "h-[200px] md:h-[230px] lg:h-[240px]",
    labelOffset: "mt-[-200px]",
  },
  {
    id: "second",
    closedSrc: "/assets/prizes/2ndclosed.png",
    openSrc: "/assets/prizes/2nd%20open.png",
    label: "GOLDEN CRATE",
    labelImg: "/assets/prizes/golde text.png",
    amount: "₹10,000",
    glowColor: "#ffcc00",
    sizeClass: "w-[300px] md:w-[400px]",
    glowClass: "w-[100px] h-[50px] md:w-[200px] md:h-[100px]",
    labelClass: "text-[11px] md:text-[13px]",
    amountClass: "text-[13px] md:text-[17px]",
    idleOpacity: [0.5, 0.8, 0.5],
    glowRadius: "75%",
  },
  {
    id: "third",
    closedSrc: "/assets/prizes/3rdcloset.png",
    openSrc: "/assets/prizes/3rdopen.png",
    label: "IRON VAULT",
    labelImg: "/assets/prizes/silver text1.png",
    amount: "₹5,000",
    glowColor: "#e2e8f0",
    sizeClass: "w-[270px] md:w-[360px]",
    glowClass: "w-[90px] h-[45px] md:w-[180px] md:h-[90px]",
    labelClass: "text-[10px] md:text-[12px]",
    amountClass: "text-[12px] md:text-[14px]",
    idleOpacity: [0.5, 0.7, 0.5],
    glowRadius: "75%",
    labelOffset: "mt-[-130px]",
  },
  {
    id: "special",
    closedSrc: "/assets/prizes/specialclosed.png",
    openSrc: "/assets/prizes/specialopen.png",
    label: "NETHER CACHE",
    labelImg: "/assets/prizes/nether text1.png",
    amount: "Sponsors",
    glowColor: "#ff4d00",
    sizeClass: "w-[265px] md:w-[440px]",
    glowClass: "w-[85px] h-[42px] md:w-[160px] md:h-[80px]",
    labelClass: "text-[10px] md:text-[11px]",
    amountClass: "text-[11px] md:text-[13px]",
    idleOpacity: [0.6, 1.0, 0.6],
    glowRadius: "70%",
  },
  {
    id: "participants",
    closedSrc: "/assets/prizes/particpiationclosed.png",
    openSrc: "/assets/prizes/participationclosead.png",
    label: "WOOD BOX",
    labelImg: "/assets/prizes/wood text.png",
    amount: "Goodies",
    glowColor: "#92400e",
    sizeClass: "w-[240px] md:w-[420px]",
    glowClass: "w-[80px] h-[40px] md:w-[150px] md:h-[75px]",
    labelClass: "text-[9px] md:text-[10px]",
    amountClass: "text-[10px] md:text-[12px]",
    idleOpacity: [0.4, 0.6, 0.4],
    glowRadius: "60%",
  },
];

export default function Prizes() {
  return (
    <section 
      id="prizes" 
      className="py-12 md:py-20 px-4 relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/assets/prizes/bg1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Central Spotlight Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #2d1b6933 0%, transparent 80%)" }} />

      <div className="max-w-[1400px] mx-auto relative z-8 w-full mt-[0px]">
        <SectionHeader
          title="PRIZE POOL"
          subtext=""
          className="pt-16 mb-12 md:mb-[-30px]"
          titleClassName="[word-spacing:-0.6em]"
        />

        {/* Desktop Layout: 3 Top, 2 Bottom */}
        <div className="hidden md:flex flex-col items-center gap-0">
          {/* Top Row: Podium Order (2, 1, 3) */}
          <div className="flex flex-row items-end justify-center w-full gap-24 lg:gap-40">
            {[prizesData[1], prizesData[0], prizesData[2]].map((prize, index) => (
              <motion.div
                key={prize.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 max-w-[240px]"
              >
                <PrizeChest data={prize} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Special, Participation */}
          <div className="flex flex-row items-end justify-center w-full gap-25 lg:gap-45 mt-[-80px] lg:mt-[-100px]">
            {prizesData.slice(3, 5).map((prize, index) => (
              <motion.div
                key={prize.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="flex-1 max-w-[200px]"
              >
                <PrizeChest data={prize} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Single column */}
        <div className="flex flex-col md:hidden items-center gap-[60px]">
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
