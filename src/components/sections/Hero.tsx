"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Zap, Activity, Shield } from "lucide-react";
import { useRef } from "react";

const dashboardMetrics = [
  { label: "Revenue Growth", value: "+247%", trend: "+12%", color: "#3B82F6", icon: TrendingUp },
  { label: "Active Users", value: "1.2M", trend: "+8K", color: "#8B5CF6", icon: Users },
  { label: "Uptime SLA", value: "99.99%", trend: "All good", color: "#10B981", icon: Shield },
  { label: "Deployments", value: "3,421", trend: "Today: 12", color: "#F59E0B", icon: Zap },
];

const activityItems = [
  { action: "New deployment", project: "FinVerse API v3.2", time: "2m ago", status: "success" },
  { action: "PR merged", project: "Healio Dashboard", time: "14m ago", status: "success" },
  { action: "Alert resolved", project: "EduSync CDN", time: "1h ago", status: "warning" },
];

function FloatingDashboard() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Glow effect behind dashboard */}
      <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-[80px] rounded-full" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(9,14,37,0.98) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Dashboard Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 rounded-full px-3 py-1">
            <Activity size={10} className="text-green-400" />
            Kynyx Command Center
          </div>
          <div className="text-xs text-slate-500">v4.2.1</div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {dashboardMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="relative p-3 rounded-xl border transition-all duration-300"
              style={{
                background: `${metric.color}08`,
                borderColor: `${metric.color}20`,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-xs text-slate-400">{metric.label}</div>
                <metric.icon size={13} style={{ color: metric.color }} />
              </div>
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="text-xs mt-1" style={{ color: metric.color }}>{metric.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Sparkline Chart */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">Performance (30d)</span>
            <span className="text-xs text-emerald-400">↑ 23.4%</span>
          </div>
          <div className="relative h-16">
            <svg width="100%" height="64" viewBox="0 0 540 64" className="overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 C40,45 80,30 120,28 C160,26 200,35 240,22 C280,10 320,18 360,14 C400,10 440,8 480,5 L540,2"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M0,50 C40,45 80,30 120,28 C160,26 200,35 240,22 C280,10 320,18 360,14 C400,10 440,8 480,5 L540,2 L540,64 L0,64 Z"
                fill="url(#chartGrad)"
              />
              {/* Data points */}
              {[
                [0,50],[120,28],[240,22],[360,14],[480,5],[540,2]
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#3B82F6" className="drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
              ))}
            </svg>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="px-4 pb-4 border-t border-white/5 pt-3">
          <div className="text-xs text-slate-400 font-medium mb-2.5">Recent Activity</div>
          <div className="space-y-2">
            {activityItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2.5 text-xs"
              >
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.status === "success" ? "bg-emerald-400" : "bg-yellow-400"}`} />
                <span className="text-slate-300 flex-1">{item.action}</span>
                <span className="text-slate-500 truncate max-w-[120px]">{item.project}</span>
                <span className="text-slate-600 flex-shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute -top-5 -right-6 bg-[#0F172A]/95 border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 size={12} className="text-emerald-400" />
          </div>
          <div>
            <div className="text-white font-medium">Build passed</div>
            <div className="text-slate-500">shopwave-prod · 34s</div>
          </div>
        </div>
      </motion.div>

      {/* Floating tech badge */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -bottom-5 -left-6 bg-[#0F172A]/95 border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="flex -space-x-1">
            {["#3B82F6", "#8B5CF6", "#10B981"].map((color, i) => (
              <div key={i} className="w-5 h-5 rounded-full border border-[#0F172A] flex items-center justify-center text-[8px] font-bold text-white" style={{ background: color }}>
                {["R", "N", "G"][i]}
              </div>
            ))}
          </div>
          <div>
            <div className="text-white font-medium">Stack deployed</div>
            <div className="text-slate-500">React + Node + GCP</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Trusted by 200+ enterprise teams
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[68px] font-black leading-[1.05] tracking-tight text-white mb-6"
            >
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Kynyx Solution is a premium technology consulting firm that engineers transformative digital experiences — from architecture to deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 shimmer-btn text-white font-semibold rounded-xl shadow-glow-blue text-base"
              >
                Start Your Project
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white rounded-xl text-base font-medium transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={10} className="text-white fill-white ml-0.5" />
                </div>
                View Our Work
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EC4899"].map((color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#020617] flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                    >
                      {["SC", "MR", "EW", "DK", "PP"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    <span className="text-white font-medium">4.9/5</span> from 200+ clients
                  </div>
                </div>
              </div>
              <div className="h-px w-16 sm:w-px sm:h-8 bg-white/10" />
              <div className="text-center sm:text-left">
                <div className="text-white font-bold text-lg">$50M+</div>
                <div className="text-slate-400 text-xs">in client revenue generated</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <FloatingDashboard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
