"use client";

import { motion } from "framer-motion";
import MinecraftTrackCard from "@/components/ui/MinecraftTrackCard";

const tracks = [
  {
    trackName: "Blockchain",
    accentColor: "#f5c518",
    glowColor: "rgba(245, 197, 24, 0.6)",
    platformImg: "/assets/tracks/Block Chain platform.png",
    titleImg: "/assets/tracks/Blockchain.png",
    idleImg: "/assets/tracks/blockchain1-removebg-preview.png",
    battleImg: "/assets/tracks/blockchain2-removebg-preview.png",
  },
  {
    trackName: "AI / ML",
    accentColor: "#b44fff",
    glowColor: "rgba(180, 79, 255, 0.6)",
    platformImg: "/assets/tracks/AIML platform.png",
    titleImg: "/assets/tracks/AIML.png",
    idleImg: "/assets/tracks/AIMl1-removebg-preview.png",
    battleImg: "/assets/tracks/AIML2-removebg-preview.png",
  },
  {
    trackName: "Cyber Security",
    accentColor: "#ff4444",
    glowColor: "rgba(255, 68, 68, 0.6)",
    platformImg: "/assets/tracks/Cyber platform.png",
    titleImg: "/assets/tracks/Cyber security.png",
    idleImg: "/assets/tracks/cyber1-removebg-preview.png",
    battleImg: "/assets/tracks/cyber_2-removebg-preview.png",
  },
  {
    trackName: "Game Development",
    accentColor: "#00ffcc",
    glowColor: "rgba(0, 255, 204, 0.6)",
    platformImg: "/assets/tracks/GameDevelopment platform.png",
    titleImg: "/assets/tracks/Game Development.png",
    idleImg: "/assets/tracks/GameDevelopment1-removebg-preview.png",
    battleImg: "/assets/tracks/GameDevelopment2-removebg-preview.png",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative py-32 px-4 overflow-hidden bg-zinc-950"
    >
      {/* Battle Arena Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/tracks/battle%20arena1.jpg"
          alt="Battle Arena"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] font-pixel text-zinc-300 tracking-[0.3em] uppercase">
              The Path Awaits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-pixel text-white mb-8 tracking-tighter drop-shadow-2xl"
          >
            HACKATHON TRACKS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 justify-items-center">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <MinecraftTrackCard {...track} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
