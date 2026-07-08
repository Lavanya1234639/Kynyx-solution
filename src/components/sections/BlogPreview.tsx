"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data";

export default function BlogPreview() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured || p.id !== featured?.id).slice(0, 2);

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <div className="tag-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Engineering Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Insights from the
              <br />
              <span className="gradient-text">people who build</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex-shrink-0"
          >
            View all articles <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Featured post */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="lg:col-span-2 group relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] cursor-pointer transition-all duration-300 hover:border-white/15"
            >
              {/* Hero area */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-40`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[100px] font-black opacity-10 text-white leading-none">
                    {featured.category.slice(0, 2)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="tag-badge">{featured.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock size={11} />{featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} />{featured.publishedAt}</span>
                </div>
                <h3 className="text-white font-bold text-xl leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{featured.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                      {featured.author.avatar}
                    </div>
                    <div>
                      <div className="text-white text-xs font-medium">{featured.author.name}</div>
                      <div className="text-slate-500 text-[10px]">{featured.author.role}</div>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Side posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex-1 relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] cursor-pointer transition-all duration-300 hover:border-white/15 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "rgba(59,130,246,0.1)", color: "#93C5FD", border: "1px solid rgba(59,130,246,0.2)" }}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[9px] font-bold text-white">
                      {post.author.avatar}
                    </div>
                    <span className="text-slate-500 text-xs">{post.author.name}</span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
