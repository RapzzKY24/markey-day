"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, CreditCard, ChevronDown } from "lucide-react";

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  nama: string;
  setNama: (val: string) => void;
  waktuAmbil: string;
  setWaktuAmbil: (val: string) => void;
  metode: "Qris" | "Tunai";
  setMetode: (val: "Qris" | "Tunai") => void;
  onSubmit: () => void;
  loading: boolean;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({
  isOpen,
  onClose,
  nama,
  setNama,
  waktuAmbil,
  setWaktuAmbil,
  metode,
  setMetode,
  onSubmit,
  loading,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4">
          {/* Backdrop dengan Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white p-8 rounded-2rem w-full max-w-md shadow-2xl space-y-6 overflow-hidden"
          >
            {/* Header */}
            <div className="text-center space-y-1">
              <h2 className="font-extrabold text-2xl text-gray-900 tracking-tight">
                Detail Pengambilan
              </h2>
              <p className="text-gray-500 text-sm">
                Lengkapi data untuk memproses pesananmu
              </p>
            </div>

            <div className="space-y-5">
              {/* Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 tracking-wider">
                  Nama Penerima
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    placeholder="Contoh: Budi Santoso"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-3.5 pl-11 rounded-2xl outline-none transition-all text-gray-800 font-medium"
                  />
                </div>
              </div>

              {/* Tanggal Pengambilan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 tracking-wider">
                  Tanggal Pengambilan
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                    <Calendar size={18} />
                  </div>
                  <input
                    type="date"
                    value={waktuAmbil}
                    onChange={(e) => setWaktuAmbil(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-3.5 pl-11 rounded-2xl outline-none transition-all text-gray-800 font-medium"
                  />
                </div>
              </div>

              {/* Metode Pembayaran */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1 tracking-wider">
                  Metode Pembayaran
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none">
                    <CreditCard size={18} />
                  </div>
                  <select
                    value={metode}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e) => setMetode(e.target.value as any)}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white p-3.5 pl-11 pr-10 rounded-2xl outline-none transition-all text-gray-800 font-medium appearance-none cursor-pointer"
                  >
                    <option value="Qris">QRIS</option>
                    <option value="Tunai">Tunai </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={onSubmit}
                disabled={loading || !nama || !waktuAmbil}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white py-4 rounded-2xl font-bold text-lg shadow-md transition-all active:scale-95 flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Konfirmasi Pesanan"
                )}
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors text-sm"
              >
                Kembali ke Keranjang
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderFormModal;
