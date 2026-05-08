"use client";

import { useState, useEffect } from "react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Sponsors from "@/components/sections/Sponsors";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import AvatarAssistant from "@/components/AvatarAssistant";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import LoadingScreen from "@/components/LoadingScreen";
import SectionDivider from "@/components/ui/SectionDivider";
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
    <>
      <LoadingScreen />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[9999] flex justify-between items-start px-4 md:px-12 pt-4 pointer-events-none"
      >
        {/* Left Lantern */}
        <div className="lantern-container hidden lg:block -mt-4">
          <div className="lantern-chain" />
          <div className="lantern" />
        </div>

        {/* Center Signs */}
        <div className="flex-1 flex justify-evenly items-start pt-0 px-1 md:px-2 pointer-events-auto">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Tracks", href: "#tracks" },
            { label: "Timeline", href: "#timeline" },
            { label: "Contact", href: "#footer" }
          ].map((item, i) => (
            <div key={i} className="nav-sign-container relative scale-[0.65] sm:scale-[0.85] md:scale-100 origin-top" style={{ animationDelay: `${i * -0.8}s` }}>
              <div className="sign-rope left-rope" />
              <div className="sign-rope right-rope" />
              <a href={item.href} className="nav-sign hover:brightness-110 transition-all relative">
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right Lantern */}
        <div className="lantern-container hidden lg:block -mt-4">
          <div className="lantern-chain" />
          <div className="lantern" />
        </div>
      </motion.nav>

      <main className="relative">
        {/* Sections */}
      <Hero />
      <ScrollingMarquee />
      <About />
      <SectionDivider />
      <Tracks />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Prizes />
      <SectionDivider />
      <Sponsors />
      <SectionDivider />
      <Team />
      <SectionDivider />
      <FAQ />
      <Footer />
    </main>

    {/* Persistent Avatar Assistant */}
    <AvatarAssistant />
    </>
  );
}
