import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#fbf9f5] border-t border-[#e6e2da] py-6 text-xs text-[#666860]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2">
          <span className="font-serif-title font-bold text-[#1c1d1a]">N G</span>
          <span>Nicole Grabarkiewicz</span>
        </div>

        {/* Center Tagline */}
        <div className="font-medium text-[#4a4d46]">
          Web Developer Specialist
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-6">
          <Link href="/imprint" className="hover:text-[#1c1d1a] transition-colors">
            Impressum
          </Link>
          <Link href="/privacy" className="hover:text-[#1c1d1a] transition-colors">
            Datenschutz
          </Link>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#eeeae0] hover:bg-[#1c1d1a] hover:text-white transition-colors flex items-center justify-center text-[#1c1d1a]"
            aria-label="Nach oben"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
