"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeaderSection from "../components/HeaderSection";

const FAQ_DATA = [
  {
    category: "Produk & Rasa",
    items: [
      {
        question: "Apa perbedaan antara Mac n Cheese dan Macaroni Schotel?",
        answer:
          "Mac n Cheese kami fokus pada tekstur yang creamy dengan saus keju lumer, sedangkan Macaroni Schotel adalah makaroni panggang yang lebih padat dengan isian daging dan keju klasik.",
      },
      {
        question: "Apakah Macaroni Mpruy tersedia dalam berbagai level pedas?",
        answer:
          "Ya! Macaroni Mpruy tersedia dalam beberapa pilihan tingkat kepedasan dan rasa gurih yang bisa Anda pilih sesuai selera.",
      },
      {
        question: "Apakah minuman Es Strawberry menggunakan buah asli?",
        answer:
          "Kami menggunakan perpaduan sirup strawberry kualitas premium dan buah asli untuk memberikan kesegaran yang maksimal.",
      },
      {
        question:
          "Bagaimana cara terbaik memanaskan kembali Macaroni Schotel jika sudah dingin?",
        answer:
          "Cukup panaskan di microwave selama 1-2 menit atau di atas teflon dengan api kecil agar teksturnya kembali lembut.",
      },
    ],
  },
  {
    category: "Pemesanan & Operasional (Penting buat 4 Minggu)",
    items: [
      {
        question: "Apakah saya bisa memesan secara Pre-Order (PO)?",
        answer:
          "Tentu! Kami sangat menyarankan sistem PO melalui website/WhatsApp untuk memastikan Anda mendapatkan kuota produk, terutama menjelang Market Day.",
      },
      {
        question: "Di mana saya bisa mengambil pesanan saya?",
        answer:
          "Untuk 3 minggu pertama, pengambilan dilakukan di Telkom University. Khusus hari puncak Market Day, kami akan berada di Booth kami.",
      },
      {
        question:
          "Apakah ada layanan pengantaran (Delivery) ke area kelas/lab?",
        answer:
          "Ya, kami menyediakan layanan antar gratis untuk area Gedung TULT/GKU dengan minimal pembelian tertentu.",
      },
      {
        question: "Kapan batas waktu terakhir untuk pemesanan harian?",
        answer:
          "Pesanan untuk hari yang sama dilayani maksimal hingga pukul 10.00 WIB. Selebihnya akan masuk ke pengiriman hari berikutnya.",
      },
    ],
  },
  {
    category: "Pembayaran & Promo",
    items: [
      {
        question: "Metode pembayaran apa saja yang diterima?",
        answer:
          "Kami menerima pembayaran tunai (Cash) dan non-tunai melalui QRIS (Gopay/OVO/Dana/ShopeePay).",
      },
      {
        question: "Apakah ada harga khusus untuk pembelian paket (Bundling)?",
        answer:
          'Ada! Kami menyediakan paket "Hemat Kenyang" (Makanan + Minuman) yang jauh lebih terjangkau dibandingkan harga satuan.',
      },
      {
        question: "Apakah ada promo khusus untuk acara Bootcamp?",
        answer:
          'Khusus peserta Bootcamp, nantikan promo "Energi Booster" dan diskon menarik dengan menunjukkan ID Card/Grup Bootcamp.',
      },
    ],
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-2xl mb-4 bg-white shadow-sm overflow-hidden transition-colors hover:border-primary/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left focus:outline-none"
      >
        <h4 className="text-base md:text-lg font-bold font-barlow text-neutral-800 pr-4">
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 md:p-6 pt-0 text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="w-full h-full px-4 md:px-8 py-6  relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12">
          {FAQ_DATA.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-black font-londrina tracking-wider text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md">
                  {groupIdx + 1}
                </span>
                {group.category}
              </h3>
              <div>
                {group.items.map((item, index) => (
                  <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
