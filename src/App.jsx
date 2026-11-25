import { useState, useEffect, useMemo } from 'react';
import {
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Database,
  Terminal,
  GraduationCap,
  CheckCircle2,
  Layers,
  Sparkles,
  Menu,
  X,
  ArrowUp,
  Cpu,
  ShieldCheck,
  FileText,
  Briefcase,
  Radio,
  Building2,
  MapPin,
  Sun,
  Moon,
  Siren
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Contact from './components/Contact';

// Custom SVG Icons for GitHub and LinkedIn to guarantee crisp, official branding
const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function App() {
  const { profile, skills, projects, education, certifications } = portfolioData;

  // Theme State with LocalStorage Persistence
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Navigation and Interactive States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'certifications'
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Order primary languages & frameworks so Dart/Flutter leads, followed by Java/Kotlin
  const orderedSkills = useMemo(() => {
    const prioritize = (list = [], priorityOrder = []) => {
      const filtered = list.filter((item) => item.toLowerCase() !== 'python');
      return [...filtered].sort((a, b) => {
        const idxA = priorityOrder.findIndex((p) => a.toLowerCase().includes(p.toLowerCase()));
        const idxB = priorityOrder.findIndex((p) => b.toLowerCase().includes(p.toLowerCase()));
        const rankA = idxA === -1 ? priorityOrder.length : idxA;
        const rankB = idxB === -1 ? priorityOrder.length : idxB;
        return rankA - rankB;
      });
    };

    return {
      languages: prioritize(skills.languages, ['dart', 'java', 'kotlin', 'c++', 'javascript', 'typescript']),
      frontendMobile: prioritize(skills.frontendMobile, ['flutter', 'android', 'react', 'vite', 'tailwind']),
      backendDatabases: prioritize(skills.backendDatabases, ['sqlite', 'firebase', 'mysql']),
      toolsDevOps: prioritize(skills.toolsDevOps, ['git', 'github', 'android studio', 'vs code', 'msix']),
    };
  }, [skills]);

  // Monitor scroll for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Categories
  const categories = useMemo(() => {
    const unique = ['All', ...new Set(projects.map((p) => p.category))];
    return unique;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Visual meta icons for categories & projects
  const getProjectIcon = (id) => {
    switch (id) {
      case 'beaconsos':
      case 'beacon-sos':
        return <Siren className="w-6 h-6 text-emerald-400" />;
      case 'auraguard':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'clairdocs':
        return <FileText className="w-6 h-6 text-violet-400" />;
      case 'fieldops':
        return <Radio className="w-6 h-6 text-sky-400" />;
      case 'hirehub':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'Mobile':
      case 'Native Android':
        return {
          badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
          gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          glow: 'group-hover:border-emerald-500/50',
          dot: 'bg-emerald-400'
        };
      case 'Desktop':
        return {
          badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
          gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
          glow: 'group-hover:border-violet-500/50',
          dot: 'bg-violet-400'
        };
      case 'Full-Stack':
      default:
        return {
          badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
          gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
          glow: 'group-hover:border-sky-500/50',
          dot: 'bg-sky-400'
        };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 relative overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 dark:bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[150px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        />
      </div>

      {/* =========================================================================
1. STICKY GLASSMORPHISM NAVBAR
      ========================================================================= */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-black/40'
            : 'backdrop-blur-md bg-white/60 dark:bg-slate-950/50 border-b border-slate-200/40 dark:border-slate-800/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                MQ
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {profile.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wide">Software Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Timeline', id: 'timeline' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action Items */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-amber-500 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 shadow-sm cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-transparent shadow-sm dark:shadow-none transition-colors"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-transparent shadow-sm dark:shadow-none transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Actions: Theme Toggle + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-amber-500 dark:text-cyan-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-4 pt-3 pb-6 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl transition-all shadow-lg">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Overview', id: 'about' },
                { label: 'Skills & Stack', id: 'skills' },
                { label: 'Featured Projects', id: 'projects' },
                { label: 'Education & Certifications', id: 'timeline' },
                { label: 'Get in Touch', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-md"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="flex-1 z-10">
        {/* =========================================================================
2. STRIKING HERO SECTION
        ========================================================================= */}
        <Hero profile={profile} scrollToSection={scrollToSection} />

        {/* =========================================================================
3. SKILLS & TECHNICAL ARSENAL
        ========================================================================= */}
        <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engineering Stack & Toolchain
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Focused on Flutter & Dart cross-platform and desktop engineering, Java & Kotlin mobile development, and modern web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1: Languages */}
              <div className="bg-white dark:bg-slate-900/70 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Languages</h3>
                    <p className="text-xs text-slate-500 font-mono">Dart, Java, Kotlin & Core</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {orderedSkills.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Frameworks & Mobile */}
              <div className="bg-white dark:bg-slate-900/70 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Frameworks & Mobile</h3>
                    <p className="text-xs text-slate-500 font-mono">Flutter, Android & Reactive UI</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {orderedSkills.frontendMobile.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/40 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Backend & Databases */}
              <div className="bg-white dark:bg-slate-900/70 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Backend & Data</h3>
                    <p className="text-xs text-slate-500 font-mono">SQLite FFI, Firebase & SQL</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {orderedSkills.backendDatabases.map((db) => (
                    <span
                      key={db}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-500/40 transition-all"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4: Tools & DevOps */}
              <div className="bg-white dark:bg-slate-900/70 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Tools & DevOps</h3>
                    <p className="text-xs text-slate-500 font-mono">IDEs, Packaging & Workflows</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {orderedSkills.toolsDevOps.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-500/40 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
4. INTERACTIVE PROJECTS GRID WITH CATEGORY FILTERS
        ========================================================================= */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Portfolio Showcase</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Featured Engineering Systems
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                  Selected projects across Flutter/Dart enterprise auditing, native Android safety systems, operations platforms, and recruitment tools.
                </p>
              </div>

              {/* Interactive Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-md self-start md:self-auto">
                {categories.map((cat) => {
                  const count =
                    cat === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                          isActive ? 'bg-black/25 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {filteredProjects.map((project) => {
                const theme = getCategoryTheme(project.category);
                const isFlagship = project.id === 'beaconsos' && selectedCategory === 'All';

                return (
                  <div
                    key={project.id}
                    className={`group relative bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm dark:shadow-2xl hover:shadow-xl dark:hover:shadow-cyan-950/20 hover:-translate-y-1.5 ${
                      isFlagship ? 'lg:col-span-2' : 'h-full'
                    }`}
                  >
                    {/* Top ambient highlight gradient */}
                    <div
                      className={`absolute top-0 inset-x-0 ${isFlagship ? 'h-48' : 'h-32'} bg-gradient-to-b ${theme.gradient} opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity`}
                    />

                    {isFlagship ? (
                      /* Flagship Horizontal / 2-Column Wide Layout */
                      <div className="p-6 sm:p-8 lg:p-10 relative z-10 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Card Header: Category Badge & Project Icon */}
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                                {getProjectIcon(project.id)}
                              </div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span
                                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${theme.badge}`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                                  {project.badge || project.category}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                                  <Sparkles className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                                  <span>Featured Flagship</span>
                                </span>
                              </div>
                            </div>

                            {/* GitHub Quick Link */}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                              title="View on GitHub"
                            >
                              <GitHubIcon className="w-5 h-5" />
                            </a>
                          </div>

                          {/* Two-Column Internal Grid on Desktop */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-4">
                            {/* Left Column: Title, Tagline, Description & Tech Tags */}
                            <div className="lg:col-span-6 space-y-4">
                              <div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight">
                                  {project.title}
                                </h3>
                                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1 mb-3">
                                  {project.tagline}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {project.description}
                                </p>
                              </div>

                              {/* Tech Tags */}
                              <div className="pt-2">
                                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
                                  Core Toolchain & Services
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Right Column: Key Technical Architecture Checklist */}
                            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-3">
                              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-800 dark:text-slate-200 font-bold flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                                <span>Core Technical Architecture</span>
                              </h4>
                              <div className="space-y-3">
                                {project.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-snug">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Grid Card */
                      <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Card Header: Category Badge & Project Icon */}
                          <div className="flex items-center justify-between gap-4 mb-5">
                            <div className="flex items-center gap-3">
                              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                                {getProjectIcon(project.id)}
                              </div>
                              <div>
                                <span
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${theme.badge}`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                                  {project.badge || project.category}
                                </span>
                              </div>
                            </div>

                            {/* GitHub Quick Link */}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                              title="View on GitHub"
                            >
                              <GitHubIcon className="w-5 h-5" />
                            </a>
                          </div>

                          {/* Project Title & Tagline */}
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1 mb-4">
                            {project.tagline}
                          </p>

                          {/* Description */}
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Key Technical Highlights Checklist */}
                          <div className="space-y-2.5 mb-6 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/60">
                            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-700 dark:text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                              <span>Core Technical Architecture</span>
                            </h4>
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Card Footer Actions */}
                    <div className="p-6 sm:px-8 sm:py-4 bg-slate-50/80 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/70 flex items-center justify-between relative z-10">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Deep Dive Specifications</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Deep Dive Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  {getProjectIcon(activeProjectModal.id)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    {activeProjectModal.badge || `${activeProjectModal.category} Platform`}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeProjectModal.title}</h3>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">{activeProjectModal.tagline}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {activeProjectModal.description}
              </p>

              <div className="space-y-3 mb-6 bg-slate-50 dark:bg-slate-950/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                  Key Engineering Feats
                </h4>
                {activeProjectModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
                <a
                  href={activeProjectModal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 flex items-center gap-1.5 shadow-md"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
5. EDUCATION & CERTIFICATIONS TIMELINE SECTION
        ========================================================================= */}
        <section id="timeline" className="py-24 bg-slate-100/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-700 dark:text-indigo-300">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic & Professional Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Education & Certifications
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Formal education in Software Engineering paired with technical certifications in networking, mobile engineering, and UI/UX.
              </p>

              {/* View Filter Switcher */}
              <div className="pt-4 flex justify-center">
                <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === 'all'
                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    All Milestones
                  </button>
                  <button
                    onClick={() => setActiveTab('education')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === 'education'
                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Education ({education.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('certifications')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeTab === 'certifications'
                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Certifications ({certifications.length})
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Education Column */}
              {(activeTab === 'all' || activeTab === 'education') && (
                <div className={`${activeTab === 'education' ? 'lg:col-span-12 max-w-4xl mx-auto' : 'lg:col-span-6'}`}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education History</h3>
                      <p className="text-xs text-slate-500 font-mono">Academic Degrees & Honors</p>
                    </div>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
                    {education.map((edu, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Node Orb */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-sm shadow-cyan-400/50" />

                        <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all group-hover:bg-slate-50 dark:group-hover:bg-slate-900/90 shadow-sm dark:shadow-md">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                              {edu.period}
                            </span>
                            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {edu.gradeOrCgpa}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {edu.degree}
                          </h4>

                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1 mb-3">
                            <Building2 className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                            <span>{edu.institution}</span>
                          </p>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {edu.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Column */}
              {(activeTab === 'all' || activeTab === 'certifications') && (
                <Certifications
                  certifications={certifications}
                  isFullWidth={activeTab === 'certifications'}
                />
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
6. GET IN TOUCH / CONTACT SECTION
        ========================================================================= */}
        <Contact profile={profile} />
      </main>

      {/* =========================================================================
7. PROFESSIONAL FOOTER
      ========================================================================= */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-100 dark:border-slate-900">
            {/* Col 1: Bio */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sm text-cyan-600 dark:text-cyan-400">
                    MQ
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{profile.name}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                Software Engineer focused on Flutter & Dart cross-platform/desktop applications, Java & Kotlin mobile systems, and modern full-stack web platforms.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-semibold mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                {['Hero', 'About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Direct Contacts */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-semibold mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <a href={`mailto:${profile.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors truncate">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <a href={`tel:${profile.phone}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Sahiwal, Punjab, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>React 19 + Tailwind CSS v4 + Vite</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                title="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="text-[11px]">Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}