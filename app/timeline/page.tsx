import { Timeline } from "@/components/Timeline";
import { GraduationCap, Clock, Award, Sparkles } from "lucide-react";

export const metadata = {
  title: "12 Monate – Mein Weg zum Web Developer Specialist | Nicole Grabarkiewicz",
  description: "Visuelle Timeline des 12-monatigen Lern- und Entwicklungswegs von Nicole Grabarkiewicz von den Grundlagen bis zum zertifizierten Web Developer Specialist.",
};

export default function TimelinePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Clock className="w-4 h-4" />
          Lern- & Entwicklungsweg
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          12 Monate – Mein Weg zum Web Developer Specialist
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Eine kontinuierliche Lernkurve: Von den ersten Zeilen HTML & JavaScript im September 2025 bis zum erfolgreichen Zertifikatsabschluss als <strong>Web Developer Specialist</strong> im September 2026.
        </p>
      </div>

      {/* Hero Certificate Callout */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-500/50 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            September 2026 Highlight
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100">
            🎓 Web Developer Specialist bestanden
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Nach 12 Monaten intensivster Praxis, mehreren Projekten und dem Hauptprojekt <strong>Slowline</strong> wurde die Weiterbildung erfolgreich abgeschlossen.
          </p>
        </div>
        <div className="shrink-0">
          <div className="w-20 h-20 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold shadow-xl shadow-emerald-500/30">
            <GraduationCap className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* The Timeline */}
      <div className="pt-6">
        <Timeline />
      </div>
    </div>
  );
}
