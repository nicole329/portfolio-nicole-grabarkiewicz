import Link from "next/link";
import { GraduationCap, Award, BookOpen, Code2, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Über mich | Nicole Grabarkiewicz",
  description: "Erfahren Sie mehr über den Werdegang, Qualifikationen und den Abschluss als Web Developer Specialist von Nicole Grabarkiewicz.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
          <GraduationCap className="w-4 h-4" />
          Web Developer Specialist
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
          Über Mich & Mein Profil
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Zielstrebig, lösungsorientiert und mit Begeisterung für moderne Webtechnologien.
        </p>
      </div>

      {/* Main Bio Card */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-12 space-y-8 shadow-xl">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-400" />
            Mein Weg zur Webentwicklung
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            In den vergangenen 12 Monaten habe ich eine intensive und praxisorientierte Spezialisierung im Bereich der modernen Webentwicklung absolviert. Mein Ziel war es von Anfang an, nicht nur ansprechende Benutzeroberflächen zu gestalten, sondern vollständige, voll funktionsfähige Webanwendungen als zusammenhängendes System zu verstehen und umzusetzen.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            Dabei habe ich fundierte Kenntnisse in allen Kernbereichen der modernen Fullstack-Entwicklung aufgebaut: von reaktiven UI-Komponenten in React & Next.js über strukturierte TypeScript-Typisierung bis hin zu relationaler Datenbankschema-Modellierung mit PostgreSQL, Prisma ORM sowie eigenentwickelten Sicherheitslösungen (Argon2 & Session Cookies).
          </p>
        </div>

        {/* Certificate Box */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-950 to-slate-900 border border-emerald-500/50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <GraduationCap className="w-5 h-5" />
              Zertifizierter Bildungsabschluss
            </div>
            <h3 className="text-2xl font-extrabold text-slate-100">
              Web Developer Specialist
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Erfolgreich bestanden im <strong>September 2026</strong>
            </p>
            <p className="text-sm text-slate-300 max-w-xl pt-2">
              Qualifikationsschwerpunkte: Web-Architektur, Frontend & Backend Entwicklung mit React/Next.js, Datenmodellierung (PostgreSQL/Prisma), Authentifizierung & Web-Security.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md inline-block">
              Zertifikat 2026
            </span>
          </div>
        </div>

        {/* Key Competency List */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-4">
            Was mich als Entwicklerin auszeichnet:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Ganzheitliches Systemverständnis
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ich betrachte UI, API-Endpunkte, ORM-Abfragen und Datenbankschemata stets als abgestimmte Einheit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Fokus auf Sicherheit & Standards
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sicherheitskonzepte wie Argon2 Passwort-Hashing, HttpOnly Session Cookies und SQLi-Schutz sind fest in meinen Projekten verankert.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Sauberer & Typensicherer Code
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nutzung von TypeScript, verständlicher Ordnerarchitektur und aktuellen Best Practices (Next.js App Router).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Neugier & Kontinuierliches Lernen
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schnelle Einarbeitung in neue Frameworks, Werkzeuge und Entwickler-Workflows.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects/slowline"
            className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors flex items-center gap-2"
          >
            Abschlussprojekt Slowline ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="text-sm text-slate-300 hover:text-emerald-400 font-medium transition-colors"
          >
            Kontakt aufnehmen →
          </Link>
        </div>
      </div>
    </div>
  );
}
