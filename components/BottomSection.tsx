import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

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
            {/* Real Portrait Image with White Background */}
            <div className="relative w-32 h-40 rounded-2xl overflow-hidden shrink-0 border border-[#d8d2c4] shadow-md group bg-[#1c1d1a]">
              <Image
                src="/images/nicole.jpg"
                alt="Nicole Grabarkiewicz"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
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
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-colors shadow-sm"
              >
                Nachricht schreiben →
              </Link>

              {/* Social & Contact Icons Row */}
              <div className="flex flex-wrap items-center gap-4 text-[#363832]">
                <a
                  href="mailto:n.grabarkiewicz@icloud.com"
                  className="hover:text-[#1c1d1a] transition-colors flex items-center gap-1.5 text-xs font-medium"
                  aria-label="E-Mail senden"
                >
                  <Mail className="w-4 h-4 text-[#3d5a3d]" />
                  <span>n.grabarkiewicz@icloud.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nicole-grabarkiewicz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1c1d1a] transition-colors flex items-center gap-1.5 text-xs font-medium"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="tel:015209290360"
                  className="hover:text-[#1c1d1a] transition-colors flex items-center gap-1.5 text-xs font-medium"
                  aria-label="Telefonnummer anrufen"
                >
                  <Phone className="w-4 h-4 text-[#3d5a3d]" />
                  <span>0152/09290360</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
