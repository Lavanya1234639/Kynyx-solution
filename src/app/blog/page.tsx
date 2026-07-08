"use client";

import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/data";
import Link from "next/link";

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured || p.id !== featured?.id);

  return (
    <PageLayout
      badge="Insights & Engineering"
      title="Ideas Worth"
      titleHighlight="Reading"
      description="Deep dives into architecture, engineering craft, and the lessons we've learned shipping products at scale."
      accentColor="#8B5CF6"
    >
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured post */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden border border-white/8 bg-white/[0.02] card-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="tag-badge">{featured.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:gradient-text transition-all duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                      {featured.author.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{featured.author.name}</div>
                      <div className="text-xs text-slate-500">{featured.author.role} · {featured.publishedAt}</div>
                    </div>
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-violet-500 transition-all shadow-glow-blue">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
                {/* Decorative visual */}
                <div className="hidden md:flex items-center justify-center">
                  <div className={`relative w-64 h-64 rounded-2xl bg-gradient-to-br ${featured.gradient} opacity-20`}>
                    <div className="absolute inset-4 rounded-xl border border-white/10" />
                    <div className="absolute inset-8 rounded-lg border border-white/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-black text-white/10">01</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All posts grid */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8">All Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 card-hover"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${post.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="tag-badge text-[10px]">{post.category}</span>
                      <span className="text-xs text-slate-600 flex items-center gap-1">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-white/8 bg-white/[0.03] text-slate-500">
                          <Tag size={8} /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-[10px] font-bold text-white`}>
                          {post.author.avatar}
                        </div>
                        <span className="text-xs text-slate-500">{post.author.name}</span>
                      </div>
                      <span className="text-xs text-slate-600">{post.publishedAt}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
