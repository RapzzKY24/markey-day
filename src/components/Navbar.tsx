"use client";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product", href: "/products" },
  { name: "Team", href: "/team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <nav className="w-full max-w-7xl backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          {/* header */}
          <Link href="/" className="flex items-center md:gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/logo.png"
                alt="Logo Mac And Yuk"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
              Mac And Yuk
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* button desktop */}
          <div className=" hidden md:block">
            <div className="flex items-center gap-4">
              <button className="px-2 py-3 bg-primary rounded-md hover:bg-primary/80 transition-all duration-300 ease-in-out">
                <h1 className="font-base ">Beli Sekarang</h1>
              </button>
              <button className="px-2 py-3 bg-background outline outline-foreground rounded-md transition-all duration-300 ease-in-out">
                <h1 className="font-base ">Cek Produk</h1>
              </button>
            </div>
          </div>
          {/* mobile */}
          <div className="md:hidden block">
            <button onClick={handleClick}>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
          {/* mobile */}
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-foreground/5 rounded-2xl p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in fade-in zoom-in duration-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-foreground/5 my-2" />
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">
              Cek Produk
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
