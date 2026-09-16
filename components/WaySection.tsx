import { waySteps } from "@/data/timeline";
import { Edit3, Monitor, Code, Database, GraduationCap, ArrowRight } from "lucide-react";

export function WaySection() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Edit3 className="w-5 h-5 text-[#232621]" />;
      case "02":
        return <Monitor className="w-5 h-5 text-[#232621]" />;
      case "03":
        return <Code className="w-5 h-5 text-[#232621]" />;
      case "04":
        return <Database className="w-5 h-5 text-[#232621]" />;
      case "05":
        return <GraduationCap className="w-5 h-5 text-[#232621]" />;
      default:
        return <Code className="w-5 h-5 text-[#232621]" />;
    }
  };

  return (
    <section id="mein-weg" className="py-16 md:py-24 border-t border-b border-[#e6e2da] bg-[#f7f4ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-md">
            <span className="text-xs font-mono tracking-widest text-[#787973] uppercase font-semibold block mb-2">
              ENTWICKLUNG
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif-title font-normal text-[#1c1d1a] mb-4">
              Mein Weg
            </h2>
            <p className="text-base text-[#555850] leading-relaxed">
              Von der ersten Idee bis zur Full-Stack Anwendung – eine Reise aus Neugier, Lernen und Leidenschaft.
            </p>
          </div>

          {/* Handwritten Annotation Right */}
          <div className="hidden md:block">
            <span className="font-handwriting text-3xl text-[#4a4d46] block transform rotate-2">
              Still learning <br />
              always growing ♡
            </span>
          </div>
        </div>

        {/* Stepper Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-2 items-start relative">
          {waySteps.map((item, idx) => (
            <div key={item.step} className="flex items-center gap-2">
              {/* Step Card */}
              <div className="flex-1 bg-[#ffffff] border border-[#e2dcd0] rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[190px] shadow-sm hover:shadow-md transition-shadow">
                
                {/* Circle Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#f4f0eb] border border-[#e0dad0] flex items-center justify-center mb-3">
                  {getStepIcon(item.step)}
                </div>

                <div>
                  <span className="text-xs font-mono text-[#8a8b84] block mb-0.5">{item.step}</span>
                  <h3 className="text-base font-bold text-[#1c1d1a] mb-1">{item.title}</h3>
                  <p className="text-xs font-medium text-[#666860]">{item.subtitle}</p>
                  <p className="text-[11px] text-[#888a82] mt-1">{item.detail}</p>
                </div>
              </div>

              {/* Arrow divider (between cards on desktop) */}
              {idx < waySteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-[#a8a69e] px-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
