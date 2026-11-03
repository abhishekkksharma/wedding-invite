import HeroSection from "@/components/HeroSection";
import BackgroundMusic from "@/components/BackgroundMusic";
import WeddingInfo from "@/components/WeddingInfo";
import SaveTheDate from "@/components/SaveTheDate";
import Photo from "@/components/Photo";
import GoldenMoments from "@/components/GoldenMoments";
import PhotosMapped from "@/components/PhotosMapped";
import HomeAdress from "@/components/HomeAdress";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#181614] sm:py-6 sm:px-4">
      {/* Fixed mobile-only container for all sections */}
      <main className="w-full max-w-[430px] min-h-screen relative bg-[#faf4ef] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-x-hidden flex flex-col">
        <BackgroundMusic />
        <HeroSection />
        <WeddingInfo />
        <SaveTheDate/>
        <PhotosMapped/>
        {/* <Photo/> */}
        <GoldenMoments/>
        <HomeAdress/>
      </main>
    </div>
  );
}
