"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function BookPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      // Your live Formspree endpoint
      const response = await fetch("https://formspree.io/f/mrevyvop", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest text-green-500 font-bold">Zeno Core Initialized</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Deployment Architect
          </h1>
          <p className="text-gray-400 text-lg">
            {formState === "success" 
              ? "Telemetry Transmitted. Select your deployment review window below." 
              : "Configure your enterprise parameters below to schedule a live architecture review with the JR Digital Hub engineering team."}
          </p>
        </div>

        {/* Dynamic Form Area */}
        {formState === "success" ? (
          <div className="animate-in fade-in duration-500 h-[700px] w-full rounded-lg overflow-hidden border border-gray-800 bg-white">
            <iframe 
              src="https://calendly.com/jrdigitalhubltd/zeno-architecture-review?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=d4af37" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Schedule Deployment Review"
            ></iframe>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Standard Info */}
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Executive Name</label>
                <input name="name" required type="text" className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Enterprise Email</label>
                <input name="email" required type="email" className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="j.doe@company.com" />
              </div>

              {/* Architecture Parameters */}
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Primary Vertical</label>
                <select name="vertical" className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option>E-Commerce / Retail</option>
                  <option>Industrial / Manufacturing</option>
                  <option>SaaS / Digital Infrastructure</option>
                  <option>Hardware Distribution</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Focus Area</label>
                <select name="focus" className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option>ZENO OS (Software Neural Automation)</option>
                  <option>Kinetic-AGV (Physical Robotics integration)</option>
                  <option>Hybrid Full-Stack Deployment</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Current Operational Bottleneck</label>
              <textarea name="bottleneck" required rows={4} className="w-full bg-[#111] border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" placeholder="Describe the manual processes or hardware limitations currently restricting scale..."></textarea>
            </div>

            {formState === "error" && (
              <p className="text-red-500 text-sm font-bold">Transmission failed. Please try again or contact us directly.</p>
            )}

            <div className="pt-4 border-t border-gray-800 flex justify-end">
              <button 
                type="submit" 
                disabled={formState === "submitting"}
                className="px-8 py-4 rounded-md bg-[#D4AF37] text-black font-bold tracking-widest uppercase transition-all hover:bg-[#c89f2f] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Transmitting...
                  </>
                ) : (
                  "Initiate Deployment Review"
                )}
              </button>
            </div>
          </form>
        )}
      </section>

      <Footer />
    </main>
  );
}