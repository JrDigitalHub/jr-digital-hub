export default function Technology() {
  return (
    <section id="technology" className="w-full py-24 bg-[#050505] flex flex-col items-center border-t border-gray-900/50">
      <div className="max-w-7xl w-full px-6 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-[var(--brand)] uppercase">
            Systems Architecture
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Deep integration across software, robotics, and hardware.
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mt-2 leading-relaxed">
            A visual blueprint of the framework mapping the neural pathways of the ZENO operating system, the precision gripper interface of the SRR-CI, and advanced device analysis protocols.
          </p>
        </div>

        {/* Cinematic Image Banner */}
        <div className="w-full relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/20 shadow-2xl group">
          <img 
            src="/assets/jdh-tech-banner.png" 
            alt="JR Digital Hub Technology Architecture" 
            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* Subtle gradient overlay to blend the edges into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50 pointer-events-none"></div>
        </div>
        
      </div>
    </section>
  );
}