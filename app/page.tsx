import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation will go here later */}
      
      <Hero />
      
      {/* Additional sections (Zeno OS, Ecosystem, etc.) will stack below */}
    </main>
  );
}