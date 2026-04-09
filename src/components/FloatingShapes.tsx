"use client";

import React, { useEffect, useState } from "react";

const Macaroni = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="90" height="90" className={className}>
    {/* Body */}
    <path
      d="M 20 80 Q 20 20 80 20"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="28"
      strokeLinecap="round"
    />
    <path
      d="M 20 80 Q 20 20 80 20"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="28"
      strokeLinecap="round"
      transform="translate(4, 4)"
      className="opacity-20"
    />
    {/* Cute Face */}
    <circle cx="38" cy="43" r="3.5" fill="#4B2110" />
    <circle cx="58" cy="33" r="3.5" fill="#4B2110" />
    <path
      d="M 44 46 Q 48 50 51 40"
      fill="none"
      stroke="#4B2110"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Blush */}
    <ellipse cx="32" cy="46" rx="3.5" ry="2" fill="#F472B6" />
    <ellipse cx="61" cy="38" rx="3.5" ry="2" fill="#F472B6" />
  </svg>
);

const Yakult = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="80" height="80" className={className}>
    {/* Bottle top */}
    <path
      d="M 35 15 L 65 15 L 65 25 Q 65 30 75 40 L 75 85 Q 75 95 65 95 L 35 95 Q 25 95 25 85 L 25 40 Q 35 30 35 25 Z"
      fill="#FDE0C1"
    />
    {/* Bottle bottom overlay red */}
    <path
      d="M 25 55 L 75 55 L 75 85 Q 75 95 65 95 L 35 95 Q 25 95 25 85 Z"
      fill="#EF4444"
    />
    {/* Highlight */}
    <path
      d="M 32 45 L 32 85"
      stroke="#ffffff"
      strokeOpacity="0.4"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Body wrapper white text/outline */}
    <rect x="35" y="65" width="30" height="15" rx="4" fill="#ffffff" />
    <text
      x="50"
      y="76"
      fill="#EF4444"
      fontSize="10"
      fontWeight="900"
      textAnchor="middle"
      fontFamily="sans-serif"
      letterSpacing="-0.5"
    >
      YUK
    </text>
    {/* Cute Face */}
    <circle cx="43" cy="35" r="3" fill="#4B2110" />
    <circle cx="57" cy="35" r="3" fill="#4B2110" />
    <path
      d="M 47 40 Q 50 43 53 40"
      fill="none"
      stroke="#4B2110"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Blush */}
    <circle cx="38" cy="37" r="2.5" fill="#F472B6" />
    <circle cx="62" cy="37" r="2.5" fill="#F472B6" />
    {/* Lid */}
    <ellipse cx="50" cy="15" rx="16" ry="3" fill="#D1D5DB" />
  </svg>
);

const Cheese = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="85" height="85" className={className}>
    {/* Main Wedge */}
    <path d="M 10 90 L 90 90 L 70 20 Z" fill="#FCD34D" />
    {/* 3D Side */}
    <path d="M 10 90 L 25 80 L 70 20 L 70 30 L 10 100 Z" fill="#FBBF24" />
    {/* Cheese holes */}
    <circle cx="40" cy="70" r="9" fill="#F59E0B" />
    <circle cx="70" cy="75" r="7" fill="#F59E0B" />
    <circle cx="60" cy="45" r="6" fill="#F59E0B" />
    <circle cx="30" cy="85" r="10" fill="#F59E0B" />
    {/* Cute Face */}
    <circle cx="45" cy="50" r="3.5" fill="#4B2110" />
    <circle cx="65" cy="50" r="3.5" fill="#4B2110" />
    <path
      d="M 50 55 Q 55 60 60 55"
      fill="none"
      stroke="#4B2110"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Blush */}
    <circle cx="39" cy="53" r="3" fill="#F472B6" />
    <circle cx="71" cy="53" r="3" fill="#F472B6" />
  </svg>
);

const StrawberryIce = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" width="95" height="95" className={className}>
    {/* Straw */}
    <rect
      x="42"
      y="0"
      width="8"
      height="40"
      fill="#FDA4AF"
      transform="rotate(15 45 0)"
    />
    <rect
      x="42"
      y="0"
      width="4"
      height="40"
      fill="#E11D48"
      transform="rotate(15 45 0)"
    />

    {/* Cup back lid */}
    <path d="M 20 30 Q 50 0 80 30 Z" fill="#E2E8F0" fillOpacity="0.8" />

    {/* Cup liquid */}
    <path d="M 25 35 L 75 35 L 65 95 L 35 95 Z" fill="#FECDD3" />
    <path d="M 30 35 L 70 35 L 63 95 L 37 95 Z" fill="#FDA4AF" />

    {/* Ice / Strawberries inside */}
    <circle cx="45" cy="65" r="7" fill="#E11D48" />
    <circle cx="60" cy="80" r="6" fill="#BE123C" />
    <circle cx="40" cy="85" r="5" fill="#E11D48" />
    <rect
      x="35"
      y="45"
      width="10"
      height="10"
      rx="2"
      fill="#FFE4E6"
      fillOpacity="0.6"
      transform="rotate(25 40 50)"
    />
    <rect
      x="60"
      y="55"
      width="12"
      height="12"
      rx="2"
      fill="#FFE4E6"
      fillOpacity="0.6"
      transform="rotate(-15 65 60)"
    />

    {/* Cup outline/glass reflection */}
    <path
      d="M 25 30 L 75 30 L 65 95 L 35 95 Z"
      fill="none"
      stroke="#ffffff"
      strokeOpacity="0.5"
      strokeWidth="3"
    />

    {/* Cute Face */}
    <circle cx="43" cy="55" r="3.5" fill="#4B2110" />
    <circle cx="57" cy="55" r="3.5" fill="#4B2110" />
    <path
      d="M 47 60 Q 50 65 53 60"
      fill="none"
      stroke="#4B2110"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Blush */}
    <circle cx="37" cy="58" r="3" fill="#F472B6" />
    <circle cx="63" cy="58" r="3" fill="#F472B6" />
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
      <div className=" absolute top-[75%] md:top-[80%] -left-2 md:left-[10%] lg:left-[15%] animate-[float_7s_ease-in-out_infinite_1s] opacity-90 drop-shadow-xl z-20">
        <Yakult className="rotate-[10deg] scale-75 md:scale-100 lg:scale-110 origin-center" />
      </div>

      {/* Cheese Float */}
      <div className="md:block hidden absolute top-[4%] md:top-[14%] lg:top-[20%] -right-2 md:right-[5%] lg:right-[15%] animate-[float_8s_ease-in-out_infinite_2s] opacity-90 drop-shadow-xl">
        <Cheese className="rotate-[25deg] scale-75 md:scale-100 lg:scale-125 origin-center" />
      </div>

      {/* Strawberry Ice Float */}
      <div className="absolute top-[65%] md:top-[70%] -right-4 md:right-[5%] lg:right-[10%] animate-[float_6.5s_ease-in-out_infinite_0.5s] opacity-90 drop-shadow-xl z-20">
        <StrawberryIce className="rotate-[-10deg] scale-75 md:scale-100 lg:scale-110 origin-center" />
      </div>
    </div>
  );
};
