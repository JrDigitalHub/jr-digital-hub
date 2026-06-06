import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-invert prose-sm text-gray-400">
          <p className="mb-6">Effective Date: June 2026</p>

          <h3 className="text-white">1. Acceptance</h3>
          <p className="mb-4">By accessing or using JR Digital Hub LTD services, you agree to be bound by these terms.</p>

          <h3 className="text-white">2. Services</h3>
          <p className="mb-4">Our services, including ZENO OS and custom robotics integration, are provided &quot;as is&quot; under the terms of our specific client agreements.</p>

          <h3 className="text-white">3. Intellectual Property</h3>
          <p className="mb-4">All software, hardware designs (including the Kinetix AGV and SRR-CI), and proprietary algorithms are the exclusive property of JR Digital Hub LTD.</p>

          <h3 className="text-white">4. Governing Law</h3>
          <p>These terms are governed by the applicable commercial laws. Disputes shall be resolved through professional mediation.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}