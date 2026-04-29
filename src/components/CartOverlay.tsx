"use client";

import React, { useMemo } from "react";
import { X, ShoppingCart, Trash2, Plus, Minus, Send } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } =
    useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    const phoneNumber = "+6289508627182";
    let message = "Hallo Mac And Yuk aku mau pesan makanan dan minuman:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\nTotal Harga: ${formatPrice(totalPrice)}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-70 flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold font-barlow text-primary">
                  Keranjang Belanja
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Tutup keranjang"
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-10 h-10 text-neutral-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-700">
                    Keranjang Kosong
                  </h3>
                  <p className="mt-2 text-neutral-700">
                    Yuk tambah produk favoritmu!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Mulai Belanja
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div layout key={item.id} className="flex gap-4">
                      <div className="relative w-24 h-24 bg-neutral-100 rounded-2xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-neutral-800 leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-primary font-bold mt-1">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded-lg bg-neutral-50">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              aria-label={`Kurangi jumlah ${item.name}`}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={`Tambah jumlah ${item.name}`}
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Hapus ${item.name} dari keranjang`}
                            className="text-neutral-600 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-neutral-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-600">
                    Total ({totalItems} item)
                  </span>
                  <span className="text-2xl font-bold text-primary font-barlow">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  Pesan via WhatsApp
                </button>
                <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-neutral-600">
                  Konfirmasi pesanan melalui WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartOverlay;
