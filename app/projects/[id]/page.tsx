import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Users } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 space-y-12">
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
            {project.badge && (
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
                {project.isTeamProject && <Users className="w-3.5 h-3.5 text-[#52c452]" />}
                {project.badge}
              </span>
            )}
            <span className="text-xs font-mono text-[#787973]">{project.period}</span>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
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
            {project.title}
          </h1>
          <p className="text-xl text-[#3d5a3d] font-medium">
            {project.subtitle}
          </p>
        </div>

        <p className="text-[#555850] text-base md:text-lg leading-relaxed max-w-3xl">
          {project.longDescription || project.description}
        </p>

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

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              {project.isTeamProject ? "Teamrolle & Mein eigener Beitrag" : "Mein persönlicher Beitrag"}
            </h2>
            <p className="text-xs text-[#787973]">
              {project.isTeamProject
                ? "Konkrete Schwerpunkte im Rahmen des Teamprojekts"
                : "Eigenverantwortliche Umsetzung & Schwerpunkte"}
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

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#ffffff] border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            Code auf GitHub untersuchen
          </a>
        ) : (
          <span className="text-xs text-[#787973] italic">Internes / Design-Projekt</span>
        )}
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#232621] text-white font-bold text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>
    </div>
  );
}
