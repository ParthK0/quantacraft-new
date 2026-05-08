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
    date: "MAY 07", 
    time: "09:00 AM",
    title: "Registration Starts", 
    desc: "Begin your journey into QuantCraft. Team registrations officially open for all participants.",
    icon: Rocket,
  },
  { 
    date: "MAY 15", 
    time: "11:30 PM",
    title: "PPT Submission", 
    desc: "Submit your project idea presentation before the deadline. Showcase your concept, vision, and innovation.",
    icon: FileText,
  },
  { 
    date: "MAY 20", 
    time: "11:59 PM",
    title: "Final Deadline", 
    desc: "Last day for all final submissions and edits. No further changes will be accepted after this point.",
    icon: Timer,
  },
  { 
    date: "MAY 23", 
    time: "10:00 AM",
    title: "PPT Evaluation", 
    desc: "Project presentations and idea evaluations begin.",
    icon: Search,
  },
  { 
    date: "MAY 25–26", 
    time: "24H LIVE",
    title: "The End Fight", 
    desc: "24 Hours of non-stop building, hacking, and innovation. The final offline battle begins at the venue.",
    icon: Trophy,
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
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0 border-r-[4px] border-dashed border-[#A000FF] -translate-x-1/2 opacity-50" />

        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center relative group ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Outer Icon/Checkbox (On the far sides) */}
              <div className={`hidden md:flex items-center gap-2 ${i % 2 === 0 ? "mr-4" : "ml-4"}`}>
                <div className="w-4 h-4 border border-white/50" />
                <div className="w-10 h-10 bg-[#A000FF]/20 border border-[#A000FF] flex items-center justify-center">
                  <event.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Event Card (Simple bar like the photo) */}
              <div className="flex-1 w-full pl-12 md:pl-0">
                <div className="bg-[#1a0c1a] border-y border-[#A000FF] hover:bg-[#2d122d] transition-colors py-4 px-6 relative">
                  <div className={`flex flex-col ${i % 2 === 0 ? "md:items-start" : "md:items-end text-right"}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#A000FF] text-[12px] font-bold">{event.date}</span>
                      <span className="text-white/40 text-[10px]">{event.time}</span>
                    </div>
                    <h3 className="text-white text-base uppercase tracking-wider mb-2">{event.title}</h3>
                    <p className={`text-white/60 text-xs leading-relaxed max-w-md ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Connection Point */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A000FF] rotate-45 shadow-[0_0_10px_#A000FF]" />
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
