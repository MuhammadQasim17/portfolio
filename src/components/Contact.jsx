import { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Sparkles, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/**
 * Contact Component
 * Features dual-action buttons that copy muhammadqasim891011@gmail.com directly to the clipboard
 * and display a temporary confirmation message, while simultaneously opening the mailto: link
 * with pre-formatted subject lines for users with email clients configured.
 */
export default function Contact({ profile = portfolioData.profile }) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [buttonCopiedFeedback, setButtonCopiedFeedback] = useState(false);

  const targetEmail = profile?.email || 'muhammadqasim891011@gmail.com';
  const targetPhone = profile?.phone || '+923708076745';
  const targetGithub = profile?.github || 'https://github.com/MuhammadQasim17';

  const copyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleButtonCopyAndMail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(targetEmail);
    }
    setButtonCopiedFeedback(true);
    setTimeout(() => setButtonCopiedFeedback(false), 3000);
  };

  const roleSubject = 'Software Engineer Opportunity - Interview Invitation';
  const roleMailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(roleSubject)}`;

  const freelanceSubject = 'Project Inquiry / System Build Collaboration';
  const freelanceMailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(freelanceSubject)}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 lg:p-16 shadow-xl dark:shadow-2xl overflow-hidden transition-colors">
          {/* Background ambient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading, Bio & Contact Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Have an exciting project or engineering opening?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                I'm actively seeking software engineering positions and technical collaborations. Whether you need full-stack architecture, native Android engineering, or desktop systems development, I'm ready to contribute.
              </p>

              {/* Contact Methods Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-500 font-mono">Email Address</p>
                      <a
                        href={`mailto:${targetEmail}`}
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 truncate block transition-colors"
                      >
                        {targetEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-500 font-mono">Phone / WhatsApp</p>
                      <a
                        href={`tel:${targetPhone}`}
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 truncate block transition-colors"
                      >
                        {targetPhone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${targetPhone}`}
                    className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors flex-shrink-0"
                    title="Call"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Card: Direct Message Launcher */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 dark:bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/90 shadow-md dark:shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Send Direct Message</span>
                </h3>

                {/* Dynamic Status / Instruction Text */}
                {buttonCopiedFeedback ? (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 animate-bounce" />
                    <span>Email copied to clipboard! Opening mail client...</span>
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Launches your preferred mail client addressed to{' '}
                    <span className="text-cyan-600 dark:text-cyan-300 font-mono">{targetEmail}</span> with pre-formatted subject lines.
                  </p>
                )}

                <div className="space-y-3 pt-2">
                  {/* Discuss Engineering Roles Button */}
                  <a
                    href={roleMailtoHref}
                    onClick={handleButtonCopyAndMail}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <span>Discuss Engineering Roles</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Discuss Freelance / System Build Button */}
                  <a
                    href={freelanceMailtoHref}
                    onClick={handleButtonCopyAndMail}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-950 dark:hover:text-white transition-all flex items-center justify-between cursor-pointer group shadow-xs dark:shadow-none"
                  >
                    <span>Discuss Freelance / System Build</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <div className="pt-2 flex items-center justify-center gap-4">
                    <a
                      href={targetGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>github.com/MuhammadQasim17</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
