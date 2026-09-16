import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";
import { projectsData } from "@/data/projects";
import { ArrowRight, Code, ShieldCheck, GraduationCap, Sparkles, FolderGit2, Clock } from "lucide-react";

export default function Home() {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Über mich Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
              Über Mich
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              Kurz & professionell: Entwicklerin aus Leidenschaft
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              In den vergangenen 12 Monaten habe ich mich intensiv von der Gestaltung von Benutzeroberflächen bis zur Entwicklung vollständiger Webanwendungen weiterentwickelt. Mein Fokus liegt darauf, Frontend, Backend, Datenbanken, Authentifizierung und Deployment als zusammenhängendes, stabiles System zu bauen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Zertifizierte Weiterbildung</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Erfolgreicher Abschluss als Web Developer Specialist (Sep 2026)</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <Code className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Fullstack Web-Architektur</h4>
                  <p className="text-xs text-slate-400 mt-0.5">React, Next.js App Router, TypeScript & Server Actions</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Mehr über mein Profil & Ausbildungsweg erfahren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Hauptprojekt Showcase (Slowline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
              Hauptprojekt Showcase
            </span>
            <h2 className="text-3xl font-bold text-slate-100">Meine wichtigsten Projekte</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ProjectCard project={featuredProject} isFeatured={true} />
      </section>

      {/* 4. Technischer Schwerpunkt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
            Praxisrelevante Skills
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Technischer Schwerpunkt</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Fundierte Kenntnisse im gesamten Entwicklungszyklus – von der UI-Komponente über Datenbankmodelle bis zur sicheren Cookie-Authentifizierung und Vercel-Deployment.
          </p>
        </div>

        <SkillsGrid />
      </section>

      {/* 5. 12-Monats-Timeline Vorschau */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-2">
            Entwicklungsweg
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">12 Monate – Mein Weg zum Web Developer Specialist</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Ein transparenter Einblick in meine Lernkurve, Meilensteine und absolvierte Projekte im Zeitraum von September 2025 bis September 2026.
          </p>
        </div>

        <Timeline />

        <div className="text-center mt-10">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:border-emerald-500/50 hover:text-emerald-300 transition-all"
          >
            <Clock className="w-4 h-4 text-emerald-400" />
            Vollständige Timeline mit Details ansehen
          </Link>
        </div>
      </section>

      {/* 6. CTA / Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/40 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4">
              Bereit für die nächste Herausforderung
            </h2>
            <p className="text-slate-300 text-base mb-8">
              Ich suche spannende Möglichkeiten als Web Developer Specialist. Lassen Sie uns über Synergien sprechen!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <a
                href="https://github.com/nicolegrabarkiewicz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                GitHub Profil besuchen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
