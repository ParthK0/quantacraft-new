"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { 
  Rocket, 
  FileText, 
  Timer, 
  Users, 
  Search, 
  Trophy,
  Calendar
} from "lucide-react";

const events = [
  { 
    id: "7may",
    imageSrc: "/assets/timeline/7may1.png",
    alt: "MAY 07: Registration Starts",
  },
  { 
    id: "15may",
    imageSrc: "/assets/timeline/15may1.png",
    alt: "MAY 15: PPT Submission",
  },
  { 
    id: "20may",
    imageSrc: "/assets/timeline/20may1.png",
    alt: "MAY 20: Final Deadline",
  },
  { 
    id: "22may",
    imageSrc: "/assets/timeline/22may1.png",
    alt: "MAY 22: Trae Session",
  },
  { 
    id: "23may",
    imageSrc: "/assets/timeline/23May1.png",
    alt: "MAY 23: PPT Evaluation",
  },
  { 
    id: "25-26may",
    imageSrc: "/assets/timeline/25-26may.png",
    alt: "MAY 25-26: The End Fight",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 px-4 relative overflow-hidden font-pixel">
      {/* Background Stars/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,0,255,0.1),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">


        <SectionHeader 
          title="EVENT TIMELINE" 
          subtext="Tick Tock Hack!!"
          className="mb-24"
          titleClassName="[word-spacing:-0.6em]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Central Vertical Line (Solid Dark Green Vine) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-[#1b4332] -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(27,67,50,0.4)]">
          {/* Leaf Blocks */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 md:w-3 md:h-3 bg-[#2d6a4f] rotate-45 border border-[#1b4332]"
              style={{ 
                top: `${(i * 7) + 2}%`, 
                left: i % 2 === 0 ? '-3px' : '3px',
                opacity: 0.8
              }}
            />
          ))}
        </div>

        <div className="space-y-4 md:space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center relative group mb-12 md:mb-24 ${
                i % 2 === 0 ? "flex-row md:flex-row" : "flex-row md:flex-row-reverse"
              }`}
            >
              {/* Event Image Card */}
              <div className={`flex-1 w-full z-10 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer transition-all duration-300 drop-shadow-[0_0_15px_rgba(160,0,255,0.1)] hover:drop-shadow-[0_0_25px_rgba(160,0,255,0.3)]"
                >
                  <img 
                    src={event.imageSrc} 
                    alt={event.alt}
                    className="w-full h-[80px] md:h-[140px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Horizontal Connector (Solid Dark Green Branch) */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-[#1b4332] z-0 ${
                i % 2 === 0 
                  ? "left-6 right-1/2 md:left-[20%]" 
                  : "left-6 right-1/2 md:right-[20%] md:left-1/2"
              }`} />

              {/* Center Connection Point (Bold Green Block) */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-[#2d6a4f] border-[2px] md:border-[3px] border-[#1b4332] shadow-[0_0_10px_rgba(45,106,79,0.5)] z-20 rotate-45" />
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
