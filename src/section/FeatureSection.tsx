import { ChefHat, Leaf, DollarSign, CupSoda } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: <ChefHat className="text-white w-6 h-6" />,
    title: "Creamy & Cheesy",
    desc: "Sajian makaroni yang lumer dan gurih di mulut.",
  },
  {
    icon: <CupSoda className="text-white w-6 h-6" />,
    title: "Minuman Segar",
    desc: "Kombinasi minuman segar unik & menyehatkan.",
  },
  {
    icon: <Leaf className="text-white w-6 h-6" />,
    title: "Bahan Premium",
    desc: "Hanya menggunakan bahan berkualitas terbaik.",
  },
  {
    icon: <DollarSign className="text-white w-6 h-6" />,
    title: "Terjangkau",
    desc: "Rasa bintang lima dengan harga teman.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const FeatureSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="bg-[#FFF8E7] rounded-3xl p-8  flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-primary/10 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 rotate-0 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 ease-out z-10">
            {item.icon}
          </div>

          <h3 className="text-lg font-bold font-poppins mb-3 text-neutral-800 z-10">
            {item.title}
          </h3>
          <p className="text-sm font-light font-poppins text-neutral-600 leading-relaxed z-10">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureSection;
