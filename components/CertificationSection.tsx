import Image from "next/image";
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen, Eye } from "lucide-react";

export function CertificationSection() {
  const certificates = [
    {
      id: "produktdesign",
      title: "Produktdesign & -entwicklung in der IT",
      date: "09.01.2026",
      badge: "Modul 01",
      institution: "Syntax Institut",
      image: "/images/certificates/modul1-produktdesign.png",
      skills: [
        "Rolle & Aufgaben im Produktdesign sowie Analyse bestehender Web-Produkte",
        "UI-Design in Figma: Typografie, Farbtheorie, Komponenten und Auto-Layout",
        "Design-System und Webseiten-Bausteine von Low- bis High-Fidelity",
        "UX-Design-Prinzipien, User Personas und User Flows",
        "User Research: Planung, Durchführung und Auswertung von Interviews",
        "Barrierefreies Design nach A11Y-Prinzipien und Testing mit Lighthouse",
        "Projektmanagement mit Scrum und Kanban sowie Developer Handoff",
      ],
    },
    {
      id: "webentwicklung",
      title: "Einführung Software- und Webentwicklung",
      date: "02.04.2026",
      badge: "Modul 02",
      institution: "Syntax Institut",
      image: "/images/certificates/modul2-webentwicklung.png",
      skills: [
        "Funktionsweise des Internets mit HTTP, DNS und Client-Server-Architektur",
        "Hosting und Server-Konfiguration",
        "Semantisches HTML und Aufbau von Webseiten",
        "CSS mit Box-Modell, Farben, Schriften, Flexbox, Grid und Animationen",
        "Responsive Design mit Mobile-First, Media Queries und Breakpoints",
        "JavaScript: DOM-Manipulation, Events, ES6+, Async/Await und Fetch API",
        "Versionskontrolle mit Git und GitHub, Branching, Merging und Pull Requests",
      ],
    },
    {
      id: "frontend",
      title: "Vertiefung: Frontend Entwicklung",
      date: "26.06.2026",
      badge: "Modul 03",
      institution: "Syntax Institut",
      image: "/images/certificates/modul3-frontend.png",
      skills: [
        "Frontend-Frameworks mit React oder Vue: Komponenten, Props und State",
        "State-Management sowie clientseitiges Routing mit dynamischen Routen",
        "Styling mit Tailwind CSS und CSS-in-JS über Styled Components",
        "Unit-Tests mit Jest und End-to-End-Tests mit Cypress",
        "Debugging in modernen Browsern",
        "Performance-Optimierung mit Lazy Loading, Code Splitting und Asset-Optimierung",
        "Analyse und Bewertung der Anwendung mit Lighthouse",
      ],
    },
  ];

  return (
    <section id="ihk-abschluss" className="py-16 md:py-24 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#52c452]" />
                ZERTIFIZIERTE QUALIFIKATIONEN
              </span>
              <span className="text-xs font-mono text-[#787973]">Syntax Institut</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#1c1d1a]">
              Geprüfte Kompetenzbescheinigungen
            </h2>
            <p className="text-base text-[#555850] leading-relaxed mt-3">
              Qualifizierung zur IT-Fachkraft (nach §81 ff. SGB III) am <strong>Syntax Institut für Aus- und Weiterbildungen</strong>. Nachweis fundierter Fachkompetenzen mit offiziellen Zertifikatsdokumenten.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#cbd8cb] shadow-xs flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-xl bg-[#e4ebe4] text-[#3d5a3d]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1c1d1a] block">Web Developer Specialist</span>
              <span className="text-[11px] font-mono text-[#787973]">Offizielle Dokumente</span>
            </div>
          </div>
        </div>

        {/* 3 Certificate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 space-y-5 shadow-sm hover:border-[#cbd8cb] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge & Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#e4ebe4] text-[#232621] border border-[#cbd8cb]">
                    {cert.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#787973]">
                    <Calendar className="w-3.5 h-3.5 text-[#3d5a3d]" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Real Certificate PDF Image Preview */}
                <div className="rounded-2xl overflow-hidden border border-[#e8e4db] shadow-xs relative aspect-[1/1.4] bg-[#fdfbf7] group-hover:border-[#232621] transition-all">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-[#232621]/80 text-white text-[10px] font-mono font-medium backdrop-blur-xs flex items-center gap-1 opacity-90">
                    <Eye className="w-3 h-3" />
                    Zertifikat
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#787973] block mb-1">
                    Kompetenzbescheinigung
                  </span>
                  <h3 className="text-lg font-serif-title font-bold text-[#1c1d1a] leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Skills Bullet List */}
                <div className="space-y-2 pt-2 border-t border-[#f0ece1]">
                  <h4 className="text-xs font-bold text-[#1c1d1a] uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#3d5a3d]" />
                    Inhalte & Kompetenzen:
                  </h4>
                  <ul className="space-y-1.5">
                    {cert.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#555850] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3d5a3d] shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer Stamp */}
              <div className="pt-3 border-t border-[#f0ece1] flex items-center justify-between text-xs text-[#787973]">
                <span className="font-mono text-[11px]">{cert.institution}</span>
                <span className="font-semibold text-[#3d5a3d] flex items-center gap-1">
                  Abschluss <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
