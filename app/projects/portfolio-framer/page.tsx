import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Layout,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function FramerPortfolioDetailPage() {
  const project = projectsData.find((p) => p.id === "portfolio-framer")!;

  const skills = [
    { name: "UX/UI Design", percentage: "80%" },
    { name: "Wireframing & Prototyping", percentage: "75%" },
    { name: "Visual Design", percentage: "80%" },
    { name: "Structural Thinking", percentage: "90%" },
    { name: "User Research & Content Drafting", percentage: "70%" },
    { name: "Responsive Web Implementation", percentage: "85%" },
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
            <Layout className="w-3.5 h-3.5 text-[#e59866]" />
            Webdesign · Framer Case Study
          </span>
          <span className="text-xs text-[#6B706B] font-mono">{project.period}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2">
            🎨 Portfolio (Framer) – Design & Case Study
          </h1>
          <p className="text-xl text-[#3d5a3d] font-medium">
            Entwickler- & Produktdesign-Portfolio in Framer: Layout, Responsivität & Micro-Interactions
          </p>
        </div>

        <p className="text-[#555850] text-base md:text-lg leading-relaxed max-w-3xl">
          Ein individuell entwickeltes Web-Portfolio zur Präsentation von Produktdesign- und Webentwicklungsprojekten. Fokus auf warme Farbharmonien (Terracotta & Charcoal), barrierefreie Typografie, interaktive Skill-Analysen und responsive Layouts für Desktop und Smartphone.
        </p>

        {/* Action Buttons */}
        {project.framerUrl && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.framerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm"
            >
              Projekt in Framer öffnen
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

      {/* Ultra-Sharp Layout Gesamtansicht Showcase */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                📐 Design & Layout Gesamtansicht
              </h2>
              <p className="text-xs text-[#787973]">
                Gestochen scharfes Gesamt-Design des Framer Portfolios (Desktop & Mobile)
              </p>
            </div>
          </div>

          <a
            href="/images/framer-gesamtansicht.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm"
          >
            Gesamtansicht in voller Auflösung öffnen
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Display Container for Sharp Gesamtansicht */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-8 border border-[#e8e4db] flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-4xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-2">
              <span>📐 Desktop & Mobile Gesamtansicht</span>
              <span>Ultra-Sharp High-DPI</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#ffffff] p-4">
              <img
                src="/images/framer-gesamtansicht.png"
                alt="Framer Portfolio Gesamtansicht"
                className="w-full h-auto object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sektionen-Aufbau des Portfolios */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Sektionen & Struktur des Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Durchdachte User Experience von der Begrüßung bis zum Kontakt
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#fdf2e9] text-[#e59866] flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Hero & Profil-Header
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Klares Statement ("Junior Produkt Designer Based in Hamburg"), Badge-Icons für Kernkompetenzen (Figma, Prototyping, Framer) und sympathisches Portraitfoto.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              "my latest work" (Projekte)
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              2-Spalten-Karten-Grid mit prägnanten Vorschauseiten für Elternplanet, Framer Portfolio & Syntax Institut.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#fce8e8] text-[#a8442a] flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              "about me" (Persönlichkeit)
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Persönlicher Vorstellungsbereich mit stimmungsvollem Portraitfoto und Beschreibung des Werdegangs in Kundenservice & Produktdesign.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              "my skills" (Kompetenz-Matrix)
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Visuelle Fortschrittsbalken für UX/UI Design (80%), Structural Thinking (90%), Wireframing & Prototyping (75%) und Web Implementation (85%).
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#fff8e1] text-[#f57f17] flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              "let's work together" (Kontakt)
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Einladender Kontaktbereich mit Formularfeldern (Name, E-Mail, Nachricht) auf harmonischem Papierstruktur-Hintergrund.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] text-[#334e68] flex items-center justify-center font-bold text-sm">
              06
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Footer & Rechtliches
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Integrierte Links zu Datenschutz, Impressum und direkter Kontaktaufnahme in warmer Terracotta-Farbgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Matrix Detail */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Skill-Evaluierung im Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Prozentuale Gewichtung der Qualifikationen aus dem Framer-Design
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#1c1d1a]">
                <span>{skill.name}</span>
                <span className="font-mono text-[#e59866]">{skill.percentage}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#e8e4db] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#e59866] to-[#d35400] rounded-full"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#fdf0ed] border border-[#f5d7cf] text-[#a8442a] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Zielsetzung & Anspruch</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="rounded-2xl bg-[#ffffff] border border-[#d2dcd2] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Design System & Umfeld</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              Mein persönlicher Beitrag
            </h2>
            <p className="text-xs text-[#787973]">
              Eigenverantwortliche Umsetzung & Schwerpunkte
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
        {project.framerUrl && (
          <a
            href={project.framerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#ffffff] border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-colors flex items-center gap-2"
          >
            In Framer öffnen
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#232621] text-white font-bold text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>
    </article>
  );
}
