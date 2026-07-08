"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Award, Users, Globe, Zap } from "lucide-react";

const highlights = [
  "Full-cycle product development from concept to production",
  "SOC 2 compliant infrastructure and security practices",
  "Dedicated teams, not outsourced handoffs",
  "Agile process with bi-weekly demos and full transparency",
];

const pillars = [
  { icon: Award, label: "Award-Winning Quality", color: "#3B82F6" },
  { icon: Users, label: "50+ Expert Engineers", color: "#8B5CF6" },
  { icon: Globe, label: "Global Delivery", color: "#06B6D4" },
  { icon: Zap, label: "Rapid Deployment", color: "#10B981" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#020617]">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <motion.div style={{ x }} className="relative">
              {/* Main card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border border-white/8"
                style={{
                  background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)",
                }}
              >
                {/* Team image placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, #0F172A 0%, #1a0533 40%, #0c1a4d 100%)",
                    }}
                  />
                  {/* Abstract team visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-3 p-8">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04 }}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold border"
                          style={{
                            background: `linear-gradient(135deg, ${
                              ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"][i % 5]
                            }20, transparent)`,
                            borderColor: `${
                              ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"][i % 5]
                            }30`,
                            color: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"][i % 5],
                          }}
                        >
                          {["JD", "SR", "MK", "AL", "TP", "RA", "NC", "DH", "EW", "BP", "FG", "KL", "OC", "VM", "HZ"][i]}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white font-semibold">Our Engineering Team</div>
                    <div className="text-slate-400 text-sm">50+ experts across 15 time zones</div>
                  </div>
                </div>

                {/* Pillars grid */}
                <div className="grid grid-cols-2 gap-px bg-white/5">
                  {pillars.map((pillar) => (
                    <div key={pillar.label} className="flex items-center gap-3 p-4 bg-[#0F172A]/60">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${pillar.color}15` }}>
                        <pillar.icon size={14} style={{ color: pillar.color }} />
                      </div>
                      <span className="text-slate-300 text-xs font-medium">{pillar.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass border border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-3xl font-black gradient-text">8+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years building<br />the future</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tag-badge mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                About Kynyx Solution
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Not an agency.
                <br />
                <span className="gradient-text">A product partner.</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                We founded Kynyx because the industry was broken — agencies billing for hours without caring about outcomes. We do the opposite: we treat every client&apos;s product as if it were our own.
              </p>

              <p className="text-slate-400 leading-relaxed mb-8">
                Our team of 50+ engineers, designers, and strategists has shipped over 200 products across 12 industries. We&apos;re obsessed with performance, craftsmanship, and the kind of thoughtful architecture that makes scaling feel effortless.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/services"
                whileHover={{ scale: 1.02, x: 4 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
              >
                Explore what we build
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
