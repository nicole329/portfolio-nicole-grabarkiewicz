"use client";

import { useState } from "react";
import { Mail, Send, Phone, CheckCircle2, RefreshCw } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate subtle form processing animation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

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
                  <a
                    href="mailto:n.grabarkiewicz@icloud.com"
                    className="text-sm font-medium text-[#1c1d1a] hover:underline"
                  >
                    n.grabarkiewicz@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f6f2] border border-[#e8e4db]">
                <div className="p-3 rounded-lg bg-[#e4ebe4] text-[#232621]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#787973] uppercase tracking-wider">Telefon / Handy</h4>
                  <a
                    href="tel:015209290360"
                    className="text-sm font-medium text-[#1c1d1a] hover:underline"
                  >
                    0152/09290360
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
                    href="https://www.linkedin.com/in/nicole-grabarkiewicz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1c1d1a] hover:underline"
                  >
                    www.linkedin.com/in/nicole-grabarkiewicz
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

        {/* Contact Form with Success Feedback */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#e6e2da] p-8 space-y-6 shadow-sm flex flex-col justify-between">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">Nachricht senden</h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-[#555850] uppercase tracking-wider mb-2">
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hallo Nicole, wir suchen aktuell eine Web Developer Specialistin..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f6f2] border border-[#e8e4db] text-[#1c1d1a] placeholder-[#999b94] focus:outline-none focus:border-[#232621] transition-colors text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#232621] text-white font-bold text-xs sm:text-sm hover:bg-[#363933] transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht Absenden
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="my-auto py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#e4ebe4] border-2 border-[#cbd8cb] text-[#3d5a3d] mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif-title font-bold text-[#1c1d1a]">
                  Vielen Dank für Ihre Nachricht!
                </h3>
                <p className="text-sm text-[#555850] max-w-sm mx-auto leading-relaxed">
                  Ihre Nachricht wurde erfolgreich übermittelt. Ich werde mich in Kürze bei Ihnen melden.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f1ea] text-[#232621] border border-[#e2dcd0] text-xs font-semibold hover:bg-[#e8e4db] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Weitere Nachricht senden
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
