"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle, ArrowRight, Layers, Cpu, Code2, Play } from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "@/data/portfolioData";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c12] border border-white/10 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c42e4]/15 border border-[#6c42e4]/30 text-xs font-mono font-bold text-[#a78bfa] uppercase tracking-wider mb-3">
            {project.category}
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
            {project.title}
          </h2>
          <p className="text-zinc-400 font-medium text-base sm:text-lg">
            {project.subtitle}
          </p>
        </div>

        {/* Media Preview (Video or Image) */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-zinc-950">
          {project.video ? (
            <div className="aspect-video w-full relative bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                poster={project.image}
                className="w-full h-full object-contain"
              >
                <source src={project.video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent"></div>
            </div>
          )}
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c42e4] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#5a33c7] transition-colors shadow-lg"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Open Video in New Tab
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981] text-black font-display text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-lg"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Application
            </a>
          )}
          {project.links.frontendRepo && (
            <a
              href={project.links.frontendRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-display text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Frontend Repo
            </a>
          )}
          {project.links.backendRepo && (
            <a
              href={project.links.backendRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-display text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Backend Repo
            </a>
          )}
          {project.links.github && !project.links.frontendRepo && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-display text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub Repository
            </a>
          )}
        </div>

        {/* Problem Statement & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-rose-400 mb-2">
              The Problem
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#10b981] mb-2">
              The Architecture & Solution
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical Architecture Workflow */}
        <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#06b6d4] mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            End-to-End System Workflow
          </h4>
          <div className="space-y-3">
            {project.architecture.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="font-mono text-xs font-bold text-[#a78bfa] shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
            Key Engineering Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.015] border border-white/5 text-xs text-zinc-300">
                <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-8">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="mb-8 p-6 rounded-2xl bg-[#6c42e4]/10 border border-[#6c42e4]/20">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#a78bfa] mb-3">
            My Individual Engineering Contribution
          </h4>
          <ul className="space-y-2">
            {project.contributions.map((c, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-zinc-200 flex items-start gap-2">
                <span className="text-[#06b6d4]">▸</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl bg-white text-black font-display text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
        >
          Close Case Study
        </button>
      </div>
    </div>
  );
}
