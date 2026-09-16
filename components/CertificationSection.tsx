import { GraduationCap, Award, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";

export function CertificationSection() {
  return (
    <section id="ihk-abschluss" className="py-16 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#f4f7f4] via-[#ffffff] to-[#f4f7f4] border border-[#cbd8cb] p-8 md:p-12 shadow-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Trophy & Badge (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-[#ffffff] border border-[#e2dcd0] shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-[#232621] text-white flex items-center justify-center mb-4 shadow-md">
                <GraduationCap className="w-10 h-10 text-[#52c452]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#787973] uppercase tracking-wider mb-1">
                ZERTIFIZIERTE QUALIFIKATION
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                Web Developer Specialist
              </h3>
              <p className="text-xs font-mono text-[#3d5a3d] font-semibold mt-1">
                Abschluss: September 2026
              </p>
              <div className="mt-4 px-4 py-1.5 rounded-full bg-[#e4ebe4] border border-[#cbd8cb] text-xs font-bold text-[#232621] inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#3d5a3d]" />
                Zertifikatsabschluss
              </div>
            </div>

            {/* Right Column: Qualifications & Competencies (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#787973] uppercase font-semibold block mb-1">
                  ABSCHLUSS & NACHWEISE
                </span>
                <h2 className="text-3xl font-serif-title font-bold text-[#1c1d1a]">
                  Geprüfte Fachkompetenz
                </h2>
                <p className="text-sm text-[#555850] leading-relaxed mt-2">
                  Im Rahmen der intensiven 12-monatigen Spezialisierung zur <strong>Web Developer Specialistin</strong> wurden praxiserprobte Kenntnisse in allen Phasen der modernen Anwendungsentwicklung nachgewiesen:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#363832]">
                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#e6e2da] flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-[#3d5a3d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1c1d1a]">Moderne Web-Architektur</h4>
                    <p className="text-[11px] text-[#666860]">Next.js App Router, SSR, Server Actions & React 19</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#e6e2da] flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-[#3d5a3d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1c1d1a]">Relationale Datenbanken</h4>
                    <p className="text-[11px] text-[#666860]">PostgreSQL, Prisma ORM Schema-Modellierung & Seeding</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#e6e2da] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#3d5a3d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1c1d1a]">Sicherheit & Auth</h4>
                    <p className="text-[11px] text-[#666860]">Argon2 Hashing, HttpOnly Cookies & SQLi Protection</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#e6e2da] flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-[#3d5a3d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1c1d1a]">UI/UX & Deployment</h4>
                    <p className="text-[11px] text-[#666860]">Responsive Webdesign, Tailwind CSS & Vercel Cloud</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
