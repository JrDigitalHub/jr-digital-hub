import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About JR Digital Hub</h1>
        
        <div className="prose prose-invert prose-lg">
          <p className="text-xl text-gray-400 mb-12">
            JR Digital Hub LTD is a deep-tech engineering firm focused on bridging the gap between digital intelligence, physical hardware, and decentralized ecosystems.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Mission</h3>
          <p className="mb-8">
            Founded to solve the fragmentation in modern enterprise software, we engineer autonomous systems that don&#39;t just process data, they execute business logic. Our flagship operating system, ZENO, acts as the central nervous system for SMEs, automating complex workflows that historically required massive human intervention.
          </p>

          <h3 className="text-2xl font-bold mb-4">Leadership & Vision</h3>
          <p className="mb-8">
            Led by our CEO and Lead Product Architect, our foundation is built on a unique blend of financial acumen and technical engineering. With a background rooted in finance and accounting, our leadership understands that every line of code deployed must translate into operational efficiency and capital performance.
          </p>

          <h3 className="text-2xl font-bold mb-4">Applied Research</h3>
          <p>
            Beyond commercial software, our R&D labs are pushing the boundaries of robotics and Web3. From the SRR-CI precision interface and the Kinetix differential drive systems to our work in civic transparency, we are building the infrastructure of the future.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}