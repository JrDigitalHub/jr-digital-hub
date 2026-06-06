'use client';
import Link from "next/link";
import type React from "react";

export default function Footer() {
  return (
    <footer id="about" className="w-full bg-[#050505] border-t border-gray-900/50 pt-24 pb-8 px-6 flex flex-col items-center scroll-mt-24">
      <div className="max-w-7xl w-full flex flex-col gap-16">
        
        {/* Top Section: CTA / Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-16 border-b border-gray-900/50">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Ready to automate your operations?
            </h3>
            <p className="text-gray-400">
              Deploy ZENO OS or explore our applied hardware solutions.
            </p>
          </div>
          <button className="px-8 py-3 rounded-md bg-[#D4AF37] text-black font-semibold tracking-wide transition-all hover:bg-[#c89f2f] hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
            Book a Demo
          </button>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {/* Logo Implementation */}
              <div className="h-10 w-10 flex items-center justify-center overflow-hidden">
                <img src="/assets/jr-digital-hub-logo.png" alt="JR Digital Hub" className="h-full w-full object-contain" />
              </div>
              <span className="text-base font-bold tracking-widest text-white uppercase">
                JR Digital Hub LTD
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Bridging digital intelligence with physical and decentralized ecosystems. Engineers of the ZENO Neural Business Operating System and autonomous edge robotics.
            </p>
          </div>

          {/* Navigation Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Architecture</h4>
            <Link href="#ecosystem" className="text-sm text-gray-500 hover:text-white transition-colors">Ecosystem & R&D</Link>
            <Link href="#technology" className="text-sm text-gray-500 hover:text-white transition-colors">Technology Map</Link>
            <Link href="#partners" className="text-sm text-gray-500 hover:text-white transition-colors">Integrations</Link>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h4>
            <a href="mailto:jrdigitalhubltd@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">jrdigitalhubltd@gmail.com</a>
            <Link href="https://x.com/jrdigitalhubltd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors" aria-label="Visit JR Digital Hub on X">
              <span aria-hidden="true" className="inline-flex items-center justify-center h-5 w-5 text-sm font-extrabold leading-none">X</span>
            </Link>
            <span className="text-sm text-gray-500">Global Remote Operations</span>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600 border-t border-gray-900/50">
          <p>© 2026 JR Digital Hub LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}