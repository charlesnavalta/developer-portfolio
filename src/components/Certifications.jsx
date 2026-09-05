import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles, Cloud, Code2, Terminal, Layers, ShieldCheck, Compass } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cloud & Infrastructure':
        return <Cloud className="w-4 h-4 text-sky-600" />;
      case 'Software Engineering':
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'Core Programming':
        return <Terminal className="w-4 h-4 text-indigo-600" />;
      case 'DevOps & Tooling':
        return <Layers className="w-4 h-4 text-emerald-600" />;
      default:
        return <Award className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Certifications & <span className="text-blue-600">Learning Roadmap</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Target industry certifications, cloud credentials, and specialized engineering tracks I am actively preparing for to validate technical proficiency.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              {/* Top Meta Strip */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-600">
                    {cert.category}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span>{cert.status}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Issuer: <strong>{cert.issuer}</strong></span>
                  <span className="text-slate-300">•</span>
                  <span className="text-blue-600 font-mono">{cert.targetDate}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Core Competencies & Objectives
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Track / Affiliation Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{cert.track}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Commitment Note */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white border border-blue-200/80 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-700">
            💡 <strong className="text-slate-900">Committed to Continuous Learning:</strong> Actively studying technical documentation, cloud sandboxes, and hands-on coding repositories to ensure full alignment with current industry engineering practices.
          </p>
        </div>

      </div>
    </section>
  );
}
