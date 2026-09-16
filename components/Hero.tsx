import Link from "next/link";
import { ArrowRight, Code2, GraduationCap, ShieldCheck, Sparkles, FolderGit2 } from "lucide-react";

export function Hero() {
  const techStack = [
    "React 19",
    "Next.js 16",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL (Neon)",
    "Tailwind CSS",
    "Argon2 Security"
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Radial background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Certified Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm font-semibold mb-6 shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Zertifiziert: <strong>Web Developer Specialist</strong> (September 2026)</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1] max-w-4xl mb-6">
            Nicole Grabarkiewicz
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 mt-2">
              Web Developer Specialist
            </span>
          </h1>

          {/* Intro Lead */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
            Vom UI-Design bis zur voll funktionsfähigen Webanwendung. Ich entwickle moderne, typensichere Frontend- & Backend-Systeme mit klarem Fokus auf Performance, Usability und Sicherheit.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mb-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900/80 text-slate-200 border border-slate-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2 group"
            >
              <FolderGit2 className="w-4 h-4" />
              Projekte ansehen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects/slowline"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-semibold text-sm hover:bg-emerald-500/10 hover:border-emerald-500/70 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Slowline Case Study
            </Link>

            <Link
              href="/timeline"
              className="px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-900 hover:text-slate-100 transition-all"
            >
              12-Monate Lernweg
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
