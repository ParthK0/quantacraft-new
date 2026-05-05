"use client";

import { motion } from "framer-motion";
import { Trophy, Gift, Globe } from "lucide-react";

export default function Prizes() {
  return (
    <section id="prizes" className="py-32 px-4 relative overflow-hidden">
      <div className="text-center mb-24 pt-20">
        <h2 data-corner-text="Loot Table Revealed">TOTAL POOL: ₹35,000</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PrizeCard
          rank="2nd Place"
          amount="₹10,000"
          icon="🥈"
          color="border-zinc-400"
          delay={0.1}
        />
        <PrizeCard
          rank="1st Place"
          amount="₹15,000"
          icon="🥇"
          color="border-minecraft-gold"
          featured
          delay={0}
        />
        <PrizeCard
          rank="3rd Place"
          amount="₹5,000"
          icon="🥉"
          color="border-orange-700"
          delay={0.2}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-zinc-900 border border-white/5 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
            <Gift className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-pixel text-lg">ALL PARTICIPANTS</h3>
            <p className="text-zinc-400">Exclusive Goodies & Certificates</p>
          </div>
        </div>
        <div className="p-8 bg-zinc-900 border border-white/5 rounded-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-pixel text-lg">SPECIAL PRIZE</h3>
            <p className="text-zinc-400">Sponsor Domain Prizes (TBA)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ rank, amount, icon, color, featured, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`p-10 bg-zinc-900 border-4 ${color} rounded-3xl relative overflow-hidden flex flex-col items-center text-center ${featured ? "md:scale-110 md:-translate-y-4 shadow-[0_0_50px_-12px_rgba(255,215,0,0.3)]" : ""}`}
    >
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="font-pixel text-xl mb-2">{rank}</h3>
      <div className="text-4xl font-bold text-white mb-4">{amount}</div>
      <div className="w-full h-px bg-white/10 my-4" />
      <ul className="text-zinc-400 text-sm space-y-2">
        <li>Trophy of Excellence</li>
        <li>Special Swag Kit</li>
        <li>Priority Internship Track</li>
      </ul>
    </motion.div>
  );
}
