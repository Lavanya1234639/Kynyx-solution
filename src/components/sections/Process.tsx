"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Search, Paintbrush2, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/data";

const iconMap: Record<string, React.ElementType> = { Search, Paintbrush2, Code2, Rocket };

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="process" ref={ref} className="relative py-20 lg:py-28 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08091f]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            A process built for
            <span className="gradient-text"> predictable success</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No surprises. No scope creep. Just disciplined execution that delivers what we promise.
          </p>
        </motion.div>

        {/* Desktop: Horizontal flow — NO connecting line */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Code2;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Phase indicator */}
                  <div className="relative flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                        borderColor: `${step.color}40`,
                      }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 30px ${step.color}40` }} />
                    </motion.div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white z-20" style={{ background: step.color }}>
                      {i + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-2xl border border-white/6 bg-white/[0.025] group-hover:bg-white/[0.04] group-hover:border-white/12 transition-all duration-300 card-hover">
                    <div className="text-xs font-mono mb-1.5" style={{ color: step.color + "99" }}>
                      {step.duration}
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{step.description}</p>
                    <div className="space-y-1.5">
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.color }} />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Code2;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{ background: `${step.color}20`, borderColor: `${step.color}40` }}>
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 w-px mt-3" style={{ background: `linear-gradient(to bottom, ${step.color}30, transparent)` }} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-xs font-mono mb-1" style={{ color: step.color + "99" }}>{step.duration}</div>
                  <h3 className="text-white font-bold text-base mb-1.5">{step.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((d) => (
                      <span key={d} className="text-xs px-2.5 py-1 rounded-full text-slate-400 border border-white/8 bg-white/[0.03]">{d}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
