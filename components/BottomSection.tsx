import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function BottomSection() {
  const technologies = [
    "Figma",
    "Framer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Git & GitHub"
  ];

  return (
    <section id="ueber-mich" className="py-16 md:py-24 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Über mich mit Profilbild (5 cols) */}
          <div className="lg:col-span-5 bg-[#ffffff] border border-[#e6e2da] rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            {/* Avatar / Portrait Mockup */}
            <div className="w-32 h-36 rounded-2xl bg-[#eae6dc] overflow-hidden shrink-0 border border-[#d8d2c4] flex items-center justify-center text-4xl shadow-inner">
              👩‍💻
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                Über mich
              </h3>
              <p className="text-xs text-[#555850] leading-relaxed">
                Ich bin Nicole – Produktdesignerin und Webentwicklerin mit Leidenschaft für nutzerzentrierte digitale Produkte. Ich liebe es, Design und Technik zu verbinden und aus Ideen echte Lösungen zu schaffen.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1c1d1a] hover:underline underline-offset-4 pt-1"
              >
                Mehr über mich →
              </Link>
            </div>
          </div>

          {/* Column 2: Technologien (3 cols) */}
          <div className="lg:col-span-3 bg-[#ffffff] border border-[#e6e2da] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-[#1c1d1a] mb-4">Technologien</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#f4f1ea] text-[#363832] border border-[#e2dcd0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact Card Banner (4 cols) */}
          <div
            id="kontakt"
            className="lg:col-span-4 bg-gradient-to-br from-[#e4ebe4] via-[#edf2ed] to-[#f4f7f4] border border-[#d2dcd2] rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            {/* Leaf background accent graphic */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none text-5xl flex items-center justify-center">
              🌿
            </div>

            <div className="space-y-3 relative z-10">
              <h3 className="text-2xl font-serif-title font-bold text-[#1c1d1a] leading-tight">
                Lass uns etwas Großartiges schaffen!
              </h3>
              <p className="text-xs text-[#4a4d46] leading-relaxed">
                Ich freue mich über neue Projekte, spannende Ideen oder den Austausch.
              </p>
            </div>

            <div className="pt-6 relative z-10 space-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-colors shadow-sm"
              >
                Kontakt aufnehmen →
              </Link>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4 text-[#363832]">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1c1d1a] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/nicolegrabarkiewicz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1c1d1a] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nicole.grabarkiewicz@example.com"
                  className="hover:text-[#1c1d1a] transition-colors"
                  aria-label="E-Mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
