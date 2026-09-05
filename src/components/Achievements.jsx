import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Achievements & <span className="text-blue-600">Scholarships</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Academic honors, project excellence awards, and competitive scholarship grants received throughout my education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Academic & Project Honors (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-slate-900 font-mono font-bold text-base border-b border-slate-100">
              <Award className="w-5 h-5 text-blue-600" />
              <span>Academic Honors & Project Awards</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {achievements.academic.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug pt-1">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Scholarships & Grants (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-slate-900 font-mono font-bold text-base border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Scholarships & Grants</span>
            </div>

            <div className="space-y-3 pt-2">
              {achievements.scholarships.map((scholarship, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{scholarship.name}</h4>
                      <p className="text-xs text-slate-500">{scholarship.provider}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-700 shrink-0">
                    {scholarship.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
