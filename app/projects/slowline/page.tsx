import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, ShieldCheck, Database, Server, Cpu, CheckCircle2, Lock, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata = {
  title: "Slowline – Case Study & Architektur | Nicole Grabarkiewicz",
  description: "Detaillierte Fallstudie zum Hauptprojekt Slowline: Problem, Lösung, Web-Architektur (Next.js, Prisma, PostgreSQL), Sicherheitskonzept & technische Entscheidungen.",
};

export default function SlowlineDetailPage() {
  const slowline = projectsData.find((p) => p.id === "slowline")!;

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 space-y-16">
      {/* Back Link */}
      <div>
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#666860] hover:text-[#1c1d1a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Projektübersicht
        </Link>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm">
              🎓 Hauptprojekt Web Developer Specialist
            </span>
            <span className="text-xs font-mono text-[#787973]">{slowline.period}</span>
          </div>
          {slowline.liveUrl && (
            <a
              href={slowline.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] text-xs font-semibold hover:bg-[#d8e3d8] transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Anwendung
            </a>
          )}
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2">
            🦥 Slowline – Slow Writing Web App
          </h1>
          <p className="text-xl text-[#3d5a3d] font-medium">
            Entschleunigter, achtsamer Schreibraum für fokussierte Gedanken
          </p>
        </div>

        <p className="text-[#555850] text-base md:text-lg leading-relaxed max-w-3xl">
          {slowline.longDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#e6e2da]">
          <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {slowline.technologies.map((tech) => (
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

      {/* 1. Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="rounded-2xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-4">
          <div className="p-3 rounded-xl bg-[#fdf0ed] border border-[#f5d7cf] text-[#a8442a] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Warum Slowline?</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {slowline.problem}
          </p>
        </div>

        {/* Lösung */}
        <div className="rounded-2xl bg-[#ffffff] border border-[#d2dcd2] p-6 md:p-8 space-y-4">
          <div className="p-3 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Der achtsame Ansatz</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {slowline.solution}
          </p>
        </div>
      </div>

      {/* 2. System-Architektur */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 space-y-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">Fullstack Web-Architektur</h2>
            <p className="text-xs text-[#787973]">Der Datenfluss von der Benutzeroberfläche bis zur Cloud-Datenbank</p>
          </div>
        </div>

        {/* Visual Architecture Diagram Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {slowline.architecture?.map((arch, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#fbf9f5] border border-[#e2dcd0] p-5 space-y-3 relative group hover:border-[#232621] transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#232621]">
                <span>Schritt 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#232621]"></span>
              </div>
              <h4 className="text-sm font-bold text-[#1c1d1a]">{arch.step}</h4>
              <p className="text-xs text-[#666860] leading-relaxed">{arch.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Besondere Technische Entscheidungen */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-12 space-y-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">Besondere Technische Entscheidungen</h2>
            <p className="text-xs text-[#787973]">Begründung des Stacks & Sicherheitspraktiken</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slowline.techDecisions?.map((decision, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2 hover:border-[#d0cac0] transition-colors"
            >
              <h3 className="text-base font-bold text-[#1c1d1a] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#3d5a3d]" />
                {decision.title}
              </h3>
              <p className="text-xs text-[#555850] leading-relaxed pl-6">
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        {slowline.githubUrl && (
          <a
            href={slowline.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#ffffff] border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Repository untersuchen
          </a>
        )}
        {slowline.liveUrl && (
          <a
            href={slowline.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#232621] text-white font-bold text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center gap-2"
          >
            Slowline App öffnen
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
