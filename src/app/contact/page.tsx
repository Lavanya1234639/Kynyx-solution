"use client";

import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data";

const budgetRanges = ["< $10K", "$10K–$30K", "$30K–$75K", "$75K–$150K", "$150K+"];
const serviceTypes = ["Web App", "Mobile App", "Cloud/DevOps", "AI/ML", "UI/UX Design", "Consulting"];

type FormState = "idle" | "submitting" | "success";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  services?: string;
  budget?: string;
}

function validate(data: {
  name: string; email: string; company: string; message: string;
  selectedServices: string[]; selectedBudget: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email";
  if (!data.company.trim()) errors.company = "Company name is required";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 20) errors.message = "Please describe your project in at least 20 characters";
  if (data.selectedServices.length === 0) errors.services = "Please select at least one service";
  if (!data.selectedBudget) errors.budget = "Please select a budget range";
  return errors;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const toggleService = (s: string) =>
    setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const e = validate({ ...fields, selectedServices, selectedBudget });
    setErrors(e);
  };

  const handleChange = (field: string, value: string) => {
    setFields(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const e = validate({ ...fields, [field]: value, selectedServices, selectedBudget });
      setErrors(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, message: true, services: true, budget: true });
    const e2 = validate({ ...fields, selectedServices, selectedBudget });
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;
    setFormState("submitting");
    await new Promise(r => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <PageLayout
      badge="Let's Talk"
      title="Start Your"
      titleHighlight="Next Project"
      description="Tell us what you're building. We typically respond within 4 business hours with a clear path forward."
      accentColor="#3B82F6"
    >
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: Mail, label: "Email us", value: siteConfig.email, desc: "Response within 4 hours" },
                { icon: Phone, label: "Call us", value: siteConfig.phone, desc: "Mon–Fri, 9am–6pm EST" },
                { icon: MapPin, label: "Headquarters", value: "Patna, Bihar, India", desc: "Serving clients globally" },
              ].map(({ icon: Icon, label, value, desc }) => (
                <div key={label} className="flex gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all group card-hover">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs">{desc}</div>
                  </div>
                </div>
              ))}

              {/* What to expect */}
              <div className="p-6 rounded-2xl border border-white/6 bg-white/[0.02] mt-6">
                <h3 className="text-white font-bold text-sm mb-4">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We review your brief within 4 hours",
                    "Schedule a 30-min discovery call",
                    "Receive a tailored proposal in 48 hours",
                    "Kick off your project with a dedicated team",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-blue-400">{i + 1}</div>
                      <span className="text-slate-400 text-xs leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-green-500/20 bg-green-500/[0.03]"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">We've received your brief and will respond within 4 business hours with a clear path forward.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] space-y-6">
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Full Name <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        value={fields.name}
                        onChange={e => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="John Smith"
                        className={`input-field ${errors.name && touched.name ? "error" : ""}`}
                      />
                      {errors.name && touched.name && (
                        <p className="error-text"><AlertCircle size={11} />{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Company <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        value={fields.company}
                        onChange={e => handleChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        placeholder="Acme Inc."
                        className={`input-field ${errors.company && touched.company ? "error" : ""}`}
                      />
                      {errors.company && touched.company && (
                        <p className="error-text"><AlertCircle size={11} />{errors.company}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Work Email <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={e => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="john@company.com"
                      className={`input-field ${errors.email && touched.email ? "error" : ""}`}
                    />
                    {errors.email && touched.email && (
                      <p className="error-text"><AlertCircle size={11} />{errors.email}</p>
                    )}
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3">Services Needed <span className="text-red-400">*</span></label>
                    <div className="flex flex-wrap gap-2">
                      {serviceTypes.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => { toggleService(s); setTouched(p => ({ ...p, services: true })); }}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                            selectedServices.includes(s)
                              ? "bg-blue-500/20 border-blue-500/50 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                              : "bg-white/[0.02] border-white/8 text-slate-400 hover:border-white/20 hover:text-slate-300"
                          }`}
                        >{s}</button>
                      ))}
                    </div>
                    {errors.services && touched.services && (
                      <p className="error-text mt-2"><AlertCircle size={11} />{errors.services}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3">Budget Range <span className="text-red-400">*</span></label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => { setSelectedBudget(b); setTouched(p => ({ ...p, budget: true })); }}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                            selectedBudget === b
                              ? "bg-violet-500/20 border-violet-500/50 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                              : "bg-white/[0.02] border-white/8 text-slate-400 hover:border-white/20 hover:text-slate-300"
                          }`}
                        >{b}</button>
                      ))}
                    </div>
                    {errors.budget && touched.budget && (
                      <p className="error-text mt-2"><AlertCircle size={11} />{errors.budget}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Project Brief <span className="text-red-400">*</span></label>
                    <textarea
                      rows={5}
                      value={fields.message}
                      onChange={e => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="Tell us about your project — what you're building, key challenges, and your ideal timeline..."
                      className={`input-field resize-none ${errors.message && touched.message ? "error" : ""}`}
                    />
                    <div className="flex items-center justify-between mt-1">
                      {errors.message && touched.message ? (
                        <p className="error-text"><AlertCircle size={11} />{errors.message}</p>
                      ) : <span />}
                      <span className="text-xs text-slate-600">{fields.message.length} chars</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {formState === "submitting" ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending your brief...</>
                    ) : (
                      <>Send Project Brief <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-center text-slate-600 text-xs">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
