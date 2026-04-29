"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";

type ProductItem = {
  image: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  cta: string;
};

type LayerImage = {
  image: string;
  scale: MotionValue<number>;
  frameClassName: string;
};

const PRODUCTS: ProductItem[] = [
  {
    image: "/products/cheese.webp",
    title: "Macaroni n Cheese",
    tagline: "Creamy comfort classic",
    description:
      "Perpaduan makaroni lembut dengan saus keju lumer, gurih, dan bikin mood naik sejak suapan pertama.",
    price: "Mulai 20K",
    cta: "Best Seller",
  },
  {
    image: "/products/schotel.webp",
    title: "Macaroni Schotel",
    tagline: "Baked, rich, and satisfying",
    description:
      "Dipanggang sampai golden dengan daging dan keju berlimpah, pas untuk kamu yang cari rasa premium.",
    price: "Mulai 25K",
    cta: "Signature Menu",
  },
  {
    image: "/products/strawberry.webp",
    title: "Es Strawberry",
    tagline: "Fresh and fruity refreshment",
    description:
      "Racikan strawberry segar dengan sentuhan manis seimbang, jadi teman ideal untuk makanan creamy.",
    price: "Mulai 10K",
    cta: "Limited Batch",
  },
  {
    image: "/products/bundle.webp",
    title: "Bundle Hemat",
    tagline: "One combo, double happiness",
    description:
      "Kombinasi menu makanan dan minuman favorit dengan value terbaik untuk sharing atau makan sendiri.",
    price: "Mulai 20K",
    cta: "Value Deal",
  },
  {
    image: "/product3.png",
    title: "Macaroni Mpruy",
    tagline: "Pedas renyah bikin nagih",
    description:
      "Macaroni crunchy dengan bumbu pedas gurih yang bold, cocok untuk pencinta snack dengan karakter rasa kuat.",
    price: "Mulai 10K",
    cta: "New Favorite",
  },
];

export default function ProductShowcaseParallax() {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncBreakpoint = () => setIsMobile(mediaQuery.matches);
    syncBreakpoint();
    mediaQuery.addEventListener("change", syncBreakpoint);

    return () => {
      mediaQuery.removeEventListener("change", syncBreakpoint);
    };
  }, []);

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.24,
  });

  const zoomPhaseEnd = 0.48;
  const galleryStart = isMobile ? 0 : zoomPhaseEnd;
  const transitionWindow = 0.08;
  const navbarFocusStart = 0.32;
  const navbarFocusEnd = 0.62;
  const totalGalleryPanels = PRODUCTS.length + 1;

  const scale4 = useTransform(
    smoothScrollProgress,
    [0, zoomPhaseEnd, 1],
    [1, 4, 4],
  );
  const scale5 = useTransform(
    smoothScrollProgress,
    [0, zoomPhaseEnd, 1],
    [1, 5, 5],
  );
  const scale6 = useTransform(
    smoothScrollProgress,
    [0, zoomPhaseEnd, 1],
    [1, 6, 6],
  );
  const scale65 = useTransform(
    smoothScrollProgress,
    [0, zoomPhaseEnd, 1],
    [1, 6.5, 6.5],
  );
  const scale7 = useTransform(
    smoothScrollProgress,
    [0, zoomPhaseEnd, 1],
    [1, 7, 7],
  );

  const parallaxOpacity = useTransform(
    smoothScrollProgress,
    [zoomPhaseEnd - transitionWindow, zoomPhaseEnd + transitionWindow],
    isMobile ? [0, 0] : [1, 0],
  );

  const galleryOpacity = useTransform(
    smoothScrollProgress,
    [zoomPhaseEnd - transitionWindow, zoomPhaseEnd + transitionWindow],
    isMobile ? [1, 1] : [0, 1],
  );

  const galleryX = useTransform(
    smoothScrollProgress,
    [galleryStart, 1],
    ["0vw", `-${(totalGalleryPanels - 1) * 100}vw`],
  );

  useMotionValueEvent(smoothScrollProgress, "change", (latest) => {
    const isFocusPhase =
      !isMobile && latest >= navbarFocusStart && latest <= navbarFocusEnd;
    document.body.classList.toggle("showcase-focus-mode", isFocusPhase);
  });

  useEffect(() => {
    return () => {
      document.body.classList.remove("showcase-focus-mode");
    };
  }, []);

  const parallaxLayers: LayerImage[] = [
    {
      image: "/products/cheese.webp",
      scale: scale4,
      frameClassName: "h-[25vh] w-[38vw] md:h-[25vh] md:w-[25vw]",
    },
    {
      image: "/products/schotel.webp",
      scale: scale5,
      frameClassName:
        "-top-[28vh] left-[6vw] h-[26vh] w-[62vw] md:-top-[30vh] md:left-[5vw] md:h-[30vh] md:w-[35vw]",
    },
    {
      image: "/products/strawberry.webp",
      scale: scale6,
      frameClassName:
        "-top-[10vh] -left-[18vw] h-[34vh] w-[42vw] md:-left-[25vw] md:h-[45vh] md:w-[20vw]",
    },
    {
      image: "/products/bundle.webp",
      scale: scale65,
      frameClassName:
        "left-[18vw] h-[22vh] w-[40vw] md:left-[27.5vw] md:h-[25vh] md:w-[25vw]",
    },
    {
      image: "/product3.png",
      scale: scale7,
      frameClassName:
        "top-[24vh] -left-[12vw] h-[20vh] w-[52vw] md:top-[27.5vh] md:-left-[22.5vw] md:h-[25vh] md:w-[30vw]",
    },
  ];

  return (
    <section
      ref={container}
      id="products-showcase"
      className={`relative ${isMobile ? "h-[560vh]" : "h-[500vh] md:h-[540vh]"}`}
      aria-label="Product showcase parallax"
    >
      {/* vertical scale */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: parallaxOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          {parallaxLayers.map(({ image, scale, frameClassName }, index) => (
            <motion.div
              key={`${image}-${index}`}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center will-change-transform"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${frameClassName}`}
              >
                <Image
                  src={image}
                  fill
                  alt={`Product parallax image ${index + 1}`}
                  sizes="(max-width: 768px) 62vw, 30vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/*  Horizontal  */}
        <motion.div
          style={{ opacity: galleryOpacity }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            style={{ x: galleryX }}
            className="flex h-full will-change-transform"
          >
            <div className="flex h-screen w-screen shrink-0 items-center justify-center bg-[#f2f2f2] px-7 py-[7vh] md:px-[6vw]">
              <article className="flex h-full w-full max-w-[1200px] flex-col items-start justify-between">
                <h3 className="max-w-[9ch] pt-8 font-barlow text-5xl font-black uppercase leading-[0.9] text-[#111111] md:pt-14 md:text-8xl">
                  Product Showcase
                </h3>
                <div className="mb-8 flex items-center gap-4 md:mb-12 md:gap-6">
                  <span className="h-28 w-px bg-[#111111]/55 md:h-44" />
                  <p className="text-3xl uppercase tracking-widest text-[#111111] md:text-5xl">
                    Discover / <span className="font-black">Discover</span>
                  </p>
                </div>
              </article>
            </div>
            {PRODUCTS.map((product, index) => (
              <div
                key={product.title}
                className="flex h-screen w-screen shrink-0 items-center justify-center bg-[radial-gradient(circle_at_top_right,#242438_0%,#0f0f14_45%,#09090d_100%)] px-5 py-[6vh] md:px-[6vw]"
              >
                <article className="grid h-full w-full max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
                  <div className="relative mx-auto aspect-4/5 w-[65vw] max-w-[360px] -rotate-6 overflow-hidden rounded-md bg-[#171717] shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:mx-0 md:w-[30vw]">
                    <Image
                      src={product.image}
                      fill
                      alt={`${product.title} product photo`}
                      sizes="(max-width: 768px) 65vw, 30vw"
                      className="object-cover saturate-[0.95]"
                    />
                  </div>

                  <div className="max-w-[560px] text-[#f6f7fb] [text-shadow:0_8px_30px_rgba(0,0,0,0.4)]">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f6f7fbc4]">
                      Menu {String(index + 1).padStart(2, "0")} /{" "}
                      {String(PRODUCTS.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-barlow text-4xl font-black uppercase leading-[0.95] md:text-6xl">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {product.tagline}
                    </p>
                    <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-[#f6f7fbea]">
                      {product.description}
                    </p>
                    <div className="mt-8 flex items-center gap-6">
                      <p className="text-2xl font-black text-primary md:text-3xl">
                        {product.price}
                      </p>
                      <span className="h-8 w-px bg-white/25" />
                      <p className="text-lg uppercase tracking-[0.14em] text-white">
                        Discover /{" "}
                        <span className="font-black text-white">Discover</span>{" "}
                        -
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
