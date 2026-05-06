"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, MessageSquare, ExternalLink } from "lucide-react";
import { SiGithub, SiInstagram, SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* 👾 Top Grass Block Strip */}
      <div className="h-[20px] w-full relative z-30 flex flex-col shadow-[0_0_20px_#22c55e]">
        <div className="h-[12px] w-full bg-[#4ade80] border-b-2 border-[#15803d]" />
        <div className="h-[8px] w-full bg-[#3d1f00]" />
      </div>

      {/* 📜 Event Marquee Bar (Photo Format) */}
      <div className="w-full bg-gradient-to-r from-[#003366] via-[#006666] to-[#008080] border-y-2 border-[#88eeff] py-3 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-marquee px-4">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-pixel text-[12px] text-white tracking-[2px] flex items-center gap-8 mx-4">
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

      {/* Main Footer Container */}
      <div className="jungle-footer-bg pt-24 pb-0 relative">
        <div className="mossy-overlay" />
        <div className="creeper-watermark" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-20"
          >
            {/* [Col 1 - Brand] */}
            <div className="flex flex-col pr-8 mb-12 lg:mb-0">
              <img 
                src="/assets/footer/footer logo.png" 
                alt="QuantCraft Logo" 
                className="h-20 w-auto mb-6 object-contain self-start filter drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]" 
              />
              <div className="font-pixel text-[9px] text-[#4ade80] tracking-[3px] mb-8 leading-relaxed">
                INNOVATE • ELEVATE • TRANSFORM
              </div>

              {/* 🍌 Gemini Nano Banana Block */}
              <div className="flex items-center gap-4 mb-10 group">
                <div className="w-10 h-10 border-2 border-[#fbbf24] p-1 bg-black/40">
                  <img 
                    src="/assets/footer/banana.png" 
                    alt="Banana Block" 
                    className="w-full h-full object-contain image-rendering-pixelated" 
                  />
                </div>
                <div className="font-pixel text-[8px] text-[#fbbf24] leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  POWERED BY<br/>GEMINI NANO
                </div>
              </div>
              
              <div className="">
                <h3 className="footer-heading">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: Mail, href: "mailto:eren.techfest@gmail.com" },
                    { Icon: SiGithub, href: "#" },
                    { Icon: SiInstagram, href: "#" },
                    { Icon: SiDiscord, href: "#" },
                    { Icon: Globe, href: "#" }
                  ].map(({ Icon, href }, idx) => (
                    <a 
                      key={idx} 
                      href={href}
                      className="w-[40px] h-[40px] flex items-center justify-center border-2 border-[#22c55e] rounded-none bg-[rgba(34,197,94,0.1)] text-[#4ade80] transition-all duration-200 hover:bg-[#22c55e] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#22c55e] hover:-translate-y-[3px]"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* [Col 2 - Quick Links] */}
            <div className="lg:border-l-2 lg:border-dashed lg:border-[#166534] pl-12 mb-12 lg:mb-0">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About', 'Tracks', 'Prizes', 'FAQs'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* [Col 3 - Contact Us] */}
            <div className="lg:border-l-2 lg:border-dashed lg:border-[#166534] pl-12 mb-12 lg:mb-0">
              <h3 className="footer-heading">Contact Us</h3>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="footer-label font-pixel text-[10px] mb-1 uppercase tracking-wider">Email:</span>
                  <a href="mailto:eren.techfest@gmail.com" className="font-pixel text-[11px] text-[#e2e8f0] hover:text-[#67e8f9] transition-colors">eren.techfest@gmail.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="footer-label font-pixel text-[10px] mb-1 uppercase tracking-wider">Phone:</span>
                  <span className="font-pixel text-[11px] text-[#e2e8f0] tracking-widest">+91 9306576649</span>
                </div>
                <div className="flex flex-col">
                  <span className="footer-label font-pixel text-[10px] mb-1 uppercase tracking-wider">Address:</span>
                  <span className="font-pixel text-[11px] text-[#e2e8f0] leading-relaxed">
                    GALGOTIAS UNIVERSITY, PLOT NO. 2, YAMUNA EXPY, GREATER NOIDA, UP 203201
                  </span>
                </div>
              </div>
            </div>

            {/* [Col 4 - Map] */}
            <div className="lg:border-l-2 lg:border-dashed lg:border-[#166534] pl-12">
              <h3 className="footer-heading flex items-center gap-2">
                <span className="text-xl">📍</span> FIND US
              </h3>
              <div className="bg-[#0f1a0f] border-[3px] border-[#22c55e] shadow-[0_0_15px_#22c55e,inset_0_0_10px_rgba(34,197,94,0.1)] rounded-none p-1 overflow-hidden h-[200px] relative group">
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
        <div className="w-full bg-[#060e06] py-6 px-6 relative z-10 border-t border-[#166534]">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="font-pixel text-[8px] text-[#4ade80] tracking-[2px] text-center leading-loose">
              © 2026 QUANTCRAFT • ORGANIZED BY NEXIDO × BUILDERBASE × QUANTA CLUB
              <br />
              <span className="opacity-60">ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
