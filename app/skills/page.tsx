import { SkillsGrid } from "@/components/SkillsGrid";
import { ShieldCheck, Lock, Key, Database, Server, Cpu, Globe } from "lucide-react";

export const metadata = {
  title: "Technischer Schwerpunkt & Security | Nicole Grabarkiewicz",
  description: "Detaillierte Übersicht über die Fähigkeiten von Nicole Grabarkiewicz in Frontend, Backend, Sicherheit (Argon2, HttpOnly) und Deployment.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          Technischer Schwerpunkt
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Technologiestack & Sicherheitskonzepte
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Als Web Developer Specialist verlasse ich mich nicht auf einfache Baukästen, sondern erstelle maßgeschneiderte, typensichere und geschützte Webanwendungen.
        </p>
      </div>

      {/* Main Grid */}
      <SkillsGrid />

      {/* Highlighted Security Section */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 p-8 md:p-12 space-y-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Fokus Web-Security & Session-Handling</h2>
            <p className="text-xs text-emerald-400 font-mono">
              Warum Sicherheit im Code verankert sein muss
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-100">Argon2 Password Hashing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verwendung des von Cryptographen empfohlenen Argon2-Algorithmus zur sicheren serverseitigen Speicherung von Nutzerpasswörtern in PostgreSQL.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-100">HttpOnly Session Cookies</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authentifizierungstokens werden in HttpOnly-, Secure- und SameSite-Cookies abgelegt, wodurch sie für schädliche Client-Skripte unerreichbar sind (XSS-Schutz).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-100">Prisma ORM & SQLi Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verhindert SQL-Injection durch durchgehend automatische Parametrisierung aller Datenbank-Abfragen im Backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
