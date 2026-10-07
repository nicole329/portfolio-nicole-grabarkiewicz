import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const getCardGraphic = (id: string) => {
    switch (id) {
      case "slowline":
        return (
          <div className="w-full h-full bg-[#e8eee6] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <span className="text-3xl mb-1">🦥</span>
            <span className="font-serif-title font-bold text-xl text-[#232621]">Slowline</span>
            <span className="text-[10px] font-mono text-[#585c54]">Slow Writing Web App</span>
          </div>
        );
      case "elternplanet":
        return (
          <div className="w-full h-full bg-[#fdf5eb] flex flex-col items-center justify-center p-4">
            <span className="font-serif-title font-bold text-lg text-[#8a5d3b]">Elternplanet</span>
            <span className="text-[10px] font-sans text-[#a87a56]">Figma Design System</span>
          </div>
        );
      case "portfolio-framer":
        return (
          <div className="w-full h-full bg-[#f4f2ee] flex flex-col items-center justify-center p-4">
            <span className="font-serif-title font-bold text-lg text-[#232621]">Nicole Grabarkiewicz</span>
            <span className="text-[10px] font-mono text-[#666862]">Framer Webdesign</span>
          </div>
        );
      case "mybookspace":
        return (
          <div className="w-full h-full bg-[#1e232a] text-white flex flex-col items-center justify-center p-4">
            <span className="text-2xl mb-1">📚</span>
            <span className="font-bold text-base">MyBookSpace</span>
            <span className="text-[10px] text-slate-400">React Book Manager</span>
          </div>
        );
      case "hr-projekt":
        return (
          <div className="w-full h-full bg-[#e8edeb] flex flex-col items-center justify-center p-4">
            <span className="text-2xl mb-1">👥</span>
            <span className="font-bold text-base text-[#1c1d1a]">HR-Projekt</span>
            <span className="text-[10px] text-[#555850]">Gruppe 1 Teamlösung</span>
          </div>
        );
      case "filmroulette":
        return (
          <div className="w-full h-full bg-[#191919] text-white flex flex-col items-center justify-center p-4">
            <span className="text-2xl mb-1">🎬</span>
            <span className="font-bold text-base text-amber-400">Filmroulette</span>
            <span className="text-[10px] text-slate-400">React Movie SPA</span>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-[#f0ece1] flex items-center justify-center">
            <span className="font-mono text-xs text-[#666860]">{project.title}</span>
          </div>
        );
    }
  };

  const cardContent = (
    <div
      className={`group rounded-2xl bg-[#f5f2ea] border overflow-hidden p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full ${
        isFeatured
          ? "border-[#232621]/40 ring-1 ring-[#232621]/20 shadow-sm"
          : "border-[#e6e2da] hover:border-[#d6d0c4]"
      }`}
    >
      {/* Project Image Box */}
      <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-[#e2dcd0] relative">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          getCardGraphic(project.id)
        )}
      </div>

      {/* Project Metadata */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-lg font-bold text-[#1c1d1a] group-hover:text-[#4a4d46] transition-colors">
              {project.title}
            </h3>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#232621] text-white">
                {project.badge}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold text-[#787973] mb-2">{project.subtitle}</p>
          <p className="text-xs text-[#555850] leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Bottom Arrow Circle Button */}
        <div className="flex justify-end pt-2">
          <div className="w-9 h-9 rounded-full bg-[#e6e2da] group-hover:bg-[#232621] group-hover:text-white transition-colors flex items-center justify-center text-[#1c1d1a]">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );

  if (project.detailUrl) {
    return <Link href={project.detailUrl}>{cardContent}</Link>;
  }

  return cardContent;
}
