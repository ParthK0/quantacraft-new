"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MinecraftProfileCard from "@/components/ui/MinecraftProfileCard";
import SectionHeader from "@/components/ui/SectionHeader";

type SocialLinks = {
  github?: string;
  linkedin?: string;
  instagram?: string;
};

type TeamMember = {
  name: string;
  role: string;
  squad: string;
  bio: string;
  position: number;
  image: string;
  imageMinecraft?: string;
  social: SocialLinks;
};

const team: TeamMember[] = [
  // ── AI-Tech Force ──────────────────────────────────────────────────────────
  {
    name: "Ansh Vashisth",
    role: "President",
    squad: "AI-Tech Force",
    bio: "Steering the AI-Tech vision and driving innovation across all technical initiatives.",
    position: 1,
    image: "/team/2.jpeg",
    imageMinecraft: "/team/ansh_mc.jpeg",
    social: {
      github: "https://github.com/AnshVashisth0",
      linkedin: "https://www.linkedin.com/in/ansh-vashisth00/",
    },
  },
  {
    name: "Deepankar Patel",
    role: "Vice President",
    squad: "AI-Tech Force",
    bio: "Builds apps, breaks them, fixes them then redesigns the UI for no reason. Running on deadlines, ideas, and just enough sleep to debug life.",
    position: 2,
    image: "/team/5.png",
    imageMinecraft: "/team/deepankar_mc.png",
    social: {
      github: "https://github.com/dpp0007",
      linkedin: "https://www.linkedin.com/in/dpp07/",
    },
  },
  {
    name: "Parth Khowal",
    role: "Technical Lead",
    squad: "AI-Tech Force",
    bio: "Runs on snacks, sarcasm, and chaotic energy — somehow still functioning like a masterpiece.",
    position: 3,
    image: "/team/3.jpeg",
    imageMinecraft: "/team/parth_mc.jpeg",
    social: {
      github: "https://github.com/ParthK0",
      linkedin: "https://www.linkedin.com/in/parth-khowal-a37903294/",
    },
  },
  {
    name: "Akarsh",
    role: "Creative Content Strategist",
    squad: "AI-Tech Force",
    bio: "Crafting compelling narratives and visual storytelling for the tech brand.",
    position: 4,
    image: "/team/akarsh.jpeg",
    imageMinecraft: "/team/akarsh_mc.jpeg",
    social: {},
  },
  {
    name: "Vaishnavi",
    role: "Creative Content Strategist",
    squad: "AI-Tech Force",
    bio: "Combines creativity and technical skills to create impactful content and support innovative projects at Quanta Club.",
    position: 5,
    image: "/team/9.jpg",
    imageMinecraft: "/team/vaishnavi_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/vaishnavi-gupta-747baa384",
      instagram: "https://www.instagram.com/2288_vaishnavi",
    },
  },
  {
    name: "Vanshika",
    role: "Social Media Head",
    squad: "AI-Tech Force",
    bio: "Building digital presence and community engagement across all platforms.",
    position: 6,
    image: "/team/10.jpeg",
    imageMinecraft: "/team/vanshika_mc.jpeg",
    social: {
      github: "https://github.com/vanshika-2105",
      linkedin: "https://www.linkedin.com/in/vanshika-prajapati-a4849933a",
    },
  },
  // ── Operations Squad ───────────────────────────────────────────────────────
  {
    name: "Manjeet",
    role: "President",
    squad: "Operations Squad",
    bio: "Building on-chain agents & vibing with web3 samaj.",
    position: 7,
    image: "/team/1.webp",
    imageMinecraft: "/team/manjeet_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/eren-570b3b30a/",
      instagram: "https://www.instagram.com/errren.dev/",
    },
  },
  {
    name: "Divya Sharma",
    role: "Vice President",
    squad: "Operations Squad",
    bio: "Coordinating cross-functional teams and pushing boundaries in project pipelines.",
    position: 8,
    image: "/team/4.jpeg",
    imageMinecraft: "/team/divya_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/divya-sharma-747a93342/",
      instagram: "https://www.instagram.com/its._divya__sharma",
    },
  },
  {
    name: "Bhavit",
    role: "Technical Lead",
    squad: "Operations Squad",
    bio: "Leading technical infrastructure and ensuring high availability across all systems.",
    position: 9,
    image: "/team/6.png",
    imageMinecraft: "/team/bhavit_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/bhavit-rajput-10653b389/",
      instagram: "https://www.instagram.com/bhvt.jsx/",
    },
  },
  {
    name: "Adarsh",
    role: "Event Manager",
    squad: "Operations Squad",
    bio: "MERN & PHP-SQL developer with IIT Guwahati Data Science certification, building scalable full-stack and AI-powered solutions.",
    position: 10,
    image: "/team/7.jpg",
    imageMinecraft: "/team/adarsh_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/adarsh-kumar-srivastava-8198b3387/",
      instagram: "https://www.instagram.com/adarsh___9777",
    },
  },
  {
    name: "Akarshit",
    role: "Outreach Head",
    squad: "Operations Squad",
    bio: "Filled with paranoia for developing something which is completely useless. Rest is good.",
    position: 11,
    image: "/team/8.jpg",
    imageMinecraft: "/team/akarshit_mc.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/akarshit-yadav-7249a7345",
    },
  },
  {
    name: "Ram",
    role: "PR Head",
    squad: "Operations Squad",
    bio: "Shaping external communications and strengthening the club's public profile.",
    position: 12,
    image: "/team/ram_mc.png",
    social: {},
  },
];

// Triple the array so we always have cards on both sides for the illusion
const CARD_W = 260;   // px  (card width)
const GAP = 24;   // px  (gap between cards)
const STEP = CARD_W + GAP;

const looped = [...team, ...team, ...team]; // 36 items

// ── Social SVGs ───────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const AUTO_SPEED = 1.3; // px per animation frame (~78 px/s at 60 fps)

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const paused = useRef(false);   // true while hovered or mid-arrow-click
  const nudging = useRef(false);   // true while smooth-scrolling an arrow

  // Array of booleans, one for each team member
  const [memberStates, setMemberStates] = useState<boolean[]>(() =>
    team.map((_, i) => (Math.floor(i / 2) % 2 === 1)) // Initial pattern: 2 normal, 2 mc
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberStates(prev => {
        const next = [...prev];
        // Randomly pick 1-3 members to toggle
        const count = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * team.length);
          next[idx] = !next[idx];
        }
        return next;
      });
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  // ── Infinite-wrap helper ──────────────────────────────────────────────────
  const wrapIfNeeded = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const midStart = team.length * STEP;
    const midEnd = midStart + team.length * STEP;
    if (el.scrollLeft < STEP * 2) el.scrollLeft += team.length * STEP;
    else if (el.scrollLeft >= midEnd - STEP * 2) el.scrollLeft -= team.length * STEP;
  }, []);

  // ── RAF auto-scroll loop ──────────────────────────────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Start at middle copy
    el.scrollLeft = team.length * STEP;

    const tick = () => {
      if (!paused.current && !nudging.current) {
        el.scrollLeft += AUTO_SPEED;
        wrapIfNeeded();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [wrapIfNeeded]);

  // ── Arrow buttons ─────────────────────────────────────────────────────────
  const scroll = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    nudging.current = true;
    el.scrollBy({ left: dir === "left" ? -STEP : STEP, behavior: "smooth" });
    setTimeout(() => {
      nudging.current = false;
      wrapIfNeeded();
    }, 520);
  }, [wrapIfNeeded]);

  // ── Pause/resume on hover ─────────────────────────────────────────────────
  const pause = useCallback(() => { paused.current = true; }, []);
  const resume = useCallback(() => { paused.current = false; }, []);

  // handleScroll kept for the native scroll event (warp only when arrow-nudge done)
  const handleScroll = useCallback(() => {
    if (!nudging.current) wrapIfNeeded();
  }, [wrapIfNeeded]);

  return (
    <section id="team" className="py-16 bg-zinc-900 overflow-hidden relative">
      {/* Background Image */}
      <img
        src="/assets/team/minecraft.jpg"
        alt="Team Backdrop"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80"
      />
      {/* Overlay for readability - much lighter and cleaner */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Section Corner Assets */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-4 -left-4 md:-left-8 z-20 w-24 md:w-48 pointer-events-none opacity-60"
        >
          <img src="/assets/hero/date.png" alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-4 -right-4 md:-right-8 z-20 w-24 md:w-48 pointer-events-none opacity-60"
        >
          <img src="/assets/hero/register1.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Heading */}
        <SectionHeader 
        title="THE QUANTA CREW" 
        subtext="Meet the Innovators" 
        className="pt-10"
      />

      {/* Carousel wrapper */}
      <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

        {/* ← Arrow — always visible */}
        <button
          id="team-scroll-left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full
                     bg-zinc-900 border-2 border-white/10 text-white
                     hover:border-minecraft-green hover:text-minecraft-green
                     active:scale-95 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* → Arrow — always visible */}
        <button
          id="team-scroll-right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full
                     bg-zinc-900 border-2 border-white/10 text-white
                     hover:border-minecraft-green hover:text-minecraft-green
                     active:scale-95 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto no-scrollbar gap-6 px-16 pb-10"
          style={{ scrollBehavior: "auto" }}  /* we control smooth manually */
        >
          {looped.map((member, i) => (
            <div
              key={i}
              className="group relative shrink-0"
              style={{ width: CARD_W, aspectRatio: "3/4", height: 540 }}
            >
              <MinecraftProfileCard
                name={member.name}
                role={member.role}
                squad={member.squad}
                description={member.bio}
                image={member.image}
                minecraftImage={member.imageMinecraft}
                isMinecraft={memberStates[i % team.length]}
                githubUrl={member.social.github}
                linkedinUrl={member.social.linkedin}
                instagramUrl={member.social.instagram}
                theme={member.squad === "Operations Squad" ? "orange-gold" : "blue-green"}
              />

              {/* Train coupler bar decoration */}
              <div className="absolute top-1/2 -right-3 w-3 h-1 bg-zinc-800 z-0" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Rail track decoration */}
      <div className="absolute bottom-20 left-0 right-0 h-px opacity-30 pointer-events-none"
        style={{ background: "repeating-linear-gradient(to right,#3f3f46 0,#3f3f46 24px,transparent 24px,transparent 40px)" }} />
    </section>
  );
}
