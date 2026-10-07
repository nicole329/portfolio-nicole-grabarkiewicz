import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Palette,
  Layout,
  Sparkles,
  CheckCircle2,
  Users,
  MapPin,
  Stethoscope,
  Bookmark,
  Scissors,
  Download,
  UserCheck,
  Check,
  Heart,
  Grid,
} from "lucide-react";
import { FigmaIcon } from "@/components/Icons";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Elternplanet – UX/UI Case Study & Figma Prototyp | Nicole Grabarkiewicz",
  description:
    "Umfassende Case Study und interaktiver Figma Prototyp für das digitale Elternportal Elternplanet: UX/UI Design, Design System, Bastelideen, Umkreissuche & Impfpass-Manager.",
};

export default function ElternplanetDetailPage() {
  const elternplanet = projectsData.find((p) => p.id === "elternplanet")!;

  const scaledUrl = (elternplanet.figmaUrl || "")
    .replace("scaling=scale-down-fit", "scaling=fit-width")
    .replace("scaling=min-zoom", "scaling=fit-width")
    .replace("scaling=fixed", "scaling=fit-width");

  const figmaEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(scaledUrl)}`;

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
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#52c452]" />
            UX/UI Design · Teamprojekt
          </span>
          <span className="text-xs text-[#6B706B] font-mono">{elternplanet.period}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2">
            🪐 Elternplanet – Digitales Portal für Eltern
          </h1>
          <p className="text-xl text-[#3d5a3d] font-medium">
            UX/UI Konzeption, Modulares Design System & Interaktiver High-Fidelity Prototyp
          </p>
        </div>

        <p className="text-[#555850] text-base md:text-lg leading-relaxed max-w-3xl">
          Elternplanet ist ein im Team konzipiertes digitales Portal für Eltern. Als UX/UI-Spezialistin war ich federführend für die optische Gestaltungslinie, die Entwicklung des modularen Design Systems in Figma sowie die interaktiven High-Fidelity Prototypen verantwortlich – von Ausmalbildern und Bastelideen über Umkreissuche bis hin zum Gesundheits- & Impfmanager.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {elternplanet.figmaUrl && (
            <a
              href={elternplanet.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm"
            >
              <FigmaIcon className="w-4 h-4 text-[#F24E1E]" />
              Prototyp auf Figma öffnen
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {elternplanet.figmaDesignUrl && (
            <a
              href={elternplanet.figmaDesignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#232621] bg-[#f4f1ea] border border-[#e2dcd0] hover:bg-[#e8e4db] transition-all shadow-sm"
            >
              <FigmaIcon className="w-4 h-4 text-[#0ACF83]" />
              Figma Design Canvas öffnen
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#e6e2da]">
          <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Werkzeuge:
          </h4>
          <div className="flex flex-wrap gap-2">
            {elternplanet.technologies.map((tech) => (
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

      {/* Embedded Figma Prototype Preview */}
      {elternplanet.figmaUrl && (
        <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#f5e6e0] text-[#F24E1E] border border-[#f0cfc4]">
                <FigmaIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                  Interaktiver Figma Prototyp
                </h2>
                <p className="text-xs text-[#787973]">
                  Klicke direkt im Fenster unten, um den Prototyp live zu bedienen
                </p>
              </div>
            </div>

            <a
              href={elternplanet.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#f4f1ea] border border-[#e2dcd0] text-[#232621] text-xs font-semibold hover:bg-[#e8e4db] transition-all flex items-center gap-1.5"
            >
              Vollbild in Figma öffnen
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Iframe Container */}
          <div className="w-full max-w-3xl mx-auto h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#e6e2da] shadow-sm bg-[#fbf9f5]">
            <iframe
              title="Elternplanet Figma Prototyp"
              src={figmaEmbedUrl}
              className="w-full h-full border-0 bg-[#fbf9f5]"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Complete UX/UI Case Study Board (Ultra-Sharp 1:1 & Figma Canvas Integration) */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-10 space-y-8 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#1c1d1a]">
                🎨 UX/UI Case Study & Design System
              </h2>
              <p className="text-xs sm:text-sm text-[#787973]">
                Vollständige Design-Architektur: Research, Personas, Style Guide, Grid System & UI-Komponenten
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {elternplanet.figmaDesignUrl && (
              <a
                href={elternplanet.figmaDesignUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <FigmaIcon className="w-3.5 h-3.5 text-[#0ACF83]" />
                Figma Vektor Canvas öffnen (100% Scharf)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Structured High-Sharpness Case Study Kapitel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1: Problem & Zielgruppe */}
          <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e2dcd0] space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#fdf2e9] text-[#a8442a] border border-[#faded0] inline-block">
              Phase 1 · Research
            </span>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Zielgruppe & Problemstellung
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Junge Eltern benötigen eine vertrauenswürdige, ruhige Plattform. Bisherige Angebote sind oft unübersichtlich oder werbeüberladen.
            </p>
          </div>

          {/* Section 2: Personas */}
          <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e2dcd0] space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#e8f0fe] text-[#1a73e8] border border-[#d2e3fc] inline-block">
              Phase 2 · User Personas
            </span>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Nutzer-Profile & Use Cases
            </h3>
            <div className="space-y-1.5 text-xs text-[#555850]">
              <p>👤 <strong>Laura (32)</strong>: Sucht Impfpass-Erinnerung & Kinderarzt-Termine.</p>
              <p>👤 <strong>Markus (35)</strong>: Braucht schnelle Bastelideen am Wochenende.</p>
            </div>
          </div>

          {/* Section 3: Design System */}
          <div className="p-6 rounded-2xl bg-[#fbf9f5] border border-[#e2dcd0] space-y-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#e4ebe4] text-[#3d5a3d] border border-[#cbd8cb] inline-block">
              Phase 3 · Style Guide
            </span>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Farbklima & Typografie
            </h3>
            <div className="flex gap-2 pt-1">
              <span className="w-6 h-6 rounded-full bg-[#f5e6e0] border border-[#dcd4c3] inline-block" title="Warm Rose" />
              <span className="w-6 h-6 rounded-full bg-[#e4ebe4] border border-[#dcd4c3] inline-block" title="Sage Green" />
              <span className="w-6 h-6 rounded-full bg-[#e8f0fe] border border-[#dcd4c3] inline-block" title="Soft Blue" />
              <span className="w-6 h-6 rounded-full bg-[#1c1d1a] border border-[#dcd4c3] inline-block" title="Dark Slate" />
            </div>
          </div>
        </div>

        {/* Crisp Native 1:1 Pixel Image Container (Non-Stretched for Maximum Clarity) */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-8 border border-[#e8e4db] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#787973] gap-2 px-1">
            <span className="font-bold text-[#1c1d1a]">
              🖼️ Original Case Study Board (Natives 1:1 Format ohne Verzerrung)
            </span>
            <a
              href="/images/elternplanet-casestudy.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dc2626] hover:underline font-bold flex items-center gap-1"
            >
              HD Original in neuem Tab öffnen ↗
            </a>
          </div>

          {/* Centered 1:1 scale container prevents pixelation blur */}
          <div className="bg-white rounded-xl p-3 border border-[#d8d2c4] shadow-md flex justify-center items-center">
            <div className="max-w-[423px] w-full mx-auto overflow-hidden rounded-lg border border-[#e8e4db]">
              <img
                src="/images/elternplanet-casestudy.png"
                alt="Elternplanet UX/UI Case Study Board - Gestochen scharf"
                className="w-full h-auto object-contain mx-auto block"
                loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Flow & Screen Map Section */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#e8f0fe] text-[#1a73e8] border border-[#d2e3fc]">
              <Grid className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#1c1d1a]">
                🗺️ User Flow & Screen-Architektur (2560px HD)
              </h2>
              <p className="text-xs sm:text-sm text-[#787973]">
                Vollständige Map aller Screens & Nutzerpfade (Registrierung, Impfpass, Angebote, Basteln & Ausmalen)
              </p>
            </div>
          </div>

          <a
            href="/images/elternplanet-userflow.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm"
          >
            User Flow in voller Auflösung öffnen
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Horizontal Scrollable User Flow Canvas */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-6 border border-[#e8e4db] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-1">
            <span>↔️ Horizontal scrollen für die komplette 2560px Screen-Map</span>
            <span>20+ Screens & Interaktionspfade</span>
          </div>
          <div className="w-full overflow-x-auto rounded-xl border border-[#d8d2c4] shadow-inner bg-[#ffffff] p-3 scrollbar-thin">
            <img
              src="/images/elternplanet-userflow.png"
              alt="Elternplanet Website User Flow Map"
              className="w-auto h-auto min-w-[1200px] max-w-none object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Kernbereiche & Features der Plattform */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f2f5ee] text-[#3b5436] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Kernbereiche & Features der Plattform
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Eine zugängliche Erlebniswelt für Eltern und Kinder
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#f5e6e0] text-[#a8442a] flex items-center justify-center">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Bastelideen & Anleitungen
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Tauche ein in eine Welt voller einfacher, liebevoll gestalteter Bastelideen (z. B. Löwe), die Kindern Freude bereiten und ohne großen Aufwand umgesetzt werden können.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Ausmalbilder & Downloads
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Reiche Bibliothek an Ausmalbildern (wie Katze & Tiere) mit direktem Download-Flow, Erfolgsbestätigung und praktischem Status-Tracking.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Umkreissuche & Angebote
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Interaktive Umgebungssuche für familienfreundliche Orte, Spielplätze, Ausflugsziele und lokale Events mit praktischem Filter.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#fce8e8] text-[#a8442a] flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Arzt- & Impfpass-Manager
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Strukturierter Gesundheits-Bereich zur Verfolgung von Kinderarzt-Terminen, U-Untersuchungen und empfohlenen Impfungen.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#fff8e1] text-[#f57f17] flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Merkliste & Favoriten
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Persönliche Merkliste zum schnellen Abspeichern und Wiederfinden von Bastelanleitungen, Rezepten und Ausmalvorlagen.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] text-[#334e68] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
              Onboarding & Profil
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed">
              Nutzerfreundlicher 3-Stufen-Registrierungsprozess (Anmeldedaten, Persönliche Infos, Bestätigung) und Einstellungsbereich.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#fdf0ed] border border-[#f5d7cf] text-[#a8442a] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Kontext & Zielsetzung</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            Entwicklung einer zugänglichen, vertrauensvollen Plattform für junge Eltern mit übersichtlicher Informationsarchitektur und modernem Look & Feel. Bisherige Elternportale sind oft unübersichtlich oder überladen.
          </p>
        </div>

        <div className="rounded-2xl bg-[#ffffff] border border-[#d2dcd2] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Design System & UX</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            Ein durchgängiges Figma Design System mit warmem Farbklima, gut lesbaren Schriftarten, wiederverwendbaren UI-Komponenten (Filterleiste, Header, Cards, Modals) und responsivem Prototyping.
          </p>
        </div>
      </div>

      {/* Design System & Komponenten Highlights */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f2f5ee] text-[#3b5436] flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Design System & Figma Architektur
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Modulare Komponenten für höchste Konsistenz
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
            <h3 className="text-base font-bold text-[#1c1d1a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#3d5a3d]" />
              Farbklima & Typografie
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed pl-6">
              Warme, vertrauenerweckende Erdtöne und klare Schriften für optimale Lesbarkeit auf allen Endgeräten.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
            <h3 className="text-base font-bold text-[#1c1d1a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#3d5a3d]" />
              Responsive Breakpoints (Mobile & Desktop)
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed pl-6">
              Gestaltung von Desktop-Layouts und mobilen Screens (z. B. iPhone 16) mit durchdachtem Spalten-Grid.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
            <h3 className="text-base font-bold text-[#1c1d1a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#3d5a3d]" />
              Wiederverwendbare UI-Komponenten
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed pl-6">
              Modular erstellte Header, Top-Bars, Filterleisten, Merklisten-Cards, Ausmalbild-Modals und Footers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
            <h3 className="text-base font-bold text-[#1c1d1a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#3d5a3d]" />
              Interaktive Smart-Animate Prototypen
            </h3>
            <p className="text-xs text-[#555850] leading-relaxed pl-6">
              Klickbare Prototypen mit Übergängen für Registrierungs-Flows, Filterungen und Downloads.
            </p>
          </div>
        </div>
      </section>

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              Teamrolle & Mein eigener Beitrag
            </h2>
            <p className="text-xs text-[#787973]">
              Verantwortungsbereiche im Rahmen des Teamprojekts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {elternplanet.contributions.map((contribution, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-xs text-[#232621] leading-relaxed font-medium">
                {contribution}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        {elternplanet.figmaUrl && (
          <a
            href={elternplanet.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#ffffff] border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-colors flex items-center gap-2"
          >
            <FigmaIcon className="w-4 h-4 text-[#F24E1E]" />
            In Figma öffnen
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
