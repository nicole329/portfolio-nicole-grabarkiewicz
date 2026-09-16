export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  featured: boolean;
  technologies: string[];
  description: string;
  longDescription?: string;
  contributions: string[];
  problem?: string;
  solution?: string;
  architecture?: {
    step: string;
    description: string;
  }[];
  techDecisions?: {
    title: string;
    rationale: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  detailUrl?: string;
  badge?: string;
}

export const projectsData: Project[] = [
  {
    id: "slowline",
    title: "Slowline",
    subtitle: "Slow Writing & Mindfulness Web App",
    period: "Juni 2026 – September 2026",
    featured: true,
    badge: "Abschlussprojekt",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "Tailwind CSS",
      "Argon2",
      "HttpOnly Cookies"
    ],
    description:
      "Eine entschleunigte Schreibanwendung, bei der Nutzer über zeitlich begrenzte Schreibimpulse konzentriert schreiben und ihre Sessions in einem persönlichen Archiv speichern können.",
    longDescription:
      "In einer schnelllebigen digitalen Welt reduziert Slowline das Schreiben auf das Wesentliche: Ein Impulswort regt Gedanken an, ein sanfter Timer visualisiert den Fortschritt durch ein kletterndes Faultier-Maskottchen, und der Zen-Modus blendet alle Ablenkungen aus.",
    contributions: [
      "UI/UX-Konzeption & Zen-Modus Design",
      "Fullstack Frontend-Entwicklung mit Next.js App Router & React 19",
      "Datenbankmodellierung & Schema-Design mit Prisma & PostgreSQL",
      "Eigenentwickelte, sichere Cookie-basierte Session-Authentifizierung mit Argon2 Password Hashing",
      "Sessionverwaltung & Wort-API-Integration mit serverseitigem Caching",
      "Responsive Design & CSS-Animationen für das Faultier-Maskottchen",
      "Performance- & Sicherheit-Optimierungen (HttpOnly Cookies, SQL-Injection Schutz)"
    ],
    problem:
      "Herkömmliche Notiz- und Schreib-Apps überfordern Nutzer oft mit komplexer Ordnerverwaltung, ständigen Benachrichtigungen und Reizüberflutung, wodurch achtsames Reflexionsschreiben erschwert wird.",
    solution:
      "Slowline schaffte einen geschützten, minimalistischen Schreibraum mit Wortimpulsen in 8 Sprachen, einem ruhigen visuellen Timer und automatischer, strukturierter Archivierung.",
    architecture: [
      { step: "Browser (Client)", description: "React 19 Frontend mit Zen-Modus, Impulswort-Erfassung & Timer" },
      { step: "Next.js App Router / Server Actions", description: "Typensichere Endpunkte & Authentifizierungs-Handling" },
      { step: "Prisma ORM", description: "Abstraktionsschicht für typensichere DB-Abfragen" },
      { step: "PostgreSQL (Neon)", description: "Serverless Cloud-Datenbank für Nutzer & Schreib-Sessions" }
    ],
    techDecisions: [
      {
        title: "Warum Next.js 16 App Router?",
        rationale: "Nahtlose Verbindung von serverseitigem Rendering (SSR), Server Actions für mutation-safe Auth und hervorragender Performance."
      },
      {
        title: "Warum PostgreSQL & Prisma ORM?",
        rationale: "Strikte Datenintegrität für Nutzerdaten & Sessions, gepaart mit automatischer TypeScript-Typgenerierung."
      },
      {
        title: "Warum Argon2 Password Hashing?",
        rationale: "Höchster Sicherheitsstandard gegen Brute-Force- & Rainbow-Table-Angriffe im Vergleich zu älteren Algorithmen."
      },
      {
        title: "Warum Serverless Neon PostgreSQL?",
        rationale: "Automatische Skalierung, schnelles Branching für Entwicklungszwecke und kosteneffizientes Cloud-Hosting."
      }
    ],
    githubUrl: "https://github.com/nicolegrabarkiewicz/slowline",
    liveUrl: "https://slowline.vercel.app",
    detailUrl: "/projects/slowline"
  },
  {
    id: "kosmetikstudio",
    title: "Kosmetikstudio Webauftritt",
    subtitle: "Moderne Unternehmensseite & Buchungs-UI",
    period: "März 2026 – Mai 2026",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "Ein hochklassiges, responsives Web-Design für ein lokales Kosmetikstudio mit interaktiver Leistungsübersicht, Preisrechner und Termin-Anfrageformular.",
    contributions: [
      "Responsive Frontend-Entwicklung",
      "Komponenten-basierte Preiskalkulation",
      "Formular-Validierung & Kontaktschnittstelle",
      "UI/UX Konzept mit eleganter Typografie"
    ],
    githubUrl: "https://github.com/nicolegrabarkiewicz",
    liveUrl: "#"
  },
  {
    id: "dev-dashboard",
    title: "Developer Task & Workflow Dashboard",
    subtitle: "Kanalisiertes Aufgaben- & Fortschrittstracking",
    period: "Januar 2026 – Februar 2026",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    description:
      "Interaktives Kanban- & Task-Board zur Organisation von Lernzielen, Code-Snippets und täglichen Programmieraufgaben.",
    contributions: [
      "Drag-and-Drop Task Management UI",
      "LocalStorage Persistence & Context API State",
      "Filter- & Suchfunktionalität für Code-Snippets"
    ],
    githubUrl: "https://github.com/nicolegrabarkiewicz",
    liveUrl: "#"
  },
  {
    id: "weather-pulse",
    title: "Weather Pulse App",
    subtitle: "Echtzeit-Wetteranwendung mit Geo-Location",
    period: "November 2025 – Dezember 2025",
    featured: false,
    technologies: ["React", "JavaScript (ES6+)", "OpenWeather API", "CSS Modules"],
    description:
      "Minimalistische Wetter-App mit Abruf aktueller Daten, 5-Tages-Vorhersage und dynamischen Hintergründen je nach Wetterlage.",
    contributions: [
      "Anbindung der OpenWeather Map REST API",
      "Fehlerbehandlung & Loading States",
      "Geolokalisation des Nutzers"
    ],
    githubUrl: "https://github.com/nicolegrabarkiewicz",
    liveUrl: "#"
  }
];
