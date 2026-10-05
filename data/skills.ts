export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description: string;
    iconName?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Moderne, performante und barrierefreie Benutzeroberflächen",
    skills: [
      { name: "React 19", description: "Server/Client Components, Hooks, State Management" },
      { name: "Next.js 16", description: "App Router, SSR, SSG, Parallel Routes, Server Actions" },
      { name: "TypeScript", description: "Typensichere Interfaces, Generics, strict mode" },
      { name: "Tailwind CSS", description: "Utility-First, Custom Themes, Responsive & Dark Mode" },
      { name: "HTML5 / CSS3", description: "Semantisches HTML, Flexbox, CSS Grid, Custom Properties" },
      { name: "UI / UX & Animations", description: "Minimalistisches Design, Framer Motion, Keyframes" }
    ]
  },
  {
    title: "Backend & Database",
    description: "Serverseitige Architektur, ORM & Datenbankdesign",
    skills: [
      { name: "Next.js Server Actions", description: "Typensichere Server-Mutationen & REST Route Handlers" },
      { name: "Prisma ORM", description: "Schema Design, Migrationen, Type Generation, Seeding" },
      { name: "PostgreSQL", description: "Relationale Modellierung, Indizes, Serverless Postgres (Neon)" },
      { name: "Node.js Runtime", description: "Asynchrone Event-Driven Architektur, npm Ecosystem" },
      { name: "Session & Auth API", description: "Eigenentwickeltes Cookie-Session Management" }
    ]
  },
  {
    title: "Security & Best Practices",
    description: "Nachgewiesener Fokus auf sichere Datenverarbeitung",
    skills: [
      { name: "Passwort-Hashing (Argon2)", description: "Memory-hard, sicherer Standard gegen Brute-Force" },
      { name: "HttpOnly Cookies", description: "Schutz gegen Token-Diebstahl via XSS Scripting" },
      { name: "SQL-Injection Schutz", description: "Parametrisierte Abfragen durch Prisma ORM" },
      { name: "XSS & CSRF Prevention", description: "Sanitizing, SameSite Cookie Attributes, Clean Headers" },
      { name: "Secure Session Lifetime", description: "Automatische Session-Invalidierung & Token Verification" }
    ]
  },
  {
    title: "Deployment & Tooling",
    description: "Versionsverwaltung, Cloud-Hosting & CI/CD",
    skills: [
      { name: "Vercel", description: "Zero-Config Serverless Deployment, Edge Functions, Preview Builds" },
      { name: "Git & Versionskontrolle", description: "Branching, Pull Requests, Commit Standards" },
      { name: "Neon Database", description: "Cloud Serverless PostgreSQL, Database Branching" },
      { name: "VS Code & Dev Tools", description: "Debugging, Extensions, Linting (ESLint, Prettier)" }
    ]
  }
];
