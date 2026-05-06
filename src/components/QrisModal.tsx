"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Scan } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/utils";

interface QrisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrisModal: React.FC<QrisModalProps> = ({ isOpen, onClose }) => {
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
          {/* Backdrop */}
          <motion.div
            key="qris-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="qris-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-10001 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Scan className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold font-barlow text-primary">
                    Bayar dengan QRIS
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 px-6 py-6">
                {/* QR Code */}
                <div className="w-52 h-52 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/qris.jpeg"
                    alt="QRIS QR Code"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
                <p className="text-2xl font-bold"> {formatPrice(totalPrice)}</p>
                <div className="text-center space-y-1">
                  <p className="text-sm font-semibold text-neutral-700">
                    Scan QR Code di atas
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Buka aplikasi mobile banking atau e-wallet, lalu scan untuk
                    menyelesaikan pembayaran.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-5">
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Selesai
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default QrisModal;
