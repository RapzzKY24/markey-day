"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    });
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md hover:bg-white rounded-xl shadow-lg transition-all group"
            >
              <X className="w-6 h-6 text-neutral-800 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left: Product Image */}
            <div className="md:w-1/2 bg-neutral-100 relative p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <motion.div
                layoutId={`product-image-${product.id}`}
                className="relative w-full h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full backdrop-blur-sm border border-primary/20">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-neutral-400 ml-2">(48 Reviews)</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-barlow tracking-tight mb-2">
                {product.name}
              </h2>
              
              <div className="text-3xl font-black text-primary mb-6">
                {formatPrice(product.price)}
              </div>

              <p className="text-neutral-500 leading-relaxed mb-8 text-sm md:text-base">
                {product.description}. Dibuat dengan bahan berkualitas tinggi dan diproses secara higienis untuk menjamin rasa yang autentik dan kesegaran yang maksimal.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Pengiriman Cepat (Market Day Only)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Produk Segar & Higienis</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-white py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center justify-between">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                  SKU: MY-{product.id}00-24
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-green-600">STOK TERSEDIA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ProductModal;
