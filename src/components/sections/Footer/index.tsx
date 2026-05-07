"use client";

import { motion } from "framer-motion";
import { SiInstagram, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* 👾 Top Grass Block Strip */}
      <div className="h-[20px] w-full relative z-30 flex flex-col shadow-[0_0_20px_#22c55e]">
        <div className="h-[12px] w-full bg-[#4ade80] border-b-2 border-[#15803d]" />
        <div className="h-[8px] w-full bg-[#3d1f00]" />
      </div>

      {/* 📜 Event Marquee Bar (Photo Format) */}
      <div className="w-full bg-gradient-to-r from-[#003366] via-[#006666] to-[#008080] border-y-2 border-[#88eeff] py-2 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-marquee px-4">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-minecraft text-[10px] text-white tracking-[1px] flex items-center gap-8 mx-4">
              <span>QUANTA CRAFT 1.0 IS HERE!</span>
              <span className="text-[#88eeff]">~</span>
              <span>MAY 25-26</span>
              <span className="text-[#88eeff]">~</span>
              <span>48 HOURS OF BUILDING</span>
              <span className="text-[#88eeff]">~</span>
              <span>JOIN THE ADVENTURE!</span>
              <span className="text-[#88eeff] mx-4">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* 📏 Divider line */}
      <div className="w-full h-[1px] bg-white/10 relative z-20" />

      {/* Main Footer Container */}
      <div className="jungle-footer-bg pt-12 pb-0 relative">
        <div className="mossy-overlay" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8"
          >
            {/* [Col 1 - Brand] */}
            <div className="flex flex-col pr-8 mb-8 lg:mb-0 bg-black/30 p-4 backdrop-blur-[2px]">
              <img
                src="/assets/footer/footer logo.png"
                alt="QuantCraft Logo"
                className="h-16 w-auto mb-6 object-contain self-start filter drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="footer-heading !mb-3">FOLLOW US</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { Icon: SiX, href: "#", label: "NEXIDO" },
                      { Icon: FaLinkedin, href: "#", label: "NEXIDO" },
                      { Icon: SiInstagram, href: "#", label: "NEXIDO" },
                      { Icon: SiInstagram, href: "#", label: "BUILDER BASE" }
                    ].map(({ Icon, href, label }, idx) => (
                      <a 
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[36px] h-[36px] flex items-center justify-center border-2 border-[#67e8f9] rounded-none bg-[rgba(103,232,249,0.1)] text-[#67e8f9] transition-all duration-200 hover:bg-[#67e8f9] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#67e8f9] hover:-translate-y-[3px]"
                        title={label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* [Col 2 - Quick Links] */}
            <div className="lg:border-l lg:border-white/10 pl-12 mb-8 lg:mb-0 bg-black/25 p-4 backdrop-blur-[2px]">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Tracks', 'Prizes', 'FAQs'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="footer-link-pixel">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* [Col 3 - Contact Us] */}
            <div className="lg:border-l lg:border-white/10 pl-12 mb-8 lg:mb-0 bg-black/20 p-4 backdrop-blur-[2px]">
              <h3 className="footer-heading">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="footer-label mb-1">Email</span>
                  <a href="mailto:eren.techfest@gmail.com" className="font-exo text-[14px] text-[#cccccc] hover:text-[#67e8f9] transition-colors tracking-wide">
                    eren.techfest@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="footer-label mb-1">Phone</span>
                  <span className="font-exo text-[14px] text-[#cccccc] tracking-widest">+91 9306576649</span>
                </div>
                <div className="flex flex-col">
                  <span className="footer-label mb-1">Address</span>
                  <span className="font-exo text-[14px] text-[#cccccc] leading-relaxed">
                    GALGOTIAS UNIVERSITY, PLOT NO. 2, YAMUNA EXPY, GREATER NOIDA, UP 203201
                  </span>
                </div>
              </div>
            </div>

            {/* [Col 4 - Map] */}
            <div className="lg:border-l lg:border-white/10 pl-12 bg-black/15 p-4 backdrop-blur-[2px]">
              <h3 className="footer-heading flex items-center gap-2">
                <span className="text-xl">📍</span> FIND US
              </h3>
              <div className="bg-[#0a0a0a] border-[3px] border-[#67e8f9] shadow-[0_0_15px_#67e8f9,inset_0_0_10px_rgba(103,232,249,0.1)] rounded-none p-1 overflow-hidden h-[200px] relative group">
                <iframe
                  className="w-full h-full border-0 transition-all duration-500"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.387114631383!2d77.53484217625126!3d28.377317675806653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc66264903333%3A0xc3c5d6c8b093f412!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1714742400000!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 👾 Copyright Bar */}
        <div className="w-full bg-gradient-to-r from-[#003366] via-[#006666] to-[#008080] py-4 px-6 relative z-10 border-t-2 border-[#88eeff]">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="font-minecraft text-[10px] text-white tracking-[1px] text-center leading-loose uppercase">
              © 2026 QUANTCRAFT • ORGANIZED BY NEXIDO × BUILDERBASE × QUANTA CLUB
              <br />
              <span className="text-white opacity-80 text-[8px] tracking-[1px]">ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
