"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert, Cpu, Gamepad2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const tracks = [
  {
    title: "AI/ML",
    desc: "Build intelligent systems that learn and adapt.",
    icon: Brain,
    color: "from-purple-500/20 to-transparent",
    images: [
      "/assets/tracks/AIMl1-removebg-preview.png",
      "/assets/tracks/AIML2-removebg-preview.png"
    ],
  },
  {
    title: "Cyber Security",
    desc: "Secure the digital frontier against modern threats.",
    icon: ShieldAlert,
    color: "from-red-500/20 to-transparent",
    images: [
      "/assets/tracks/cyber1-removebg-preview.png",
      "/assets/tracks/cyber_2-removebg-preview.png"
    ],
  },
  {
    title: "Blockchain",
    desc: "Decentralize the future with trustless technology.",
    icon: Cpu,
    color: "from-blue-500/20 to-transparent",
    images: [
      "/assets/tracks/blockchain1-removebg-preview.png",
      "/assets/tracks/blockchain2-removebg-preview.png"
    ],
  },
  {
    title: "Game Development",
    desc: "Create immersive worlds and engaging mechanics.",
    icon: Gamepad2,
    color: "from-green-500/20 to-transparent",
    images: [
      "/assets/tracks/GameDevelopment1-removebg-preview.png",
      "/assets/tracks/GameDevelopment2-removebg-preview.png"
    ],
  },
];

function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[500px] flex flex-col justify-end items-center group cursor-pointer perspective-1000"
    >
      {/* Background Glow (No Frame) */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-1/2 bg-gradient-to-t ${track.color} opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none`} />

      {/* Dynamic Images (Transparent & Frameless) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-4">
        {/* Photo 1 (Idle) */}
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
            y: isHovered ? -20 : 0,
            filter: isHovered ? "blur(10px)" : "blur(0px)"
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={track.images[0]}
            alt={`${track.title} 1`}
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            priority
          />
        </motion.div>

        {/* Photo 2 (Hover) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: 40 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 1.2,
            y: isHovered ? 0 : 40,
            filter: isHovered ? "blur(0px)" : "blur(10px)"
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={track.images[1]}
            alt={`${track.title} 2`}
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          />
        </motion.div>
      </div>

      {/* Content (Overlaying the Frameless Area) */}
      <div className="relative z-10 w-full text-center pb-8 pt-10">
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4 group-hover:border-white/30 transition-colors duration-300">
            <track.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-pixel mb-3 text-white tracking-widest drop-shadow-lg">{track.title}</h3>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px] group-hover:text-zinc-200 transition-colors duration-300 drop-shadow-md">{track.desc}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative py-32 px-4 overflow-hidden bg-zinc-950"
    >
      {/* Battle Arena Background - Updated for battle arena1.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/tracks/battle%20arena1.jpg"
          alt="Battle Arena"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Subtle gradient to ground the characters while keeping the photo clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32 pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] font-pixel text-zinc-300 tracking-[0.3em] uppercase">
              The Path Awaits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-pixel text-white mb-8 tracking-tighter drop-shadow-2xl"
          >
            HACKATHON TRACKS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {tracks.map((track, i) => (
            <TrackCard key={i} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
