import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ShieldCheck, Database, Layers, CheckCircle2, Lock } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function FeaturedSlowline() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#fbf9f5] via-[#f4f7f4] to-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-[#ffffff] border border-[#cbd8cb] p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          {/* Top Tag & Period */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#52c452]"></span>
                HAUPTPROJEKT & ABSCHLUSSKONZEPT
              </span>
              <span className="text-xs font-mono text-[#787973]">Juni 2026 – September 2026</span>
            </div>
            <span className="text-xs font-semibold text-[#3d5a3d] bg-[#e4ebe4] px-3 py-1 rounded-full border border-[#c2d4c2]">
              Fullstack Web Application
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-3">
                  🦥 Slowline – Slow Writing Web App
                </h2>
                <p className="text-lg text-[#3d5a3d] font-medium leading-snug">
                  Ein achtsamer, ruhiger Raum für fokussierte Gedanken. Entwickelt von der UI/UX-Konzeption bis zur performanten Cloud-Datenbank.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#555850] leading-relaxed">
                In einer von Reizüberflutung geprägten Welt reduziert Slowline das Schreiben auf das Wesentliche: Ein Wortimpuls regt Reflexion an, ein kletterndes Faultier visualisiert den Fortschritt ohne Hektik, und der Zen-Modus blendet alle Ablenkungen aus.
              </p>

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#787973] uppercase tracking-wider mb-2.5">
                  Technologien & Sicherheitsstandards:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL (Neon)", "Argon2 Auth", "HttpOnly Cookies", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#f4f1ea] text-[#232621] border border-[#e2dcd0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* My Contributions Checklist */}
              <div className="p-4 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2">
                <h4 className="text-xs font-bold text-[#1c1d1a] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#3d5a3d]" />
                  Mein persönlicher Beitrag:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#363832]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d5a3d] shrink-0" />
                    <span>UI/UX & Zen-Modus Konzeption</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d5a3d] shrink-0" />
                    <span>Fullstack Next.js 16 App Router</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d5a3d] shrink-0" />
                    <span>Prisma & PostgreSQL Schema</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3d5a3d] shrink-0" />
                    <span>Argon2 Session-Authentifizierung</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects/slowline"
                  className="px-6 py-3 rounded-full bg-[#232621] text-white text-sm font-semibold hover:bg-[#363933] transition-colors shadow-sm flex items-center gap-2"
                >
                  Case Study & Architektur lesen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://slowline.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] text-sm font-semibold hover:bg-[#d8e3d8] transition-colors flex items-center gap-2"
                >
                  Live-Demo ausprobieren
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Asset Frame (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#e4ebe4] border border-[#cbd8cb] overflow-hidden relative aspect-[16/10] shadow-md group">
                <Image
                  src="/images/slowline-main.png"
                  alt="Slowline App Preview"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
