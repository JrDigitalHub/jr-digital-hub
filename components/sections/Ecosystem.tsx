import { Network, Cpu, Globe, Zap } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="w-full py-24 px-6 bg-[#0A0A0A] flex flex-col items-center scroll-mt-24">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
            Core Infrastructure & R&D
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Bridging digital intelligence with physical and decentralized ecosystems.
          </h3>
        </div>

        {/* 4-Card Grid Layout (2x2) preserving ALL divisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: ZENO OS */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-[var(--brand)] transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center border border-[var(--brand)]/20 mb-4 group-hover:shadow-[0_0_15px_var(--brand)] transition-all">
                <Network className="h-6 w-6 text-[var(--brand)]" />
              </div>
              <h4 className="text-xl font-bold text-white">ZENO OS</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                A universal autonomous brain for enterprise execution. Designed to replace fragmented software stacks, ZENO handles complete business automation, intelligent lead management, and complex data orchestration.
              </p>
            </div>
          </div>

          {/* Pillar 2: Applied Robotics */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-gray-400 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-600 mb-4 group-hover:shadow-[0_0_15px_#9ca3af] transition-all">
                <Cpu className="h-6 w-6 text-gray-300" />
              </div>
              <h4 className="text-xl font-bold text-white">Applied Robotics</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineering the precise integration of software vision systems with physical hardware. Featuring the SRR-CI precision interface and the autonomous Kinetix Differential Drive AGV.
              </p>
            </div>
          </div>

          {/* Pillar 3: Web3 & Civic Tech */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-indigo-500 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-900/20 flex items-center justify-center border border-indigo-900/30 mb-4 group-hover:shadow-[0_0_15px_#6366f1] transition-all">
                <Globe className="h-6 w-6 text-indigo-500" />
              </div>
              <h4 className="text-xl font-bold text-white">Web3 & Civic Tech</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Architecture of the Civic Budget Explain-o-Matic, leveraging decentralized agent frameworks to synthesize complex public spending data and enforce institutional transparency.
              </p>
            </div>
          </div>

          {/* Pillar 4: Conversion Engines (Restored) */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-green-500 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-900/20 flex items-center justify-center border border-green-900/30 mb-4 group-hover:shadow-[0_0_15px_#22c55e] transition-all">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-white">Conversion Engines</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                High-velocity automated lead generation workflows paired seamlessly with human-in-the-loop closing systems for maximum capture.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}