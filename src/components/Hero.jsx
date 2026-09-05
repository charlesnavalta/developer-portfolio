import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowRight, Download, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { personal, stats, education } = portfolioData;

  const handleConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8fafc]">
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">{personal.name}</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed px-2">
            {personal.role} focused on <span className="text-blue-600 font-semibold">Software Engineering</span> & <span className="text-indigo-600 font-semibold">Data Science</span>.
          </p>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            {personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 max-w-md sm:max-w-none mx-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              onClick={handleConfetti}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-xs transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Get Resume (PDF)</span>
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all"
            >
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>Run CLI Terminal</span>
            </a>
          </div>

          {/* Socials Link Row */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-xs transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-xs transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-xs transition-all"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Stats Strip - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-12 sm:mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-3.5 sm:p-5 rounded-2xl text-center flex flex-col justify-center items-center min-h-[96px] sm:min-h-[110px] bg-white"
            >
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 font-mono leading-tight break-words max-w-full">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
