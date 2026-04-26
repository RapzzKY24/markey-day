"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { useState } from "react";
import ProductModal from "./ProductModal";

const PRODUCTS = [
  {
    id: 1,
    name: "Es Strawberry",
    price: 12000,
    category: "Minuman",
    image: "/product1.png",
    description: "Kesegaran buah strawberry asli dipadu dengan susu segar dan es yang dingin",
  },
  {
    id: 3,
    name: "Macaroni Mpruy",
    price: 15000,
    category: "Makanan",
    image: "/product3.png",
    description: "Macaroni pedas renyah untuk you, diolah dengan bumbu rahasia yang bikin nagih",
  },
  {
    id: 4,
    name: "Macaroni Schotel",
    price: 25000,
    category: "Makanan",
    image: "/product4.png",
    description: "Macaroni panggang dengan balutan saus creamy, daging, dan keju yang melimpah",
  },
  {
    id: 5,
    name: "Macaroni n Cheese",
    price: 25000,
    category: "Makanan",
    image: "/product5.png",
    description: "Sentuhan klasik macaroni dengan saus keju yang lumer dan gurih di setiap suapan",
  },
];

interface ProductCardProps {
  activeCategory: string;
}

const ProductCard = ({ activeCategory }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<(typeof PRODUCTS)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent, product: (typeof PRODUCTS)[0]) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleOpenModal = (product: (typeof PRODUCTS)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = PRODUCTS.filter(
    (product) => activeCategory === "Semua" || product.category === activeCategory
  );

  return (
    <div className="w-full relative min-h-[400px]">
      <motion.div 
        layout
        className="flex flex-nowrap gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto pb-12 pt-4 px-4 scrollbar-hide"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              onClick={() => handleOpenModal(product)}
              className="shrink-0 w-[240px] md:w-[300px] bg-white rounded-[2rem] p-4 shadow-xl shadow-neutral-200/50 group cursor-pointer border border-neutral-100 relative overflow-hidden"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-sm border border-primary/20">
                  {product.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-[200px] md:h-[260px] w-full flex items-center justify-center bg-neutral-50 rounded-[1.5rem] overflow-hidden transition-colors duration-500 group-hover:bg-primary/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 drop-shadow-xl p-6"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(product);
                    }}
                    className="p-3 bg-white text-primary rounded-2xl shadow-xl hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="p-3 bg-primary text-white rounded-2xl shadow-xl hover:bg-neutral-900 transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 px-2">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">Top Seller</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-800 font-barlow truncate">
                  {product.name}
                </h3>
                
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-400 font-medium">Harga</p>
                    <p className="text-lg font-black text-primary">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(product.price)}
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-neutral-900 text-white p-2.5 rounded-xl hover:bg-primary transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400"
        >
           <Image src="/logo.png" alt="Empty" width={100} height={100} className="opacity-20 mb-4" />
           <p className="font-barlow text-xl">Tidak ada produk di kategori ini.</p>
        </motion.div>
      )}

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductCard;
