import { skillCategories } from "@/data/skills";
import { Layout, Server, Shield, Cloud, CheckCircle } from "lucide-react";

export function SkillsGrid() {
  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) return <Layout className="w-5 h-5 text-emerald-400" />;
    if (title.includes("Backend")) return <Server className="w-5 h-5 text-emerald-400" />;
    if (title.includes("Security")) return <Shield className="w-5 h-5 text-emerald-400" />;
    return <Cloud className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((cat, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-lg"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                {getCategoryIcon(cat.title)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
                <p className="text-xs text-slate-400">{cat.description}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col gap-1 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pl-5 leading-relaxed">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
