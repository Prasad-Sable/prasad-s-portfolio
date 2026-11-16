"use client";

import React from "react";
import { GraduationCap, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6c42e4]"></span>
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#a78bfa]">
              About Prasad
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">[01]</span>
        </div>

        {/* Top Grid: Bio Narrative & Education Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Curious about AI. Passionate about building. <br />
              <span className="text-[#a78bfa]">Focused on solving real-world problems.</span>
            </h2>

            <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
              {personal.aboutBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Areas of Interest Tags */}
            <div className="pt-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#06b6d4]" />
                Primary Areas of Focus
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {personal.areasOfInterest.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-300 hover:border-[#6c42e4]/50 hover:bg-[#6c42e4]/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Excellence Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-[#06b6d4]" />
                <h3 className="font-display font-bold text-lg text-white">
                  Academic Credentials
                </h3>
              </div>

              <div className="space-y-6">
                {personal.educationSummary.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white">
                        {edu.degree}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] font-mono text-xs font-bold">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-500 pt-1 border-t border-white/5">
                      {edu.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
