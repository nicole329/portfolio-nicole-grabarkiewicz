"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Library,
  Sparkles,
  Search,
  Database,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Code2,
  Lock,
  GitMerge,
  FileCheck,
  Calendar,
  AlertTriangle,
  Quote,
  ListCheck,
  Globe,
  QrCode,
  Check,
  X,
  Terminal,
} from "lucide-react";
import { projectsData } from "@/data/projects";

// --- DYNAMIC RESPONSIVE SLIDE VISUAL RENDERER ---
function DossierSlideVisual({
  slideIndex,
  slideData,
}: {
  slideIndex: number;
  slideData: any;
}) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#faf8f5] p-4 sm:p-6 text-[#1c1d1a] min-h-[320px] sm:min-h-[380px] flex flex-col justify-between select-none">
      {/* Background Notebook Paper Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#dcd4c3_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

      {/* NotebookLM Header */}
      <div className="relative z-10 space-y-1 pb-3 border-b border-[#e2dcd0]">
        <h2 className="font-serif-title text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#1c1d1a] leading-snug break-words">
          {slideData.headline}
        </h2>
      </div>

      {/* Slide Specific Interactive Diagram / Visual Canvas */}
      <div className="relative z-10 my-3 flex-1 flex items-center justify-center min-w-0">
        {/* FOLIE 01: Inbetriebnahme */}
        {slideIndex === 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-[#444742] leading-relaxed break-words font-medium">
                Entdecke, speichere und verwalte deine Lieblingsbücher.
              </p>
              <div className="p-2.5 rounded-xl bg-white border border-[#dcd4c3] text-xs text-[#555850] space-y-1 shadow-sm">
                <p className="font-medium">
                  Scannen Sie den Code, um die App live auf Ihrem Gerät zu testen, während wir die Architektur dahinter erkunden.
                </p>
              </div>
              <div className="inline-block px-3 py-1.5 rounded-lg bg-white border border-[#232621] text-[11px] font-mono font-bold text-[#232621]">
                4 Wochen Entwicklungszeit | React | Firebase | Tailwind CSS
              </div>
              <p className="text-xs italic text-[#787973]">Von Nicole Grabarkiewicz</p>
            </div>
            <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-[#dcd4c3] shadow-sm text-center relative space-y-2">
              <div className="p-3 bg-[#1c1d1a] text-white rounded-xl shadow">
                <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-[#e59866]" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#dc2626] tracking-wider">
                ⚡ Live Demo Scan
              </span>
            </div>
          </div>
        )}

        {/* FOLIE 02: Transformation */}
        {slideIndex === 1 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="p-4 rounded-xl bg-white border border-[#dc2626]/40 shadow-sm relative space-y-2 text-center">
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block">
                Das Problem
              </span>
              <div className="w-16 h-16 mx-auto rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center font-bold text-2xl border-2 border-dashed border-[#dc2626]">
                📚💥
              </div>
              <p className="text-xs text-[#555850] font-medium">
                Zettelwirtschaft: Leser verlieren den Überblick über gelesene und geplante Bücher.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#16a34a]/40 shadow-sm relative space-y-2 text-center">
              <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider block">
                Das Ziel
              </span>
              <div className="p-3 rounded-lg bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] text-xs font-bold font-mono">
                MyBookSpace Digitales Archiv
              </div>
              <div className="p-2 rounded bg-[#fef2f2] border border-[#fecaca] text-[11px] italic text-[#b91c1c]">
                „Ein digitaler Raum für Buchliebhaber. Alles an einem Ort. – Nicole“
              </div>
            </div>
          </div>
        )}

        {/* FOLIE 03: 4-Wochen-Sprint */}
        {slideIndex === 2 && (
          <div className="w-full space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 rounded-xl bg-white border-2 border-[#dc2626] shadow-sm space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#dc2626] uppercase block">
                  Woche 1
                </span>
                <p className="text-xs font-bold text-[#1c1d1a]">Konzeption</p>
                <p className="text-[11px] text-[#6b706b]">Logik & Struktur der 8 Pages</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] shadow-sm space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#787973] uppercase block">
                  Woche 2
                </span>
                <p className="text-xs font-bold text-[#1c1d1a]">Fundament</p>
                <p className="text-[11px] text-[#6b706b]">React & Master-Detail UI</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] shadow-sm space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#787973] uppercase block">
                  Woche 3
                </span>
                <p className="text-xs font-bold text-[#1c1d1a]">Integration</p>
                <p className="text-[11px] text-[#6b706b]">Google Books API & Firebase</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] shadow-sm space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#16a34a] uppercase block">
                  Woche 4
                </span>
                <p className="text-xs font-bold text-[#1c1d1a]">Publikation</p>
                <p className="text-[11px] text-[#6b706b]">Testing & Vercel Release</p>
              </div>
            </div>
          </div>
        )}

        {/* FOLIE 04: Modulares Setup */}
        {slideIndex === 3 && (
          <div className="w-full space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
              <div className="px-4 py-2.5 rounded-xl bg-white border border-[#232621] font-bold text-xs shadow-sm w-full sm:w-auto">
                Benutzer
              </div>
              <ArrowRight className="w-5 h-5 text-[#dc2626] hidden sm:block shrink-0" />
              <div className="px-4 py-2.5 rounded-xl bg-[#232621] text-white font-bold text-xs shadow-sm w-full sm:w-auto">
                React Frontend (Tailwind CSS)
              </div>
              <ArrowRight className="w-5 h-5 text-[#dc2626] hidden sm:block shrink-0" />
              <div className="grid grid-cols-1 gap-1.5 w-full sm:w-auto">
                <span className="px-3 py-1 rounded-lg bg-white border border-[#dcd4c3] text-[11px] font-mono font-bold text-[#1c1d1a]">
                  Google Books API
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#dcd4c3] text-[11px] font-mono font-bold text-[#1c1d1a]">
                  Firebase (Firestore DB & Auth)
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#dcd4c3] text-[11px] font-mono font-bold text-[#1c1d1a]">
                  Vercel (Hosting & CI/CD)
                </span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-[#e2dcd0] text-[11px] italic text-[#555850]">
              📌 Schnelle Iterationen im Frontend, während Firebase das Backend-Lifting übernimmt.
            </div>
          </div>
        )}

        {/* FOLIE 05: Dynamisches Routing */}
        {slideIndex === 4 && (
          <div className="w-full space-y-3">
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="px-2.5 py-1 rounded-md bg-white border text-xs font-mono">App.js</span>
              <span className="text-[#dc2626] font-bold text-xs">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-white border text-xs font-mono">Home</span>
              <span className="px-2.5 py-1 rounded-md bg-white border text-xs font-mono">Books</span>
              <span className="px-2.5 py-1 rounded-md bg-[#fee2e2] border-2 border-[#dc2626] text-xs font-mono font-bold text-[#dc2626]">
                path=&quot;/book/:id&quot;
              </span>
              <span className="text-[#dc2626] font-bold text-xs">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-[#232621] text-white text-xs font-mono font-bold">
                BookDetail.js
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] text-xs space-y-1">
              <p className="font-bold text-[#1c1d1a]">✓ Mehr als 3 Pages & Master-Detail-Ansicht</p>
              <p className="text-[11px] text-[#555850]">
                Dynamische Injektion von Buch-IDs zur Generierung spezifischer Detailansichten in Echtzeit.
              </p>
            </div>
          </div>
        )}

        {/* FOLIE 06: Die Leitfrage */}
        {slideIndex === 5 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-4 p-3 rounded-xl bg-white border border-[#dcd4c3] text-xs text-[#555850] space-y-1">
              <span className="font-bold text-[#dc2626] block">Ausgangslage:</span>
              <p className="text-[11px]">Viele Leser verlieren den Überblick über gelesene & geplante Bücher.</p>
            </div>
            <div className="sm:col-span-4 p-4 rounded-2xl bg-white border-2 border-[#232621] text-center shadow-md space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#232621]">
                🔒 Login & Auth
              </div>
              <div className="p-2 rounded bg-[#f4f1ea] text-[11px] font-mono text-[#555850]">
                user@mybookspace.app
              </div>
              <div className="py-1 px-3 rounded-lg bg-[#dc2626] text-white text-xs font-bold">
                Logout/Login
              </div>
            </div>
            <div className="sm:col-span-4 p-3 rounded-xl bg-white border border-[#dcd4c3] text-xs text-[#555850] space-y-1">
              <span className="font-bold text-[#16a34a] block">Privates Archiv:</span>
              <p className="text-[11px]">Der Schlüssel zur individuellen Wishlist, Reading- und Finished-Liste.</p>
            </div>
          </div>
        )}

        {/* FOLIE 07: Zustandssync */}
        {slideIndex === 6 && (
          <div className="w-full space-y-3">
            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full bg-[#dc2626] text-white font-bold text-xs shadow-lg border-4 border-[#fecaca] text-center">
                BooksProvider
                <br />
                <span className="text-[10px] font-mono font-normal opacity-90">(useContext)</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center">
              {["Navbar", "BookGrid", "StatusPage", "BookForm", "BookCard"].map((comp) => (
                <div key={comp} className="p-1.5 rounded-lg bg-white border border-[#dcd4c3] text-[11px] font-mono font-semibold">
                  {comp}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOLIE 08: Custom Hooks */}
        {slideIndex === 7 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div className="p-3 rounded-xl bg-[#1c1d1a] text-[#e4ebe4] font-mono text-[11px] space-y-1">
              <div className="text-[9px] text-[#888c85] font-bold uppercase">useBooks Hook:</div>
              <p className="text-[#a7f3d0]">useEffect(() =&gt; &#123; fetchBooks(); &#125;, []);</p>
              <p className="text-[#fef08a]">useEffect(() =&gt; &#123; loadBookDetails(id); &#125;, [id]);</p>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white border border-[#dcd4c3] text-xs space-y-0.5">
                <span className="font-bold text-[#dc2626]">➔ App-Start (Mount)</span>
                <p className="text-[11px] text-[#555850]">Lädt die gesamte Bibliothek beim ersten Aufruf.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#dcd4c3] text-xs space-y-0.5">
                <span className="font-bold text-[#16a34a]">🔄 Reaktivität bei ID-Wechsel</span>
                <p className="text-[11px] text-[#555850]">Lädt Detaildaten blitzschnell im Hintergrund.</p>
              </div>
            </div>
          </div>
        )}

        {/* FOLIE 09: Firestore Merge */}
        {slideIndex === 8 && (
          <div className="w-full space-y-3 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#232621] font-bold text-xs">
                [Google Books API]
              </span>
              <span className="text-[#dc2626] font-bold text-lg">+</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#232621] font-bold text-xs">
                [Individueller Nutzer-Status]
              </span>
              <span className="text-[#dc2626] font-bold text-lg">=</span>
              <span className="px-3 py-1.5 rounded-xl bg-[#232621] text-white font-bold text-xs">
                [Konsistenter Firebase-Eintrag]
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] text-left text-xs font-mono space-y-1">
              <div className="text-[10px] text-[#787973]">Firestore Console Record:</div>
              <p><span className="text-[#dc2626]">email:</span> &quot;user@test.com&quot;</p>
              <p><span className="text-[#dc2626]">status:</span> &quot;reading&quot;</p>
              <p><span className="text-[#dc2626]">id:</span> &quot;SrNEAAAAQBAJ&quot;</p>
            </div>
          </div>
        )}

        {/* FOLIE 10: Formularvalidierung */}
        {slideIndex === 9 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] space-y-2">
              <span className="text-xs font-bold text-[#1c1d1a]">BookForm.js Mock</span>
              <div className="space-y-1 text-xs">
                <div className="p-1.5 border rounded flex justify-between">Titel <span className="text-[#dc2626] font-bold">***</span></div>
                <div className="p-1.5 border rounded flex justify-between">Autor <span className="text-[#dc2626] font-bold">***</span></div>
                <div className="p-1.5 border rounded flex justify-between">Kategorie <span className="text-[#dc2626] font-bold">***</span></div>
              </div>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#dc2626] font-bold"><X className="w-4 h-4" /> Pflichtfeld: Titel</div>
              <div className="flex items-center gap-2 text-[#16a34a] font-bold"><Check className="w-4 h-4" /> Pflichtfeld: Autor</div>
              <div className="flex items-center gap-2 text-[#16a34a] font-bold"><Check className="w-4 h-4" /> Pflichtfeld: Kategorie</div>
              <div className="p-2 rounded bg-[#fee2e2] text-[#b91c1c] text-[11px] font-bold">
                ✋ Submit-Button blockiert bis alle Grenzen passiert sind!
              </div>
            </div>
          </div>
        )}

        {/* FOLIE 11: Kernfeatures & UI */}
        {slideIndex === 10 && (
          <div className="w-full space-y-3">
            <div className="flex flex-wrap gap-1.5 justify-center">
              {["Thriller", "Science", "Sports", "Romance", "History"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-white border border-[#dcd4c3] text-[11px] font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              <div className="p-2.5 rounded-xl bg-[#fef9c3] text-[#854d0e] border border-[#fef08a]">
                🟡 Wishlist
              </div>
              <div className="p-2.5 rounded-xl bg-[#dbeafe] text-[#1e40af] border border-[#bfdbfe]">
                🔵 Reading
              </div>
              <div className="p-2.5 rounded-xl bg-[#dcfce7] text-[#166534] border border-[#bbf7d0]">
                🟢 Finished
              </div>
            </div>
          </div>
        )}

        {/* FOLIE 12: Problemlösung */}
        {slideIndex === 11 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] space-y-1">
              <span className="text-xs font-bold text-[#dc2626]">Cover-Filter (Frontend)</span>
              <p className="text-[11px] text-[#555850]">
                API liefert unvollständige Daten ➔ <code className="bg-[#f4f1ea] px-1 rounded">filter(...)</code> garantiert eine visuell saubere Bibliothek.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#dcd4c3] space-y-1">
              <span className="text-xs font-bold text-[#dc2626]">Deployment-Bug (DevOps)</span>
              <p className="text-[11px] text-[#555850]">
                Lokal OK, Prod crashed (<code className="bg-[#fee2e2] text-[#dc2626] px-1 rounded">auth/invalid-api-key</code>) ➔ Keys in Vercel hinterlegt.
              </p>
            </div>
          </div>
        )}

        {/* FOLIE 13: CI/CD Pipeline */}
        {slideIndex === 12 && (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white border border-[#232621] space-y-1 w-full sm:w-auto">
              <div className="font-bold text-xs">GitHub Repository</div>
              <p className="text-[11px] font-mono text-[#787973]">git push origin main</p>
            </div>
            <span className="text-[#dc2626] font-bold text-xl">➔</span>
            <div className="p-3 rounded-xl bg-[#1c1d1a] text-white space-y-1 w-full sm:w-auto">
              <div className="font-bold text-xs text-[#16a34a]">Vercel Deployment</div>
              <p className="text-[11px] font-mono text-[#e4ebe4]">● Status: Ready & Live</p>
            </div>
          </div>
        )}

        {/* FOLIE 14: Das digitale Archiv */}
        {slideIndex === 13 && (
          <div className="w-full text-center space-y-3">
            <div className="text-4xl">📖✨</div>
            <p className="text-xs sm:text-sm text-[#444742] leading-relaxed max-w-md mx-auto font-medium">
              MyBookSpace beweist, wie aus einer alltäglichen Zettelwirtschaft durch strukturierte Architektur, sicheres State-Management und moderne Cloud-Technologien ein skalierbares Produkt entsteht.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#232621] text-white text-xs font-bold">
              <QrCode className="w-4 h-4 text-[#e59866]" />
              Scannen & Live auf Vercel testen
            </div>
          </div>
        )}
      </div>

      {/* Notebook Footer Banner */}
      <div className="relative z-10 pt-2 border-t border-[#e2dcd0] flex items-center justify-between text-[11px] font-mono text-[#787973]">
        <span>NotebookLM Presentation</span>
        <span>Nicole Grabarkiewicz</span>
      </div>
    </div>
  );
}

export default function MyBookSpaceDetailPage() {
  const project = projectsData.find((p) => p.id === "mybookspace")!;
  const [activeSlide, setActiveSlide] = useState(0);

  const dossierSlides = [
    {
      id: "dossier-1",
      number: "Folie 01",
      title: "Inbetriebnahme",
      subtitle: "Das digitale Lesearchiv",
      headline: "MyBookSpace nimmt das digitale Lesearchiv in Betrieb.",
      description:
        "Entdecke, speichere und verwalte deine Lieblingsbücher. Scannen Sie den Code, um die App live auf Ihrem Gerät zu testen, während wir die Architektur dahinter erkunden.",
      image: "/images/mybookspace/dossier-slide1.png",
      badge: "Live-App & Intro",
      icon: BookOpen,
      pill: "4 Wochen Entwicklungszeit | React | Firebase | Tailwind CSS",
      details: [
        "Offizielles Projekt-Dossier & Fallstudie von Nicole Grabarkiewicz",
        "Zentrale Single-Page-Application für Bücherenthusiasten",
        "Live-Test via QR-Code & Vercel Continuous Deployment",
      ],
    },
    {
      id: "dossier-2",
      number: "Folie 02",
      title: "Transformation",
      subtitle: "Von Zettelwirtschaft zum Raum",
      headline: "Die Transformation von der Zettelwirtschaft zum zentralen Raum.",
      description:
        "Viele Leser verlieren den Überblick über gelesene und geplante Bücher. Die Lösung erfordert ein System, das Ordnung schafft, ohne den Nutzer mit Komplexität zu belasten.",
      image: "/images/mybookspace/dossier-slide2.png",
      badge: "Problem & Lösung",
      icon: AlertTriangle,
      details: [
        "Problem: Zettelwirtschaft & Kontrollverlust bei Lese-Listen",
        "Lösung: Ein zentraler digitaler Raum für Buchliebhaber",
        "Keine Zettelwirtschaft mehr – alles an einem einzigen Ort",
      ],
    },
    {
      id: "dossier-3",
      number: "Folie 03",
      title: "4-Wochen-Sprint",
      subtitle: "Vom Konzept zum Code",
      headline: "Der 4-Wochen-Sprint strukturiert den Weg vom Konzept zum Code.",
      description:
        "Vom ersten Entwurf bis zum finalen Live-Gang: Ein strukturierter Fahrplan über 4 Wochen sichert die systematische Umsetzung aller Kernfunktionalitäten.",
      image: "/images/mybookspace/dossier-slide3.png",
      badge: "Roadmap & Sprint",
      icon: Calendar,
      details: [
        "Woche 1: Konzeption. Logik & Struktur der 8 Pages",
        "Woche 2: Fundament. React & Master-Detail UI",
        "Woche 3: Integration. Google Books API & Firebase",
        "Woche 4: Publikation. Testing & Vercel Deployment",
      ],
    },
    {
      id: "dossier-4",
      number: "Folie 04",
      title: "Modulares Setup",
      subtitle: "Frontend-Agilität & Backend-Stabilität",
      headline: "Ein modulares Setup balanciert Frontend-Agilität mit Backend-Stabilität.",
      description:
        "Schnelle Iterationen im Frontend, während Firebase das Backend-Lifting übernimmt. Ausgewogene Systemarchitektur von Client bis Server.",
      image: "/images/mybookspace/dossier-slide4.png",
      badge: "System Blueprint",
      icon: Layers,
      details: [
        "React Frontend: Entkoppeltes UI-Layer mit Tailwind CSS",
        "Google Books API: Externe REST API für Buch-Metadaten",
        "Firebase: Secure Auth & Cloud Firestore DB",
        "Vercel: Automatisierte Hosting & CI/CD Pipeline",
      ],
    },
    {
      id: "dossier-5",
      number: "Folie 05",
      title: "Dynamisches Routing",
      subtitle: "Master-Detail-Ansicht",
      headline: "Dynamisches Routing ermöglicht die nahtlose Master-Detail-Ansicht.",
      description:
        "Der Aufbau komplexer Pfade jenseits statischer Seiten. Fokus auf die dynamische Injektion von Buch-IDs zur Generierung spezifischer Detailansichten in Echtzeit.",
      image: "/images/mybookspace/dossier-slide5.png",
      badge: "Routing & Pfade",
      icon: Code2,
      code: `// Dynamic Routing via path="/book/:id"
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/book/:id" element={<BookDetail />} />
  </Routes>
</BrowserRouter>`,
      details: [
        "Mehr als 3 Pages (Home, Books, Dashboard, Wishlist, Reading, Finished)",
        "Master-Detail-Ansicht via path='/book/:id'",
        "Dynamische Injektion von Buch-IDs in Echtzeit",
      ],
    },
    {
      id: "dossier-6",
      number: "Folie 06",
      title: "Die Leitfrage",
      subtitle: "Personalisiertes Archiv",
      headline: "Die Leitfrage: Was brauche ich wirklich?",
      description:
        "Ein privates, personalisiertes Archiv. Der Login ist der Schlüssel zur individuellen Wishlist, Reading- und Finished-Liste.",
      image: "/images/mybookspace/dossier-slide6.png",
      badge: "Archiv & Auth",
      icon: Lock,
      details: [
        "Zentrale Frage nach den Kernbedürfnissen der Leser",
        "Firebase Auth als Schlüssel zum persönlichen Archiv",
        "Individuelle Verwaltung von Wishlist, Reading & Finished",
      ],
    },
    {
      id: "dossier-7",
      number: "Folie 07",
      title: "Zustandssync",
      subtitle: "Globale Schaltzentrale",
      headline: "Die Schaltzentrale vermeidet Prop-Drilling durch globale Zustandssynchronisation.",
      description:
        "Der BooksProvider (useContext) agiert als zentrale Schnittstelle und versorgt Navbar, BookGrid, StatusPage, BookForm und BookCard in Echtzeit.",
      image: "/images/mybookspace/dossier-slide7.png",
      badge: "State Management",
      icon: GitMerge,
      details: [
        "useState & useEffect: Asynchrones Laden & lokales State Management",
        "useContext: Vermeidung von Prop-Drilling in tiefen UI-Bäumen",
        "Globales Bereitstellen der Buchlisten in Echtzeit",
      ],
    },
    {
      id: "dossier-8",
      number: "Folie 08",
      title: "Custom Hooks",
      subtitle: "Kapselung der Datenbank-Logik",
      headline: "Maßgeschneiderte Hooks kapseln die gesamte Datenbank-Logik im Hintergrund.",
      description:
        "Die UI fragt nur noch nach Daten. Die Datenbank-Logik bleibt verborgen und wird sauber in separaten Custom Hooks ausgeführt.",
      image: "/images/mybookspace/dossier-slide8.png",
      badge: "Hooks & Database",
      icon: Sparkles,
      code: `// Der Motor im Hintergrund:
useEffect(() => {
  fetchBooks();
}, []); // App-Start (Mount): Lädt die gesamte Bibliothek

useEffect(() => {
  loadBookDetails(id);
}, [id]); // Reagiert auf ID-Wechsel blitzschnell`,
      details: [
        "App-Start (Mount): Lädt die gesamte Bibliothek automatisch",
        "Reaktivität: Reagiert auf ID-Wechsel blitzschnell",
        "Saubere Entkopplung: UI bleibt frei von Datenbank-Code",
      ],
    },
    {
      id: "dossier-9",
      number: "Folie 09",
      title: "Firestore Merge",
      subtitle: "Schnittstellen-Synchronisation",
      headline: "Der Firestore Merge synchronisiert externe Schnittstellen mit Nutzer-Aktionen.",
      description:
        "Listen bleiben getrennt, sicher und geräteübergreifend synchronisiert: [Google Books API Metadaten] + [Individueller Nutzer-Status] = [Konsistenter Firebase-Eintrag].",
      image: "/images/mybookspace/dossier-slide9.png",
      badge: "API & DB Merge",
      icon: Database,
      details: [
        "Metadaten der Google Books API mit Cloud Firestore abgleichen",
        "Individueller Nutzer-Status (reading, wishlist, finished) pro Buch",
        "Konsistente Datenhaltung über alle Endgeräte hinweg",
      ],
    },
    {
      id: "dossier-10",
      number: "Folie 10",
      title: "Formularvalidierung",
      subtitle: "Türsteher für die Cloud",
      headline: "Strikte Formularvalidierung agiert als Türsteher für die Cloud.",
      description:
        "Der Submit-Button bleibt wirkungslos, bis alle Grenzen passiert sind. Keine leeren oder fehlerhaften Einträge in der Cloud!",
      image: "/images/mybookspace/dossier-slide10.png",
      badge: "Form Validation",
      icon: ShieldCheck,
      details: [
        "❌ Pflichtfeld: Titel",
        "✓ Pflichtfeld: Autor",
        "✓ Pflichtfeld: Kategorie",
        "✏️ Optional: Beschreibung",
        "Validierung verhindert ungültiges Firestore-Writing",
      ],
    },
    {
      id: "dossier-11",
      number: "Folie 11",
      title: "Kernfeatures & UI",
      subtitle: "Intuitive UI & Status-Erkennung",
      headline: "Kernfeatures übersetzen komplexe Datenströme in eine intuitive UI.",
      description:
        "Die UI ermöglicht sofortige Filterung nach Kategorie-Chips und visuelle Status-Erkennung ohne störende Seiten-Reloads.",
      image: "/images/mybookspace/dossier-slide11.png",
      badge: "UI & UX Design",
      icon: Library,
      details: [
        "Kategorie-Chips für sofortiges Filtern (Thriller, Science, Sports)",
        "Visuelles Status-Tracking: Wishlist (Gelb), Reading (Blau), Finished (Grün)",
        "Flüssiges Lese- und Reorganisations-Erlebnis",
      ],
    },
    {
      id: "dossier-12",
      number: "Folie 12",
      title: "Problemlösung",
      subtitle: "Analytische Problemlösung",
      headline: "Analytische Problemlösung bei API-Lücken und Produktions-Risiken.",
      description:
        "Bewältigung von API-Schwächen und DevOps-Hürden: Cover-Filter für unvollständige REST-Daten & Behebung des Vercel Deployment-Bugs.",
      image: "/images/mybookspace/dossier-slide12.png",
      badge: "Troubleshooting",
      icon: AlertTriangle,
      details: [
        "Der Cover-Filter: Google Books API liefert oft fehlende Cover -> Filter garantiert saubere UI",
        "Der Deployment-Bug: Lokal lief alles, Produktion crashte -> Key-Sicherheit in Vercel hinterlegt",
      ],
    },
    {
      id: "dossier-13",
      number: "Folie 13",
      title: "CI/CD Pipeline",
      subtitle: "Automatisches Deployment",
      headline: "Nahtlose CI/CD-Pipelines bringen jeden Commit in Sekunden online.",
      description:
        "Publikation: Ready & Live. Nahtloses Continuous Deployment über den GitHub-Connector schlägt bei jedem Git-Push in Sekunden durch.",
      image: "/images/mybookspace/dossier-slide13.png",
      badge: "Vercel & GitHub",
      icon: Globe,
      details: [
        "Live-Domain: my-book-space-q7tx4cff-nicole3299-projects.vercel.app",
        "Automatische Vercel Continuous Deployment Pipeline",
        "Höchste Verfügbarkeit & beschleunigte Release-Zyklen",
      ],
    },
    {
      id: "dossier-14",
      number: "Folie 14",
      title: "Das digitale Archiv",
      subtitle: "Fazit & Zusammenfassung",
      headline: "Das digitale Archiv ist geöffnet.",
      description:
        "MyBookSpace beweist, wie aus einer alltäglichen Zettelwirtschaft durch strukturierte Architektur, sicheres State-Management und moderne Cloud-Technologien ein skalierbares Produkt entsteht.",
      image: "/images/mybookspace/dossier-slide14.png",
      badge: "Fazit & Live-QR",
      icon: CheckCircle2,
      details: [
        "Vollständiger Erfolg von Konzeption bis Release",
        "Strukturierte Architektur & sicheres State Management",
        "Scannen Sie den QR-Code, um die App selbst zu erleben",
      ],
    },
  ];

  const currentSlide = dossierSlides[activeSlide];

  const keyFeatures = [
    {
      icon: Search,
      title: "Live-Suche über Google Books API",
      description:
        "Echtzeit-Durchsuchung von über 40 Millionen Buchtiteln mit sofortigen Ergebnissen für Titel, Autoren, Erscheinungsjahr und Inhaltsangaben.",
    },
    {
      icon: Library,
      title: "Persönliche Bibliotheks-Verwaltung",
      description:
        "Strukturierte Einteilung der eigenen Bücher in veränderbare Kategorien wie 'Gelesen', 'Am Lesen', 'Wunschliste' und 'Favoriten'.",
    },
    {
      icon: Database,
      title: "Firebase Cloud & Synchronisation",
      description:
        "Sichere Authentifizierung und dauerhafte Speicherung der persönlichen Bibliothek im Cloud Firestore mit synchronem State.",
    },
    {
      icon: BookOpen,
      title: "Detailansichten & Metadaten",
      description:
        "Ausführliche Detailansichten für jedes Werk inklusive hochauflösendem Buchcover, Sterne-Bewertungen, Genretags und Inhaltsbeschreibung.",
    },
    {
      icon: ShieldCheck,
      title: "Intuitive Single Page Application",
      description:
        "Flüssige Benutzeroberfläche entwickelt mit React 19, Vite und Tailwind CSS – blitzschnelle Ladezeiten ohne störende Seiten-Reloads.",
    },
    {
      icon: Sparkles,
      title: "Maßgeschneidertes UI/UX Design",
      description:
        "Warme, ästhetische Farbkomposition mit sanften Abrundungen, klaren Kontrasten und fokussiertem Leseerlebnis.",
    },
  ];

  return (
    <article className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-16 text-[#1F241F]">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="space-y-4">
        <Link
          href="/#projekte"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B706B] hover:text-[#1F241F] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Projektübersicht
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#232621] text-white shadow-sm flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#e59866]" />
            Full-Stack Web App · Projekt-Dossier (14 Folien)
          </span>
          <span className="text-xs text-[#6B706B] font-mono">{project.period}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-sm space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#1c1d1a] tracking-tight mb-2 break-words">
            📖 MyBookSpace – Das Projekt-Dossier
          </h1>
          <p className="text-lg sm:text-xl text-[#3d5a3d] font-medium leading-snug">
            Entdecken, Organisieren & Bewerten von Büchern mit React & der Google Books API
          </p>
        </div>

        <p className="text-[#555850] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          {project.longDescription}
        </p>

        {/* Action Buttons */}
        {project.liveUrl && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#232621] hover:bg-[#363933] transition-all shadow-sm max-w-full truncate"
            >
              <span className="truncate">Live-App öffnen (my-book-space.vercel.app)</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#e6e2da]">
          <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider mb-3">
            Eingesetzte Technologien & Werkzeuge:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#f4f1ea] text-[#232621] border border-[#e2dcd0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROJEKT-DOSSIER SHOWCASE (14 FOLIEN DECK - VOLL RESPONSIV) --- */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-[#1c1d1a] leading-tight">
                📐 Offizielles Projekt-Dossier (14 Kapitel)
              </h2>
              <p className="text-xs text-[#787973]">
                Interaktives Presentation Deck von Nicole Grabarkiewicz · 100% Responsiv
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : dossierSlides.length - 1))}
              className="p-2 rounded-xl border border-[#e6e2da] bg-[#f8f6f2] hover:bg-[#232621] hover:text-white transition-all text-[#232621]"
              aria-label="Vorherige Folie"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#787973] px-2 font-bold whitespace-nowrap">
              {activeSlide + 1} / {dossierSlides.length}
            </span>
            <button
              onClick={() => setActiveSlide((prev) => (prev < dossierSlides.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-xl border border-[#e6e2da] bg-[#f8f6f2] hover:bg-[#232621] hover:text-white transition-all text-[#232621]"
              aria-label="Nächste Folie"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Selection Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 pt-1 border-b border-[#f0ece1] scrollbar-thin">
          {dossierSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                activeSlide === idx
                  ? "bg-[#232621] text-white font-bold shadow-sm"
                  : "bg-[#f8f6f2] text-[#6B706B] hover:text-[#1F241F] hover:bg-[#eae6dc]"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
              <span className="whitespace-nowrap">{slide.title}</span>
            </button>
          ))}
        </div>

        {/* Active Slide Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start bg-[#fcfbfa] rounded-2xl p-4 sm:p-6 md:p-8 border border-[#eae6dc] shadow-inner overflow-hidden">
          
          {/* Slide Dynamic Responsive Visual Component */}
          <div className="lg:col-span-7 space-y-3 w-full min-w-0">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-1">
              <span className="flex items-center gap-1 font-bold text-[#1c1d1a] truncate">
                🖼️ {currentSlide.number}: {currentSlide.title}
              </span>
              <span className="text-[#3d5a3d] shrink-0 font-medium text-[11px] bg-[#e8f2e8] px-2 py-0.5 rounded-full">
                HD Responsiv
              </span>
            </div>
            
            {/* Dynamic Interactive Responsive Slide Visual Canvas */}
            <DossierSlideVisual slideIndex={activeSlide} slideData={currentSlide} />
          </div>

          {/* Slide Detailed Breakdown & Technical Explanation */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 w-full min-w-0">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#fdf2e9] text-[#e59866] border border-[#faded0] inline-block">
                {currentSlide.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#1c1d1a] leading-snug break-words">
                {currentSlide.subtitle}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#3d5a3d] leading-snug break-words">
                {currentSlide.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#555850] leading-relaxed break-words">
              {currentSlide.description}
            </p>

            {/* Code Snippet if applicable */}
            {currentSlide.code && (
              <div className="rounded-xl bg-[#1c1d1a] p-3.5 text-xs font-mono text-[#e4ebe4] overflow-x-auto border border-[#363933] space-y-1">
                <div className="text-[10px] text-[#888c85] uppercase tracking-wider mb-1 font-bold">
                  Code-Skizze:
                </div>
                <pre className="whitespace-pre-wrap break-words">{currentSlide.code}</pre>
              </div>
            )}

            {/* Key Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-[#eae6dc]">
              <h4 className="text-xs font-bold text-[#1c1d1a] uppercase tracking-wider">
                Erkenntnisse & Merkmale:
              </h4>
              <ul className="space-y-1.5">
                {currentSlide.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#555850]">
                    <span className="w-4 h-4 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="break-words">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Slide Cards Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-4 border-t border-[#e6e2da]">
          {dossierSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveSlide(i)}
              className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all space-y-0.5 min-w-0 ${
                activeSlide === i
                  ? "bg-[#fdf2e9] border-[#e59866] ring-1 ring-[#e59866]"
                  : "bg-[#ffffff] border-[#e6e2da] hover:border-[#232621]"
              }`}
            >
              <div className="text-[9px] font-mono font-bold text-[#787973]">
                Folie {i < 9 ? `0${i + 1}` : i + 1}
              </div>
              <div className="text-xs font-bold text-[#1c1d1a] truncate">
                {s.title}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Ultra-Sharp Project UI Showcase */}
      <section className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#e6e2da] pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#fdf2e9] text-[#e59866] border border-[#faded0]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                🖼️ Original Benutzeroberfläche & Dashboard
              </h2>
              <p className="text-xs text-[#787973]">
                Originalgetreues Screenshot der MyBookSpace Anwendung
              </p>
            </div>
          </div>

          {project.imageUrl && (
            <a
              href={project.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#232621] text-white text-xs font-semibold hover:bg-[#363933] transition-all flex items-center gap-1.5 shadow-sm"
            >
              Vorschau in voller Auflösung öffnen
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Display Container for Sharp Screenshot */}
        <div className="bg-[#f8f6f2] rounded-2xl p-4 sm:p-8 border border-[#e8e4db] flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-4xl space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#787973] px-2">
              <span>📖 MyBookSpace Bibliotheks-Dashboard</span>
              <span>Original Screenshot</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d2c4] shadow-md bg-[#ffffff] p-3 sm:p-6 flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <img
                src="/images/mybookspace-preview.png"
                alt="MyBookSpace Original Benutzeroberfläche Vorschau"
                className="max-w-full max-h-[650px] w-auto h-auto object-contain object-center mx-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
            <Library className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
              Kernfunktionen & Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#787973]">
              Was MyBookSpace besonders funktional und benutzerfreundlich macht
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#fbf9f5] rounded-2xl p-6 border border-[#e2dcd0] space-y-3 hover:border-[#232621] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fdf2e9] text-[#e59866] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#1c1d1a]">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#555850] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Problem & Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#ffffff] border border-[#e6e2da] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#fdf0ed] border border-[#f5d7cf] text-[#a8442a] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Problem / Ausgangslage</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Bedürfnis der Nutzer</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="rounded-2xl bg-[#ffffff] border border-[#d2dcd2] p-6 md:p-8 space-y-4 shadow-sm">
          <div className="p-3 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621] w-fit">
            <span className="font-bold text-xs uppercase tracking-wider">Lösung & Ansatz</span>
          </div>
          <h3 className="text-xl font-serif-title font-bold text-[#1c1d1a]">Konzept & Umsetzung</h3>
          <p className="text-[#555850] text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Technical Architecture */}
      {project.architecture && (
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e6e2da] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e4ebe4] text-[#3d5a3d] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-3xl font-bold text-[#1c1d1a]">
                Technische Architektur & Systemaufbau
              </h2>
              <p className="text-xs sm:text-sm text-[#787973]">
                Das Zusammenspiel von React 19 Frontend, Google Books API und Cloud Persistenz
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#f8f6f2] border border-[#e8e4db] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#232621] text-white flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-sm text-[#1c1d1a]">{item.step}</h3>
                </div>
                <p className="text-xs text-[#555850] leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contributions Box */}
      <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 md:p-10 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-[#232621]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
              Mein persönlicher Beitrag
            </h2>
            <p className="text-xs text-[#787973]">
              Eigenverantwortliche Entwicklung & Schwerpunkte im Projekt
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {project.contributions.map((contribution, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#e4ebe4] text-[#232621] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-xs text-[#232621] leading-relaxed font-medium">{contribution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e6e2da]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all flex items-center gap-2 shadow-sm"
          >
            MyBookSpace Live-Demo öffnen
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <Link
          href="/#projekte"
          className="px-6 py-3 rounded-xl bg-[#ffffff] border border-[#e6e2da] text-[#232621] font-bold text-sm hover:bg-[#f4f1ea] transition-colors flex items-center gap-2"
        >
          Zurück zu allen Projekten
        </Link>
      </div>
    </article>
  );
}
