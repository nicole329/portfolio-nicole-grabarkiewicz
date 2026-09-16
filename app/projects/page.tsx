import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Meine Projekte | Nicole Grabarkiewicz",
  description: "Übersicht über die Web-Projekte von Nicole Grabarkiewicz aus den vergangenen 12 Monaten – inklusive des Hauptprojekts Slowline.",
};

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <FolderGit2 className="w-4 h-4" />
          Portfolio Übersicht
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Meine Projekte – Die letzten 12 Monate
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Hier finden Sie eine Auswahl meiner entwickelten Anwendungen – vom komplexen Abschlussprojekt <strong>Slowline</strong> bis hin zu praxisnahen Frontend- und Fullstack-Projekten.
        </p>
      </div>

      {/* Hauptprojekte (Grosse Darstellung) */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl font-bold text-slate-100">Hauptprojekt Showcase</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>
      </div>

      {/* Weitere Projekte (Kleinere Karten) */}
      <div className="space-y-8 pt-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-100">Weitere Projekte</h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {secondaryProjects.length} weitere Anwendungen
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
