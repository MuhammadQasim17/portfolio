export const portfolioData = {
  profile: {
    name: "Muhammad Qasim",
    title: "Software Engineer • Flutter & Dart / Mobile & Full-Stack Developer",
    tagline: "Building cross-platform & desktop systems with Flutter & Dart, native Android apps in Java & Kotlin, and full-stack web platforms.",
    about: "Software Engineering graduate (BSSE, University of Sargodha) focused on Flutter & Dart cross-platform and desktop applications, native Android engineering in Java & Kotlin, and full-stack web platforms (React, Node.js, Prisma, PostgreSQL). Experienced in integrating AI / LLM APIs into mobile, desktop, and web applications, alongside Clean Architecture, reactive state management, and offline-first persistence.",
    avatarUrl: "/assets/profile-photo.jpg", // Place your headshot in your public/assets folder
    email: "muhammadqasim891011@gmail.com",
    phone: "+923708076745",
    github: "https://github.com/MuhammadQasim17",
    linkedin: "https://www.linkedin.com/in/muhammad-qasim-6a8857315"
  },

  skills: {
    languages: ["Dart", "Java", "Kotlin", "JavaScript", "TypeScript", "HTML", "CSS"],
    frontendMobile: ["Flutter", "Jetpack Compose", "React 19", "Vite", "Tailwind CSS v4", "React Native", "Expo", "Material Design 3"],
    backendDatabases: ["SQLite", "Firebase", "PostgreSQL", "Prisma ORM", "Node.js", "Express 5", "MySQL"],
    toolsDevOps: ["Android Studio", "VS Code", "Git & GitHub", "Docker", "Vercel", "Render", "Netlify"]
  },

  projects: [
    {
      id: "clairdocs",
      title: "ClairDocs Enterprise",
      category: "Desktop",
      badge: "Flutter & Dart • Enterprise Audit Desktop App",
      tagline: "Autonomous Contract-to-Invoice Audit & Dispute Desktop System",
      description: "An enterprise-grade desktop application built with Flutter and Dart to automate contract-to-invoice auditing and eliminate billing leakage through dual-pane document inspection, schema-constrained AI clause matching, and deterministic financial variance math.",
      highlights: [
        "Feature-First Clean Architecture with Flutter Riverpod state management and Freezed immutable models.",
        "Dual-pane PDF & Word (.docx) ingestion with live SHA-256 evidentiary file hashing.",
        "Hybrid multimodal AI audit pipeline (Gemini 3.8 Flash with Groq fallback) paired with deterministic client-side variance calculations.",
        "Offline-first SQLite FFI vault (clairdocs_vault.db), fl_chart recovery analytics, MSIX desktop packaging, and SMTP/Webhook dispute dispatch."
      ],
      tags: ["Flutter", "Dart", "Riverpod", "Freezed", "SQLite FFI", "Gemini AI", "Syncfusion PDF", "MSIX"],
      github: "https://github.com/MuhammadQasim17/clairdocs"
    },
    {
      id: "beaconsos",
      title: "Beacon SOS",
      category: "Mobile",
      badge: "Native Android • Mobile Safety System",
      tagline: "Multi-Trigger Emergency Response App",
      description: "A production-grade personal safety Android application (SDK 35) engineered to detect critical emergencies via multi-sensor fusion (accelerometer shake detection, continuous background voice-keyword detection, and automated safety check-in timers) and dispatch instant SMS alerts with live GPS coordinates to trusted contacts.",
      highlights: [
        "Persistent Android 14+ Foreground Service with WakeLock CPU persistence for reliable Doze-mode execution.",
        "Real-time hardware sensor fusion (SensorManager accelerometer + AudioRecord voice trigger) with telephony call-state awareness.",
        "Live GPS coordinate resolution via Google Play Services Fused Location Provider and automated SMS dispatching.",
        "Unified Material 3 dark-mode design system backed by Firebase Authentication, Cloud Firestore, Realtime Database, and App Check."
      ],
      tags: ["Java", "Kotlin", "Android SDK 35", "Jetpack Compose", "Material 3", "Firebase", "Google Maps API", "SensorManager"],
      github: "https://github.com/MuhammadQasim17/BeaconSOS_Final"
    },
    {
      id: "auraguard",
      title: "AuraGuard",
      category: "Mobile",
      tagline: "Edge-Native Telemetry & Proactive Safety Platform",
      description: "An enterprise-grade, edge-native Android personal safety platform engineered for continuous real-time threat detection, physical/acoustic anomaly inference, and automated emergency dispatch entirely on-device.",
      highlights: [
        "2-Phase physical fall detection state machine detecting free-fall followed by high-G impact.",
        "16kHz PCM audio stream time-domain DSP classification for glass shatter detection with human speech suppression.",
        "Autonomous dual-SIM SMS dispatcher and direct phone account routing via TelecomManager."
      ],
      tags: ["Kotlin", "Jetpack Compose", "LiteRT", "Room Database", "Android Services"],
      github: "https://github.com/MuhammadQasim17/auraguard"
    },
    {
      id: "fieldops",
      title: "FieldOps Platform",
      category: "Full-Stack",
      tagline: "Enterprise Field Service & Operations Control Center",
      description: "A comprehensive field service management platform bridging office dispatchers managing fleet logistics with field technicians executing work orders on-site.",
      highlights: [
        "Offline-first mobile React Native architecture with local mutation queues and auto-sync.",
        "Real-time Leaflet GPS fleet tracking and Web dispatcher dashboard with KPI telemetry.",
        "Automated in-memory PDF work order certificate generation with customer digital signature capture."
      ],
      tags: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma", "Leaflet"],
      github: "https://github.com/MuhammadQasim17/fieldops-platform" // <-- Update this link here
    },
    {
      id: "hirehub",
      title: "HireHub",
      category: "Full-Stack",
      tagline: "Recruitment & Applicant Tracking Platform (ATS)",
      description: "A full-stack production-ready platform connecting software engineering talent with verified employers through a streamlined application and tracking workflow.",
      highlights: [
        "Role-Based Access Control (RBAC) supporting distinct CANDIDATE and RECRUITER personas.",
        "Job discovery engine with keyword filters, 1-click applications, and duplicate submission guards.",
        "Recruiter pipeline dashboard with lifecycle control and automated Nodemailer email notifications."
      ],
      tags: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
      github: "https://github.com/MuhammadQasim17/hirehub"
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      institution: "University of Sargodha",
      period: "2022 – 2026",
      gradeOrCgpa: "CGPA: 3.25 / 4.00 (69.35%, 130 Credit Hours)",
      details: "Comprehensive software engineering curriculum covering data structures, algorithms, cloud computing, data mining, and mobile/web application development."
    },
    {
      degree: "Higher Secondary School Certificate (F.Sc Pre-Engineering)",
      institution: "Divisional Public School & College Sahiwal (BISE Sahiwal)",
      period: "2022",
      gradeOrCgpa: "970 / 1100 Marks (88.18%, Grade A+)",
      details: "Rigorous pre-engineering foundation focusing on advanced mathematics, physics, and chemistry."
    },
    {
      degree: "Secondary School Certificate (Matriculation with Science)",
      institution: "Misali Zakariya Science Secondary School Kamir (BISE Sahiwal)",
      period: "2020",
      gradeOrCgpa: "1058 / 1100 Marks (96.18%, Grade A+)",
      details: "Core science education with a high-distinction grade."
    }
  ],

  certifications: [
    {
      title: "Principles of UX/UI Design",
      issuer: "Meta (Coursera)",
      date: "October 2026",
      verifyUrl: "https://coursera.org/verify/PUCX8QAU6Y8Q"
    },
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta (Coursera)",
      date: "October 2026",
      verifyUrl: "https://coursera.org/verify/QPDIMXDEREAP"
    },
    {
      title: "Programming Fundamentals in Swift",
      issuer: "Meta (Coursera)",
      date: "October 2026",
      verifyUrl: "https://coursera.org/verify/ODNL515JJ64N"
    },
    {
      title: "Version Control",
      issuer: "Meta (Coursera)",
      date: "October 2026",
      verifyUrl: "https://coursera.org/verify/LGN42GD38LV1"
    },
    {
      title: "Project Management Quickstart",
      issuer: "University of Washington (Coursera)",
      date: "October 2026",
      verifyUrl: "https://coursera.org/verify/AM2L5F8AAAEN"
    },
    {
      title: "Learn CCNA 200-301 Network Fundamentals",
      issuer: "Simplilearn SkillUp",
      date: "December 2024",
      verifyUrl: "https://www.simplilearn.com/",
      certId: "7571454"
    }
  ]
};