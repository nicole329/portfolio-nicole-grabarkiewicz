import { timelineData } from "@/data/timeline";
import { GraduationCap, Calendar, CheckCircle2, Sparkles } from "lucide-react";

export function Timeline() {
  return (
    <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12 py-4">
      {timelineData.map((item, index) => (
        <div key={index} className="relative group pl-8 md:pl-10">
          {/* Left date badge for desktop */}
          <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
            {item.date}
          </div>

          {/* Timeline node icon */}
          <div
            className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              item.isHighlight
                ? "bg-emerald-500 border-emerald-300 text-slate-950 shadow-lg shadow-emerald-500/40 scale-110"
                : "bg-slate-950 border-slate-700 text-emerald-400 group-hover:border-emerald-500 group-hover:scale-105"
            }`}
          >
            {item.isHighlight ? (
              <GraduationCap className="w-4 h-4 animate-bounce" />
            ) : (
              <CheckCircle2 className="w-4 h-4" />
            )}
          </div>

          {/* Card Content */}
          <div
            className={`rounded-2xl p-6 border transition-all duration-300 ${
              item.isHighlight
                ? "bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/60 shadow-xl shadow-emerald-950/50"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
            }`}
          >
            {/* Mobile date badge */}
            <div className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-emerald-400 mb-2">
              <Calendar className="w-3 h-3" />
              {item.date}
            </div>

            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
              {item.isHighlight && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 shadow">
                  <Sparkles className="w-3 h-3" />
                  Zertifizierter Abschluss
                </span>
              )}
            </div>

            <p className="text-sm font-medium text-emerald-400/90 mb-3">{item.subtitle}</p>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>

            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
