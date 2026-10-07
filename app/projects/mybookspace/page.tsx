"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Library,
  Sparkles,
  Search,
  Database,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Code2,
  Lock,
  GitMerge,
  FileCheck,
  Calendar,
  AlertTriangle,
  Quote,
  ListCheck,
  Globe,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function MyBookSpaceDetailPage() {
  const project = projectsData.find((p) => p.id === "mybookspace")!;
  const [activeSlide, setActiveSlide] = useState(0);

  const dossierSlides = [
    {
      id: "dossier-1",
      number: "Folie 01",
      title: "Das Projekt-Dossier",
      subtitle: "MyBookSpace Case Study",
      headline: "Entdecke, speichere und verwalte deine Lieblingsbücher",
      description:
        "Offizielles Projekt-Dossier zur Webanwendung MyBookSpace. Konzeption, Entwurf, Systemarchitektur und Umsetzung durch Autorin Nicole Grabarkiewicz.",
      image: "/images/mybookspace/dossier-slide1.png",
      badge: "Titel & Intro",
      icon: BookOpen,
      details: [
        "Projekt-Dossier & Fallstudie von Nicole Grabarkiewicz",
        "Zentrale Single-Page-Application für Bücherenthusiasten",
        "Werbefreies, ästhetisches Bibliotheks-Management",
      ],
    },
    {
      id: "dossier-2",
      number: "Folie 02",
      title: "Prolog – Das Chaos",
      subtitle: "Ausgangslage & Lösung",
      headline: "Das Chaos im Bücherregal vs. Die MyBookSpace Lösung",
      description:
        "Das Problem: Leser verlieren den Überblick – es fehlt an einer zentralen Verwaltung für Wunschlisten, aktuell gelesene und beendete Bücher. Die Lösung: MyBookSpace vereint Buchsuche, Wishlist, Reading- und Finished-Listen in einer reaktiven SPA.",
      image: "/images/mybookspace/dossier-slide2.png",
      badge: "Problem & Lösung",
      icon: AlertTriangle,
      details: [
        "Problem: Fehlende Übersicht bei Wunschlisten & Lese-Status",
        "Lösung: Nahtlose Single-Page-Experience für alle Bibliotheken",
        "Echtzeit-Synchronisation zwischen Suche und Nutzer-Listen",
      ],
    },
    {
      id: "dossier-3",
      number: "Folie 03",
      title: "Kapitel 1 – Der Entwurf",
      subtitle: "4 Wochen bis zum Print",
      headline: "Strukturierter 4-Wochen Entwicklungsplan",
      description:
        "Vom ersten Entwurf bis zum finalen Live-Gang: Ein strukturierter Fahrplan über 4 Wochen sichert die systematische Umsetzung aller Kernfunktionalitäten.",
      image: "/images/mybookspace/dossier-slide3.png",
      badge: "Entwicklungs-Roadmap",
      icon: Calendar,
      details: [
        "Woche 1: Ideenfindung, Skizzen, Figma-Prototypen & Wireframes",
        "Woche 2: React-Setup & Implementierung des Routings",
        "Woche 3: Backend-Integration (Firebase Auth, Firestore, Google Books API)",
        "Woche 4: Testing, Bugfixing, Finalisierung & Live-Gang auf Vercel",
      ],
    },
    {
      id: "dossier-4",
      number: "Folie 04",
      title: "Kapitel 2 – Architektur",
      subtitle: "Die Systemarchitektur (Blueprint)",
      headline: "End-to-End Datenfluss der Anwendung",
      description:
        "Der technische Blueprint zeigt die nahtlose Interaktion vom Benutzer über das React Frontend, die Google Books REST API, Firebase Auth & Cloud Firestore bis hin zum automatisierten Vercel Deployment.",
      image: "/images/mybookspace/dossier-slide4.png",
      badge: "System Blueprint",
      icon: Layers,
      details: [
        "React Frontend: React Router & Tailwind CSS für UI-Komponenten",
        "Google Books API: Asynchroner Live-Fetch von Metadaten",
        "Firebase: Authentication & Cloud Firestore für Datenpersistenz",
        "Vercel: Automatisierte CI/CD Deployment-Pipeline",
      ],
    },
    {
      id: "dossier-5",
      number: "Folie 05",
      title: "Kapitel 3 – Maschinenraum",
      subtitle: "Der Maschinenraum (Code-Skizzen)",
      headline: "Master-Detail Routing & Firestore Sync",
      description:
        "Blick in den Code: Der 'BooksContextProvider' sichert den weltweiten Anwendungs-State, während dynamische Routen ('/book/:id') und asynchrone Firestore-Funktionen ('addBook') die Echtzeit-Synchronisation gewährleisten.",
      image: "/images/mybookspace/dossier-slide5.png",
      badge: "Code Architecture",
      icon: Code2,
      code: `// Master-Detail Routing & Global Context
<BrowserRouter>
  <BooksContextProvider>
    <Routes>
      <Route path='/books' element={<Books />} />
      <Route path='/book/:id' element={<BookDetail />} />
    </Routes>
  </BooksContextProvider>
</BrowserRouter>

// Echtzeit-Firestore Synchronisation
const addBook = async (bookData) => {
  const userRef = collection(db, 'users');
  await addDoc(userRef, bookData);
};`,
      details: [
        "Deklarativer Context Provider für globale State-Verwaltung",
        "Dynamischer Pfad '/book/:id' für Deep-Linking & Master-Detail-Ansicht",
        "Modulare Firestore helper functions (addBook, getSavedBooks)",
      ],
    },
    {
      id: "dossier-6",
      number: "Folie 06",
      title: "Kapitel 4 – Redaktionskonferenz",
      subtitle: "Die Redaktionskonferenz (Herausforderungen)",
      headline: "Drei zentrale technische Herausforderungen",
      description:
        "Im Entwicklungsprozess wurden drei kritische Hürden gemeistert: Der Firebase Merge (Live API vs. Cloud DB), die bereichsübergreifende Status-Konsistenz und die Daten-Integrität mit robusten Fallbacks.",
      image: "/images/mybookspace/dossier-slide6.png",
      badge: "Herausforderungen",
      icon: GitMerge,
      details: [
        "Firebase Merge: Asynchrone API-Daten mit Firestore-Nutzerstatus in Echtzeit abgleichen",
        "Status-Konsistenz: Wishlist, Reading & Finished-Labels über alle Seiten synchron halten",
        "Daten-Integrität: Robuste Fallbacks für fehlende Buchcover oder unvollständige API-Daten",
      ],
    },
    {
      id: "dossier-7",
      number: "Folie 07",
      title: "Kapitel 5 – Die Bibliothek",
      subtitle: "Feature-Galerie & User Feedback",
      headline: "Nahtlose Suche, Listen-Verwaltung & Routing",
      description:
        "Die Benutzeroberfläche überzeugt durch direkte Interaktion: Eine intuitive Buchsuche, übersichtliche Bibliotheks-Kategorien und schnelles Detail-Routing erfüllen höchste Usability-Ansprüche.",
      image: "/images/mybookspace/dossier-slide7.png",
      badge: "Feature Galerie",
      icon: Library,
      details: [
        "Nahtlose Suchfunktion in über 40 Mio. Buchtiteln",
        "Kategorisierte Listen (Wishlist, Reading, Finished)",
        "User Feedback: 'Navigation verständlich, Suche intuitiv.'",
      ],
    },
    {
      id: "dossier-8",
      number: "Folie 08",
      title: "Kapitel 6 – Schlussredaktion",
      subtitle: "Anforderungs-Check (IHK / Modul)",
      headline: "Vollständige Erfüllung aller Grundanforderungen",
      description:
        "Systematische Überprüfung des Anforderungskatalogs: Alle technischen Vorgaben wie React Router, State Management, Custom Hooks, Formularvalidierung und Cloud-Persistenz wurden zu 100% verifiziert.",
      image: "/images/mybookspace/dossier-slide8.png",
      badge: "Anforderungs-Check",
      icon: ListCheck,
      details: [
        "✓ React Router integriert (>3 Pages: Home, Books, BookDetail, Dashboard)",
        "✓ Master-Detail-Ansicht & >5 wiederverwendbare Komponenten",
        "✓ State Management (useState, useEffect, useContext)",
        "✓ Custom Hook im Einsatz (useBooks)",
        "✓ Formular mit Validierung & Tailwind CSS",
        "✓ Firebase Auth & Firestore Persistenz",
      ],
    },
    {
      id: "dossier-9",
      number: "Folie 09",
      title: "Kapitel 7 – Live-Gang",
      subtitle: "Der Druck & Live-Gang (Deployment)",
      headline: "Automatisches GitHub & Vercel Deployment",
      description:
        "Das fertige Projekt ist live verfügbar: Über die automatisierte Vercel CI/CD Pipeline schlägt jeder Git-Commit direkt auf der Live-Domain 'https://mybookspace.vercel.app' durch.",
      image: "/images/mybookspace/dossier-slide9.png",
      badge: "Vercel Release",
      icon: Globe,
      details: [
        "Live-Domain: https://mybookspace.vercel.app",
        "Automatisiertes Continuous Deployment via GitHub Connector",
        "Hohe Render-Performance & optimiertes Asset-Serving",
      ],
    },
    {
      id: "dossier-10",
      number: "Folie 10",
      title: "Epilog – Reflexion",
      subtitle: "Was bleibt nach dem Print?",
      headline: "Erkenntnisse & Fazit der Entwicklung",
      description:
        "Reflexion der gewonnenen Kompetenzen: Ein tiefes Verständnis für reaktive Architekturen, asynchrone Datenbändigung und den Wert von sauberem Deployment von Tag 1 an.",
      image: "/images/mybookspace/dossier-slide10.png",
      badge: "Reflexion",
      icon: Quote,
      quote:
        "„Ein Softwareprojekt ist wie ein gutes Buch: Die Architektur ist der Plot, der Code die Sprache, und das User Experience das Lesegefühl.“",
      details: [
        "Vertieftes Verständnis für React Router & globales State Management",
        "Erfolgreiche Bändigung & Synchronisation von asynchronen REST APIs mit Firestore",
        "Immenser Wert von automatisierter CI/CD von Tag 1 an",
      ],
    },
    {
      id: "dossier-11",
      number: "Folie 11",
      title: "Abschluss",
      subtitle: "Das Dossier ist geschlossen",
      headline: "Projektanforderungen erfüllt",
      description:
        "Sämtliche Meilensteine wurden erfolgreich abgeschlossen. MyBookSpace steht als voll funktionsfähiges, produktionsbereites Bibliotheks-System bereit.",
      image: "/images/mybookspace/dossier-slide11.png",
      badge: "Abschluss",
      icon: CheckCircle2,
      details: [
        "Projektanforderungen vollständig erfüllt",
        "Quellcode & Live-Demo veröffentlicht",
        "Kontakt & GitHub-Link auf der Portfolioseite",
      ],
    },
  ];

  const currentSlide = dossierSlides[activeSlide];

  const keyFeatures = [
    {
      icon: Search,
      title: "Live-Suche über Google Books API",
      description:
        "Echtzeit-Durchsuchung von über 40 Millionen Buchtiteln mit sofortigen Ergebnissen für Titel, Autoren, Erscheinungsjahr und Inhaltsangaben.",
    },
    {
      icon: Library,
      title: "Persönliche Bibliotheks-Verwaltung",
      description:
        "Strukturierte Einteilung der eigenen Bücher in veränderbare Kategorien wie 'Gelesen', 'Am Lesen', 'Wunschliste' und 'Favoriten'.",
    },
    {
      icon: Database,
      title: "Firebase Cloud & Synchronisation",
      description:
        "Sichere Authentifizierung und dauerhafte Speicherung der persönlichen Bibliothek im Cloud Firestore mit synchronem State.",
    },
    {
      icon: BookOpen,
      title: "Detailansichten & Metadaten",
      description:
        "Ausführliche Detailansichten für jedes Werk inklusive hochauflösendem Buchcover, Sterne-Bewertungen, Genretags und Inhaltsbeschreibung.",
    },
    {
      icon: ShieldCheck,
      title: "Intuitive Single Page Application",
      description:
        "Flüssige Benutzeroberfläche entwickelt mit React 19, Vite und Tailwind CSS – blitzschnelle Ladezeiten ohne störende Seiten-Reloads.",
    },
    {
      icon: Sparkles,
      title: "Maßgeschneidertes UI/UX Design",
      description:
        "Warme, ästhetische Farbkomposition mit sanften Abrundungen, klaren Kontrasten und fokussiertem Leseerlebnis.",
    },
  ];

  return (
    <article className="space-y-16 max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 text-[#1F241F]">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="space-y-4">
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B706B] hover:text-[#1F241F] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Projektübersicht
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#e59866]" />
            Full-Stack Web App · Projekt-Dossier (11 Folien)
          </span>
          <span className="text-xs text-[#6B706B] font-mono">{project.period}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2">
            📖 MyBookSpace – Das Projekt-Dossier
          </h1>
          <p className="text-xl text-[#3d5a3d] font-medium">
            Entdecken, Organisieren & Bewerten von Büchern mit React & der Google Books API
          </p>
        </div>

        <p className="text-[#555850] text-base md:text-lg leading-relaxed max-w-3xl">
          {project.longDescription}
        </p>

        {/* Action Buttons */}
        {project.liveUrl && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm"
            >
              Live-App öffnen (my-book-space.vercel.app)
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#e6e2da]">
          <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Werkzeuge:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#f4f1ea] text-[#232621] border border-[#e2dcd0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROJEKT-DOSSIER SHOWCASE (11 FOLIEN DECK OHNE WASSERZEICHEN) --- */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-10 space-y-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                📐 Offizielles Projekt-Dossier (11 Kapitel)
              </h2>
              <p className="text-xs text-[#787973]">
                Interaktive Präsentation von Nicole Grabarkiewicz: Entwurf, Architektur, Code & Live-Gang
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : dossierSlides.length - 1))}
              className="p-2 rounded-xl border border-[#e6e2da] bg-[#f8f6f2] hover:bg-[#232621] hover:text-white transition-all text-[#232621]"
              aria-label="Vorherige Folie"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#787973] px-2 font-bold">
              {activeSlide + 1} / {dossierSlides.length}
            </span>
            <button
              onClick={() => setActiveSlide((prev) => (prev < dossierSlides.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-xl border border-[#e6e2da] bg-[#f8f6f2] hover:bg-[#232621] hover:text-white transition-all text-[#232621]"
              aria-label="Nächste Folie"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Selection Navigation Tabs */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 border-b border-[#f0ece1]">
          {dossierSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                activeSlide === idx
                  ? "bg-[#232621] text-white font-bold shadow-sm"
                  : "bg-[#f8f6f2] text-[#6B706B] hover:text-[#1F241F] hover:bg-[#eae6dc]"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
              {slide.title}
            </button>
          ))}
        </div>

        {/* Active Slide Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fcfbfa] rounded-2xl p-6 md:p-8 border border-[#eae6dc] shadow-inner">
          
          {/* Slide Visual Image Preview (Watermark-Free) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-1">
              <span className="flex items-center gap-1 font-bold text-[#1c1d1a]">
                🖼️ {currentSlide.number}: {currentSlide.title}
              </span>
              <span className="text-[#3d5a3d]">HD Wasserzeichenfrei</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#ffffff]">
              <img
                src={currentSlide.image}
                alt={`Dossier Folie ${currentSlide.title}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Slide Detailed Breakdown & Technical Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fdf2e9] text-[#e59866] border border-[#faded0] inline-block">
                {currentSlide.badge}
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                {currentSlide.subtitle}
              </h3>
              <p className="text-sm font-semibold text-[#3d5a3d]">
                {currentSlide.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#555850] leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Quote if applicable */}
            {currentSlide.quote && (
              <div className="p-4 rounded-xl bg-[#fdf2e9]/60 border border-[#faded0] space-y-2">
                <span className="text-[10px] font-bold text-[#e59866] uppercase tracking-wider block">
                  Leitgedanke:
                </span>
                <p className="text-xs text-[#1c1d1a] font-serif-title italic leading-relaxed">
                  {currentSlide.quote}
                </p>
              </div>
            )}

            {/* Code Snippet if applicable */}
            {currentSlide.code && (
              <div className="rounded-xl bg-[#1c1d1a] p-4 text-xs font-mono text-[#e4ebe4] overflow-x-auto border border-[#363933] space-y-1">
                <div className="text-[10px] text-[#888c85] uppercase tracking-wider mb-1 font-bold">
                  Code-Skizze:
                </div>
                <pre>{currentSlide.code}</pre>
              </div>
            )}

            {/* Key Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-[#eae6dc]">
              <h4 className="text-xs font-bold text-[#1c1d1a] uppercase tracking-wider">
                Erkenntnisse & Merkmale:
              </h4>
              <ul className="space-y-1.5">
                {currentSlide.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#555850]">
                    <span className="w-4 h-4 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Slide Cards Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-4 border-t border-[#e6e2da]">
          {dossierSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveSlide(i)}
              className={`p-2.5 rounded-xl border text-left transition-all space-y-0.5 ${
                activeSlide === i
                  ? "bg-[#fdf2e9] border-[#e59866] ring-1 ring-[#e59866]"
                  : "bg-[#ffffff] border-[#e6e2da] hover:border-[#232621]"
              }`}
            >
              <div className="text-[9px] font-mono font-bold text-[#787973]">
                Folie {i < 9 ? `0${i + 1}` : i + 1}
              </div>
              <div className="text-xs font-bold text-[#1c1d1a] truncate">
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Ultra-Sharp Project UI Showcase */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                🖼️ Original Benutzeroberfläche & Dashboard
              </h2>
              <p className="text-xs text-[#787973]">
                Originalgetreues Screenshot der MyBookSpace Anwendung
              </p>
            </div>
          </div>

          {project.imageUrl && (
            <a
              href={project.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm"
            >
              Vorschau in voller Auflösung öffnen
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Display Container for Sharp Screenshot */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-8 border border-[#e8e4db] flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-4xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-2">
              <span>📖 MyBookSpace Bibliotheks-Dashboard</span>
              <span>Original Screenshot</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#ffffff]">
              <img
                src="/images/mybookspace-preview.png"
                alt="MyBookSpace Original Benutzeroberfläche Vorschau"
                className="w-full h-auto object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
            <Library className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Kernfunktionen & Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Was MyBookSpace besonders funktional und benutzerfreundlich macht
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#555850] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#fdf0ed] border border-[#f5d7cf] text-[#a8442a] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Bedürfnis der Nutzer</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="rounded-2xl bg-[#ffffff] border border-[#d2dcd2] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Konzept & Umsetzung</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Technical Architecture */}
      {project.architecture && (
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
                Technische Architektur & Systemaufbau
              </h2>
              <p className="text-xs sm:text-sm text-[#787973]">
                Das Zusammenspiel von React 19 Frontend, Google Books API und Cloud Persistenz
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#232621] text-white flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-sm text-[#1c1d1a]">{item.step}</h3>
                </div>
                <p className="text-xs text-[#555850] leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              Mein persönlicher Beitrag
            </h2>
            <p className="text-xs text-[#787973]">
              Eigenverantwortliche Entwicklung & Schwerpunkte im Projekt
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {project.contributions.map((contribution, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-xs text-[#232621] leading-relaxed font-medium">{contribution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all flex items-center gap-2 shadow-sm"
          >
            MyBookSpace Live-Demo öffnen
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#ffffff] border border-[#e6e2da] text-[#232621] font-bold text-sm hover:bg-[#f4f1ea] transition-colors flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>
    </article>
  );
}
