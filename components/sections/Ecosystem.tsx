import { Network, Cpu, Zap } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="w-full py-24 px-6 bg-[#0A0A0A] flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold tracking-widest text-[var(--brand)] uppercase">
            Core Infrastructure
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
            A tripartite architecture powering autonomous commerce.
          </h3>
        </div>

        {/* 3-Column Grid Layout (Upgraded with Lucide Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Neural Systems */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-[var(--brand)] transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center border border-[var(--brand)]/20 mb-4 group-hover:shadow-[0_0_15px_var(--brand)] transition-all">
                <Network className="h-6 w-6 text-[var(--brand)]" />
              </div>
              <h4 className="text-xl font-bold text-white">Neural Systems</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Powered by the ZENO Neural Business Operating System. Intelligent SME automation, centralized routing, and adaptive software infrastructure.
              </p>
            </div>
          </div>

          {/* Pillar 2: Robotics Vision */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-gray-400 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-600 mb-4 group-hover:shadow-[0_0_15px_#9ca3af] transition-all">
                <Cpu className="h-6 w-6 text-gray-300" />
              </div>
              <h4 className="text-xl font-bold text-white">Robotics & Vision</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Physical hardware integrated with software vision. From the SRR-CI precision interface to the differential drive mechanics of the Kinetix AGV prototype.
              </p>
            </div>
          </div>

          {/* Pillar 3: Autonomous Pipelines */}
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