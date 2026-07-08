"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Microsoft", abbr: "MS" },
  { name: "Google", abbr: "GCP" },
  { name: "Amazon", abbr: "AWS" },
  { name: "Stripe", abbr: "STR" },
  { name: "Vercel", abbr: "VCL" },
  { name: "Linear", abbr: "LNR" },
  { name: "Notion", abbr: "NTN" },
  { name: "Figma", abbr: "FGM" },
  { name: "Shopify", abbr: "SHO" },
  { name: "Twilio", abbr: "TWL" },
];

const LogoItem = ({ logo }: { logo: typeof logos[0] }) => (
  <div className="flex-shrink-0 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group mx-3">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[10px] font-bold text-white/50 group-hover:text-white/80 transition-colors">
      {logo.abbr.slice(0, 2)}
    </div>
    <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-300 transition-colors whitespace-nowrap">
      {logo.name}
    </span>
  </div>
);

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-t border-b border-white/5 overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.3em] text-slate-600 uppercase font-medium"
        >
          Trusted by engineering teams at world-class companies
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
