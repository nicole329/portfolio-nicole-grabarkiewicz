"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  BookOpen,
  Eye,
  X,
  Maximize2,
  FileText,
  Building2,
  Sparkles
} from "lucide-react";

interface CertificateModalData {
  src: string;
  title: string;
  subtitle: string;
  date: string;
  institution: string;
}

export function CertificationSection() {
  const [activeIhkPage, setActiveIhkPage] = useState<1 | 2>(1);
  const [modalData, setModalData] = useState<CertificateModalData | null>(null);

  const ihkData = {
    id: "ihk-specialist",
    title: "WEB DEVELOPMENT SPECIALIST IHK",
    subtitle: "Offizieller IHK-Lehrgangsabschluss",
    date: "15.09.2026",
    institution: "IHK Akademie München und Oberbayern gGmbH",
    signee: "Dr. Thomas Kürn (Geschäftsführung)",
    badge: "Haupt-Abschlusszertifikat",
    images: {
      p1: "/images/certificates/ihk-zertifikat-p1.png",
      p2: "/images/certificates/ihk-zertifikat-p2.png",
    },
    topics: [
      "Grundlagen der modernen Medieninformatik-Framework React.js",
      "Grundlagen interaktiver und multimedialer Frontend-Frameworks",
      "State Management und Routing",
      "Moderne (dynamic) CSS Frameworks",
      "Performance-Optimierung und Testing",
    ],
  };

  const syntaxCertificates = [
    {
      id: "syntax-gesamtzertifikat",
      title: "Gesamtzertifikat: Webentwicklung",
      subtitle: "Qualifizierung für IT- und KI-gestützte Berufe",
      date: "11.09.2026",
      badge: "Gesamtabschluss",
      institution: "Syntax Institut",
      image: "/images/certificates/gesamtzertifikat.png",
      skills: [
        "12 Monate praxisintensive Vollzeit-Qualifizierung nach §81 ff. SGB III",
        "Produktdesign & -entwicklung in der IT (Modul 1 · 14 Wochen)",
        "Einführung Software- und Webentwicklung (Modul 2 · 12 Wochen)",
        "Vertiefung: Frontend Entwicklung (Modul 3 · 10 Wochen)",
        "Spezialisierung & Arbeitsmarktvorbereitung (Modul 4 · 10 Wochen)",
      ],
    },
    {
      id: "produktdesign",
      title: "Produktdesign & -entwicklung in der IT",
      subtitle: "Modul 01 Bescheinigung",
      date: "09.01.2026",
      badge: "Modul 01",
      institution: "Syntax Institut",
      image: "/images/certificates/modul1-produktdesign.png",
      skills: [
        "UI-Design in Figma: Typografie, Farbtheorie, Auto-Layout & Design-Systeme",
        "UX-Design-Prinzipien, User Personas, User Flows & Research Interviews",
        "Barrierefreies Design nach A11Y-Prinzipien und Testing mit Lighthouse",
        "Projektmanagement mit Scrum, Kanban & Developer Handoff",
      ],
    },
    {
      id: "webentwicklung",
      title: "Einführung Software- und Webentwicklung",
      subtitle: "Modul 02 Bescheinigung",
      date: "02.04.2026",
      badge: "Modul 02",
      institution: "Syntax Institut",
      image: "/images/certificates/modul2-webentwicklung.png",
      skills: [
        "HTTP, DNS, Client-Server-Architektur & Server-Konfiguration",
        "Semantisches HTML5 & Responsive Design (Flexbox, CSS Grid)",
        "JavaScript ES6+: DOM-Manipulation, Events, Async/Await & Fetch API",
        "Git & GitHub: Branching, Merging und Pull Requests",
      ],
    },
    {
      id: "frontend",
      title: "Vertiefung: Frontend Entwicklung",
      subtitle: "Modul 03 Bescheinigung",
      date: "26.06.2026",
      badge: "Modul 03",
      institution: "Syntax Institut",
      image: "/images/certificates/modul3-frontend.png",
      skills: [
        "React: Komponenten, Props, Hooks, State Management & Routing",
        "Styling mit Tailwind CSS & Styled Components",
        "Testing mit Jest & Cypress, Browser-Debugging",
        "Performance-Optimierung (Lazy Loading, Code Splitting, Lighthouse)",
      ],
    },
  ];

  return (
    <section id="ihk-abschluss" className="py-16 md:py-24 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#52c452]" />
                OFFIZIELLE ZERTIFIKATE & ABSCHLUSS
              </span>
              <span className="text-xs font-mono text-[#787973]">IHK & Syntax Institut</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#1c1d1a]">
              Geprüfte Kompetenzen & Zertifikate
            </h2>
            <p className="text-base text-[#555850] leading-relaxed mt-3">
              Nachgewiesene Qualifikation als <strong>Web Development Specialist IHK</strong> (IHK Akademie München und Oberbayern) sowie zertifizierte Modulabschlüsse am Syntax Institut.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#cbd8cb] shadow-xs flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-xl bg-[#e4ebe4] text-[#3d5a3d]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1c1d1a] block">Web Development Specialist IHK</span>
              <span className="text-[11px] font-mono text-[#787973]">Abschlussdatum: 15.09.2026</span>
            </div>
          </div>
        </div>

        {/* 1. FEATURED HERO BANNER: IHK ZERTIFIKAT */}
        <div className="rounded-3xl bg-gradient-to-br from-[#ffffff] via-[#f7faf7] to-[#eaf2ea] border-2 border-[#3d5a3d]/30 p-6 md:p-10 shadow-lg relative overflow-hidden space-y-8">
          {/* Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#52c452]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#cbd8cb] pb-6">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-mono font-extrabold bg-[#232621] text-[#52c452] shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                OFFIZIELLES ABSCHLUSSZERTIFIKAT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#e4ebe4] text-[#232621] border border-[#cbd8cb]">
                15.09.2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3d5a3d]">
              <Building2 className="w-4 h-4" />
              <span>IHK Akademie München und Oberbayern gGmbH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Title, Details & Competencies (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3d5a3d] block mb-1">
                  Lehrgangsabschluss
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#1c1d1a] leading-tight">
                  WEB DEVELOPMENT SPECIALIST IHK
                </h3>
                <p className="text-sm text-[#4a4d46] mt-2 leading-relaxed">
                  Zertifizierter Abschluss an der <strong>IHK Akademie München und Oberbayern gGmbH</strong>. Nachweis fundierter Fachkenntnisse in moderner Medieninformatik, Frontend-Architektur, State Management, Routing, dynamischen CSS-Frameworks und Performance-Optimierung.
                </p>
              </div>

              {/* Verified Topics Checklist */}
              <div className="space-y-3 bg-[#ffffff]/80 backdrop-blur-xs rounded-2xl p-5 border border-[#d2dcd2] shadow-xs">
                <h4 className="text-xs font-bold text-[#1c1d1a] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#3d5a3d]" />
                  Behandelte Lehrgangsthemen & Qualifikationen:
                </h4>
                <ul className="space-y-2.5">
                  {ihkData.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#2c2d2a]">
                      <CheckCircle2 className="w-4 h-4 text-[#3d5a3d] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Stamp / Issuer Info */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#555850]">
                <div>
                  <span className="block text-[11px] font-mono text-[#787973] uppercase">Ausstellungsort & Datum</span>
                  <span className="font-bold text-[#1c1d1a]">München, 15.09.2026</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#787973] uppercase">Geschäftsführung</span>
                  <span className="font-semibold text-[#1c1d1a]">Dr. Thomas Kürn</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Certificate PDF Image Preview (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Page Switcher Tabs */}
              <div className="flex items-center justify-between bg-[#e4ebe4] p-1 rounded-xl border border-[#cbd8cb]">
                <button
                  onClick={() => setActiveIhkPage(1)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeIhkPage === 1
                      ? "bg-[#232621] text-white shadow-xs"
                      : "text-[#4a4d46] hover:text-[#1c1d1a]"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Seite 1: Zertifikat
                </button>
                <button
                  onClick={() => setActiveIhkPage(2)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeIhkPage === 2
                      ? "bg-[#232621] text-white shadow-xs"
                      : "text-[#4a4d46] hover:text-[#1c1d1a]"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Seite 2: Lehrgangsinhalte
                </button>
              </div>

              {/* Interactive Image Display Card */}
              <div
                onClick={() =>
                  setModalData({
                    src: activeIhkPage === 1 ? ihkData.images.p1 : ihkData.images.p2,
                    title: ihkData.title,
                    subtitle: activeIhkPage === 1 ? "Seite 1 · Hauptzertifikat" : "Seite 2 · Lehrgangsinhalte",
                    date: ihkData.date,
                    institution: ihkData.institution,
                  })
                }
                className="group relative rounded-2xl overflow-hidden border-2 border-[#cbd8cb] shadow-md aspect-[1/1.4] bg-[#ffffff] cursor-pointer hover:border-[#232621] transition-all"
              >
                <Image
                  src={activeIhkPage === 1 ? ihkData.images.p1 : ihkData.images.p2}
                  alt={`IHK Zertifikat - Seite ${activeIhkPage}`}
                  fill
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  priority
                />

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-[#232621]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-[#ffffff] text-[#1c1d1a] text-xs font-bold shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#3d5a3d]" />
                    In voller Auflösung ansehen
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#232621]/80 text-white text-[11px] font-mono font-medium backdrop-blur-xs flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#52c452]" />
                  Seite {activeIhkPage} von 2
                </div>
              </div>
              <p className="text-[11px] font-mono text-center text-[#787973]">
                Klicke auf das Dokument zum Vergrößern
              </p>
            </div>

          </div>
        </div>

        {/* 2. SYNTAX INSTITUT QUALIFIKATIONSBESCHEINIGUNGEN GRID */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#e6e2da] pb-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#1c1d1a]">
                Weiterbildung & Modulnachweise (Syntax Institut)
              </h3>
              <p className="text-xs text-[#787973] mt-0.5">
                Detaillierte Fachmodul-Bescheinigungen der 12-monatigen Qualifizierung zum Web Developer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {syntaxCertificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-5 space-y-4 shadow-sm hover:border-[#cbd8cb] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Header Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#e4ebe4] text-[#232621] border border-[#cbd8cb]">
                      {cert.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#787973]">
                      <Calendar className="w-3 h-3 text-[#3d5a3d]" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Image Preview with Lightbox Trigger */}
                  <div
                    onClick={() =>
                      setModalData({
                        src: cert.image,
                        title: cert.title,
                        subtitle: cert.subtitle,
                        date: cert.date,
                        institution: cert.institution,
                      })
                    }
                    className="rounded-2xl overflow-hidden border border-[#e8e4db] shadow-xs relative aspect-[1/1.4] bg-[#fdfbf7] cursor-pointer group-hover:border-[#232621] transition-all"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#232621]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-3 py-1.5 rounded-full bg-[#ffffff] text-[#1c1d1a] text-[11px] font-bold shadow-md flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-[#3d5a3d]" />
                        Ansehen
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#787973] block mb-0.5">
                      {cert.subtitle}
                    </span>
                    <h4 className="text-base font-serif-title font-bold text-[#1c1d1a] leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  {/* Skills Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#f0ece1]">
                    <ul className="space-y-1.5">
                      {cert.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#555850] leading-relaxed">
                          <CheckCircle2 className="w-3 h-3 text-[#3d5a3d] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Footer Stamp */}
                <div className="pt-3 border-t border-[#f0ece1] flex items-center justify-between text-[11px] text-[#787973]">
                  <span className="font-mono">{cert.institution}</span>
                  <span className="font-semibold text-[#3d5a3d] flex items-center gap-1">
                    Geprüft <CheckCircle2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LIGHTBOX FULLSCREEN MODAL */}
        {modalData && (
          <div
            className="fixed inset-0 z-50 bg-[#141512]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setModalData(null)}
          >
            <div
              className="bg-[#ffffff] rounded-3xl border border-[#e6e2da] max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-[#e6e2da] bg-[#fbf9f5] flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[11px] font-mono text-[#787973] block">
                    {modalData.institution} · {modalData.date}
                  </span>
                  <h3 className="text-lg font-serif-title font-bold text-[#1c1d1a]">
                    {modalData.title}
                  </h3>
                  <p className="text-xs text-[#555850]">{modalData.subtitle}</p>
                </div>
                <button
                  onClick={() => setModalData(null)}
                  className="p-2 rounded-full bg-[#f0ece1] hover:bg-[#232621] hover:text-white transition-colors text-[#1c1d1a]"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 sm:p-6 flex-1 overflow-auto bg-[#f7f4ec] flex items-center justify-center min-h-[400px]">
                <div className="relative w-full h-[65vh] max-w-3xl">
                  <Image
                    src={modalData.src}
                    alt={modalData.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-[#e6e2da] bg-[#ffffff] flex items-center justify-between text-xs text-[#787973]">
                <span className="font-mono">Offizielles Dokument</span>
                <button
                  onClick={() => setModalData(null)}
                  className="px-5 py-2 rounded-full bg-[#232621] text-white font-medium hover:bg-[#363933] transition-colors"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
