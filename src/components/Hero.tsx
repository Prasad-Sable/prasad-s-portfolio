"use client";

import React from "react";
import { ArrowDownRight, FileText, Send, Sparkles, Terminal, Code2, Cpu, Bot } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, pillars } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center ai-glow-1 overflow-hidden">
      {/* Ambient background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-lg shadow-emerald-500/50"></span>
            {personal.status}
          </div>
        </div>

        {/* Hero Title & Identity */}
        <div className="mb-12">
          {/* Top Role Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-bold text-[#a78bfa] uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" />
            AI ENGINEER & LLM SPECIALIST
          </div>

          {/* Big Highlighted Animated Name Headline (Strictly 1 Single Line) */}
          <div className="mb-4 overflow-hidden">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] tracking-tight leading-none uppercase whitespace-nowrap">
              <span className="animated-name-text drop-shadow-xl">PRASAD SABLE</span>
              <span className="text-[#06b6d4]">.</span>
            </h1>
            <div className="h-[3px] w-48 sm:w-80 bg-gradient-to-r from-[#6c42e4] via-[#06b6d4] to-transparent animated-glow-line mt-3 mb-6"></div>
          </div>

          {/* Compact Smaller Supporting Sub-heading */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-lg shadow-emerald-500/50 shrink-0"></span>
            <h2 className="font-display font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider text-zinc-300">
              Building Intelligent Systems with <span className="text-[#a78bfa]">Agentic AI</span> & <span className="text-[#06b6d4]">RAG</span>.
            </h2>
          </div>

          <p className="max-w-3xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {personal.headline}
          </p>
        </div>

        {/* Action Buttons & Quick Anchors */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-white text-black hover:bg-[#a78bfa] hover:text-white transition-all shadow-xl shadow-white/5 hover:scale-105 active:scale-95"
          >
            Explore Projects
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/[0.04] text-white border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all"
          >
            <Send className="w-4 h-4 text-[#06b6d4]" />
            Contact Me
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-zinc-200 hover:text-white bg-white/[0.06] border border-white/10 hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/10 transition-all shadow-md group"
          >
            <FileText className="w-4 h-4 text-[#a78bfa] group-hover:scale-110 transition-transform" />
            View Resume
            <ArrowDownRight className="w-3.5 h-3.5 -rotate-90 text-zinc-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-white/[0.04] group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#06b6d4] tracking-wider">
                  [{pillar.num}]
                </span>
                {pillar.num === "01" && <Bot className="w-5 h-5 text-[#a78bfa] group-hover:rotate-12 transition-transform" />}
                {pillar.num === "02" && <Cpu className="w-5 h-5 text-[#06b6d4] group-hover:rotate-12 transition-transform" />}
                {pillar.num === "03" && <Code2 className="w-5 h-5 text-[#10b981] group-hover:rotate-12 transition-transform" />}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#a78bfa] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee Banner */}
      <div className="mt-16 w-full py-4 bg-white/[0.02] border-y border-white/5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[
            "GENERATIVE AI",
            "LANGCHAIN & LANGGRAPH",
            "RETRIEVAL-AUGMENTED GENERATION (RAG)",
            "AGENTIC WORKFLOWS",
            "MODEL CONTEXT PROTOCOL (MCP)",
            "FAISS VECTOR RETRIEVAL",
            "FASTAPI & ASYNCIO",
            "GEMINI 2.0 FLASH",
            "OLLAMA LOCAL LLMS",
            "COMPUTER VISION & MEDIAPIPE",
            "GENERATIVE AI",
            "LANGCHAIN & LANGGRAPH",
            "RETRIEVAL-AUGMENTED GENERATION (RAG)",
            "AGENTIC WORKFLOWS",
            "MODEL CONTEXT PROTOCOL (MCP)",
            "FAISS VECTOR RETRIEVAL",
            "FASTAPI & ASYNCIO",
            "GEMINI 2.0 FLASH",
            "OLLAMA LOCAL LLMS",
            "COMPUTER VISION & MEDIAPIPE",
          ].map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-4 font-display font-extrabold text-xs sm:text-sm tracking-widest text-zinc-400"
            >
              {item}
              <span className="text-[#06b6d4]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
