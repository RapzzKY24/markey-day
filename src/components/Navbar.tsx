"use client";
import Link from "next/link";
import {
  MenuIcon,
  XIcon,
  Home,
  Info,
  ShoppingBag,
  Users,
  ShoppingCart,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Product", href: "/products", icon: ShoppingBag },
  { name: "Team", href: "/team", icon: Users },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-white">
      <nav className="w-full backdrop-blur-md px-5 py-3 border-b-3 border-b-black shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          {/* header */}
          <Link href="/" className="flex items-center  group">
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <Image
                src="/logo.png"
                alt="Logo Mac And Yuk"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-barlow tracking-tight text-primary  transition-colors">
              Mac And Yuk
            </h1>
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-xl text-primary/80  transition-colors font-semibold hover:text-primary"
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* button desktop */}
          <div className=" hidden md:block">
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center gap-2 w-44 py-3 bg-primary rounded-md hover:bg-primary/80 transition-all duration-300 ease-in-out group/btn1">
                <ShoppingCart className="w-5 h-5 text-white" />
                <h1 className="text-lg text-white font-light group-hover/btn1:font-bold transition-all">
                  Beli Sekarang
                </h1>
              </button>
              <button className="flex items-center justify-center gap-2 w-44 py-3 bg-background outline outline-foreground rounded-md hover:bg-foreground/5 transition-all duration-300 ease-in-out group/btn2">
                <Search className="w-5 h-5 text-primary" />
                <h1 className="text-lg text-primary font-light group-hover/btn2:font-bold transition-all">
                  Cek Produk
                </h1>
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
                className="flex items-center gap-3 text-lg font-semibold text-primary "
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
            <hr className="border-foreground/5 my-2" />
            <button className="w-full py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20">
              Cek Produk
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
