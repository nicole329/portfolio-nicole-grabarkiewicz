"use client";

import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4ebe4] border border-[#d2dcd2] text-[#232621] text-xs font-semibold">
          <Mail className="w-4 h-4" />
          Kontakt & Netzwerke
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#1c1d1a]">
          Lassen Sie uns vernetzen
        </h1>
        <p className="text-base text-[#555850] leading-relaxed">
          Ich freue mich über Anfragen für Entwicklerpositionen, Projektkooperationen oder fachlichen Austausch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 space-y-6 flex flex-col justify-between shadow-sm">
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a] mb-6">Kontaktdaten</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db]">
                <div className="p-3 rounded-lg bg-[#e4ebe4] text-[#232621]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider">E-Mail</h4>
                  <p className="text-sm font-medium text-[#1c1d1a]">nicole.grabarkiewicz@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db]">
                <div className="p-3 rounded-lg bg-[#e4ebe4] text-[#232621]">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider">GitHub</h4>
                  <a
                    href="https://github.com/nicolegrabarkiewicz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1c1d1a] hover:underline"
                  >
                    github.com/nicolegrabarkiewicz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db]">
                <div className="p-3 rounded-lg bg-[#e4ebe4] text-[#232621]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider">LinkedIn</h4>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1c1d1a] hover:underline"
                  >
                    linkedin.com/in/nicole-grabarkiewicz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#e4ebe4] border border-[#cbd8cb] text-xs text-[#232621] space-y-1">
            <span className="font-bold block">Status: Verfügbar für neue Projekte & Anstellungen</span>
            <span>Standort: Deutschland / Remote</span>
          </div>
        </div>

        {/* Contact Form Mockup */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 space-y-6 shadow-sm">
          <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">Nachricht senden</h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-[#555850] uppercase tracking-wider mb-2">
                Ihr Name
              </label>
              <input
                type="text"
                placeholder="Max Mustermann"
                className="w-full px-4 py-3 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] text-[#1c1d1a] placeholder-[#999b94] focus:outline-none focus:border-[#232621] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#555850] uppercase tracking-wider mb-2">
                Ihre E-Mail-Adresse
              </label>
              <input
                type="email"
                placeholder="max@beispiel.de"
                className="w-full px-4 py-3 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] text-[#1c1d1a] placeholder-[#999b94] focus:outline-none focus:border-[#232621] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#555850] uppercase tracking-wider mb-2">
                Nachricht
              </label>
              <textarea
                rows={4}
                placeholder="Hallo Nicole, wir suchen aktuell eine Web Developer Specialistin..."
                className="w-full px-4 py-3 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] text-[#1c1d1a] placeholder-[#999b94] focus:outline-none focus:border-[#232621] transition-colors text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#232621] text-white font-bold text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Nachricht Absenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
