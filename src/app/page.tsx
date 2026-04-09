import ProductCard from "../components/ProductCard";
import HeroPages from "../pages/HeroPages";

export default function Home() {
  return (
    <div className="pb-30">
      <HeroPages />
      <div className="flex flex-col justify-center gap-y-6 pt-10 container mx-auto px-4 py-6">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-londrina text-primary text-center ">
            Ngemil Apa Hari Ini?
          </h1>
          <p className="text-sm md:text-lg font-light font-poppins text-primary text-center">
            Cek koleksi snack premium kami
          </p>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}
