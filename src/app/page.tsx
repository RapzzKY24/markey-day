"use client";
import HeaderSection from "../components/HeaderSection";
import AboutSection from "../section/AboutSection";
import HeroPages from "../section/HeroSection";
import ProductSection from "../section/ProductSection";
import FeatureSection from "../section/FeatureSection";
import HowOrderSection from "../section/HowOrderSection";

export default function Home() {
  return (
    <div className="pb-30">
      <HeroPages />
      <div className="relative w-full bg-white/50 overflow-hidden">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Mac", "And", "Yuk"]}
            description="Tentang Kami"
          />
        </div>
        <AboutSection />
      </div>
      <div className="relative w-full bg-secondary/20 overflow-hidden">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Produk", "Kami"]}
            description="Cek koleksi snack premium kami"
          />
          <ProductSection />
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-white/50">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Kenapa", "Memilih", "Mac", "N", "Yuk?"]}
            description="Pilihan Terbaik Untuk Snack Anda"
          />
          <FeatureSection />
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-secondary/20">
        <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Order", "Mac", "N", "Yuk?"]}
            description="Gimana Cara Pesennya?"
          />
          <HowOrderSection />
        </div>
      </div>
    </div>
  );
}
