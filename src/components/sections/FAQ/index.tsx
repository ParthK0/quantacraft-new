"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GiWarPick } from "react-icons/gi";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Who can participate?",
    a: "Any student enrolled in a college or university across India. All skill levels welcome — beginners to advanced.",
  },
  {
    q: "What is the team size?",
    a: "Teams of 2–4 members. Solo participation not allowed.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. QuantCraft is completely free to participate in.",
  },
  {
    q: "What do I need to submit?",
    a: "A PPT by May 15, followed by the final project by May 20.",
  },
  {
    q: "Will accommodation be provided?",
    a: "Details will be shared with shortlisted teams. Stay tuned.",
  },
  {
    q: "What tracks can I build for?",
    a: "AI/ML, Cybersecurity, Blockchain, Game Dev.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 overflow-hidden">
      {/* 📹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/FAQs/FAQs.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <SectionHeader 
          title="FAQs" 
          subtext="" 
          className="pt-0"
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative border-[3px] border-[#A000FF] bg-[#0a0a0a] overflow-hidden shadow-[0_0_15px_rgba(160,0,255,0.2)]">
      {/* 🖼️ Question Frame Backdrop */}
      <div 
        className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/FAQs/FAQs qus frame backdrop.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full p-5 flex items-center justify-between text-left z-10"
      >
        <span className="font-minecraft text-[11px] text-white tracking-[1px] drop-shadow-[2px_2px_0_#A000FF] uppercase">
          {faq.q}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-45 scale-110" : ""}`}>
          <GiWarPick className="w-6 h-6 text-white drop-shadow-[2px_2px_0_#A000FF]" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="relative overflow-hidden z-10"
          >
            <div className="p-5 pt-0 border-t-2 border-[#A000FF]/30">
              <div className="bg-black/40 p-4 border border-[#A000FF]/20">
                <p className="font-pixel text-[13px] text-zinc-200 leading-relaxed tracking-wider">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
