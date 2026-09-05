import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal() {
  const { personal, education, skills, projects, certifications, leaderships, terminalHelp } = portfolioData;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: `Welcome to ${personal.name}'s Interactive CS Developer Terminal v1.0.0`, type: "system" },
    { text: "Type 'help' to see all available commands, or click any of the shortcut pills below.", type: "system" },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const isFirstRender = useRef(true);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const newEntries = [{ text: `$ ${cmdStr}`, type: "command" }];

    switch (trimmed) {
      case 'help':
        newEntries.push({
          type: "output",
          text: terminalHelp.map(h => `  ${h.cmd.padEnd(18)} - ${h.desc}`).join('\n')
        });
        break;

      case 'about':
        newEntries.push({
          type: "output",
          text: `Full Name: ${personal.fullName || personal.name}\nPreferred: ${personal.name}\nRole:      ${personal.role} (${education.gradYear})\nSchool:    ${education.university}\nFocus:     ${personal.subRoles.join(' | ')}\nBio:       ${personal.bio}\nLocation:  ${personal.location}\nStatus:    ${personal.statusText}`
        });
        break;

      case 'education':
        const eduHistory = education.history.map(e => `• [${e.level}] ${e.institution}\n  Program: ${e.program} (${e.period})${e.honors ? `\n  Honors:  ${e.honors}` : ''}`).join('\n\n');
        newEntries.push({
          type: "output",
          text: `🎓 EDUCATIONAL BACKGROUND:\n\n${eduHistory}`
        });
        break;

      case 'certifications':
      case 'certs':
      case 'credentials':
        if (!certifications || certifications.length === 0) {
          newEntries.push({
            type: "output",
            text: `📜 CERTIFICATIONS:\nNo certifications listed yet. Technical qualifications are demonstrated through capstone research (FalsiCode) and hands-on GitHub projects.`
          });
        } else {
          const certList = certifications.map(c => `• ${c.title}\n  Issuer: ${c.issuer} (${c.issueDate || 'Verified'})\n  Focus:  ${(c.skillsCovered || []).join(', ')}`).join('\n\n');
          newEntries.push({
            type: "output",
            text: `📜 CERTIFICATIONS & CREDENTIALS:\n\n${certList}`
          });
        }
        break;

      case 'leadership':
      case 'affiliations':
        const leads = leaderships.map(l => `• ${l.role} - ${l.org} (${l.period})\n  ${l.institution}`).join('\n\n');
        newEntries.push({
          type: "output",
          text: `👥 LEADERSHIP & AFFILIATIONS:\n\n${leads}`
        });
        break;

      case 'skills':
        const langs = skills.languages.map(l => `${l.name} (${l.level}%)`).join(', ');
        const frameworks = skills.frameworks.map(f => f.name).join(', ');
        const ds = skills.dataScienceAndAI.map(d => d.name).join(', ');
        const devops = skills.toolsAndDevOps.map(t => t.name).join(', ');
        newEntries.push({
          type: "output",
          text: `💻 Languages:\n   ${langs}\n\n🌐 Frameworks & Web:\n   ${frameworks}\n\n🧠 Data Science & AI:\n   ${ds}\n\n⚙️ Databases & Tools:\n   ${devops}`
        });
        break;

      case 'projects':
        newEntries.push({
          type: "output",
          text: projects.map(p => `• [${p.status || 'Active'}] ${p.title} (${p.period || '2026'})\n  Category: ${p.category} | Tag: ${p.tag}\n  Tech:     ${p.techStack.join(', ')}\n  GitHub:   ${p.github}`).join('\n\n')
        });
        break;

      case 'thesis':
      case 'capstone':
        const thesis = projects.find(p => p.category === 'Thesis') || projects[0];
        newEntries.push({
          type: "output",
          text: `🎓 UNDERGRADUATE THESIS PROJECT\nTitle:       ${thesis.title}\nLive Demo:   ${thesis.demo}\nDescription: ${thesis.description}\nImpact:      ${thesis.highlights.join('\n• ')}\nTech Stack:  ${thesis.techStack.join(', ')}\nRepo:        ${thesis.github}`
        });
        break;

      case 'contact':
        newEntries.push({
          type: "output",
          text: `📧 Email:    ${personal.email}\n🐙 GitHub:   ${personal.github}\n💼 LinkedIn: ${personal.linkedin}\n📍 Location: ${personal.location}`
        });
        break;

      case 'cat resume.txt':
      case 'resume':
        newEntries.push({
          type: "output",
          text: `=====================================================\n${(personal.fullName || personal.name).toUpperCase()} - CS GRADUATE RESUME SUMMARY\n${personal.role} | ${personal.email}\n=====================================================\n[EDUCATION]\n${education.degree} - ${education.university}\nHonors: ${education.honors}\n\n[HIGHLIGHTED THESIS]\nFalsiCode - Plagiarism Detection in DSA using AST & TF-IDF (React 18 + Flask + Docker)\nLive: https://falsicode.vercel.app/\n\n[KEY SKILLS]\nPython, JavaScript, React 18, Flask, MySQL, Docker, Scikit-Learn, Unity\n=====================================================`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newEntries.push({
          type: "error",
          text: `command not found: "${trimmed}". Type 'help' for a list of valid commands.`
        });
        break;
    }

    setHistory(prev => [...prev, ...newEntries]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  const quickCommands = ['help', 'about', 'education', 'thesis', 'projects', 'skills', 'leadership', 'contact', 'cat resume.txt', 'clear'];

  return (
    <section id="terminal" className="py-20 relative bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DEVELOPER EASTER EGG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Interactive <span className="text-emerald-600">CS Terminal</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A real-time CLI terminal simulator for recruiters and developers who prefer the command line.
          </p>
        </div>

        {/* Quick Command Shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500">Quick Commands:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="rounded-3xl overflow-hidden border border-slate-300 shadow-xl bg-[#0f172a] text-slate-100 font-mono text-xs sm:text-sm cursor-text"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-slate-700/60 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs text-slate-300 font-mono">charles@cs-workstation:~</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">bash (v5.2)</span>
          </div>

          {/* Terminal Screen Body - Scrolled internally */}
          <div 
            ref={terminalBodyRef}
            className="p-5 sm:p-7 min-h-[300px] max-h-[420px] overflow-y-auto space-y-3 leading-relaxed"
          >
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'system' && (
                  <p className="text-slate-400">{item.text}</p>
                )}
                {item.type === 'command' && (
                  <p className="text-emerald-400 font-semibold">{item.text}</p>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono mt-1 text-xs sm:text-sm">
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <p className="text-rose-400">{item.text}</p>
                )}
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. projects, skills, thesis, about)..."
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
