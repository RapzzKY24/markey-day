import { FloatingShapes } from "../components/FloatingShapes";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full  flex items-center justify-center overflow-hidden bg-primary/85">
      <FloatingShapes />
      <div className="relative z-10 container mx-auto p-6 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center gap-y-4 max-w-4xl mx-auto z-10 pt-10">
          {/* Main Title */}
          <div className="relative mb-4 space-y-6">
            <h1
              className="text-[5rem] leading-none md:text-[10rem] font-bold font-londrina text-secondary uppercase tracking-widest transition-transform duration-500 ease-in-out cursor-default"
              style={{ filter: "drop-shadow(6px 8px 0px #171717)" }}
            >
              Mac & Yuk
            </h1>
            <h1
              className="relative text-5xl leading-none md:text-8xl font-bold font-londrina text-white uppercase tracking-tighter transition-all duration-300 ease-out cursor-default hover:scale-105 hover:-rotate-1"
              style={{
                filter: "drop-shadow(6px 8px 0px #171717)",
                WebkitTextStroke: "1px #171717",
              }}
            >
              Your Next <br />
              <span className="relative inline-block text-secondary transform -rotate-2 bg-white px-4 py-1 mt-2 shadow-[4px_4px_0px_#171717]">
                Comfort
              </span>
              <span className="block md:inline ml-2"> Snack</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
