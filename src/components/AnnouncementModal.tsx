"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Sparkles, Tag } from "lucide-react";
import Image from "next/image";

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("mac-and-yuk-promo-seen");

    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mac-and-yuk-promo-seen", "true");
  };

  const handleClaim = () => {
    handleClose();
    const element = document.getElementById("products");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden p-1"
          >
            {/* Border gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-[#D12052] opacity-20" />

            <div className="relative bg-white rounded-[1.8rem] overflow-hidden flex flex-col">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-neutral-500 hover:text-neutral-900 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Image Area */}
              <div className="bg-primary/5 relative h-48 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #f45b26 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Product Images */}
                <div className="relative z-10 w-32 h-32 mr-[-20px]">
                  <Image
                    src="/products/schotel.webp"
                    alt="Macaroni Schotel"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <div className="z-20 w-10 h-10 bg-secondary rounded-full flex items-center justify-center border-2 border-white shadow-lg mx-[-10px]">
                  <span className="font-londrina text-xl text-primary font-black">
                    +
                  </span>
                </div>
                <div className="relative z-10 w-28 h-28 ml-[-10px]">
                  <Image
                    src="/products/strawberry.webp"
                    alt="Es Strawberry"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md rotate-[-5deg]">
                  <Sparkles className="w-3 h-3" />
                  Flash Sale
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center z-10 relative">
                <h3 className="text-2xl font-black font-barlow text-neutral-900 mb-2 drop-shadow-sm">
                  Diskon <span className="text-primary">10%</span> Spesial! 🎁
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-medium">
                  Khusus untuk{" "}
                  <span className="font-bold text-neutral-900 underline decoration-secondary decoration-2 underline-offset-2">
                    10 orang tercepat saat market day
                  </span>
                  ! Dapatkan potongan 10% untuk setiap pembelian{" "}
                  <span className="font-bold text-primary">
                    Paket Bundling Macaroni Schotel & Es Teh Strawberry
                  </span>
                  .
                </p>

                <button
                  onClick={handleClaim}
                  className="w-full relative group overflow-hidden bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
                  <Tag className="w-5 h-5" />
                  Klaim Promo Sekarang!
                </button>
                <p className="text-[10px] text-neutral-400 mt-3 font-medium uppercase tracking-widest">
                  *Promo terbatas selama persediaan masih ada
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementModal;
