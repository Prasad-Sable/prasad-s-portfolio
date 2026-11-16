"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, ExternalLink, Sparkles, CheckCircle, Bot } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function PagePilotDemoPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col justify-between p-4 sm:p-8 selection:bg-[#6c42e4] selection:text-white">
      {/* Top Navigation */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-4 border-b border-white/10 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Prasad-Sable/prasad-s-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </header>

      {/* Main Video Cinema Container */}
      <main className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Header Info */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c42e4]/15 border border-[#6c42e4]/30 text-xs font-mono font-bold text-[#a78bfa] uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5 text-[#06b6d4]" />
            Live Project Demo
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-2">
            PagePilot AI — <span className="text-[#a78bfa]">Browser Copilot</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Autonomous RAG-Powered Browser Assistant executing natural-language webpage actions, DOM chunking, and intelligent summarization.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl shadow-purple-950/20 mb-8">
          <video
            controls
            autoPlay
            playsInline
            poster="/images/pagepilot-ai.jpg"
            className="w-full h-full object-contain bg-black"
          >
            <source src="/pagepilot-ai-demo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-[#06b6d4] uppercase tracking-wider block mb-1">Feature 01</span>
            <h4 className="font-display font-bold text-sm text-white mb-1">RAG Context Q&A</h4>
            <p className="text-xs text-zinc-400">Real-time live webpage DOM parsing & semantic chunking with FAISS vector retrieval.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-[#a78bfa] uppercase tracking-wider block mb-1">Feature 02</span>
            <h4 className="font-display font-bold text-sm text-white mb-1">Autonomous Actions</h4>
            <p className="text-xs text-zinc-400">Translates natural language into clicks, scrolls, form filling, and visual element highlighting.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-wider block mb-1">Feature 03</span>
            <h4 className="font-display font-bold text-sm text-white mb-1">Hybrid LLM Engine</h4>
            <p className="text-xs text-zinc-400">Supports OpenAI API & local Ollama models with FastAPI backend & Manifest V3.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full pt-8 mt-8 border-t border-white/5 text-center text-xs text-zinc-500">
        Prasad Sable • AI Engineer • Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
