"use client";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 overflow-hidden">
      {/* 📹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-110"
      >
        <source src="/assets/FAQs/FAQs.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay for readability (Reduced opacity for more brightness) */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <SectionHeader
          title="FAQs"
          subtext=""
          className="pt-0"
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group relative border-[3px] border-[#A000FF] bg-[#0a0a0a]/40 overflow-hidden z-10 shadow-[0_0_15px_rgba(160,0,255,0.2)]">
      {/* 🖼️ Card Backdrop (Covers both Question and Answer) */}
      <div
        className="absolute inset-0 opacity-70 group-hover:opacity-60 transition-opacity pointer-events-none -z-10"
        style={{
          backgroundImage: 'url("/assets/FAQs/FAQs qus frame backdrop.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <button
        onClick={onToggle}
        className="relative w-full p-5 flex items-center justify-between text-left z-10"
      >
        <span className="font-minecraft text-[11px] text-white tracking-[1px] drop-shadow-[2px_2px_0_#A000FF] uppercase">
          {faq.q}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-45 scale-110" : ""}`}>
          <GiWarPick className="w-6 h-6 text-white drop-shadow-[2px_2px_0_#A000FF]" />
        </div>
      </button>

      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out z-20 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-5 pt-0">
          <div className="p-4 bg-black/50 border-l-[4px] border-[#A000FF] backdrop-blur-[2px]">
            <p className="font-minecraft text-[11px] text-white leading-relaxed tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
