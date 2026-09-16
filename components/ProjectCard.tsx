import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  if (isFeatured) {
    return (
      <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/30 p-6 md:p-8 shadow-2xl hover:border-emerald-500/60 transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 -z-10"></div>

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {project.badge || "Hauptprojekt"}
            </span>
            <span className="text-xs text-slate-400 font-mono">{project.period}</span>
          </div>
          {project.detailUrl && (
            <Link
              href={project.detailUrl}
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/link"
            >
              Case Study & Architektur
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-emerald-400/90 mb-4">{project.subtitle}</p>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            Technologien:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div className="mb-8 bg-slate-950/60 rounded-xl p-4 border border-slate-800">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            Mein Beitrag & Schwerpunkte:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            {project.detailUrl && (
              <Link
                href={project.detailUrl}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2"
              >
                Projekt ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 border border-slate-700"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                Live Demo
              </a>
            )}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    );
  }

  // Compact card for standard projects
  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
          <span>{project.period}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-100 mb-1">{project.title}</h3>
        <p className="text-xs text-emerald-400 font-medium mb-3">{project.subtitle}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Code auf GitHub
          </a>
        )}
        {project.liveUrl && project.liveUrl !== "#" ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
          >
            Demo
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-slate-500 italic">Lokal umgesetzt</span>
        )}
      </div>
    </div>
  );
}
