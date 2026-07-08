"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, X, Link as LinkIcon, GitBranch } from "lucide-react";
import { siteConfig, services } from "@/data";
import Image from "next/image";

const footerLinks = {
  Services: services.slice(0, 5).map((s) => ({
    label: s.title,
    href: "#services",
  })),
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Tech Stack", href: "#technologies" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#020617]">
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-14 overflow-hidden rounded-2xl border border-blue-500/20"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(6,182,212,0.12) 100%)",
          }}
        >
          <div className="relative flex flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:text-left">
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Ready to build something{" "}
              <span className="gradient-text">extraordinary?</span>
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-glow-blue"
            >
              Start a Conversation
              <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 border-b border-white/5 pb-10 md:grid-cols-5 md:gap-6">
          <div className="col-span-2">
            <a href="#" className="mb-3 flex items-center">
              <Image
                src="/logo.png"
                alt="Kynyx Solutions"
                width={150}
                height={38}
                className="h-8 w-auto"
              />
            </a>

            <p className="mb-4 max-w-xs text-sm font-medium leading-relaxed text-slate-300">
              Premium technology consulting firm. We build the digital products
              that define the next decade of business.
            </p>

            <div className="space-y-2">
              {[
                { icon: Mail, text: siteConfig.email },
                { icon: Phone, text: siteConfig.phone },
                { icon: MapPin, text: "New York, NY — Global" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
                >
                  <Icon size={14} className="flex-shrink-0 text-blue-400" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              {[
                { icon: GitBranch, href: siteConfig.social.github },
                { icon: X, href: siteConfig.social.twitter },
                { icon: LinkIcon, href: siteConfig.social.linkedin },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
                >
                  <Icon size={12} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs font-medium text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Kynyx Solution. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="mx-0.5 text-red-500">♥</span>
            <span>by the Kynyx Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}