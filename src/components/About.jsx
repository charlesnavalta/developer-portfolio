import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin, Briefcase, Sparkles, Code2, Database } from 'lucide-react';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Computer Science student at Pamantasan ng Cabuyao with a strong background in software engineering, NLP, and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & CS Focus (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>Building with Code, Data & Purpose</span>
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {personal.bio}
              </p>

              {/* Quick Profile Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Location:</strong> {personal.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Status:</strong> {personal.statusText}</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Badges */}
            <div className="glass-panel p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-800">Key Computer Science Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Educational Background Timeline (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-slate-900 font-mono font-bold text-base border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Educational Background</span>
            </div>

            <div className="space-y-3 pt-1">
              {education.history.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl bg-white border border-slate-200 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 w-fit">
                      {item.level}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.institution}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.program}</p>
                  </div>

                  {item.honors && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/60 w-fit">
                      <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
