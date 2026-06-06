import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";
import Technology from "@/components/sections/Technology";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <Navbar />
      <Hero />
      <Ecosystem />
      <Technology />
      <Partners />
      <Footer />
    </main>
  );
}