"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section py-32 px-4">
      <div className="about-header mt-20 relative">
        {/* Banner Ropes */}
        <div className="absolute top-[-100px] left-[15%] w-[4px] h-[100px] bg-[#3e2723] border-l-2 border-[#2e1a12] border-r-2 border-[#5d4037] z-10" />
        <div className="absolute top-[-100px] right-[15%] w-[4px] h-[100px] bg-[#3e2723] border-l-2 border-[#2e1a12] border-r-2 border-[#5d4037] z-10" />
        <h2 data-corner-text="Experience Premium">
          ABOUT QUANTCRAFT
        </h2>
      </div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text text-zinc-900 font-minecraft text-[14px] font-bold leading-[1.8]"
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
              src="/assets/college1.png"
              alt="College Campus"
              className="about-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
