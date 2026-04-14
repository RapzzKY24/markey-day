import { Variants, motion } from "framer-motion";
import React from "react";

type HeaderSectionProps = {
  title: string[];
  description: string;
};

const HeaderSection = ({ title, description }: HeaderSectionProps) => {
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
    <div className="flex flex-col gap-y-2 sm:gap-y-4">
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[10px] sm:text-xs md:text-sm lg:text-base font-light font-poppins text-primary text-center px-4 max-w-2xl mx-auto uppercase"
      >
        {description}
      </motion.p>

      {/* Title */}
      <motion.div
        className="flex flex-wrap justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        {title.map((word, index) => (
          <div
            key={index}
            className="overflow-hidden mr-[0.4em] sm:mr-[0.6em] md:mr-4 lg:mr-8 last:mr-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-poppins tracking-[0.1rem] sm:tracking-[0.2rem] uppercase text-center"
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderSection;
