"use client";

import React, { useEffect, useState } from "react";

const Macaroni = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="90" height="90" className={className}>
    {/* Macaroni 3D Body */}
    <path
      d="M 20 70 C 20 20, 80 20, 80 70"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="32"
      strokeLinecap="round"
    />
    {/* Macaroni Inner Highlight for 3D effect */}
    <path
      d="M 20 70 C 20 20, 80 20, 80 70"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M 24 68 C 24 28, 76 28, 76 68"
      fill="none"
      stroke="#FDE68A"
      strokeWidth="6"
      strokeLinecap="round"
      className="opacity-50"
    />

    {/* Cute Face */}
    <circle cx="38" cy="45" r="4" fill="#4B2110" />
    <circle cx="62" cy="45" r="4" fill="#4B2110" />
    <path
      d="M 45 48 Q 50 53 55 48"
      fill="none"
      stroke="#4B2110"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Blush */}
    <ellipse cx="30" cy="48" rx="4" ry="2.5" fill="#F472B6" />
    <ellipse cx="70" cy="48" rx="4" ry="2.5" fill="#F472B6" />
  </svg>
);

const Yakult = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="80" height="80" className={className}>
    {/* Authentic Yakult Bottle Shape */}
    {/* Base bottle */}
    <path
      d="M 35 20 L 65 20 L 65 30 C 65 38 55 42 55 50 C 55 55 68 60 68 90 C 68 93 65 95 50 95 C 35 95 32 93 32 90 C 32 60 45 55 45 50 C 45 42 35 38 35 30 Z"
      fill="#FDE0C1"
    />
    {/* Red label area */}
    <path
      d="M 32 65 C 32 60 45 58 50 58 C 55 58 68 60 68 65 L 68 90 C 68 93 65 95 50 95 C 35 95 32 93 32 90 Z"
      fill="#EF4444"
    />
    {/* Foil Lid */}
    <ellipse cx="50" cy="20" rx="16" ry="4" fill="#D1D5DB" />
    <path d="M 34 20 L 66 20 L 64 24 L 36 24 Z" fill="#9CA3AF" />

    {/* Yakult Text Label */}
    <rect x="38" y="70" width="24" height="12" rx="3" fill="#ffffff" />
    <text
      x="50"
      y="79"
      fill="#EF4444"
      fontSize="9"
      fontWeight="900"
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      YUK
    </text>

    {/* Bottle Highlight */}
    <path
      d="M 38 35 C 38 38 48 42 48 50 C 48 52 46 55 38 65"
      stroke="#ffffff"
      strokeOpacity="0.6"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Cute Face */}
    <circle cx="43" cy="42" r="3.5" fill="#4B2110" />
    <circle cx="57" cy="42" r="3.5" fill="#4B2110" />
    <path
      d="M 47 46 Q 50 49 53 46"
      fill="none"
      stroke="#4B2110"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Blush */}
    <circle cx="37" cy="45" r="3" fill="#F472B6" />
    <circle cx="63" cy="45" r="3" fill="#F472B6" />
  </svg>
);

const Cheese = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="85" height="85" className={className}>
    {/* Side Depth */}
    <path d="M 15 85 L 30 70 L 80 20 L 80 40 L 15 95 Z" fill="#D97706" />
    {/* Top Wedge */}
    <path d="M 15 85 L 80 20 L 90 25 L 25 90 Z" fill="#FDE68A" />
    {/* Front Face */}
    <path d="M 15 85 L 25 90 L 85 90 L 80 20 Z" fill="#FCD34D" />

    {/* Cheese holes with depth */}
    <circle cx="45" cy="75" r="8" fill="#D97706" />
    <circle cx="43" cy="73" r="8" fill="#F59E0B" />

    <circle cx="65" cy="50" r="10" fill="#D97706" />
    <circle cx="63" cy="48" r="10" fill="#F59E0B" />

    <circle cx="75" cy="80" r="6" fill="#D97706" />
    <circle cx="73" cy="78" r="6" fill="#F59E0B" />

    <circle cx="30" cy="55" r="5" fill="#D97706" />
    <circle cx="28" cy="53" r="5" fill="#F59E0B" />

    {/* Cute Face */}
    <circle cx="45" cy="55" r="4" fill="#4B2110" />
    <circle cx="65" cy="65" r="4" fill="#4B2110" />
    <path
      d="M 50 63 Q 55 68 60 60"
      fill="none"
      stroke="#4B2110"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Blush */}
    <ellipse
      cx="38"
      cy="58"
      rx="4"
      ry="2.5"
      fill="#F472B6"
      transform="rotate(15 38 58)"
    />
    <ellipse
      cx="72"
      cy="68"
      rx="4"
      ry="2.5"
      fill="#F472B6"
      transform="rotate(15 72 68)"
    />
  </svg>
);

const EsTeh = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="95" height="95" className={className}>
    {/* Straw */}
    <rect
      x="42"
      y="5"
      width="8"
      height="40"
      fill="#EF4444"
      transform="rotate(15 46 25)"
    />
    <path
      d="M 50 15 L 65 5"
      stroke="#EF4444"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Cup Back Glass */}
    <path
      d="M 25 30 L 75 30 L 70 95 L 30 95 Z"
      fill="#F1F5F9"
      fillOpacity="0.5"
    />

    {/* Es Teh Liquid */}
    <path d="M 26 40 L 74 40 L 69 93 L 31 93 Z" fill="#92400E" />
    <path d="M 26 40 C 40 45 60 35 74 40 L 74 45 L 26 45 Z" fill="#B45309" />

    {/* Ice Cubes */}
    <rect
      x="35"
      y="45"
      width="15"
      height="15"
      rx="3"
      fill="#FEF3C7"
      fillOpacity="0.5"
      transform="rotate(15 42 52)"
    />
    <rect
      x="55"
      y="55"
      width="12"
      height="12"
      rx="3"
      fill="#FEF3C7"
      fillOpacity="0.5"
      transform="rotate(-20 61 61)"
    />
    <rect
      x="40"
      y="75"
      width="18"
      height="18"
      rx="3"
      fill="#FEF3C7"
      fillOpacity="0.5"
      transform="rotate(45 49 84)"
    />

    {/* Lemon Slice (Bonus!) */}
    <path
      d="M 74 45 A 15 15 0 0 1 60 30"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M 74 45 A 15 15 0 0 1 60 30"
      fill="none"
      stroke="#FEF08A"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Cup Front Glass reflection */}
    <path
      d="M 25 30 L 75 30 L 70 95 L 30 95 Z"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M 32 35 L 35 85"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Cute Face */}
    <circle cx="43" cy="65" r="3.5" fill="#4B2110" />
    <circle cx="57" cy="65" r="3.5" fill="#4B2110" />
    <path
      d="M 47 70 Q 50 75 53 70"
      fill="none"
      stroke="#4B2110"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Blush */}
    <circle cx="36" cy="68" r="3" fill="#F472B6" />
    <circle cx="64" cy="68" r="3" fill="#F472B6" />
  </svg>
);

export const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Macaroni Float */}
      <div className="md:block hidden absolute top-[2%] md:top-[12%] lg:top-[18%] -left-4 md:left-[5%] lg:left-[10%] animate-[float_6s_ease-in-out_infinite] opacity-90 drop-shadow-xl">
        <Macaroni className="rotate-[-15deg] scale-75 md:scale-100 lg:scale-125 origin-center" />
      </div>

      {/* Yakult Float */}
      <div className="absolute top-[75%] md:top-[80%] -left-2 md:left-[10%] lg:left-[15%] animate-[float_7s_ease-in-out_infinite_1s] opacity-90 drop-shadow-xl z-20">
        <Yakult className="rotate-[10deg] scale-75 md:scale-100 lg:scale-110 origin-center" />
      </div>

      {/* Cheese Float */}
      <div className="md:block hidden absolute top-[4%] md:top-[14%] lg:top-[20%] -right-2 md:right-[5%] lg:right-[15%] animate-[float_8s_ease-in-out_infinite_2s] opacity-90 drop-shadow-xl">
        <Cheese className="rotate-[25deg] scale-75 md:scale-100 lg:scale-125 origin-center" />
      </div>

      {/* Es Teh Float */}
      <div className="absolute top-[65%] md:top-[70%] -right-4 md:right-[5%] lg:right-[10%] animate-[float_6.5s_ease-in-out_infinite_0.5s] opacity-90 drop-shadow-xl z-20">
        <EsTeh className="rotate-[-10deg] scale-75 md:scale-100 lg:scale-110 origin-center" />
      </div>
    </div>
  );
};
