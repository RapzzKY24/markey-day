"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const CATEGORIES = ["Semua", "Bundle", "Makanan", "Minuman"];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <div className="flex flex-col items-center w-full">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 md:gap-4 mb-8 bg-white/50 backdrop-blur-sm p-1.5 md:p-2 rounded-full border border-neutral-200">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="relative px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-colors z-10"
          >
            <span
              className={`relative z-10 ${
                activeCategory === category
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {category}
            </span>
            {activeCategory === category && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Product List */}
      <ProductCard activeCategory={activeCategory} />
    </div>
  );
};

export default ProductSection;
