"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ZenoInitButton() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Handle the countdown logic and automatic redirect
  useEffect(() => {
    console.log("ZenoInitButton mounted", { isInitializing, countdown });
    // Attach native listeners for debugging whether browser events reach the element
    const el = btnRef.current;
    function onNativeClick(e: Event) {
      console.log("ZenoInitButton native click", e);
    }
    function onNativePointerDown(e: Event) {
      console.log("ZenoInitButton native pointerdown", e);
    }
    if (el) {
      el.addEventListener("click", onNativeClick);
      el.addEventListener("pointerdown", onNativePointerDown);
    }
    let timer: NodeJS.Timeout | undefined;
    
    if (isInitializing && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isInitializing && countdown === 0) {
      // Execute the redirect when the timer hits zero
      router.push("/book");
      
      // Schedule the state update after navigation settles to avoid synchronous setState errors.
      // Next.js App Router's push doesn't return a Promise, so we use setTimeout directly.
      setTimeout(() => setIsInitializing(false), 100);
    }

    return () => {
      if (timer) clearTimeout(timer); // Cleanup the timer to prevent memory leaks
      if (el) {
        el.removeEventListener("click", onNativeClick);
        el.removeEventListener("pointerdown", onNativePointerDown);
      }
    };
  }, [isInitializing, countdown, router]);

  const handleInitialize = () => {
    console.log("SYSTEM BOOT INITIATED");
    setIsInitializing(true);
    setCountdown(5); // Reset the timer to 5 seconds whenever opened
  };

  const handleCancel = () => {
    setIsInitializing(false);
    setCountdown(5); // Reset so it's ready for next time
  };

  return (
    <>
      {/* The trigger button on the page */}
      <button
        ref={btnRef}
        type="button"
        onClick={handleInitialize}
        onPointerDown={handleInitialize}
        onMouseDown={handleInitialize}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleInitialize();
        }}
        style={{
          position: "relative",
          zIndex: 9999,
          pointerEvents: "auto",
          cursor: "pointer",
          padding: "16px 32px",
          borderRadius: "6px",
          backgroundColor: "#D4AF37",
          color: "black",
          fontWeight: "bold",
          fontSize: "16px",
          border: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#c89f2f";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#D4AF37";
          e.currentTarget.style.boxShadow = "none";
        }}
        aria-pressed={isInitializing}
      >
        Initialize ZENO OS
      </button>

      {/* The Terminal Modal Overlay */}
      {isInitializing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-6">
          <div className="max-w-lg w-full bg-[#0A0A0A] border border-[#D4AF37]/50 rounded-md shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden font-mono">
            
            {/* Modal Header */}
            <div className="bg-[#111] border-b border-[#D4AF37]/30 px-4 py-2 flex justify-between items-center">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest">ZENO.SYS.BOOT</span>
              <span className="text-gray-500 text-xs">v1.0.0</span>
            </div>
            
            {/* Modal Body / Terminal Text */}
            <div className="p-6 text-sm text-[#D4AF37]/80 flex flex-col gap-3">
              <p>{`> [OK] Neural uplink established...`}</p>
              <p>{`> [OK] Synchronizing enterprise pipelines...`}</p>
              <p>{`> [WARN] Live deployment environment restricted. Entering configuration mode.`}</p>
              
              <div className="mt-4 p-4 bg-[#111] rounded border border-gray-800">
                <p className="text-white text-base md:text-lg font-bold">
                  Redirecting to Deployment Architect in <span className="text-red-500 animate-pulse">{countdown}s</span>...
                </p>
              </div>
            </div>

            {/* Modal Footer / Abort Button */}
            <div className="p-4 border-t border-[#D4AF37]/20 flex justify-end">
              <button 
                onClick={handleCancel}
                className="px-6 py-2 text-xs font-bold tracking-widest text-red-500 border border-red-500/50 rounded hover:bg-red-500/10 transition-colors"
              >
                [ ABORT SEQUENCE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}