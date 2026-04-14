"use client";
import ProductCard from "../components/ProductCard";
import HeroPages from "../pages/HeroPages";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="pb-30">
      <HeroPages />
      <div className="flex flex-col justify-center gap-y-6 pt-24 container mx-auto px-4 py-6">
        <div className="flex flex-col gap-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-sm md:text-lg lg:text-[16px] font-light font-poppins text-primary text-center "
          >
            Cek koleksi snack premium kami
          </motion.h1>
          <motion.div
            className="flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="overflow-hidden mr-[0.30em] last:mr-0">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-lg lg:text-5xl font-bold font-londrina tracking-[0.2rem] uppercase text-center"
              >
                Ngemil
              </motion.h1>
            </div>
            <div className="overflow-hidden mr-[0.30em] last:mr-0">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-lg lg:text-5xl font-bold font-londrina tracking-[0.2rem] uppercase text-center"
              >
                Apa
              </motion.h1>
            </div>
            <div className="overflow-hidden mr-[0.30em] last:mr-0">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-lg lg:text-5xl font-bold font-londrina tracking-[0.2rem] uppercase text-center"
              >
                Hari
              </motion.h1>
            </div>
            <div className="overflow-hidden mr-[0.30em] last:mr-0">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-lg lg:text-5xl font-bold font-londrina tracking-[0.2rem] uppercase text-center"
              >
                Ini?
              </motion.h1>
            </div>
          </motion.div>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}
