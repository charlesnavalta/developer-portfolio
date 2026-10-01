import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Calendar, Users, Building, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const { leaderships } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-[#f8fafc] dark:bg-[#090d16] border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORGANIZATIONS & SERVICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            Leadership & <span className="text-blue-600 dark:text-blue-400">Affiliations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Student organizations, technological club memberships, and leadership responsibilities across my academic journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-8">
          {leaderships.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 group-hover:bg-blue-600 group-hover:scale-125 transition-all shadow-sm" />

              {/* Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                      {item.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">{item.org}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.institution}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
