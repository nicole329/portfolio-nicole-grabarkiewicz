import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4ebe4] border border-[#d2dcd2] text-[#232621] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#3d5a3d] animate-pulse"></span>
              Zertifiziert: Web Developer Specialist (September 2026)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-title font-normal text-[#1c1d1a] tracking-tight leading-[1.08]">
              Nicole <br />
              Grabarkiewicz
            </h1>

            <p className="text-xl sm:text-2xl font-sans font-semibold text-[#232621]">
              Web Developer Specialist
            </p>

            <p className="text-base sm:text-lg text-[#555850] max-w-lg leading-relaxed">
              Ich entwickle performante, typensichere Fullstack-Webanwendungen – von der UI/UX-Konzeption bis hin zur sicheren Datenbank-Architektur und Deployment.
            </p>

            {/* Concrete Skill Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#363832]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d5a3d] shrink-0" />
                <span>React 19 & Next.js 16 App Router</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d5a3d] shrink-0" />
                <span>TypeScript & Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d5a3d] shrink-0" />
                <span>PostgreSQL & Prisma ORM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3d5a3d] shrink-0" />
                <span>Argon2 Auth & Session Cookies</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#projekte"
                className="px-7 py-3.5 rounded-full bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all flex items-center gap-2 shadow-sm"
              >
                Meine Projekte ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#ueber-mich"
                className="px-7 py-3.5 rounded-full border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-all"
              >
                Über mich
              </Link>
            </div>

            {/* Handwritten Note */}
            <div className="pt-2">
              <span className="font-handwriting text-2xl text-[#6b6e65] block transform -rotate-1">
                Ideen in digitale Erlebnisse verwandeln.
              </span>
            </div>
          </div>

          {/* Right Column: Aesthetic Laptop Showcase with Real Slowline Mascot Sloth */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop Graphic Mockup Container */}
              <div className="relative rounded-2xl bg-[#efebe4] p-4 shadow-xl border border-[#e2dcd2] transform hover:scale-[1.01] transition-transform duration-500">
                
                {/* Laptop Screen Frame */}
                <div className="rounded-xl overflow-hidden bg-slate-900 border-4 border-slate-800 aspect-[16/10] shadow-inner relative">
                  {/* Browser Bar */}
                  <div className="h-6 bg-slate-800 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">slowline.vercel.app</span>
                    <div className="w-4"></div>
                  </div>
                  
                  {/* Laptop Screen Content Mockup with Real Sloth Image */}
                  <div className="p-4 bg-[#f2f6f2] h-full flex flex-col justify-center items-center text-center relative">
                    <div className="relative w-24 h-24 mb-1">
                      <Image
                        src="/images/Sloth3.png"
                        alt="Slowline Sloth Mascot"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xl font-serif-title text-[#232621] font-bold">
                      Slowline
                    </span>
                    <span className="text-[11px] font-sans font-medium text-[#4a5c4a]">
                      Slow Writing & Mindfulness App
                    </span>
                    <span className="text-[9px] font-mono text-[#787973] mt-1 bg-white px-2 py-0.5 rounded-full border border-[#d2dcd2]">
                      Next.js 16 · Prisma · PostgreSQL · Argon2
                    </span>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="h-3 bg-[#d5cfc4] rounded-b-xl max-w-xs mx-auto shadow-sm mt-1"></div>
              </div>

              {/* Decorative Card Badge Bottom Right */}
              <div className="absolute -bottom-5 -right-2 bg-[#ffffff] border border-[#e6e2da] rounded-2xl p-3.5 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e4ebe4] flex items-center justify-center text-base">
                  🦥
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#232621]">Hauptprojekt Slowline</p>
                  <p className="font-mono text-[10px] text-[#6b6e65]">Abschlussprojekt 2026</p>
                </div>
              </div>

              {/* Handwritten Note Top Right */}
              <div className="absolute -top-6 right-2 hidden sm:block">
                <span className="font-handwriting text-2xl text-[#232621] block transform rotate-3 bg-[#fffefb] px-3 py-1 rounded-lg border border-[#e8e4db] shadow-sm">
                  "Kreativität trifft auf Technologie" ♡
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
