export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden scroll-mt-24">
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[var(--brand)] opacity-[0.05] blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
        
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
          <button className="px-8 py-3 rounded-md bg-[#D4AF37] text-black font-semibold tracking-wide transition-all hover:bg-[#c89f2f] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]">
            Initialize ZENO OS
          </button>
          
          <button className="px-8 py-3 rounded-md border border-gray-700 bg-transparent text-gray-300 font-semibold tracking-wide transition-all hover:border-gray-500 hover:text-white">
            View Ecosystem
          </button>
        </div>
        
      </div>
    </section>
  );
}