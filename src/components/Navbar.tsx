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
import { motion, AnimatePresence } from "framer-motion";
import CartOverlay from "./CartOverlay";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Product", href: "/products", icon: ShoppingBag },
  { name: "Team", href: "/team", icon: Users },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-white">
      <nav className="w-full backdrop-blur-md px-5 py-3 border-b-3 border-b-black shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          {/* header */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 md:w-16 lg:w-20 lg:h-20">
              <Image
                src="/logo.png"
                alt="Logo Mac And Yuk"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-barlow tracking-tight text-primary transition-colors">
              Mac And Yuk
            </h1>
          </Link>
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-lg lg:text-xl text-primary/80 transition-colors font-semibold hover:text-primary"
                >
                  <link.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* button desktop */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center gap-2 w-32 xl:w-44 py-2 xl:py-3 bg-background outline outline-foreground rounded-md hover:bg-foreground/5 transition-all duration-300 ease-in-out group/btn2"
              >
                <Search className="w-4 h-4 xl:w-5 xl:h-5 text-primary" />
                <h1 className="text-sm xl:text-lg text-primary font-light group-hover/btn2:font-bold transition-all whitespace-nowrap">
                  Cek Produk
                </h1>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center gap-2 px-4 md:w-32 xl:w-44 py-2 xl:py-3 bg-primary rounded-md hover:bg-primary/80 shadow-md transition-all"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <h1 className="hidden md:block text-sm xl:text-lg text-white font-light transition-all whitespace-nowrap">
                Keranjang
              </h1>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs font-bold w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            {/* mobile & small tablet toggle */}
            <div className="md:hidden block">
              <button onClick={handleClick} className="p-2">
                {isOpen ? (
                  <XIcon className="w-8 h-8" />
                ) : (
                  <MenuIcon className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-foreground/5 rounded-2xl p-6 shadow-xl md:hidden flex flex-col gap-4 z-40"
            >
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
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Keranjang ({totalItems})
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
