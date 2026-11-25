# Muhammad Qasim — Software Engineering Portfolio

> Software Engineer specializing in Flutter & Dart cross-platform/desktop architectures, Java & Kotlin native Android engineering, and full-stack web platforms (React 19, Node.js, Prisma, PostgreSQL). Experienced in integrating AI / LLM APIs (Gemini, Groq, LiteRT) into mobile, desktop, and web applications, alongside Clean Architecture, reactive state management, and offline-first persistence.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-iota-one-pfywhhi4lb.vercel.app)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

---

## Live Deployment & Preview

The portfolio is deployed on Vercel with automatic continuous integration triggered on every push to the `main` branch.

**Live Deployment URL:** [portfolio-iota-one-pfywhhi4lb.vercel.app](https://portfolio-iota-one-pfywhhi4lb.vercel.app)

```text
================================================================================
 [ Light Mode ]                                                 [ Dark Mode ]
 ------------------------------------------------------------------------------
  Muhammad Qasim | Software Engineer & Systems Developer
  Sahiwal, Punjab, Pakistan • muhammadqasim891011@gmail.com • github.com/MuhammadQasim17
 ------------------------------------------------------------------------------
  Core Disciplines: Flutter & Dart Desktop | Android Native SDK 35 | React 19 Web
  Flagships: ClairDocs Enterprise (Windows & Android) • Beacon SOS (Native Android)
================================================================================
```

> *Live UI Preview: Supports full dark/light theme persistence (`slate-950` dark aesthetic default) with dynamic glassmorphism and real-time category filtering.*

---

## Featured Engineering Projects

A scannable overview of the five production-grade engineering builds highlighted in this portfolio:

| Project | Domain / Platform | Core Stack | Key Architectural Highlight |
| :--- | :--- | :--- | :--- |
| **[ClairDocs Enterprise](https://github.com/MuhammadQasim17/clairdocs)** | Cross-Platform (Windows Desktop & Android) | Flutter, Dart, Riverpod, Freezed, SQLite FFI, Gemini / Groq AI, fl_chart, Syncfusion PDF, MSIX | Multi-format ingestion (PDF, `.docx`, `.xlsx`/`.csv`) with SHA-256 evidentiary hashing, hybrid AI audit engine, deterministic variance math, and offline SQLite FFI vault. |
| **[Beacon SOS](https://github.com/MuhammadQasim17/BeaconSOS_Final)** | Native Android (Safety) | Java, Kotlin, Android SDK 35, Jetpack Compose, Material 3, Firebase, SensorManager | Persistent Android 14+ Foreground Service with WakeLock Doze-mode survival, hardware accelerometer + AudioRecord sensor fusion, and automated GPS SMS dispatch. |
| **[AuraGuard](https://github.com/MuhammadQasim17/auraguard)** | Native Android (Edge AI) | Kotlin, Jetpack Compose, LiteRT, Room Database, Android Services, TelecomManager | 2-Phase physical fall detection state machine (free-fall to high-G impact), 16kHz PCM audio stream DSP classification, and autonomous dual-SIM telecom routing. |
| **[FieldOps Platform](https://github.com/MuhammadQasim17/fieldops-platform)** | Distributed Web & Mobile | React Native, Expo, Node.js, Express, PostgreSQL, Prisma ORM, Leaflet | Offline-first mobile architecture with local mutation queues and auto-sync, real-time Leaflet GPS fleet tracking, and in-memory PDF work order generation. |
| **[HireHub](https://github.com/MuhammadQasim17/hirehub)** | Full-Stack Web (ATS) | React 19, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma ORM | Dual-persona Role-Based Access Control (Candidate/Recruiter), job discovery engine with duplicate submission guards, and automated Nodemailer lifecycle alerts. |

### Flagship Build Deep Dives

- **ClairDocs Enterprise (Windows Desktop & Android):**  
  Engineered with Feature-First Clean Architecture and Riverpod state management across Windows Desktop (MSIX) and Android to eliminate enterprise contract billing leakage. Pairs multi-format document ingestion (PDF, Word `.docx`, and `.xlsx` / `.csv` spreadsheets) with cryptographic SHA-256 hashing, a hybrid Gemini 3.8 Flash / Groq AI audit engine, `fl_chart` recovery analytics, and an offline SQLite FFI vault (`clairdocs_vault.db`).

- **Beacon SOS (Native Android SDK 35):**  
  A production-grade Android personal safety system engineered for instant emergency detection and autonomous dispatch. Combines hardware sensor fusion (accelerometer shake detection + continuous background `AudioRecord` voice trigger) with telephony call-state awareness, persistent Foreground Service WakeLocks for Doze-mode execution, and Google Play Services Fused Location Provider for live GPS SMS coordinates.

---

## Architecture & Project Structure

The portfolio codebase separates content, state management, and visual components cleanly:

```text
src/
├── assets/                  # Static graphical assets (SVGs, raster icons, hero art)
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/              # Modular presentation components
│   ├── Certifications.jsx   # Academic degree timeline & verified credentials (CCNA, Meta)
│   ├── Contact.jsx          # Interactive direct-message launcher & clipboard copy feedback
│   └── Hero.jsx             # Profile headshot, technical highlights matrix, and quick stats
├── data/
│   └── portfolioData.js     # Single source of truth (profile, skills, projects, certifications)
├── App.css                  # Minimal scoped style overrides
├── App.jsx                  # Main view orchestration, category filtering, theme state, & modal
├── index.css                # Tailwind CSS v4 imports & @custom-variant dark directive
└── main.jsx                 # Application entry point mounting React 19 to DOM
```

### Architectural Principles

1. **Decoupled Data Layer (`portfolioData.js`):**  
   All portfolio content—including technical skill categories, project matrices, badges, architectural highlights, education records, and credential verification URLs—is decoupled from React presentation logic. Updates to projects or certifications require zero modifications to component JSX.

2. **Zero-Flicker Theme Persistence:**  
   `App.jsx` evaluates the user's stored preference from `localStorage` (`'portfolio-theme'`, defaulting to `'dark'`) during initial mount. It dynamically toggles `.dark` and `.light` classes on `document.documentElement`, which Tailwind CSS v4 resolves immediately via `@custom-variant dark (&:where(.dark, .dark *))`.

3. **Reactive Layout & Category Filtering:**  
   Category pills (`All`, `Desktop`, `Mobile`, `Full-Stack`) are computed dynamically with `useMemo` from `portfolioData.projects`. The grid layout intelligently adapts: Beacon SOS renders as a full-width featured flagship card (`lg:col-span-2`) with an internal two-column specification layout, followed by the remaining four builds in a balanced, symmetrical 2x2 grid.

---

## Quick Start & Deployment

### Local Development Setup

Prerequisites: Node.js (v18.0.0 or later) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/MuhammadQasim17/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server with Vite HMR
npm run dev

# 4. Run ESLint code quality checks
npm run lint

# 5. Build optimized production distribution
npm run build

# 6. Preview the production build locally
npm run preview
```

### Deployment Pipeline

The portfolio is configured for zero-config deployments on **Vercel**:
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (`vite build`)
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Pushing commits to the `main` branch automatically triggers Vercel CI/CD, running type checks, bundling assets, and deploying to the global edge network.

---

## Contact & Links

- **GitHub:** [github.com/MuhammadQasim17](https://github.com/MuhammadQasim17)
- **LinkedIn:** [linkedin.com/in/muhammad-qasim-6a8857315](https://www.linkedin.com/in/muhammad-qasim-6a8857315)
- **Email:** [muhammadqasim891011@gmail.com](mailto:muhammadqasim891011@gmail.com)
- **Phone / WhatsApp:** +92 370 8076745
- **Location:** Sahiwal, Punjab, Pakistan

---

License: [MIT](LICENSE) © 2026 Muhammad Qasim
