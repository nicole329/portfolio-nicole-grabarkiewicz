"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projekte", label: "Projekte" },
    { href: "/#ueber-mich", label: "Über mich" },
    { href: "/#ihk-abschluss", label: "IHK-Abschluss" },
    { href: "/#mein-weg", label: "Mein Weg" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e6e2da]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Name (Text Only) */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl font-serif-title font-bold text-[#1c1d1a] tracking-tight group-hover:text-[#4a4d46] transition-colors">
            Nicole Grabarkiewicz
          </span>
          <span className="text-[11px] font-sans font-medium text-[#787973] uppercase tracking-wider">
            Web Developer Specialist
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a4d46]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#1c1d1a] hover:underline underline-offset-4 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#kontakt"
            className="px-6 py-2.5 rounded-full bg-[#232621] text-white text-sm font-medium hover:bg-[#363933] transition-all shadow-sm"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1c1d1a] hover:bg-[#f0ece1]"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f5] border-b border-[#e6e2da] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#1c1d1a] py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex justify-start">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block px-5 py-2 rounded-full bg-[#232621] text-white text-center font-medium text-xs shadow-sm hover:bg-[#363933] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
