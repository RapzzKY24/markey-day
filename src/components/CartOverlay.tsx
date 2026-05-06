"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ShoppingCart, Trash2, Plus, Minus, Send, Scan } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { formatPrice } from "../utils/utils";
import QrisModal from "./QrisModal";

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [isQrisOpen, setIsQrisOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappNumber = "+6289508627182";

  const handleCheckoutWhatsapp = () => {
    const whatsappMessage = `Halo Mimin

Perkenalkan, saya [Nama].
Saya ingin melakukan pemesanan dengan detail berikut:

Tanggal: [Hari/Tanggal]

Daftar Pesanan:
${cart.map((item) => `• ${item.name} x${item.quantity}`).join("\n")}

Total: ${formatPrice(totalPrice)}

Mohon konfirmasi ketersediaan pesanan serta total pembayaran yang harus saya lakukan.

Terima kasih`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return createPortal(
    <>
      {/* Cart Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-9998 bg-black/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-9999 flex w-full max-w-md flex-col bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold font-barlow text-primary">
                    Keranjang Belanja
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* List Produk */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <ShoppingCart className="w-10 h-10 text-neutral-300 mb-4" />
                    <p className="text-neutral-500">Keranjang Kosong</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-bold ">{item.name}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-1"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-2 text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-1"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-sm text-neutral-400 font-medium">
                              {item.quantity} x {formatPrice(item.price)}
                            </p>
                            <p className="text-base font-bold text-primary">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t bg-neutral-50">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* QRIS */}
                    <button
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      onClick={() => setIsQrisOpen(true)}
                    >
                      <Scan className="w-5 h-5" />
                      Bayar via QRIS
                    </button>
                    {/* WhatsApp */}
                    <button
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      onClick={handleCheckoutWhatsapp}
                    >
                      <Send className="w-5 h-5" />
                      Konfirmasi Pesanan
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QrisModal isOpen={isQrisOpen} onClose={() => setIsQrisOpen(false)} />
    </>,
    document.body,
  );
};

export default CartOverlay;
