"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Sparkles, Layers, BookOpen, Play } from "lucide-react";
import { GithubIcon } from "./icons";
import { portfolioData, Project } from "@/data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ["All", "Generative AI", "RAG & Knowledge", "Computer Vision & IoT"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]"></span>
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#06b6d4]">
              Portfolio Showcase
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">[02]</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-2">
              THINGS I'VE BUILT.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-md">
              Practical implementations of AI, automated reasoning, and intelligent system workflows.
            </p>
          </div>

          {/* Clean Filter Pills with perfect alignment */}
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.03] border border-white/10 shrink-0">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-3.5 py-2 sm:px-4 sm:py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === category
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="flex flex-col rounded-3xl bg-[#0d0d12] border border-white/10 overflow-hidden hover:border-[#6c42e4]/40 transition-all hover:-translate-y-1 group"
            >
              {/* Media Container */}
              <div 
                className="relative aspect-video w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[#06b6d4] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {project.video && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6c42e4]/85 backdrop-blur-md border border-[#a78bfa]/50 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-lg">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      Demo Video
                    </span>
                  </div>
                )}

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-display text-xs font-bold uppercase tracking-wider shadow-lg">
                    {project.video ? "Watch Demo" : "Case Study"}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#a78bfa] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-[#06b6d4] mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Actions */}
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-white/[0.03] text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-display font-bold uppercase tracking-wider text-white hover:text-[#a78bfa] flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#6c42e4]" />
                      Deep Dive
                    </button>

                    <div className="flex items-center gap-2">
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-[#6c42e4]/15 hover:bg-[#6c42e4]/30 text-[#c4b5fd] hover:text-white border border-[#6c42e4]/30 hover:border-[#a78bfa] transition-all"
                          title="Watch Demo Video"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Play className="w-4 h-4 fill-current text-[#a78bfa]" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                          title="Open Live Application"
                        >
                          <ExternalLink className="w-4 h-4 text-[#10b981]" />
                        </a>
                      )}
                      {project.links.frontendRepo && (
                        <a
                          href={project.links.frontendRepo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                          title="Frontend Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.github && !project.links.frontendRepo && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
