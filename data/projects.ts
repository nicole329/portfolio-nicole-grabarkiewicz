export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  featured: boolean;
  isTeamProject?: boolean;
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
  detailUrl: string;
  badge?: string;
}

export const projectsData: Project[] = [
  {
    id: "slowline",
    title: "Slowline",
    subtitle: "Full-Stack Web Application",
    period: "Juni 2026 – September 2026",
    featured: true,
    badge: "Hauptprojekt",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Argon2",
      "Tailwind CSS"
    ],
    description:
      "Eine entschleunigende Schreib-App. Next.js, Prisma, PostgreSQL, Authentifizierung und Deployment.",
    longDescription:
      "In einer schnelllebigen digitalen Welt reduziert Slowline das Schreiben auf das Wesentliche: Ein Impulswort regt Gedanken an, ein sanfter Timer visualisiert den Fortschritt durch ein kletterndes Faultier-Maskottchen, und der Zen-Modus blendet alle Ablenkungen aus.",
    contributions: [
      "UI/UX-Konzeption & Zen-Modus Design",
      "Fullstack Frontend-Entwicklung mit Next.js App Router & React 19",
      "Datenbankmodellierung & Schema-Design mit Prisma & PostgreSQL",
      "Eigenentwickelte, sichere Cookie-basierte Session-Authentifizierung mit Argon2 Password Hashing",
      "Sessionverwaltung & Wort-API-Integration mit serverseitigem Caching",
      "Responsive Design & CSS-Animationen",
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
    id: "elternplanet",
    title: "Elternplanet",
    subtitle: "UX/UI Design · Teamprojekt",
    period: "2025/2026",
    featured: false,
    isTeamProject: true,
    badge: "Teamprojekt",
    technologies: ["Figma", "Design System", "Prototyping", "UX Research", "UI Architecture"],
    description:
      "Case Study und komplette Website in Figma. Mein Fokus: Konzeption, Design System, Webdesign und Prototyping.",
    longDescription:
      "Elternplanet ist ein im Team konzipiertes digitales Portal für Eltern. Als UX/UI-Spezialistin war ich federführend für die optische Gestaltungslinie, die Entwicklung des modularen Design Systems in Figma sowie die interaktiven High-Fidelity Prototypen verantwortlich.",
    contributions: [
      "Mein Beitrag: UX/UI-Konzeption & Informationsarchitektur im Team",
      "Mein Beitrag: Aufbau des modularen Figma Design Systems (Farben, Typografie, UI-Komponenten)",
      "Mein Beitrag: Responsive Webdesign & Grid-Layouts für Mobile, Tablet & Desktop",
      "Mein Beitrag: Interaktive High-Fidelity Prototypen & Usability-Tests"
    ],
    detailUrl: "/projects/elternplanet"
  },
  {
    id: "portfolio-framer",
    title: "Portfolio (Framer)",
    subtitle: "Webdesign · Eigene Umsetzung",
    period: "2026",
    featured: false,
    technologies: ["Framer", "React", "Webdesign", "Custom Code", "Tailwind CSS"],
    description:
      "Diese Website – entwickelt mit Framer/React. Modern, schnell und individuell gestaltet.",
    longDescription:
      "Eine individuell konzipierte Entwickler-Portfolio-Seite. Fokus auf barrierefreie Typografie, sanfte Animationen und rasante Ladezeiten.",
    contributions: [
      "Konzeption & Vektor-Grafiken in Framer",
      "Framer Component System & Custom React Layouts",
      "Performance-Optimierung & Mobile-First Tuning"
    ],
    detailUrl: "/projects/portfolio-framer"
  },
  {
    id: "mybookspace",
    title: "MyBookSpace",
    subtitle: "Web Application",
    period: "2026",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "LocalStorage"],
    description:
      "Persönliche Bücherverwaltung mit React. Bücher entdecken, verwalten und bewerten.",
    longDescription:
      "Webanwendung zur Organisation der eigenen Bibliothek mit Suchfunktion, Kategorisierung, Lesestatus und Bewertungsfunktion.",
    contributions: [
      "React Component State Architecture",
      "Integration externer Buch-APIs & Suchfilter",
      "Lokale Persistenz & Bewertungssystem"
    ],
    detailUrl: "/projects/mybookspace"
  },
  {
    id: "hr-projekt",
    title: "HR-Projekt Gruppe 1",
    subtitle: "Teamprojekt",
    period: "2026",
    featured: false,
    isTeamProject: true,
    badge: "Teamprojekt",
    technologies: ["React", "Teamwork", "Agile Workflow", "Frontend", "REST APIs"],
    description:
      "Weblösung für HR-Prozesse. Konzeption, Frontend-Entwicklung und Teamarbeit.",
    longDescription:
      "Kollaboratives Teamprojekt zur Digitalisierung interner HR-Prozesse (Bewerberübersicht, Status-Board, Teamverteilung).",
    contributions: [
      "Mein Beitrag: Frontend-Entwicklung der Dashboard-Komponenten",
      "Mein Beitrag: Anbindung von API-Endpunkten im Team",
      "Mein Beitrag: Agile Absprachen & Code-Reviews"
    ],
    detailUrl: "/projects/hr-projekt"
  },
  {
    id: "filmroulette",
    title: "Filmroulette",
    subtitle: "React Application · Teamprojekt",
    period: "2025/2026",
    featured: false,
    isTeamProject: true,
    badge: "Teamprojekt",
    technologies: ["React", "JavaScript (ES6+)", "Movie Database API", "SPA", "Teamwork"],
    description:
      "Zufällige Filmempfehlungen basierend auf deinen Vorlieben. SPA mit React.",
    longDescription:
      "Im Team entwickelte interaktive Single Page Application, die über Zufallsgeneratoren und Genre-Filter maßgeschneiderte Filmvorschläge liefert.",
    contributions: [
      "Mein Beitrag: React Frontend-Komponenten & UI-Layouts im Team",
      "Mein Beitrag: Integration der The Movie Database (TMDB) REST API",
      "Mein Beitrag: Algorithmus für Genre-Filter & Zufallsempfehlungen"
    ],
    detailUrl: "/projects/filmroulette"
  }
];
