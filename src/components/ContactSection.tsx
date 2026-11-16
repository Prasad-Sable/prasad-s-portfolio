"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6c42e4]"></span>
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#a78bfa]">
              Initiate Collaboration
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">[05]</span>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Copy Box */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                  Open for Opportunities
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight mb-3">
                  LET'S BUILD <span className="text-[#a78bfa]">INTELLIGENT</span> SYSTEMS.
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Have an AI project, agentic workflow architecture, or collaboration opportunity? Feel free to reach out directly.
                </p>
              </div>

              {/* Click to Copy Email Card */}
              <div
                onClick={handleCopyEmail}
                className="p-5 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-[#6c42e4]/50 cursor-pointer transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-[#a78bfa] transition-colors">
                    Direct Email
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#06b6d4] flex items-center gap-1">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10b981]" />
                        Copied to clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Click to copy
                      </>
                    )}
                  </span>
                </div>
                <div className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#c4b5fd] transition-colors break-all">
                  {personal.email}
                </div>
              </div>

              {/* Direct Contact Points (Phone & Location side-by-side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/20 transition-all">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#06b6d4] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Phone</span>
                    <a href={`tel:${personal.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#06b6d4] transition-colors truncate block">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/20 transition-all">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#a78bfa] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Badges Grid (aligned to bottom!) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/30 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 group"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-[#06b6d4]/50 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#06b6d4]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="/Prasad_Sable_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-2xl bg-[#6c42e4]/10 border border-[#6c42e4]/30 hover:border-[#a78bfa] text-xs font-semibold text-[#c4b5fd] hover:text-white transition-all hover:-translate-y-0.5 group"
              >
                <FileText className="w-4 h-4 text-[#a78bfa]" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-[#a78bfa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="h-full p-8 sm:p-10 rounded-3xl bg-[#0c0c12] border border-white/10 flex flex-col justify-between space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6c42e4] text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6c42e4] text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="AI Project / GenAI Engineering Role / Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6c42e4] text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Message Overview
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project, goals, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6c42e4] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6c42e4] to-[#06b6d4] text-white font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 text-center text-xs font-semibold text-[#10b981] animate-in fade-in">
                  ✓ Thank you! Your message has been prepared. I will connect back shortly.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Building intelligent systems, one idea at a time.
          </p>
        </div>

      </div>
    </section>
  );
}
