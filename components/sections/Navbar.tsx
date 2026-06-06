"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand & Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src="/assets/jr-digital-hub-logo.png"
              alt="JR Digital Hub Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg font-bold tracking-widest text-white uppercase">JR Digital Hub</span>
        </Link>

        {/* Desktop Routing Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#hero" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#ecosystem" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Ecosystem
          </Link>
          <Link href="#technology" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Technology
          </Link>
          <Link href="#partners" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Partners
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 text-gray-300 hover:text-white"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="#about" className="px-6 py-2.5 rounded-md bg-[#D4AF37] text-black text-sm font-semibold tracking-wide transition-all hover:bg-[#c89f2f] hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
            Book a Demo
          </Link>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A]/95 border-t border-gray-800/50">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="#hero" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#about" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="#ecosystem" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              Ecosystem
            </Link>
            <Link href="#technology" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              Technology
            </Link>
            <Link href="#partners" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              Partners
            </Link>
            <Link href="#about" onClick={() => setOpen(false)} className="px-4 py-2 mt-2 rounded-md bg-[#D4AF37] text-black text-sm font-semibold tracking-wide inline-block text-center">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}