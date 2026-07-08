"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Code2, Smartphone, Cloud, Brain, Layers, BarChart3 } from "lucide-react";
import { services } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Smartphone, Cloud, Brain, Layers, BarChart3,
};

export default function Services({ showAll }: { showAll?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#020617]">
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Services built for
            <span className="gradient-text"> enterprise scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From initial concept to production deployment, we cover every layer of modern software development with craftsmanship and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            const isHovered = hovered === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${service.accent}10, ${service.accent}05)`
                    : "rgba(15,23,42,0.4)",
                  borderColor: isHovered ? `${service.accent}40` : "rgba(255,255,255,0.06)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHovered ? `0 20px 60px ${service.accent}15` : "none",
                }}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${service.accent}08, transparent 60%)`,
                  }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-5 relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}20, ${service.accent}10)`,
                      border: `1px solid ${service.accent}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.accent }} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2.5 relative">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 relative">{service.description}</p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5 relative">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300"
                      style={{
                        background: isHovered ? `${service.accent}15` : "rgba(255,255,255,0.04)",
                        color: isHovered ? service.accent : "#94A3B8",
                        border: `1px solid ${isHovered ? service.accent + "30" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.accent}60, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-sm font-medium border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 px-6 py-3 rounded-xl"
          >
            Not sure what you need? Let&apos;s talk
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
