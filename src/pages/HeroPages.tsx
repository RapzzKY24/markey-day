import Image from "next/image";
import React from "react";
import { FloatingShapes } from "../components/FloatingShapes";

const HeroPages = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 md:pt-48 lg:pt-56 xl:pt-64 overflow-hidden bg-primary">
      <FloatingShapes />
      <div className="relative z-10 container mx-auto p-6 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center gap-y-4 max-w-4xl mx-auto z-10">
          {/* Main Title */}
          <div className="relative mb-8 space-y-6 md:space-y-8">
            <h1
              className="text-[4rem] md:text-[7.5rem] lg:text-[8rem] xl:text-[9rem] leading-none font-bold font-londrina text-secondary uppercase tracking-widest transition-transform duration-500 ease-in-out cursor-default"
              style={{ filter: "drop-shadow(6px 8px 0px #171717)" }}
            >
              Mac & Yuk
            </h1>
            <h1
              className="relative text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-none font-bold font-londrina text-white uppercase tracking-tighter transition-all duration-300 ease-out cursor-default hover:scale-105 hover:-rotate-1"
              style={{
                filter: "drop-shadow(6px 8px 0px #171717)",
                WebkitTextStroke: "1.5px #171717",
              }}
            >
              Your Next <br className="md:hidden" />
              <span className="relative inline-block text-secondary transform -rotate-2 bg-white px-6 py-2 mt-4 md:mt-0 shadow-[6px_6px_0px_#171717]">
                Comfort
              </span>
              <span className="block md:inline md:ml-4 mt-4 md:mt-0">
                {" "}
                Snack
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] md:translate-y-[15%] w-[600px] md:w-[900px] lg:w-[1100px] xl:w-[1400px] pointer-events-none z-0">
        <Image
          src="/heroimage.png"
          alt="Hero Image"
          width={2400}
          height={2400}
          className="object-contain w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
};

export default HeroPages;
