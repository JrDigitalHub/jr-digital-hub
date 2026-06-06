import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand & Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Graphic Slot */}
          <div className="relative h-8 w-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/jr-digital-hub-logo.png" 
              alt="JR Digital Hub Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          
          {/* Company Text */}
          <span className="text-lg font-bold tracking-widest text-white uppercase">
            JR Digital Hub
          </span>
        </Link>

        {/* Desktop Routing Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#ecosystem" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Ecosystem
          </Link>
          <Link href="#technology" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Technology
          </Link>
          <Link href="#partners" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Partners
          </Link>
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center">
          <button className="px-6 py-2.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold tracking-wide transition-all hover:bg-opacity-90 hover:shadow-[0_0_15px_var(--brand)]">
            Book a Demo
          </button>
        </div>
        
      </div>
    </nav>
  );
}