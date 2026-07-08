"use client";

import { motion } from "framer-motion";
import { DollarSign, Heart, GraduationCap, ShoppingCart, Zap, Truck, Building2, Play } from "lucide-react";
import { industries } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  DollarSign, Heart, GraduationCap, ShoppingCart, Zap, Truck, Building2, Play,
};

const gradients = [
  "from-blue-500/20 to-cyan-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-amber-500/20 to-yellow-500/20",
  "from-purple-500/20 to-violet-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-orange-500/20 to-amber-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-red-500/20 to-rose-500/20",
];

const accentColors = ["#3B82F6", "#F43F5E", "#F59E0B", "#8B5CF6", "#10B981", "#F97316", "#6366F1", "#EF4444"];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Deep expertise across
            <br />
            <span className="gradient-text">critical industries</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don&apos;t just write code — we understand your domain, your users, and the regulatory and technical constraints specific to your market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Zap;
            const accent = accentColors[i];

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl border border-white/6 bg-gradient-to-b from-white/[0.03] to-transparent cursor-pointer overflow-hidden transition-all duration-300 hover:border-white/15"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at center, ${accent}08, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${accent}20, ${accent}08)`,
                    border: `1px solid ${accent}25`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                <h3 className="relative text-white font-bold text-base mb-1.5">{industry.name}</h3>
                <p className="relative text-slate-500 text-xs leading-relaxed">{industry.desc}</p>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
