import HeroSection from "@/components/HeroSection";
import BackgroundMusic from "@/components/BackgroundMusic";
import WeddingInfo from "@/components/WeddingInfo";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-amber-50">
      {/* Mobile-Only Optimized Frame */}
      <div className="w-full min-h-[100dvh] h-[100dvh] relative overflow-hidden">
        <BackgroundMusic />
        <HeroSection />
        <WeddingInfo/>
      </div>
    </main>
  );
}
