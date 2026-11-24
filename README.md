# Muhammad Qasim — Software Engineering Portfolio

A modern, high-performance personal engineering portfolio showcasing production-grade full-stack web platforms, edge-native Android mobile architectures, and cross-platform desktop audit systems.

**Live Profile:** Software Engineer (BSSE Graduate, University of Sargodha)  
**Primary Focus:** Web Systems, Native Mobile (Android SDK 35), Edge AI & Distributed Backends  

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom `@custom-variant dark` support
- **Icons & UI:** [Lucide React](https://lucide.dev/) + SVG Brand Components
- **Theming:** Full-spectrum Dark/Light mode switcher with dynamic root class toggling and `localStorage` persistence (`'portfolio-theme'`, defaulting to signature `slate-950` dark aesthetic)
- **Tooling:** ESLint 9 flat config, HMR, KaTeX-free responsive UI layout

---

## 🚀 Featured Engineering Systems

### 1. [Beacon SOS](https://github.com/MuhammadQasim17/BeaconSOS_Final) *(Flagship Mobile System)*
A production-grade personal safety Android application (SDK 35) engineered for instant critical emergency response.
- Multi-sensor fusion engine (`SensorManager` accelerometer shake detection + `AudioRecord` background voice keyword trigger).
- Persistent Android 14+ Foreground Service with `WakeLock` CPU persistence for reliable Doze-mode execution.
- Real-time GPS coordinate resolution via Google Play Services Fused Location Provider with autonomous SMS dispatching.
- **Stack:** Java, Kotlin, Android SDK 35, Jetpack Compose, Material 3, Firebase, Google Maps API, SensorManager.

### 2. [AuraGuard](https://github.com/MuhammadQasim17/auraguard)
An enterprise-grade, edge-native Android personal safety and anomaly inference platform.
- 2-Phase physical fall detection state machine detecting free-fall followed by high-G impact.
- 16kHz PCM audio stream time-domain DSP classification for acoustic anomaly inference with human speech suppression.
- Autonomous dual-SIM SMS dispatcher and direct phone account routing via `TelecomManager`.
- **Stack:** Kotlin, Jetpack Compose, LiteRT (On-Device ML), Room Database, Android Services.

### 3. [ClairDocs Enterprise](https://github.com/MuhammadQasim17/clairdocs)
An autonomous contract-to-invoice audit and dispute desktop system designed to eliminate billing leakage.
- Dual document ingestion (PDF & Word `.docx`) with SHA-256 cryptographic hash verification.
- Hybrid multi-engine LLM audit pipeline powered by Google Gemini 3.8 Flash with Groq fallback.
- Local SQLite FFI audit vault with dynamic analytics dashboards and automated SMTP/Webhook dispatch.
- **Stack:** Flutter, Dart, Riverpod, Gemini AI, SQLite FFI, Syncfusion PDF.

### 4. [FieldOps Platform](https://github.com/MuhammadQasim17/fieldops-platform)
An enterprise field service management and operations control center bridging office dispatchers with field technicians.
- Offline-first mobile React Native architecture with local mutation queues and auto-sync.
- Real-time Leaflet GPS fleet tracking and web dispatcher dashboard with operational telemetry.
- Automated in-memory PDF work order certificate generation with digital signature capture.
- **Stack:** React Native, Expo, Node.js, Express, PostgreSQL, Prisma ORM, Leaflet.

### 5. [HireHub](https://github.com/MuhammadQasim17/hirehub)
A full-stack recruitment and applicant tracking platform (ATS) connecting engineering talent with verified employers.
- Role-Based Access Control (RBAC) supporting distinct Candidate and Recruiter personas.
- Job discovery engine with keyword filters, 1-click applications, and duplicate submission guards.
- Recruiter pipeline dashboard with lifecycle management and automated Nodemailer email notifications.
- **Stack:** React 19, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma ORM.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js (v18.0.0 or later recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/MuhammadQasim17/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Run ESLint check
npm run lint

# Generate production build
npm run build
```

---

## 📬 Contact & Links

- **GitHub:** [github.com/MuhammadQasim17](https://github.com/MuhammadQasim17)
- **LinkedIn:** [linkedin.com/in/muhammad-qasim-6a8857315](https://www.linkedin.com/in/muhammad-qasim-6a8857315)
- **Email:** [muhammadqasim891011@gmail.com](mailto:muhammadqasim891011@gmail.com)
- **Phone / WhatsApp:** +92 370 8076745
- **Location:** Punjab, Pakistan

---

© 2026 Muhammad Qasim. All rights reserved.
