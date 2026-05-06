"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { createPortal as reactDomCreatePortal } from "react-dom";
import { X, Scan } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/utils";

interface QrisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const QrisModal: React.FC<QrisModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const { totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="qris-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="qris-panel"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-10000 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-white rounded-2rem shadow-2xl w-full max-w-[380px] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header yang lebih clean */}
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    <Scan className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-xl font-bold text-gray-800 tracking-tight">
                    Pembayaran QRIS
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-8 pb-8 flex flex-col items-center">
                <div className="relative p-6 mb-4">
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-orange-500 rounded-br-2xl" />

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 overflow-hidden">
                    <Image
                      src="/qris.jpeg"
                      alt="QRIS QR Code"
                      width={240}
                      height={240}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-extrabold text-orange-600 tracking-tight">
                    {formatPrice(totalPrice)}
                  </h3>
                </div>

                <div className="w-full space-y-3">
                  <button
                    onClick={() => {
                      onConfirm();
                      onClose();
                    }}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg  transition-all active:scale-95"
                  >
                    Saya Sudah Bayar
                  </button>
                  <p className="text-center text-[11px] text-gray-400 font-medium">
                    ID Transaksi akan dibuat otomatis setelah konfirmasi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return reactDomCreatePortal(modalContent, document.body);
};

export default QrisModal;
