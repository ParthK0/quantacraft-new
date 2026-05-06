"use client";

import { motion } from "framer-motion";
import MinecraftTrackCard from "@/components/ui/MinecraftTrackCard";
import SectionHeader from "@/components/ui/SectionHeader";

const tracks = [
  {
    slug: "blockchain",
    trackName: "BLOCKCHAIN",
    accentColor: "#f59e0b",
    glowColor: "#fbbf24",
    platformImg: "/assets/tracks/Block Chain platform.png",
    titleImg: "/assets/tracks/Blockchain.png",
    idleImg: "/assets/tracks/blockchain1-removebg-preview.png",
    battleImg: "/assets/tracks/blockchain2-removebg-preview.png",
  },
  {
    slug: "ai-ml",
    trackName: "AI / ML",
    accentColor: "#a855f7",
    glowColor: "#c084fc",
    platformImg: "/assets/tracks/AIML platform.png",
    titleImg: "/assets/tracks/AIML.png",
    idleImg: "/assets/tracks/AIMl1-removebg-preview.png",
    battleImg: "/assets/tracks/AIML2-removebg-preview.png",
  },
  {
    slug: "cyber",
    trackName: "CYBER SECURITY",
    accentColor: "#ef4444",
    glowColor: "#f87171",
    platformImg: "/assets/tracks/Cyber platform.png",
    titleImg: "/assets/tracks/Cyber security.png",
    idleImg: "/assets/tracks/cyber1-removebg-preview.png",
    battleImg: "/assets/tracks/cyber_2-removebg-preview.png",
  },
  {
    slug: "gamedev",
    trackName: "GAME DEVELOPMENT",
    accentColor: "#10b981",
    glowColor: "#34d399",
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
        <SectionHeader
          title="HACKATHON TRACKS"
          subtext="Select Your Path"
          className="mb-12"
        />

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
