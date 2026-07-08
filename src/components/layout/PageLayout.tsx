"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const ParticleBackground = dynamic(() => import("@/components/animations/ParticleBackground"), { ssr: false });
const CursorSpotlight = dynamic(() => import("@/components/animations/CursorSpotlight"), { ssr: false });

interface PageLayoutProps {
  children: React.ReactNode;
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  accentColor?: string;
}

export default function PageLayout({ children, badge, title, titleHighlight, description, accentColor = "#3B82F6" }: PageLayoutProps) {
  return (
    <>
      <ParticleBackground />
      <CursorSpotlight />
      <Navbar />
      <main className="relative z-10 page-bg">
        {/* Page Hero Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
            style={{ background: `radial-gradient(ellipse, ${accentColor}, transparent)` }} />
          <div className="absolute top-20 right-0 w-[400px] h-[300px] bg-purple-600/8 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-blue-600/6 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="tag-badge justify-center mx-auto mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
                {badge}
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              {title}
              {titleHighlight && (
                <><br /><span className="gradient-text">{titleHighlight}</span></>
              )}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        </section>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
