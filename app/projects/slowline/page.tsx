"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  Sparkles,
  Settings,
  Code2,
  CheckCircle2,
  Database,
  Lock,
  Cloud,
  Layers,
  Clock,
  FileText,
  Check,
  History,
  TrendingUp,
  User,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function SlowlineDetailPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const presentationSlides = [
    {
      id: "slide1",
      number: "Folie 01",
      title: "Titelfolie & Vision",
      subtitle: "IHK-Abschlusspräsentation 2026",
      headline: "Schreib langsamer. Denk tiefer.",
      description:
        "Offizielle Abschlusspräsentation für das Hauptprojekt Slowline von Nicole Grabarkiewicz zum Web Developer Specialist. Ein fokussierter Gegenentwurf zur Reizüberflutung moderner Schreib-Tools.",
      image: "/images/slowline/slide-1.jpg",
      badge: "Vision & Slogan",
      details: [
        "Slogan: 'Schreib langsamer. Denk tiefer.'",
        "IHK-Abschlusspräsentation 2026 – Web Developer Specialist",
        "Konzeption, Design & Fullstack Web-Entwicklung durch Nicole Grabarkiewicz",
      ],
    },
    {
      id: "slide2",
      number: "Folie 02",
      title: "Bedarfsorientierung & Persona",
      subtitle: "SLW-101 Kern-User-Story",
      headline: "Persona Maya (28) · UX Designerin",
      description:
        "Erhebung der Nutzerbedürfnisse und Formulierung der Kern-User-Story mit klaren Akzeptanzkriterien für visuelle Klarheit, Stressreduktion und strukturierte Aufgabenverfolgung.",
      image: "/images/slowline/slide-2.jpg",
      badge: "UX Research & Persona",
      userStory:
        "„Als Maya (UX Designerin) möchte ich eine zentrale Übersicht meiner Projekte und Aufgaben in Slowline sehen, damit ich meinen Arbeitsfortschritt leicht verfolgen und Engpässe frühzeitig erkennen kann.“",
      criteria: [
        "Übersichtliche Dashboard-Ansicht mit allen aktiven Projekten",
        "Anzeige von Fristen und Meilensteinen",
        "Status-Indikatoren für jede Aufgabe (Offen, In Arbeit, Erledigt)",
        "Filtermöglichkeiten nach Priorität und Teammitgliedern",
        "Drag-and-Drop Funktionalität zur Aufgabenplanung",
      ],
    },
    {
      id: "slide3",
      number: "Folie 03",
      title: "Live-Demo & Workflow",
      subtitle: "Eine komplette Schreibsession",
      headline: "5-Stufen-Ablauf von der Idee zur History",
      description:
        "Der vollständige Funktionsablauf einer Slowline-Session – von der Impulswort-Wahl über den zeitlich gestützten Zen-Schreibraum bis hin zur automatischen Archivierung.",
      image: "/images/slowline/slide-3.jpg",
      badge: "Session Workflow",
      steps: [
        "1. Impulswort wählen: Wähle ein Wort als Schreibanlass",
        "2. Dauer festlegen: Zeitfenster (5 / 10 / 15 Minuten) einstellen",
        "3. Fokussiert schreiben: Ungestört im Zen-Modus schreiben",
        "4. Speichern: Fertigen Text sicher in der Datenbank ablegen",
        "5. In der History zeigen: Gespeicherte Reflexionen in der Übersicht einsehen",
      ],
    },
  ];

  const currentSlide = presentationSlides[activeSlide];

  return (
    <article className="space-y-16 max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 text-[#1F241F]">
      
      {/* Top Navigation & Breadcrumb Header */}
      <div className="space-y-4">
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B706B] hover:text-[#1F241F] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Projektübersicht
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm">
            🎓 Hauptprojekt Web Developer Specialist
          </span>
          <span className="text-xs text-[#6B706B] font-mono">
            Juni 2026 – September 2026
          </span>
        </div>
      </div>

      {/* Hero Section (Grid: Left Content, Right Device Mockups) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F241F]">
              🦥 Slowline –<br />Slow Writing Web App
            </h1>
            <p className="font-serif-title text-xl sm:text-2xl text-[#3B5436] font-semibold">
              Entschleunigter, achtsamer Schreibraum für fokussierte Gedanken.
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#555B55] leading-relaxed">
            In einer schnelllebigen digitalen Welt reduziert Slowline das Schreiben auf das Wesentliche: Ein Impulswort regt Gedanken an, ein sanfter Timer visualisiert den Fortschritt durch ein kletterndes Faultier-Maskottchen, und der Zen-Modus blendet alle Ablenkungen aus.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://slowline.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm"
            >
              Live Anwendung öffnen
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Tech Badges Row */}
          <div className="pt-4 space-y-2 border-t border-[#e6e2da]">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B706B] block">
              EINGESETZTE TECHNOLOGIEN & STACK:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Argon2", "Tailwind CSS"].map((tech) => (
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

        {/* Right Column: Compact Presentation Banner Showcase */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-2">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#e6e2da] shadow-md bg-[#faf8f5] p-2 z-10 hover:shadow-lg transition-shadow">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="/images/slowline-main.png"
                alt="Slowline Hauptprojekt Präsentation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Grid: Problem & Lösung (2 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Problem / Ausgangslage */}
        <div className="bg-[#FAF2F2]/60 rounded-3xl p-6 sm:p-8 border border-[#F2DCDC] shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE8E8] text-[#A85A5A] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A85A5A]">
                PROBLEM / AUSGANGSLAGE
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-[#1F241F]">
                Warum Slowline?
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#555B55] leading-relaxed">
            Herkömmliche Notiz- und Schreib-Apps überfordern Nutzer oft mit komplexer Ordnerverwaltung, ständigen Benachrichtigungen und Reizüberflutung, wodurch achtsames Reflexionsschreiben erschwert wird.
          </p>
        </div>

        {/* Card 2: Lösung & Ansatz */}
        <div className="bg-[#F2F5EE] rounded-3xl p-6 sm:p-8 border border-[#CBD8C6] shadow-2xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3B5436]">
                LÖSUNG & ANSATZ
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-[#1F241F]">
                Der achtsame Ansatz
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#3B423B] leading-relaxed">
            Slowline schafft einen geschützten, minimalistischen Schreibraum mit Wortimpulsen in 8 Sprachen, einem ruhigen visuellen Timer und automatischer, strukturierter Archivierung – für mehr Klarheit im Alltag.
          </p>
        </div>

      </div>

      {/* --- ABSCHLUSSPRÄSENTATION SHOWCASE (IHK 2026) --- */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8E5DF] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
                🎓 IHK-Abschlusspräsentation 2026
              </h2>
              <p className="text-xs sm:text-sm text-[#555B55]">
                Offizielle Präsentationsfolien: Vision, Persona Maya, User Story & Live-Demo Workflow
              </p>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : presentationSlides.length - 1))}
              className="p-2 rounded-xl border border-[#E8E5DF] bg-[#FAF8F5] hover:bg-[#232621] hover:text-white transition-all text-[#1F241F]"
              aria-label="Vorherige Folie"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#6B706B] px-2 font-bold">
              {activeSlide + 1} / {presentationSlides.length}
            </span>
            <button
              onClick={() => setActiveSlide((prev) => (prev < presentationSlides.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-xl border border-[#E8E5DF] bg-[#FAF8F5] hover:bg-[#232621] hover:text-white transition-all text-[#1F241F]"
              aria-label="Nächste Folie"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Selector Buttons */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 border-b border-[#F0ECE1]">
          {presentationSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                activeSlide === idx
                  ? "bg-[#232621] text-white font-bold shadow-sm"
                  : "bg-[#FAF8F5] text-[#6B706B] hover:text-[#1F241F] hover:bg-[#EAE6DC]"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">0{idx + 1}</span>
              {slide.title}
            </button>
          ))}
        </div>

        {/* Active Slide Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-inner">
          
          {/* Left: Slide Image Display */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B706B] px-1">
              <span className="flex items-center gap-1">
                🖼️ {currentSlide.number}: {currentSlide.title}
              </span>
              <span>HD Präsentationsfolie</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#D8D2C4] shadow-md bg-[#ffffff]">
              <img
                src={currentSlide.image}
                alt={`Präsentationsfolie ${currentSlide.title}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Slide Text & Context Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EADB] text-[#3B5436] border border-[#CBD8C6] inline-block">
                {currentSlide.badge}
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#1F241F]">
                {currentSlide.subtitle}
              </h3>
              <p className="text-sm font-semibold text-[#3B5436]">
                {currentSlide.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Specific User Story Card for Slide 2 */}
            {currentSlide.userStory && (
              <div className="p-4 rounded-xl bg-[#ffffff] border border-[#CBD8C6] space-y-2">
                <span className="text-[10px] font-bold text-[#3B5436] uppercase tracking-wider block">
                  User Story [SLW-101]:
                </span>
                <p className="text-xs text-[#1F241F] font-serif-title italic leading-relaxed">
                  {currentSlide.userStory}
                </p>
              </div>
            )}

            {/* Akzeptanzkriterien / Details */}
            {currentSlide.criteria && (
              <div className="space-y-2 pt-1 border-t border-[#E8E5DF]">
                <h4 className="text-xs font-bold text-[#1F241F] uppercase tracking-wider">
                  Akzeptanzkriterien:
                </h4>
                <ul className="space-y-1">
                  {currentSlide.criteria.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555B55]">
                      <span className="w-4 h-4 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Workflow steps for Slide 3 */}
            {currentSlide.steps && (
              <div className="space-y-2 pt-1 border-t border-[#E8E5DF]">
                <h4 className="text-xs font-bold text-[#1F241F] uppercase tracking-wider">
                  5-Stufen Ablauf:
                </h4>
                <ul className="space-y-1.5">
                  {currentSlide.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555B55]">
                      <span className="w-5 h-5 rounded-full bg-[#232621] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bullet points for Slide 1 */}
            {currentSlide.details && (
              <div className="space-y-2 pt-1 border-t border-[#E8E5DF]">
                <h4 className="text-xs font-bold text-[#1F241F] uppercase tracking-wider">
                  Präsentations-Details:
                </h4>
                <ul className="space-y-1.5">
                  {currentSlide.details.map((dt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555B55]">
                      <span className="w-4 h-4 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{dt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Die Slowline Schreibsession Showcase */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8E5DF] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
                ✍️ Die Slowline Schreibsession
              </h2>
              <p className="text-xs sm:text-sm text-[#555B55]">
                Minimalistischer Zen-Schreibraum mit Faultier-Timer & Impulswort („Nebel“)
              </p>
            </div>
          </div>

          <a
            href="/images/slowline-schreibsession.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm shrink-0"
          >
            Schreibsession in voller Auflösung öffnen
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Display Container for High-DPI Schreibsession Screenshot */}
        <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-8 border border-[#E8E5DF] flex flex-col items-center space-y-4">
          <div className="w-full max-w-4xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B706B] px-2">
              <span>🦥 Zen-Schreibraum (Beispiel: Impulswort „Nebel“ & 5-Minuten-Timer)</span>
              <span>Original Screenshot</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#D8D2C4] shadow-md bg-[#ffffff]">
              <img
                src="/images/slowline-schreibsession.png"
                alt="Slowline Schreibsession Benutzeroberfläche"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 3 Key Highlights of the Schreibsession */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-[#1F241F]">
              <span className="text-base">🌱</span>
              <span>Impulswort-Erfassung</span>
            </div>
            <p className="text-xs text-[#555B55] leading-relaxed">
              Zufallsgenerierte Wortimpulse (z.B. „Nebel“) regen kreative Gedanken an und nehmen den Druck vor dem leeren Blatt.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-[#1F241F]">
              <span className="text-base">🦥</span>
              <span>Kletterndes Faultier</span>
            </div>
            <p className="text-xs text-[#555B55] leading-relaxed">
              Ein liebevoll gestaltetes Faultier-Maskottchen klettert am Seil hoch und visualisiert entspannt die verbleibende Schreibzeit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-[#1F241F]">
              <span className="text-base">🍃</span>
              <span>Achtsamer Zen-Modus</span>
            </div>
            <p className="text-xs text-[#555B55] leading-relaxed">
              Keine ablenkenden Menüs oder Popups. „Nimm dir Zeit. Das Faultier auch.“ begleitet jede erfolgreiche Schreibsession.
            </p>
          </div>
        </div>
      </section>

      {/* Live-Demo Section (5 Horizontal Flow Steps) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8 relative overflow-hidden">
        
        <div>
          <div className="flex items-center gap-2 text-[#3B5436] mb-1">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
              Live-Demo Workflow
            </h2>
          </div>
          <p className="text-sm text-[#555B55]">
            Eine komplette Session – von der Idee bis zur History.
          </p>
        </div>

        {/* 5 Steps Flow Horizontal Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
          
          {/* Step 1 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E5DF] space-y-3 flex flex-col justify-between text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E8E5DF] space-y-2">
              <span className="text-xs font-semibold text-[#6B706B] block">Dein Impuls</span>
              <span className="font-serif-title text-sm font-bold text-[#1F241F] block">Wachstum</span>
              <div className="w-6 h-6 mx-auto rounded-full bg-[#E8EFE3] flex items-center justify-center text-[#3B5436] text-xs">
                🌱
              </div>
              <div className="px-2 py-1 rounded bg-[#2F3E2B] text-white text-[10px] font-semibold">
                Session starten
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1F241F] block">
              1. Impulswort wählen
            </span>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E5DF] space-y-3 flex flex-col justify-between text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E8E5DF] space-y-2">
              <span className="text-xs font-semibold text-[#6B706B] block">Dauer wählen</span>
              <div className="space-y-1 text-[11px] text-[#555B55] text-left px-1">
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div> 5 Min</div>
                <div className="flex items-center gap-1.5 font-semibold text-[#2F3E2B]"><div className="w-2.5 h-2.5 rounded-full bg-[#2F3E2B]"></div> 10 Min</div>
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div> 15 Min</div>
              </div>
              <div className="px-2 py-1 rounded bg-[#2F3E2B] text-white text-[10px] font-semibold">
                Starten
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1F241F] block">
              2. Dauer festlegen
            </span>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E5DF] space-y-3 flex flex-col justify-between text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E8E5DF] space-y-2 relative overflow-hidden min-h-[120px] flex flex-col justify-between">
              <span className="text-xs font-semibold text-[#6B706B] block text-left">Schreiben ...</span>
              <div className="w-full space-y-1 my-auto">
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                <div className="h-1 bg-gray-200 rounded w-3/5"></div>
              </div>
              <div className="w-6 h-6 mx-auto relative">
                <Image src="/images/slowline/sloth.png" alt="Sloth" fill className="object-contain" />
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1F241F] block">
              3. Fokussiert schreiben
            </span>
          </div>

          {/* Step 4 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E5DF] space-y-3 flex flex-col justify-between text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E8E5DF] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#3B5436] text-white mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold text-[#3B5436] block">
                Session gespeichert!
              </span>
              <div className="px-2 py-1 rounded bg-[#2F3E2B] text-white text-[10px] font-semibold">
                Zur History
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1F241F] block">
              4. Speichern
            </span>
          </div>

          {/* Step 5 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E5DF] space-y-3 flex flex-col justify-between text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E8E5DF] space-y-1.5 text-left">
              <span className="text-[10px] font-semibold text-[#6B706B] block text-center">Meine Gedanken</span>
              <div className="p-1 rounded bg-[#FAF8F5] text-[9px] font-medium flex items-center justify-between">
                <span>Wachstum</span>
                <span className="text-gray-400">10 Min</span>
              </div>
              <div className="p-1 rounded bg-[#FAF8F5] text-[9px] font-medium flex items-center justify-between">
                <span>Dankbarkeit</span>
                <span className="text-gray-400">5 Min</span>
              </div>
              <div className="p-1 rounded bg-[#FAF8F5] text-[9px] font-medium flex items-center justify-between">
                <span>Klarheit</span>
                <span className="text-gray-400">15 Min</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1F241F] block">
              5. In der History zeigen
            </span>
          </div>

        </div>

        {/* Handwritten Accent Bottom Right */}
        <div className="flex justify-end pt-2">
          <span className="font-handwriting text-2xl text-[#3B5436]">
            Ein kleiner Raum. Eine große Wirkung. ♡
          </span>
        </div>
      </section>

      {/* Technische Umsetzung Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F2F5EE] text-[#3B5436] flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
              Technische Umsetzung
            </h2>
            <p className="text-xs sm:text-sm text-[#555B55]">
              Moderner Fullstack-Ansatz mit Fokus auf Sicherheit, Performance und Skalierbarkeit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 8 Tech Cards (Left Column) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* Next.js */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                N
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">Next.js 16</span>
                <span className="text-[10px] text-[#6B706B]">App Router & SSR</span>
              </div>
            </div>

            {/* React 19 */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#00D8FF]/10 text-[#00D8FF] flex items-center justify-center font-bold text-sm">
                ⚛️
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">React 19</span>
                <span className="text-[10px] text-[#6B706B]">Server Actions</span>
              </div>
            </div>

            {/* TypeScript */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs font-mono">
                TS
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">TypeScript</span>
                <span className="text-[10px] text-[#6B706B]">Strikte Typisierung</span>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#336791]/10 text-[#336791] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">PostgreSQL</span>
                <span className="text-[10px] text-[#6B706B]">Neon Cloud DB</span>
              </div>
            </div>

            {/* Prisma */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#2D3748] text-white flex items-center justify-center font-bold text-xs">
                ▲
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">Prisma ORM</span>
                <span className="text-[10px] text-[#6B706B]">Datenbank-Schema</span>
              </div>
            </div>

            {/* Argon2 */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#A85A5A]/10 text-[#A85A5A] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">Argon2</span>
                <span className="text-[10px] text-[#6B706B]">Passwort-Hashing</span>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center font-bold text-xs">
                🎨
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">Tailwind CSS</span>
                <span className="text-[10px] text-[#6B706B]">Responsive Design</span>
              </div>
            </div>

            {/* Vercel */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                ▲
              </div>
              <div>
                <span className="font-bold text-sm text-[#1F241F] block">Vercel</span>
                <span className="text-[10px] text-[#6B706B]">Cloud Deployment</span>
              </div>
            </div>

          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-4 bg-[#F2F5EE] rounded-2xl p-6 border border-[#CBD8C6] space-y-4">
            <h3 className="font-serif-title text-xl font-bold text-[#1F241F]">
              Architektur-Highlights
            </h3>
            <ul className="space-y-3 text-xs text-[#3B423B]">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                <span>Server-side Caching für blitzschnelle Wort-API Abfragen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                <span>Sichere HttpOnly Cookie-Authentifizierung ohne Drittanbieter-Lockin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                <span>Typensicheres Datenbankmodellieren mit Prisma ORM & PostgreSQL</span>
              </li>
            </ul>
          </div>

        </div>

      </section>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E5DF]">
        <a
          href="https://slowline.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all flex items-center gap-2 shadow-sm"
        >
          Slowline Live Anwendung öffnen
          <ExternalLink className="w-4 h-4" />
        </a>
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#ffffff] border border-[#E8E5DF] text-[#232621] font-bold text-sm hover:bg-[#FAF8F5] transition-colors flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>

    </article>
  );
}
