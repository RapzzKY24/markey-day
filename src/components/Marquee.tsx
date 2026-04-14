"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
  duration?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  className = "",
  duration = 30,
}) => {
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#171717] py-3 md:py-5 flex items-center shadow-2xl ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap items-center hover:[animation-play-state:paused]"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center group cursor-pointer">
            <span className="text-4xl md:text-6xl lg:text-7xl font-londrina uppercase text-white tracking-wider px-8 md:px-12 transition-all duration-300 group-hover:text-primary group-hover:scale-105">
              {item}
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary opacity-80 select-none">
              /
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
