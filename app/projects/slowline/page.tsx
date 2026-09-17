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
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata = {
  title: "Slowline – Case Study & Architektur | Nicole Grabarkiewicz",
  description:
    "Detaillierte Fallstudie zum Hauptprojekt Slowline: Problem, Lösung, Web-Architektur (Next.js, Prisma, PostgreSQL), Sicherheitskonzept & technische Entscheidungen.",
};

export default function SlowlineDetailPage() {
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

            <a
              href="https://github.com/nicolegrabarkiewicz/slowline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#1F241F] bg-white border border-[#E8E5DF] hover:bg-[#FAF8F5] transition-all shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub Repository
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

        {/* Right Column: Interactive / Visual Laptop & Mobile Device Mockup */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-4">
          
          {/* Top Right Handwritten Quote Accent */}
          <div className="absolute -top-6 right-0 z-20 hidden sm:block pointer-events-none">
            <span className="font-handwriting text-2xl text-[#3B5436] font-normal block leading-tight rotate-3">
              Gleicher Ablauf.<br />
              Weniger Ablenkung.<br />
              Mehr Du. ♡
            </span>
          </div>

          {/* Background Botanical Monstera Leaves Accents */}
          <div className="absolute -top-10 -right-10 w-48 h-48 pointer-events-none opacity-40 z-0">
            <Image
              src="/images/slowline/jungle-corner.png"
              alt="Monstera Leaf Accent"
              fill
              className="object-contain"
            />
          </div>

          {/* Device Mockups Composite Container */}
          <div className="relative w-full max-w-md aspect-[4/3] z-10 flex items-center justify-center">
            
            {/* Laptop Mockup */}
            <div className="w-[85%] aspect-[16/10] bg-[#1F241F] rounded-2xl p-2 shadow-2xl relative border border-[#3A423A]">
              {/* Laptop Screen Header */}
              <div className="w-full h-4 bg-[#2A302A] rounded-t-xl flex items-center px-2 gap-1 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
              </div>

              {/* Laptop Screen Content (Slowline UI) */}
              <div className="w-full h-[calc(100%-1.25rem)] bg-[#FAF8F5] rounded-b-lg p-4 flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="flex items-center justify-between w-full text-[10px] text-[#6B706B] font-mono">
                  <span>slowline</span>
                  <div className="w-3 h-3 rounded-full bg-[#E8EFE3] flex items-center justify-center text-[#4B6B40] font-bold">🦥</div>
                </div>

                <div className="my-auto space-y-2">
                  <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#1F241F] leading-tight">
                    Ein Wort<br />Ein Moment<br />Nur Du.
                  </h4>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#2F3E2B] text-white text-[10px] font-semibold">
                    Session starten
                  </div>
                </div>

                {/* Rope & Sloth Mascot */}
                <div className="absolute right-3 top-2 bottom-2 w-6 border-r-2 border-dashed border-[#CBD8C6] flex items-center justify-center">
                  <div className="relative w-7 h-7">
                    <Image
                      src="/images/slowline/sloth.png"
                      alt="Sloth Mascot"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup (Overlapping Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 w-[42%] aspect-[9/19] bg-[#1F241F] rounded-[2rem] p-1.5 shadow-2xl border-2 border-[#3A423A]">
              <div className="w-full h-full bg-[#FAF8F5] rounded-[1.6rem] p-3 flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="w-12 h-2.5 bg-[#1F241F] rounded-full mx-auto mb-2"></div>
                <div className="my-auto space-y-1">
                  <span className="font-serif-title text-[11px] font-bold text-[#1F241F] block leading-tight">
                    Schreib langsamer.<br />Denk tiefer.
                  </span>
                </div>
                <div className="relative w-10 h-10 mx-auto my-1">
                  <Image
                    src="/images/slowline/sloth2.png"
                    alt="Sloth Mobile"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
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

      {/* Live-Demo Section (5 Horizontal Flow Steps) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8 relative overflow-hidden">
        
        <div>
          <div className="flex items-center gap-2 text-[#3B5436] mb-1">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
              Live-Demo
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
              <span className="font-serif-title text-xs font-bold block">Next.js 16</span>
            </div>

            {/* React */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#E0F7FA] text-[#00ACC1] flex items-center justify-center font-bold text-lg">
                ⚛
              </div>
              <span className="font-serif-title text-xs font-bold block">React 19</span>
            </div>

            {/* TypeScript */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs font-mono">
                TS
              </div>
              <span className="font-serif-title text-xs font-bold block">TypeScript</span>
            </div>

            {/* Prisma */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#2D3748] text-white flex items-center justify-center font-bold text-xs">
                ▲
              </div>
              <span className="font-serif-title text-xs font-bold block">Prisma ORM</span>
            </div>

            {/* PostgreSQL */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#336791] text-white flex items-center justify-center font-bold text-xs">
                🐘
              </div>
              <span className="font-serif-title text-xs font-bold block">PostgreSQL</span>
            </div>

            {/* Argon2 */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold text-xs">
                A2
              </div>
              <span className="font-serif-title text-xs font-bold block">Argon2</span>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#06B6D4] text-white flex items-center justify-center font-bold text-xs">
                ≈
              </div>
              <span className="font-serif-title text-xs font-bold block">Tailwind CSS</span>
            </div>

            {/* Vercel */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8E5DF] text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                ▲
              </div>
              <span className="font-serif-title text-xs font-bold block">Vercel</span>
            </div>

          </div>

          {/* Quote Card (Right Column) */}
          <div className="lg:col-span-4 bg-[#F2F5EE] rounded-3xl p-8 border border-[#CBD8C6] space-y-4 text-center sm:text-left relative overflow-hidden">
            <span className="font-serif-title text-xl sm:text-2xl font-semibold text-[#3B5436] italic leading-relaxed block">
              „Technologie soll den Menschen unterstützen – nicht ablenken.“
            </span>
            <div className="w-10 h-10 text-[#3B5436] opacity-60 ml-auto">
              🌱
            </div>
          </div>

        </div>

      </section>

      {/* Besondere Technische Entscheidungen Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E5DF] shadow-sm space-y-8">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#1F241F] border border-[#E8E5DF] flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
              Besondere Technische Entscheidungen
            </h2>
            <p className="text-xs sm:text-sm text-[#555B55]">
              Begründung des Stacks & Sicherheitsaspekte.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Decision 1 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E5DF] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5DF] text-[#3B5436] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#1F241F]">
                Warum Next.js 16 App Router?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
              Nahtlose Verbindung von serverseitigem Rendering (SSR), Server Actions für mutationssichere Abläufe und hervorragender Performance.
            </p>
          </div>

          {/* Decision 2 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E5DF] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5DF] text-[#3B5436] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#1F241F]">
                Warum PostgreSQL & Prisma ORM?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
              Strikte Datenintegrität für Nutzerdaten & Sessions, gepaart mit automatischer TypeScript-Typgenerierung.
            </p>
          </div>

          {/* Decision 3 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E5DF] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5DF] text-[#3B5436] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#1F241F]">
                Warum Argon2 Password Hashing?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
              Höchster Sicherheitsstandard gegen Brute-Force- & Rainbow-Table-Angriffe im Vergleich zu älteren Algorithmen.
            </p>
          </div>

          {/* Decision 4 */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E5DF] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5DF] text-[#3B5436] flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#1F241F]">
                Warum Serverless Neon PostgreSQL?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
              Automatische Skalierung, schnelles Branching für Entwicklungszwecke und kosteneffizientes Cloud-Hosting.
            </p>
          </div>

        </div>

      </section>

      {/* Ergebnis & Mehrwert Section (Grid: Left Photo, Right Checklist Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Photo Mockup */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-[#E8E5DF] relative aspect-[4/3]">
          <Image
            src="/images/slowline/slide-1.jpg"
            alt="Slowline Workplace Setup"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Card: Ergebnis & Mehrwert */}
        <div className="lg:col-span-7 bg-[#F2F5EE] rounded-3xl p-6 sm:p-8 border border-[#CBD8C6] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E3EADB] text-[#3B5436] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1F241F]">
                Ergebnis & Mehrwert
              </h2>
            </div>

            <div className="space-y-3 pt-1">
              {[
                "Ein funktionierender Prototyp mit allen Kernfunktionen",
                "Reduziertes, ruhiges Design für fokussiertes Schreiben",
                "Sichere Nutzerdaten durch moderne Authentifizierung",
                "Mehrsprachige Wortimpulse und strukturierte History",
                "Skalierbare, moderne Architektur",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-[#3B423B]">
                  <CheckCircle2 className="w-5 h-5 text-[#3B5436] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <span className="font-handwriting text-2xl text-[#3B5436]">
              Ein klarer Ablauf. Spürbar mehr Ruhe. ♡
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Navigation Buttons */}
      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#E8E5DF]">
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#1F241F] bg-white border border-[#E8E5DF] hover:bg-[#FAF8F5] transition-all shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Projektübersicht
        </Link>
        <a
          href="https://slowline.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm"
        >
          Slowline App öffnen
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

    </article>
  );
}
