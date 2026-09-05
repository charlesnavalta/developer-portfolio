import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles, Cloud, Code2, Terminal, Layers, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  // If there are no certifications listed yet, do not render this section
  if (!certifications || certifications.length === 0) {
    return null;
  }

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
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Certifications & <span className="text-blue-600">Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Professional industry certifications and technical qualifications.
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
                    {cert.category || "Professional Certification"}
                  </span>
                </div>

                {cert.issueDate && (
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                )}
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Issuer: <strong>{cert.issuer}</strong></span>
                </p>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {/* Skills Tags */}
              {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                <div className="space-y-2 pt-1">
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
              )}

              {/* Credential Link */}
              {cert.credentialUrl && (
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>View Verification</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
