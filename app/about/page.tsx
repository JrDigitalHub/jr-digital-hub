import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[var(--brand)] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-gray-900">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4 block">
            The Architecture of Automation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            We build autonomous infrastructure for the next industrial era.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            JR Digital Hub LTD designs, develops, and deploys full-stack neural business operating systems and custom physical robotics architectures to eliminate manual operational friction for modern enterprises.
          </p>
        </div>
      </section>

      {/* Core Pillars / Ecosystem */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-900">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Neural Architecture: ZENO OS
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            At the core of our technical ecosystem is ZENO, a Neural Business Operating System designed to autonomously handle high-volume workflows, ingest multi-modal data streams, and orchestrate back-office systems with zero manual intervention.
          </p>
          <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent w-32"></div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Precision Robotics & AGVs
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            Software is only half the battle. JR Digital Hub bridges digital intelligence with physical execution. From custom automated industrial transportation (JR-Cart tri-caster frameworks) to specialized smartphone repair robotic interfaces (SRR-CI), we build the physical hardware required to execute autonomous commands in real-world spaces.
          </p>
          <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent w-32"></div>
        </div>
      </section>

      {/* Operational Philosophy */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Our Philosophy</h2>
        <blockquote className="text-xl md:text-2xl italic text-gray-300 font-serif leading-relaxed mb-8">
          We do not build software to assist human workers. We engineer complete autonomous systems where physical hardware and neural layers run end-to-end loops to deliver deterministic outcomes at scale.
        </blockquote>
        <div className="flex justify-center gap-6 pt-4">
          <Link 
            href="/book" 
            className="px-8 py-3.5 rounded-md bg-[#D4AF37] text-black font-semibold tracking-wide transition-all hover:bg-opacity-90 hover:shadow-[0_0_20px_#D4AF37]"
          >
            Deploy Our Infrastructure
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}