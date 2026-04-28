import { FloatingShapes } from "../components/FloatingShapes";
import { motion } from "framer-motion";
import { Marquee } from "../components/Marquee";

const HeroPages = () => {
  const marqueeItems = [
    "Macaroni Cheese",
    "Macaroni MPRUY",
    "Macaroni Schotel",
    "Es Teh Strawberry",
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#FDFBF7] transform-gpu">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40 will-change-transform"
          style={{
            backgroundImage: "url(/background.webp)",
            backgroundSize: "600px",
          }}
        />
        <FloatingShapes />
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1
              className="text-[18vw] md:text-[10rem] lg:text-[12rem] leading-[0.8]  font-bold font-londrina text-primary uppercase tracking-[0.2rem]"
              style={{ filter: "drop-shadow(4px 6px 0px #171717)" }}
            >
              Mac & Yuk
            </h1>

            <div className="flex flex-col items-center">
              <h2
                className="text-[8vw] md:text-5xl lg:text-7xl font-bold font-londrina text-secondary uppercase tracking-tight flex flex-wrap justify-center items-center gap-x-4"
                style={{
                  WebkitTextStroke: "1px #171717",
                  filter: "drop-shadow(3px 3px 0px #171717)",
                }}
              >
                Your Next{" "}
                <span className="relative inline-block text-secondary -rotate-2 bg-white px-4 py-1 shadow-[4px_4px_0px_#171717] border-2 border-black">
                  Comfort
                </span>
                <span>Snack</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full z-30"
      >
        <Marquee items={marqueeItems} />
      </motion.div>
    </section>
  );
};

export default HeroPages;
