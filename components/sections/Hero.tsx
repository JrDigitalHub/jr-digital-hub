"use client";

import Link from "next/link"; // Added Link import
import ZenoInitButton from "@/components/ui/ZenoInitButton";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden scroll-mt-24">
      
      {/* Background radial gradient for depth - ADDED pointer-events-none */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[var(--brand)] opacity-[0.05] blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8" style={{ pointerEvents: "auto" }}>
        
        {/* Sub-badge */}
        <div className="px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-xs font-medium tracking-widest text-gray-400 uppercase">
          JR Digital Hub LTD
        </div>

        {/* Massive High-Contrast Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          Autonomous Infrastructure <br className="hidden md:block" />
          for the Next Economy.
        </h1>

        {/* Enterprise Sub-text */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Architecting scalable neural systems, pragmatic automation workflows, and robotics vision interfaces for global commerce.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          {/* Your new fully interactive terminal button */}
          <ZenoInitButton />
          
          {/* Converted to a Link so it actually routes/scrolls to the ecosystem section */}
          <Link 
            href="/#ecosystem"
            className="px-8 py-4 rounded-md border border-gray-700 bg-transparent text-gray-300 font-semibold tracking-wide transition-all hover:border-gray-500 hover:text-white"
          >
            View Ecosystem
          </Link>
        </div>
        
      </div>
    </section>
  );
}