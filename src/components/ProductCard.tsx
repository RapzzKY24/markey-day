"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProductCard = () => {
  const products = [1, 2, 3, 4, 5];

  return (
    <div className="w-full">
      <div className="flex flex-nowrap gap-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto pb-10 scrollbar-hide px-6">
        {products.map((num) => (
          <motion.div
            key={num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 w-[200px] md:w-[280px] group"
          >
            <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center">
              <Image
                src={`/product${num}.png`}
                alt={`product ${num}`}
                fill
                priority
                sizes="(max-width: 768px) 200px, 280px"
                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold tracking-[0.15em] uppercase text-neutral-800">
                Essential Series {num}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">$49.00</p>

              <div className="w-0 h-px bg-black mx-auto mt-2 transition-all duration-300 group-hover:w-12" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
