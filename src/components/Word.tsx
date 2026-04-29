"use client";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type WordProps = {
  paragraph: string;
};

const Word = ({ paragraph }: WordProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);
  return (
    <motion.p
      className="p-2 max-w-xl text-md tracking-[0.2em] leading-[0.2em] text-justify font-poppins"
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {paragraph}
    </motion.p>
  );
};

export default Word;
