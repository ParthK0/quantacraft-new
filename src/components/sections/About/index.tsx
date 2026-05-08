"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="about-section py-0 px-4 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/assets/about/mp_.mp4" type="video/mp4" />
      </video>

      <SectionHeader
        title="ABOUT QUANTCRAFT"
        subtext="Build. Solve. Conquer."
        className="mt-20"
      />

      <div className="about-content relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text text-[#e2e8f0] font-minecraft text-[10px] md:text-[14px] leading-[2] uppercase tracking-widest bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-white/5 shadow-2xl"
        >
          <p className="mb-8">
            QuantCraft 1.0 is the next evolution of Rajasthan's biggest student-run hackathon—a build space where students and innovators from across the country come together to create impactful, real-world tech solutions.
          </p>
          <p className="mb-8">
            More than just coding, it is a platform to explore ideas, sharpen skills, and grow with a driven community—whether you are just starting out or building complex systems.
          </p>
          <p>
            Enter QuantCraft and shape the future, one idea at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-image-container"
        >
          <div className="relative">
            <img
              src="/assets/college3.png"
              alt="College Campus"
              className="about-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
