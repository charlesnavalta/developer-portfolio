import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Calendar, Users, Building, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const { leaderships } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORGANIZATIONS & SERVICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Leadership & <span className="text-blue-600">Affiliations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Student organizations, technological club memberships, and leadership responsibilities across my academic journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-8">
          {leaderships.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 group-hover:scale-125 transition-all shadow-sm" />

              {/* Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3 bg-white border border-slate-200">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                      {item.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono">{item.org}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-700 font-medium">{item.institution}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
