import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, MapPin, Sparkles, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subjectText = formData.subject.trim() || `Inquiry from ${formData.name.trim() || 'Portfolio Visitor'}`;
    const bodyText = `Hi Charles,\n\n${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`;

    const subjectEncoded = encodeURIComponent(subjectText);
    const bodyEncoded = encodeURIComponent(bodyText);

    const mailtoUrl = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open user's default email client (Gmail App / Apple Mail / Outlook)
    window.location.href = mailtoUrl;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleOpenGmailWeb = (e) => {
    e.preventDefault();
    const subjectText = formData.subject.trim() || `Inquiry from ${formData.name.trim() || 'Portfolio Visitor'}`;
    const bodyText = `Hi Charles,\n\n${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}`;

    const subjectEncoded = encodeURIComponent(subjectText);
    const bodyEncoded = encodeURIComponent(bodyText);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subjectEncoded}&body=${bodyEncoded}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 relative bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Interested in discussing entry-level roles, collaborative projects, or tech opportunities? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 font-mono">
                Contact Information
              </h3>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-500">Email Address</p>
                      <p className="font-mono text-slate-800 font-medium">{personal.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors shadow-xs"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[11px] text-slate-500">Location</p>
                    <p className="text-slate-800 font-medium">{personal.location}</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">
                  Social & Code Links
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-xs font-semibold text-slate-700 shadow-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-xs font-semibold text-slate-700 shadow-xs transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-mono">Opening Your Email App...</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your message and details have been pre-filled. Just click <strong>Send</strong> in your Gmail or email app to send it directly to <strong>{personal.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-blue-600 hover:text-blue-700 underline cursor-pointer"
                  >
                    Back to Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 font-mono flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Send a Direct Message</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Charles, I'd like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleOpenGmailWeb}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-500/20 transition-all cursor-pointer font-mono"
                    >
                      <Mail className="w-4 h-4" />
                      <span>SEND VIA GMAIL</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-xs transition-all cursor-pointer font-mono"
                    >
                      <Send className="w-3.5 h-3.5 text-blue-600" />
                      <span>OTHER MAIL APPS</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
