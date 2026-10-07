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
  figmaUrl?: string;
  figmaDesignUrl?: string;
  framerUrl?: string;
  imageUrl?: string;
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
    liveUrl: "https://slowline.vercel.app",
    imageUrl: "/images/slowline-main.png",
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
    problem:
      "Entwicklung einer zugänglichen, vertrauensvollen Plattform für junge Eltern mit übersichtlicher Informationsarchitektur und modernem Look & Feel.",
    solution:
      "Ein durchgängiges Figma Design System mit warmem Farbklima, lesbaren Schriftarten, wiederverwendbaren UI-Komponenten und interaktivem Prototyping.",
    contributions: [
      "Mein Beitrag: UX/UI-Konzeption & Informationsarchitektur im Team",
      "Mein Beitrag: Aufbau des modularen Figma Design Systems (Farben, Typografie, UI-Komponenten)",
      "Mein Beitrag: Responsive Webdesign & Grid-Layouts für Mobile, Tablet & Desktop",
      "Mein Beitrag: Interaktive High-Fidelity Prototypen & Usability-Tests"
    ],
    figmaUrl:
      "https://www.figma.com/proto/biSE10NdHur9ToUKbLqaQZ/nicole-grabarkiewicz?node-id=2003-77&t=FemyhpRu1wFzFLof-1",
    figmaDesignUrl:
      "https://www.figma.com/design/biSE10NdHur9ToUKbLqaQZ/nicole-grabarkiewicz?node-id=2003-77&t=FemyhpRu1wFzFLof-1",
    liveUrl:
      "https://www.figma.com/proto/biSE10NdHur9ToUKbLqaQZ/nicole-grabarkiewicz?node-id=2003-77&t=FemyhpRu1wFzFLof-1",
    imageUrl: "/images/elternplanet-preview.png",
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
    problem:
      "Erstellung eines herausstechenden Web-Portfolios für Bewerbungen als Web Developer Specialist, das persönliches Designgefühl mit technischer Präzision verbindet.",
    solution:
      "Umsetzung im Framer- & React-Ökosystem mit warmer Farbpalette, serif-betonten Überschriften, interaktivem 5-Stufen Stepper und responsivem Karten-Grid.",
    architecture: [
      { step: "Design System & Typografie", description: "Farbschema (Warm Beige & Dark Charcoal) und Serif-Schriften" },
      { step: "Hero Workspace Illustration", description: "Stylischer Laptop-Mockup Rahmen mit Handschrift-Notizen" },
      { step: "Projekte & Case Studies Grid", description: "Interaktive Projektkarten mit Schnellzugriff & Tags" },
      { step: "5-Stufen Stepper 'Mein Weg'", description: "Visueller Lern- und Entwicklungspfad mit Projektverknüpfungen" }
    ],
    techDecisions: [
      {
        title: "Warum Framer & React Custom Layouts?",
        rationale: "Maximale kreative Freiheit bei der Gestaltung von Micro-Interactions gepaart mit komponentenbasierter React-Architektur."
      },
      {
        title: "Warum reduzierte Farbpalette (Warm Beige/Charcoal)?",
        rationale: "Vermittelt Eleganz, Ruhe und hohe Professionalität im Vergleich zu überladenen Standard-Templates."
      }
    ],
    contributions: [
      "Visual Identity & Typografie-Konzeption (Playfair Serif & Inter Sans)",
      "Layout-Architektur: Hero-Bereich mit Desk-Mockup, 6-Karten-Grid & 5-Stufen Stepper",
      "Umsetzung von interaktiven Micro-Interactions & Hover-Effekten",
      "Barrierefreies Webdesign (Accessibility, Kontraste & responsive Breakpoints)"
    ],
    framerUrl: "https://framer.com/projects/Portfolio-copy--LNFaCp55MTn6L43WNgC2-8gi9y",
    liveUrl: "https://framer.com/projects/Portfolio-copy--LNFaCp55MTn6L43WNgC2-8gi9y",
    imageUrl: "/images/framer-preview.png",
    detailUrl: "/projects/portfolio-framer"
  },
  {
    id: "mybookspace",
    title: "MyBookSpace",
    subtitle: "Full-Stack Web Application · Google Books API",
    period: "2026",
    featured: false,
    badge: "Web App",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Google Books API",
      "Firebase Auth",
      "Cloud Firestore",
      "Vite"
    ],
    description:
      "Persönliche digitale Bücherverwaltung mit React & Google Books API. Bücher entdecken, organisieren & bewerten.",
    longDescription:
      "MyBookSpace ist eine moderne Webanwendung zur Organisation der eigenen Bibliothek. Nutzer können live in über 40 Millionen Titeln der Google Books API suchen, Bücher zu ihrer persischen Bibliothek hinzufügen, Lesestatus verwalten und Bewertungen abgeben.",
    problem:
      "Bücherenthusiasten suchen oft nach einer schlanken, werbefreien Möglichkeit, gelesene und geplante Bücher ohne überladene Netzwerke übersichtlich zu verwalten.",
    solution:
      "Ein hochreaktives Single Page Application Dashboard mit Echtzeit-Suche über die Google Books API, flexiblen Filterkategorien (Gelesen, Am Lesen, Wunschliste) und Firebase-Authentifizierung.",
    architecture: [
      { step: "React 19 Frontend", description: "Komponentenbasierte SPA mit responsivem Tailwind CSS Layout & Filter-Tabs" },
      { step: "Google Books API", description: "RESTful Anbindung zur Live-Durchsuchung von +40 Millionen Titeln & Metadaten" },
      { step: "Firebase Auth & Firestore", description: "Sichere Benutzeranmeldung & Cloud-Persistenz der persönlichen Bibliothek" },
      { step: "LocalStorage Fallback", description: "Schneller lokaler Caching-Mechanismus für reibungsloses Offline-Browsing" }
    ],
    techDecisions: [
      {
        title: "Warum Google Books REST API?",
        rationale: "Zugriff auf die weltweit umfangreichste Buchdatenbank mit detaillierten Metadaten, Buchcovern und Autoreninformationen."
      },
      {
        title: "Warum React 19 & Tailwind CSS?",
        rationale: "Schnelle Renderzeiten, declarative State Management für Filterzustände und ein maßgeschneidertes, minimalistisches UI."
      }
    ],
    contributions: [
      "Fullstack Architecture & React State Management",
      "Google Books API Anbindung & Suchoptimierung",
      "UI/UX Konzept & Responsive Bibliotheks-Grid",
      "Firebase Cloud Persistenz & Auth Workflow"
    ],
    liveUrl: "https://my-book-space.vercel.app/",
    imageUrl: "/images/mybookspace-preview.png",
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
    problem:
      "Unübersichtliche analoge oder veraltete Bewerber- und Teamprozesse in Unternehmen.",
    solution:
      "Ein übersichtliches HR-Dashboard mit Status-Kanban, Bewerberlisten und Teamzuordnung im agilen Entwicklerteam.",
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
    problem:
      "Nutzer verbringen oft zu viel Zeit mit dem Durchsuchen von Streaming-Katalogen, ohne eine Entscheidung zu treffen.",
    solution:
      "Eine spielerische 'Filmroulette' SPA mit Instant-Genre-Filtern und direkten Filmdetails.",
    contributions: [
      "Mein Beitrag: React Frontend-Komponenten & UI-Layouts im Team",
      "Mein Beitrag: Integration der The Movie Database (TMDB) REST API",
      "Mein Beitrag: Algorithmus für Genre-Filter & Zufallsempfehlungen"
    ],
    detailUrl: "/projects/filmroulette"
  }
];
