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
    <section id="certifications" className="py-20 relative bg-white dark:bg-[#0b0f19] border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            Certifications & <span className="text-blue-600 dark:text-blue-400">Credentials</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Professional industry certifications and technical qualifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              {/* Top Meta Strip */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300">
                    {cert.category || "Professional Certification"}
                  </span>
                </div>

                {cert.issueDate && (
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                )}
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Issuer: <strong className="text-slate-700 dark:text-slate-300">{cert.issuer}</strong></span>
                </p>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Credential Link */}
              {cert.credentialUrl && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
