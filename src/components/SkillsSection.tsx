"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Database, 
  Server, 
  Layers, 
  Cpu, 
  Wrench, 
  Code, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Generative AI & LLM Engineering":
        return <Bot className="w-5 h-5 text-[#a78bfa]" />;
      case "RAG & Information Retrieval":
        return <Database className="w-5 h-5 text-[#06b6d4]" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-[#10b981]" />;
      case "Databases & Vector Stores":
        return <Layers className="w-5 h-5 text-amber-400" />;
      case "Machine Learning & Vision":
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case "Tools, Platforms & APIs":
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#10b981]">
              Technical Stack
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">[03]</span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            TECHNICAL EXPERTISE.
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Tools, models, frameworks, and architecture patterns I employ to build performant, production-ready AI applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#0c0c12] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? "bg-[#6c42e4]/15 border border-[#6c42e4]/40 text-[#c4b5fd] font-semibold"
                          : "bg-white/[0.02] border border-white/5 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{cat.skills.length} Capabilities</span>
                <span className="text-[#06b6d4]">Verified Stack</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
