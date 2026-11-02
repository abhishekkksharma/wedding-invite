import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-amber-50">
      {/* Mobile-Only Optimized Frame */}
      <div className="w-full min-h-[100dvh] h-[100dvh] relative overflow-hidden ">
        <HeroSection />
      </div>
    </main>
  );
}
