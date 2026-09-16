"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Sparkles, FolderGit2, User, Clock, ShieldCheck, Mail } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Startseite", icon: Sparkles },
    { href: "/projects", label: "Projekte", icon: FolderGit2 },
    { href: "/skills", label: "Skills & Security", icon: ShieldCheck },
    { href: "/timeline", label: "12-Monate Weg", icon: Clock },
    { href: "/about", label: "Über mich", icon: User },
    { href: "/contact", label: "Kontakt", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-100 tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
              Nicole Grabarkiewicz
            </span>
            <span className="text-xs text-emerald-400/90 font-medium">
              Web Developer Specialist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/projects/slowline"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Slowline Case Study
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "text-slate-300 hover:bg-slate-900 hover:text-slate-100"
                }`}
              >
                <Icon className="w-5 h-5 text-emerald-400" />
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-800/80">
            <Link
              href="/projects/slowline"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              🚀 Slowline Case Study ansehen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
