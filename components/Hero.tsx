import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#787973] uppercase font-semibold">
              DESIGN. DEVELOP. CREATE.
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif-title font-normal text-[#1c1d1a] tracking-tight leading-[1.05]">
              Nicole <br />
              Grabarkiewicz
            </h1>

            <p className="text-xl sm:text-2xl font-sans font-medium text-[#4a4d46]">
              Web Developer Specialist
            </p>

            <p className="text-base sm:text-lg text-[#555850] max-w-lg leading-relaxed">
              Ich gestalte und <strong>entwickle</strong> digitale Produkte – von der Idee bis zur Umsetzung. Mit einem Blick für Nutzerbedürfnisse, einem klaren Design und sauberem Code.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#projekte"
                className="px-7 py-3.5 rounded-full bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all flex items-center gap-2 shadow-sm"
              >
                Meine Projekte ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#ueber-mich"
                className="px-7 py-3.5 rounded-full border border-[#232621] text-[#232621] text-sm font-medium hover:bg-[#232621]/5 transition-all"
              >
                Über mich
              </Link>
            </div>

            {/* Handwritten Note */}
            <div className="pt-4">
              <span className="font-handwriting text-2xl text-[#6b6e65] block transform -rotate-1">
                Ideen in digitale Erlebnisse verwandeln.
              </span>
            </div>
          </div>

          {/* Right Column: Aesthetic Laptop & Desk Mockup Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop Graphic Mockup Container */}
              <div className="relative rounded-2xl bg-[#efebe4] p-4 shadow-xl border border-[#e2dcd2] transform hover:scale-[1.01] transition-transform duration-500">
                
                {/* Laptop Screen Frame */}
                <div className="rounded-xl overflow-hidden bg-slate-900 border-4 border-slate-800 aspect-[16/10] shadow-inner relative">
                  {/* Browser Bar */}
                  <div className="h-6 bg-slate-800 px-3 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  
                  {/* Laptop Screen Content Mockup */}
                  <div className="p-6 bg-[#f7f5ef] h-full flex flex-col justify-center items-center text-center">
                    <span className="text-2xl font-serif-title text-[#232621] font-bold mb-2">
                      Good ideas grow here.
                    </span>
                    <div className="w-16 h-16 rounded-full bg-[#d8e0d8] flex items-center justify-center my-2">
                      🌱
                    </div>
                    <span className="text-[10px] font-mono text-[#666860]">
                      Slowline Web App · Journaling System
                    </span>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="h-3 bg-[#d5cfc4] rounded-b-xl max-w-xs mx-auto shadow-sm mt-1"></div>
              </div>

              {/* Decorative Mug & Plant Overlay Elements */}
              <div className="absolute -bottom-6 -right-4 bg-[#ffffff] border border-[#e6e2da] rounded-2xl p-4 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#eef2ee] flex items-center justify-center text-lg">
                  ☕
                </div>
                <div className="text-xs">
                  <p className="font-mono font-bold text-[#232621]">BETTER WEBSITES</p>
                  <p className="font-mono text-[#6b6e65]">BRIGHTER DAYS ♥</p>
                </div>
              </div>

              {/* Handwritten Note Top Right */}
              <div className="absolute -top-6 right-2 hidden sm:block">
                <span className="font-handwriting text-2xl text-[#232621] block transform rotate-3 bg-[#fffefb] px-3 py-1 rounded-lg border border-[#e8e4db] shadow-sm">
                  "Kreativität trifft auf Technologie" ♡
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
