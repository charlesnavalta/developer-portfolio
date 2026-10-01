import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative bg-white dark:bg-[#0b0f19] border-y border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & CS Focus (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Building with Code, Automation & Purpose</span>
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personal.bio}
              </p>

              {/* Quick Profile Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span><strong>Location:</strong> {personal.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span><strong>Status:</strong> {personal.statusText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Background Timeline (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-slate-900 dark:text-white font-mono font-bold text-base border-b border-slate-100 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Educational Background</span>
            </div>

            <div className="space-y-3 pt-1">
              {education.history.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 w-fit border border-blue-200/50 dark:border-blue-800/50">
                      {item.level}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.institution}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{item.program}</p>
                  </div>

                  {item.honors && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-200/60 dark:border-amber-800/60 w-fit">
                      <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span className="font-semibold text-[11px]">{item.honors}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
