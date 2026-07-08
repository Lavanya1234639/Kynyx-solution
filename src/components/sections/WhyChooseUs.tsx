"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Award, Users, Globe, TrendingUp } from "lucide-react";
import { whyChooseUs } from "@/data";

const iconMap: Record<string, React.ElementType> = { Shield, Zap, Award, Users, Globe, TrendingUp };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#05081a] to-[#020617]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Sticky header */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="tag-badge mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Why Kynyx
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                The standard<br />
                <span className="gradient-text">others benchmark</span><br />
                against.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                We&apos;ve built our reputation on one principle: deliver products that outlast the engagement. That means uncompromising quality, honest communication, and real accountability.
              </p>

              {/* Visual: score card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400 font-medium">Client Satisfaction Score</span>
                  <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">Q4 2024</span>
                </div>
                <div className="flex items-end gap-4">
                  <div className="text-6xl font-black gradient-text">98</div>
                  <div className="text-slate-400 pb-2">/ 100 <br /><span className="text-xs">NPS Score</span></div>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Communication", value: 99 },
                    { label: "Code Quality", value: 97 },
                    { label: "On-Time Delivery", value: 96 },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-28 flex-shrink-0">{m.label}</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-8 text-right">{m.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
