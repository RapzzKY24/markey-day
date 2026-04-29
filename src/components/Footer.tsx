"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navigasi",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "#about" },
      { name: "Product", href: "#products" },
      { name: "Team", href: "#team" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { name: "Kontak Kami", href: "#" },
      { name: "Cara Order", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#171717] px-6 pt-24 pb-10 text-white md:pt-28">
      {/* Decorative Brand Text Background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]">
        <h2 className="whitespace-nowrap text-[9rem] font-black font-londrina leading-none uppercase md:text-[16rem]">
          Mac And Yuk
        </h2>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 overflow-hidden transition-transform group-hover:rotate-12">
                <Image
                  src="/logo.webp"
                  alt="Logo Mac And Yuk"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <h3 className="text-2xl font-black font-barlow tracking-tight text-white">
                Mac And Yuk
              </h3>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs text-justify">
              Menghadirkan kebahagiaan melalui setiap suapan makaroni creamy dan
              kesegaran minuman unik. Temukan kenikmatan comfort food terbaikmu
              di Mac And Yuk.
            </p>
          </div>

          {/* Links Section */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold font-barlow mb-6 uppercase tracking-[0.2em] text-primary">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-bold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold font-barlow mb-6 uppercase tracking-[0.2em] text-primary">
              Informasi Toko
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black tracking-widest mb-1 leading-none">
                    Lokasi
                  </p>
                  <p className="text-sm text-neutral-300 leading-snug">
                    Telkom University Jakarta Kampus B, Jakarta Selatan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black tracking-widest mb-1 leading-none">
                    WhatsApp
                  </p>
                  <p className="text-sm text-neutral-300 leading-snug">
                    0895 0862 7182
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black tracking-widest mb-1 leading-none">
                    Email
                  </p>
                  <p className="text-sm text-neutral-300 leading-snug">
                    macandyuk@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-widest">
            © {currentYear} Mac And Yuk. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-widest">
              Designed for
            </span>
            <span className="text-xs font-bold font-barlow text-neutral-400 uppercase tracking-tighter">
              Market Day Telkom University
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
