import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, MapPin, Sparkles, Copy, Check, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/myeyprpo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map(err => err.message).join(', '));
        } else {
          setErrorMessage('Unable to send message right now. Please email directly at ' + personal.email);
        }
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please try again or email directly at ' + personal.email);
    } finally {
      setIsSubmitting(false);
    }
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
                  <h3 className="text-lg font-bold text-slate-900 font-mono">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
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

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/20 transition-all cursor-pointer font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
