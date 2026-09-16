import Link from "next/link";
import { Hero } from "@/components/Hero";
import { FeaturedSlowline } from "@/components/FeaturedSlowline";
import { CertificationSection } from "@/components/CertificationSection";
import { ProjectCard } from "@/components/ProjectCard";
import { WaySection } from "@/components/WaySection";
import { BottomSection } from "@/components/BottomSection";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Slowline Prominent Hauptprojekt Showcase */}
      <FeaturedSlowline />

      {/* 3. IHK-Abschluss & Zertifikate Bereich */}
      <CertificationSection />

      {/* 4. Ausgewählte Projekte ("Meine Arbeit") */}
      <section id="projekte" className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#787973] uppercase font-semibold block mb-1">
              MEINE ARBEIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-normal text-[#1c1d1a]">
              Ausgewählte Projekte
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-xs font-bold text-[#1c1d1a] hover:underline underline-offset-4"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 5. Mein Weg Stepper (mit echten Projekten verknüpft) */}
      <WaySection />

      {/* 6. Bottom Section (Über mich, Technologien, Kontakt-Banner) */}
      <BottomSection />
    </div>
  );
}
