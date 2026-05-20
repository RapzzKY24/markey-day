"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Trash2, Plus, Minus, Scan } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { formatPrice } from "../utils/utils";
import QrisModal from "./QrisModal";
import OrderFormModal from "./OrderFormModal";

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MARKET_DAY_PICKUP = "Market Day - 23 Mei 2026";

const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState("");
  const [metode, setMetode] = useState<"Qris" | "Tunai">("Qris");

  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [isQrisOpen, setIsQrisOpen] = useState(false);

  const whatsappNumber = "6289508627182";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmitOrder = async () => {
    if (!nama) return;

    setLoading(true);

    const produk = cart
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama,
          produk,
          qty: cart.reduce((acc, item) => acc + item.quantity, 0),
          waktuAmbil: MARKET_DAY_PICKUP,
          metode,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal membuat pesanan");
      }

      setOrderId(data.orderId);
      setShowForm(false);

      if (metode === "Qris") {
        setIsQrisOpen(true);
      } else {
        handleConfirmWhatsapp(data.orderId);
      }
    } catch (err) {
      console.error("ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmWhatsapp = (id?: string) => {
    const finalId = id || orderId;

    const produkList = cart
      .map((item) => `• ${item.name} x${item.quantity}`)
      .join("\n");

    const message = `Halo Mimin

Order ID: ${finalId}
Nama: ${nama}
Waktu Ambil: ${MARKET_DAY_PICKUP}

Pesanan:
${produkList}

Total: ${formatPrice(totalPrice)}

${
  metode === "Qris"
    ? "Saya sudah bayar via QRIS"
    : "Saya akan bayar di tempat (Tunai)"
}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              onClick={onClose}
            />

            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                <h2 className="font-bold text-xl">Keranjang Belanja</h2>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    Keranjang masih kosong
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-20 h-20 relative bg-gray-50 rounded-lg p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        <p className="text-primary font-semibold text-sm">
                          {formatPrice(item.price)}
                        </p>

                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-gray-500 hover:text-primary"
                            >
                              <Minus size={18} />
                            </button>

                            <span className="w-5 text-center font-medium">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-gray-500 hover:text-primary"
                            >
                              <Plus size={18} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t bg-gray-50">
                  <div className="flex justify-between mb-4 items-center">
                    <span className="text-gray-600">Total Pembayaran</span>
                    <span className="font-bold text-2xl text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-primary text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
                  >
                    <Scan size={20} />
                    Checkout Pesanan
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderFormModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        nama={nama}
        setNama={setNama}
        metode={metode}
        setMetode={setMetode}
        onSubmit={handleSubmitOrder}
        loading={loading}
      />

      <QrisModal
        isOpen={isQrisOpen}
        onClose={() => setIsQrisOpen(false)}
        onConfirm={() => handleConfirmWhatsapp()}
      />
    </>,
    document.body,
  );
};

export default CartOverlay;
