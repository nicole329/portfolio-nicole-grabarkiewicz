import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, ShieldCheck, Database, Server, Cpu, CheckCircle2, Lock, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Slowline – Case Study & Architektur | Nicole Grabarkiewicz",
  description: "Detaillierte Fallstudie zum Hauptprojekt Slowline: Problem, Lösung, Web-Architektur (Next.js, Prisma, PostgreSQL), Sicherheitskonzept & technische Entscheidungen.",
};

export default function SlowlineDetailPage() {
  const slowline = projectsData.find((p) => p.id === "slowline")!;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Projektübersicht
        </Link>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/40 p-8 md:p-12 relative overflow-hidden shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-sm">
              🎓 Abschlussprojekt Web Developer Specialist
            </span>
            <span className="text-xs font-mono text-slate-400">{slowline.period}</span>
          </div>
          {slowline.liveUrl && (
            <a
              href={slowline.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Anwendung
            </a>
          )}
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-2">
            🦥 Slowline – Slow Writing Web App
          </h1>
          <p className="text-xl text-emerald-400 font-medium">
            Entschleunigter, achtsamer Schreibraum für fokussierte Gedanken
          </p>
        </div>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
          {slowline.longDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800/80">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {slowline.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 space-y-4">
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">Warum Slowline?</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {slowline.problem}
          </p>
        </div>

        {/* Lösung */}
        <div className="rounded-2xl bg-slate-900/60 border border-emerald-500/30 p-6 md:p-8 space-y-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">Der achtsame Ansatz</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {slowline.solution}
          </p>
        </div>
      </div>

      {/* 2. System-Architektur */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Fullstack Web-Architektur</h2>
            <p className="text-xs text-slate-400">Der Datenfluss von der Benutzeroberfläche bis zur Cloud-Datenbank</p>
          </div>
        </div>

        {/* Visual Architecture Diagram Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {slowline.architecture?.map((arch, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-3 relative group hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>Schritt 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <h4 className="text-sm font-bold text-slate-100">{arch.step}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{arch.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Besondere Technische Entscheidungen */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Besondere Technische Entscheidungen</h2>
            <p className="text-xs text-slate-400">Begründung des Stacks & Sicherheitspraktiken</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slowline.techDecisions?.map((decision, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                {decision.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Mein persönlicher Beitrag */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-12 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Mein Beitrag als Web Developer Specialist</h2>
            <p className="text-xs text-slate-400">Eigenverantwortliche Umsetzung in allen Entwicklungsphasen</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {slowline.contributions.map((contribution, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs text-slate-200 leading-relaxed font-medium">{contribution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
        {slowline.githubUrl && (
          <a
            href={slowline.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-slate-300" />
            GitHub Repository untersuchen
          </a>
        )}
        {slowline.liveUrl && (
          <a
            href={slowline.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            Slowline App öffnen
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
