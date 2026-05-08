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
    imageSrc: "/assets/timeline/7May.png",
    alt: "MAY 07: Registration Starts",
  },
  { 
    id: "15may",
    imageSrc: "/assets/timeline/15May.png",
    alt: "MAY 15: PPT Submission",
  },
  { 
    id: "20may",
    imageSrc: "/assets/timeline/20May.png",
    alt: "MAY 20: Final Deadline",
  },
  { 
    id: "22may",
    imageSrc: "/assets/timeline/22May.png",
    alt: "MAY 22: Trae Session",
  },
  { 
    id: "23may",
    imageSrc: "/assets/timeline/23May.png",
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
    <section id="timeline" className="py-32 px-4 relative overflow-hidden font-pixel">
      {/* Background Stars/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,0,255,0.1),transparent_70%)]" />

      <SectionHeader 
        title="EVENT TIMELINE" 
        subtext="Tick Tock Hack!!"
        className="pt-6 mb-24"
        titleClassName="[word-spacing:-0.6em]"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Central Vertical Line (Solid Dark Green Vine) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-3 bg-[#1b4332] -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(27,67,50,0.4)]" />

        <div className="space-y-12 md:space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center relative group mb-8 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Event Image Card */}
              <div className="flex-1 w-full pl-12 md:pl-0 z-10">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer transition-all duration-300 drop-shadow-[0_0_15px_rgba(160,0,255,0.1)] hover:drop-shadow-[0_0_25px_rgba(160,0,255,0.3)]"
                >
                  <img 
                    src={event.imageSrc} 
                    alt={event.alt}
                    className="w-full h-[100px] md:h-[120px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Horizontal Connector (Solid Dark Green Branch) */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-[#1b4332] hidden md:block z-0 ${
                i % 2 === 0 ? "left-[30%] right-1/2" : "right-[30%] left-1/2"
              }`} />

              {/* Center Connection Point (Bold Green Block) */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-[#2d6a4f] border-[3px] border-[#1b4332] shadow-[0_0_10px_rgba(45,106,79,0.5)] z-20" />
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
