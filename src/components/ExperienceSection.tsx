"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, Calendar, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="font-display font-bold text-xs uppercase tracking-widest text-amber-400">
              Career Trajectory
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">[04]</span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            EXPERIENCE & EDUCATION.
          </h2>
          <p className="text-zinc-400 max-w-xl text-base sm:text-lg">
            Practical industry exposure, fine-tuning initiatives, and academic qualifications in Computer Science & AI.
          </p>
        </div>

        {/* Split Grid: Work Experience & Academic Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-[#6c42e4]" />
              <h3 className="font-display font-bold text-xl text-white">
                Experience & R&D Programs
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#0c0c12] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#6c42e4]/15 border border-[#6c42e4]/30 text-[10px] font-mono font-bold text-[#a78bfa] uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-[#06b6d4]">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="text-[#10b981] mt-0.5">✓</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-[#06b6d4]" />
              <h3 className="font-display font-bold text-xl text-white">
                Formal Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#0c0c12] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[10px] font-mono font-bold text-[#10b981] uppercase tracking-wider">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-400">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Research Quote Note */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-dashed border-white/10 text-xs text-zinc-400 space-y-2">
                <span className="font-mono text-[10px] text-[#a78bfa] uppercase tracking-wider font-bold block">
                  Academic Philosophy
                </span>
                <p>
                  Specialized in translating theoretical mathematical concepts of Deep Learning, Attention Mechanisms, and Vector Search into production-grade systems.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
