import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Kontakt | Nicole Grabarkiewicz",
  description: "Treten Sie mit Nicole Grabarkiewicz (Web Developer Specialist) in Kontakt – per E-Mail, LinkedIn oder GitHub.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Mail className="w-4 h-4" />
          Kontakt & Netzwerke
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Lassen Sie uns vernetzen
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Ich freue mich über Anfragen für Entwicklerpositionen, Projektkooperationen oder fachlichen Austausch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 space-y-6 flex flex-col justify-between shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Kontaktdaten</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">E-Mail</h4>
                  <p className="text-sm font-medium text-slate-200">nicole.grabarkiewicz@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</h4>
                  <a
                    href="https://github.com/nicolegrabarkiewicz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400 hover:underline"
                  >
                    github.com/nicolegrabarkiewicz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</h4>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400 hover:underline"
                  >
                    linkedin.com/in/nicole-grabarkiewicz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
            <span className="font-bold block">Status: Verfügbar für neue Projekte & Anstellungen</span>
            <span>Standort: Deutschland / Remote</span>
          </div>
        </div>

        {/* Contact Form Mockup */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 space-y-6 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-100">Nachricht senden</h2>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Ihr Name
              </label>
              <input
                type="text"
                placeholder="Max Mustermann"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Ihre E-Mail-Adresse
              </label>
              <input
                type="email"
                placeholder="max@beispiel.de"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Nachricht
              </label>
              <textarea
                rows={4}
                placeholder="Hallo Nicole, wir suchen aktuell eine Web Developer Specialistin..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
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
