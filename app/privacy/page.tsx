import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm text-gray-400">
          <p className="mb-6">Last Updated: June 2026</p>
          
          <h3 className="text-white">1. Data Collection</h3>
          <p className="mb-4">JR Digital Hub LTD respects the privacy of our clients and users. We collect only the data necessary to provide our autonomous business systems and integration services.</p>

          <h3 className="text-white">2. Use of Information</h3>
          <p className="mb-4">Data is utilized strictly for the operation of the ZENO Neural Business Operating System, performance optimization, and the provision of professional services.</p>

          <h3 className="text-white">3. Data Security</h3>
          <p className="mb-4">We employ enterprise-grade security protocols to protect all operational data. We do not sell, trade, or rent user data to third parties.</p>

          <h3 className="text-white">4. Contact</h3>
          <p>For any privacy-related inquiries, please reach out to: jrdigitalhubltd@gmail.com</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}