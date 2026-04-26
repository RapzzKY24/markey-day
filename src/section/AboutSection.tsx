import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const TypingText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const wrapText = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(" ").map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={childVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      ));
    }
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      return React.cloneElement(element, {
        children: React.Children.map(element.props.children, wrapText),
      } as any);
    }
    return node;
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {React.Children.map(children, wrapText)}
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* TODO: Replace with actual image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center bg-neutral-100 rounded-2xl aspect-square md:aspect-auto md:h-[500px] border-2 border-dashed border-neutral-300"
          >
            <p className="text-neutral-400 font-poppins text-sm md:text-base">
              Ilustrasi / Gambar Mac n Yuk
            </p>
          </motion.div>

          {/* Konten */}
          <div className="flex flex-col justify-center gap-y-6 md:gap-y-8 md:bg-primary/5 md:shadow-xl md:rounded-3xl md:px-10 md:py-12 bg-transparent shadow-none px-0 py-0 overflow-hidden transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-8 md:w-12 h-px bg-primary" />
              <h2 className="text-xs md:text-sm tracking-[0.3rem] font-medium font-poppins uppercase text-primary">
                Kenalan Sama <span className="font-bold">Mac n Yuk</span>
              </h2>
            </motion.div>

            <TypingText>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm md:text-base lg:text-[17px] font-light tracking-wide leading-relaxed text-neutral-700 text-justify">
                  Mac n Yuk merupakan usaha kuliner yang menghadirkan berbagai
                  olahan macaroni kekinian, seperti{" "}
                  <span className="font-bold font-londrina text-primary uppercase ">
                    mac and cheese
                  </span>{" "}
                  yang creamy,
                  <span className="font-bold font-londrina text-primary uppercase ">
                    {" "}
                    macaroni schotel
                  </span>{" "}
                  yang gurih, hingga camilan makaroni yang cocok dinikmati kapan
                  saja. Setiap menu dibuat dengan perpaduan rasa yang pas untuk
                  memberikan pengalaman makan yang lezat dan memuaskan.
                </p>
                <p className="text-sm md:text-base lg:text-[17px] font-light tracking-wide leading-relaxed text-neutral-700 text-justify">
                  Dengan cita rasa yang creamy dan cheesy, Mac n Yuk berkomitmen
                  menghadirkan hidangan yang tidak hanya enak, tetapi juga
                  memberikan kenyamanan di setiap gigitan. Setiap sajian diracik
                  dengan bahan berkualitas untuk menjaga konsistensi rasa yang
                  disukai banyak orang.
                </p>
                <p className="text-sm md:text-base lg:text-[17px] font-light tracking-wide leading-relaxed text-neutral-700 text-justify">
                  Tak hanya makanan, Mac n Yuk juga menawarkan minuman segar
                  seperti
                  <span className="font-bold font-londrina text-primary uppercase ">
                    {" "}
                    lemon yakult soda
                  </span>{" "}
                  dan{" "}
                  <span className="font-bold font-londrina text-primary uppercase ">
                    iced tea dengan strawberry jam
                  </span>{" "}
                  yang memberikan sensasi manis dan menyegarkan. Kombinasi ini
                  membuat Mac n Yuk cocok dinikmati oleh semua kalangan, baik
                  untuk bersantai, berkumpul, maupun menemani aktivitas
                  sehari-hari.
                </p>
              </div>
            </TypingText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
