import Link from "next/link";
import { Code2, Mail, Heart, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-lg font-bold text-slate-100">Nicole Grabarkiewicz</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Zertifizierte <strong className="text-emerald-400 font-medium">Web Developer Specialistin</strong> mit Leidenschaft für moderne Frontend-Architektur, performante Next.js Applications, Prisma DB-Modellierung und sichere Cookie-Authentifizierung.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Web Developer Specialist (September 2026)
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">Startseite</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-400 transition-colors">Meine Projekte</Link>
              </li>
              <li>
                <Link href="/projects/slowline" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Slowline Case Study
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-emerald-400 transition-colors">Technischer Schwerpunkt</Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-emerald-400 transition-colors">12-Monats-Timeline</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Verbinden
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://github.com/nicolegrabarkiewicz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nicole Grabarkiewicz. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1">
            Entwickelt mit <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" /> in React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
