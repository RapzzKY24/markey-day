"use client";
import HeaderSection from "../components/HeaderSection";
import AboutSection from "../section/AboutSection";
import HeroPages from "../section/HeroSection";
import ProductSection from "../section/ProductSection";
import FeatureSection from "../section/FeatureSection";
import FaqSection from "../section/FaqSection";
import AnnouncementModal from "../components/AnnouncementModal";

export default function Home() {
  return (
    <div className="pb-30">
      <AnnouncementModal />
      <div id="home">
        <HeroPages />
      </div>
      <div id="about" className="relative w-full bg-white/50 overflow-hidden">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Mac", "And", "Yuk"]}
            description="Tentang Kami"
          />
        </div>
        <AboutSection />
      </div>
      <div
        id="products"
        className="relative w-full bg-secondary/20 overflow-hidden"
      >
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Produk", "Kami"]}
            description="Cek koleksi snack premium kami"
          />
          <ProductSection />
        </div>
      </div>
      <div
        id="features"
        className="relative w-full overflow-hidden bg-white/50"
      >
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Kenapa", "Memilih", "Mac", "N", "Yuk?"]}
            description="Pilihan Terbaik Untuk Snack Anda"
          />
          <FeatureSection />
        </div>
      </div>
      {/* <div id="team" className="relative w-full overflow-hidden bg-[#FDFBF7]">
        <HeaderSection
          title={["Our", "Executive", "Team"]}
          description="Kenalan yuk sama orang dibalik layar"
        />
        <TeamSection />
      </div> */}
      <div id="faq" className="relative w-full overflow-hidden bg-secondary/10">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Punya", "Pertanyaan?"]}
            description="FAQ (Frequently Asked Questions)"
          />
        </div>
        <FaqSection />
      </div>
    </div>
  );
}
