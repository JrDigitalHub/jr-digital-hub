export default function Partners() {
  return (
    <section id="partners" className="w-full py-24 px-6 bg-[#0A0A0A] flex flex-col items-center scroll-mt-24">
      <div className="max-w-4xl w-full flex flex-col gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
            Ecosystem Integrations
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Borderless infrastructure for global commerce.
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mt-2 leading-relaxed">
            Designed for immediate deployment within established commercial networks.
          </p>
        </div>

        {/* Partner Badges */}
        <div className="flex flex-col justify-center items-center mt-8">
          
          {/* SHOPLINE Integration */}
          <div className="flex flex-col items-center gap-4 group max-w-xs">
            <div className="h-20 w-20 flex items-center justify-center rounded-2xl border border-gray-800 bg-gray-900/30 group-hover:border-white/50 transition-all">
              <img 
                src="/assets/shopline-icon.png" 
                alt="SHOPLINE Partner" 
                className="h-10 w-10 object-contain invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Integration Partner
              </span>
              <span className="text-sm text-gray-500">
                Executing workflows natively for over 600,000 merchants.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}