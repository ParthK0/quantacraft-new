"use client";

import { useState, useEffect } from "react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import AvatarAssistant from "@/components/AvatarAssistant";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <LoadingScreen />


      {/* Texture Bar at top */}
      <div className="fixed top-0 left-0 w-full h-[14px] bg-[url('https://lh3.googleusercontent.com/pw/AP1GczPSZFithNMgw3p0NfejCpVSDTcs4uBveqBbFIQhIYpNpQmHtH3hdvbLKfEVlYf08kgjmMfhrvW6q5gTzl0wiluQnke2OSErtyz9RDP-R6-5-4TiPN9xICRt3IDNc5uoaUlRfsRDFyLXIzQh5_3BlLUQ=w16-h16-s-no-gm?authuser=0')] bg-repeat-x bg-contain z-[60] shadow-[inset_0_-4px_6px_rgba(0,0,0,0.5)]" />

      {/* Navigation with Hanging Signs & Lanterns */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-[14px] left-0 right-0 z-50 flex justify-between items-start px-12 pointer-events-none"
      >
        {/* Left Lantern */}
        <div className="lantern-container">
          <div className="lantern-chain" />
          <div className="lantern" />
        </div>

        {/* Center Signs - Spread Out */}
        <div className="flex-1 flex justify-around items-start pt-0 px-8 pointer-events-auto">
          {[
            { label: "ABOUT", href: "#about" },
            { label: "TRACKS", href: "#tracks", isNew: true },
            { label: "TIMELINE", href: "#timeline" },
            { label: "PRIZES", href: "#prizes" },
            { label: "TEAM", href: "#team" },
            { label: "FAQ", href: "#faq" }
          ].map((item, i) => (
            <div key={i} className="nav-sign-container">
              <div className="sign-chain" />
              <a href={item.href} className="nav-sign hover:brightness-110 transition-all">
                {item.label}
                {item.isNew && <span className="new-tag">NEW</span>}
              </a>
            </div>
          ))}
        </div>

        {/* Right Lantern */}
        <div className="lantern-container">
          <div className="lantern-chain" />
          <div className="lantern" />
        </div>
      </motion.nav>

      {/* Sections */}
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Team />
      <FAQ />
      <Footer />

      {/* Persistent Avatar Assistant */}
      <AvatarAssistant />
    </main>
  );
}

