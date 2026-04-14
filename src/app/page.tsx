"use client";
import HeaderSection from "../components/HeaderSection";
import ProductCard from "../components/ProductCard";
import AboutSection from "../section/AboutSection";
import HeroPages from "../section/HeroSection";
import ProductSection from "../section/ProductSection";

export default function Home() {
  return (
    <div className="pb-30">
      <HeroPages />
      <div className="w-full h-full bg-white/50">
        <div className="flex flex-col justify-center gap-y-6 pt-24 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Mac", "And", "Yuk"]}
            description="Tentang Kami"
          />
        </div>
        <AboutSection />
      </div>
      <div className="relative w-full bg-secondary/20">
        <div className="flex flex-col justify-center gap-y-6 pt-24 container mx-auto px-4 py-6">
          <HeaderSection
            title={["Produk", "Kami"]}
            description="Cek koleksi snack premium kami"
          />
          <ProductSection />
        </div>
      </div>
    </div>
  );
}
