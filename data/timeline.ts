export interface WayStep {
  step: string;
  title: string;
  subtitle: string;
  detail: string;
}

export const waySteps: WayStep[] = [
  {
    step: "01",
    title: "UX/UI Design",
    subtitle: "z. B. Elternplanet",
    detail: "Figma"
  },
  {
    step: "02",
    title: "Webdesign",
    subtitle: "Portfolio",
    detail: "Framer"
  },
  {
    step: "03",
    title: "Frontend",
    subtitle: "JavaScript, React",
    detail: "Meine ersten Projekte"
  },
  {
    step: "04",
    title: "Full-Stack",
    subtitle: "Next.js, Datenbanken",
    detail: "Authentifizierung"
  },
  {
    step: "05",
    title: "Heute",
    subtitle: "Web Developer Specialist",
    detail: "bereit für neue Herausforderungen"
  }
];

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  isHighlight?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    date: "September 2025",
    title: "Grundlagen & Start in die Webentwicklung",
    subtitle: "HTML5, CSS3, JavaScript (ES6+)",
    description:
      "Einstieg in semantisches HTML, moderne CSS-Layouts (Flexbox, Grid), responsive Webdesign-Prinzipien und objektorientierte sowie funktionale JavaScript-Grundlagen."
  },
  {
    date: "Oktober 2025",
    title: "Erste interaktive Web-Projekte",
    subtitle: "DOM Manipulation & Async JS",
    description:
      "Entwicklung erster dynamischer Formulare, DOM-Interaktionen und Anbindung externer REST-APIs mit Async/Await und Fetch API."
  },
  {
    date: "November 2025",
    title: "React & Komponenten-Architektur",
    subtitle: "React Hooks, State & Props",
    description:
      "Vertiefung in modernem React (Functional Components, useState, useEffect, useContext) und modulare UI-Entwicklung.",
    tags: ["React", "REST API"]
  },
  {
    date: "Januar 2026",
    title: "TypeScript & Moderner Stack",
    subtitle: "Typensicherheit & Clean Code",
    description:
      "Einführung von TypeScript für strikte Typisierung, Interfaces und Generics. Erstellung des 'Developer Task Dashboards'.",
    tags: ["TypeScript", "Tailwind CSS"]
  },
  {
    date: "März 2026",
    title: "Backend & Datenbank-Grundlagen",
    subtitle: "Node.js, PostgreSQL & Prisma ORM",
    description:
      "Einstieg in relationale Datenbankmodelle, SQL, Prisma ORM und serverseitiges API-Design.",
    tags: ["PostgreSQL", "Prisma", "Node.js"]
  },
  {
    date: "Juni 2026",
    title: "Hauptprojekt Slowline (Fullstack)",
    subtitle: "Next.js App Router, Auth & Session-Management",
    description:
      "Konzeption, Design und Entwicklung der Fullstack-Schreibanwendung 'Slowline' mit Wortimpuls-Generator, Argon2-Hashing und HttpOnly Session-Cookies.",
    tags: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Argon2"]
  },
  {
    date: "15. September 2026",
    title: "🎓 Web Development Specialist IHK",
    subtitle: "Zertifikatsabschluss · IHK Akademie München und Oberbayern gGmbH",
    description:
      "Erfolgreicher Lehrgangsabschluss als 'Web Development Specialist IHK' an der IHK Akademie München und Oberbayern. Nachgewiesene Qualifikation in React.js, Frontend-Frameworks, State Management, Routing, modernen CSS-Frameworks sowie Performance-Optimierung und Testing.",
    tags: ["IHK Zertifikat", "React.js", "State Management", "CSS Frameworks", "Testing & Performance"],
    isHighlight: true
  }
];
