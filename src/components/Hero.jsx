import { useState } from 'react';
import {
  Layers,
  ChevronRight,
  Mail,
  ArrowUpRight,
  Cpu,
  Smartphone,
  Monitor,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/**
 * Hero Component
 * Displays the headline, bio, actions, and the profile photo from public/assets/profile-photo.jpg
 * with a subtle glow effect on hover. Falls back to the 'MQ' initials badge if the image cannot be found.
 */
export default function Hero({ profile = portfolioData.profile, scrollToSection }) {
  const [imgSrc, setImgSrc] = useState(profile?.avatarUrl || '/assets/profile-photo.jpg');
  const [avatarError, setAvatarError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleScroll = (id) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    // If .jpg fails, attempt .jpeg fallback before falling back to initials
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(imgSrc.replace('.jpg', '.jpeg'));
    } else {
      setAvatarError(true);
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-50/90 dark:bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-700 dark:text-cyan-300 shadow-xs dark:shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Stack & Mobile Engineering Roles</span>
            </div>

            {/* Primary Hero Typography */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">{profile.name}</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Engineering Scalable{' '}
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Web, Native Mobile
                </span>{' '}
                & Desktop Systems.
              </h1>
            </div>

            {/* Tagline & About Summary */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
              {profile.tagline}
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl" id="about">
              {profile.about}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-900/80 dark:hover:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs dark:shadow-none"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900/40 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              </a>
            </div>

            {/* Tech Pills Ribbon */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 w-full">
              <p className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 19',
                  'Node.js & Express',
                  'Prisma & PostgreSQL',
                  'Kotlin & Jetpack Compose',
                  'LiteRT (On-Device ML)',
                  'Flutter & Riverpod',
                  'React Native',
                  'Docker'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shadow-xs dark:shadow-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Profile Card & Avatar with Subtle Hover Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative ambient gradient backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-500 pointer-events-none" />

              <div className="relative bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl flex flex-col items-center text-center transition-colors">
                
                {/* Avatar Portrait with Subtle Glow on Hover */}
                <div className="relative group mx-auto mb-6 cursor-pointer">
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-sky-400/35 to-indigo-500/30 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Profile Frame with Subtle Hover Accent */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl p-[2px] bg-slate-200 dark:bg-slate-800/90 group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:via-sky-400 group-hover:to-indigo-500 transition-all duration-500 shadow-md group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-950 rounded-[22px] overflow-hidden relative flex items-center justify-center">
                      {!avatarError ? (
                        <img
                          src={imgSrc}
                          alt={profile.name}
                          onLoad={() => setImageLoaded(true)}
                          onError={handleImageError}
                          className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`}
                        />
                      ) : (
                        /* Fallback: 'MQ' Initials Badge */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-cyan-600 dark:text-cyan-400 shadow-inner select-none">
                          <span className="font-extrabold text-4xl sm:text-5xl font-mono tracking-tight bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                            MQ
                          </span>
                          <span className="text-[10px] text-slate-500 tracking-widest font-mono uppercase mt-1">
                            Software Engineer
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Profile Identity Information */}
                <div className="mb-6 space-y-1 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-mono font-medium">
                    Software Engineer & Systems Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>Punjab, Pakistan</span>
                  </p>
                </div>

                {/* Architectural Highlights Matrix */}
                <div className="w-full space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800/80 text-left">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/70 hover:border-cyan-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Full-Stack & Distributed</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                        Production web backends with Prisma, Express, and PostgreSQL relational schemas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/70 hover:border-emerald-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Native Android & Edge AI</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                        Kotlin, Jetpack Compose, on-device LiteRT ML inference, and background telemetry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/70 hover:border-violet-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Cross-Platform Desktop</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                        Flutter audit systems with native SQLite FFI and multi-modal LLM orchestration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 w-full pt-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/70 text-center">
                    <span className="block text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                      {portfolioData.projects?.length || 5}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Featured Platforms</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/70 text-center">
                    <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">6+</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Certifications</span>
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
