import Link from "next/link";
import { Edit3, Monitor, Code, Database, GraduationCap, ArrowRight } from "lucide-react";

export function WaySection() {
  const steps = [
    {
      step: "01",
      title: "UX/UI Design",
      subtitle: "Elternplanet",
      detail: "Figma Design System",
      icon: Edit3,
      link: "/projects/elternplanet"
    },
    {
      step: "02",
      title: "Webdesign",
      subtitle: "Portfolio",
      detail: "Framer & Custom Code",
      icon: Monitor,
      link: "/projects/portfolio-framer"
    },
    {
      step: "03",
      title: "Frontend",
      subtitle: "Filmroulette & BookSpace",
      detail: "React, SPA & REST APIs",
      icon: Code,
      link: "/projects/filmroulette"
    },
    {
      step: "04",
      title: "Full-Stack",
      subtitle: "Slowline App",
      detail: "Next.js 16, Prisma, Auth",
      icon: Database,
      link: "/projects/slowline"
    },
    {
      step: "05",
      title: "Heute",
      subtitle: "IHK-Zertifikat",
      detail: "Web Developer Specialist",
      icon: GraduationCap,
      link: "/#ihk-abschluss"
    }
  ];

  return (
    <section id="mein-weg" className="py-16 md:py-24 border-t border-b border-[#e6e2da] bg-[#f7f4ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <span className="text-xs font-mono tracking-widest text-[#787973] uppercase font-semibold block mb-2">
              ENTWICKLUNG & PROJEKTE
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif-title font-normal text-[#1c1d1a] mb-4">
              Mein Weg
            </h2>
            <p className="text-base text-[#555850] leading-relaxed">
              Von den ersten Figma-Entwürfen bis zur vollständigen Fullstack-Webanwendung – jeder Schritt verbunden mit echten Projekten.
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

        {/* Stepper Flow connected to real projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-2 items-start relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="flex items-center gap-2">
                {/* Step Card Link */}
                <Link
                  href={item.link}
                  className="group flex-1 bg-[#ffffff] border border-[#e2dcd0] rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[200px] shadow-sm hover:shadow-md hover:border-[#232621] transition-all"
                >
                  {/* Circle Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#f4f0eb] border border-[#e0dad0] group-hover:bg-[#232621] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#232621] group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#8a8b84] block mb-0.5">{item.step}</span>
                    <h3 className="text-base font-bold text-[#1c1d1a] group-hover:text-[#3d5a3d] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#363832]">{item.subtitle}</p>
                    <p className="text-[11px] text-[#787973] mt-1">{item.detail}</p>
                  </div>
                </Link>

                {/* Arrow divider (between cards on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-[#a8a69e] px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
