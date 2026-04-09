"use client";

import React, { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Start fade out
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    // Unmount
    const timer2 = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-all duration-500 ease-in-out ${
        isFading ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <h1
        className="mt-6 text-5xl md:text-7xl font-bold font-londrina text-secondary uppercase tracking-widest animate-pulse"
        style={{ filter: "drop-shadow(4px 4px 0px #171717)" }}
      >
        Loading
      </h1>

      <div className="mt-8 flex gap-3">
        <div
          className="w-5 h-5 bg-white rounded-full animate-bounce delay-100 border-[3px] border-foreground shadow-[2px_2px_0px_#171717]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-5 h-5 bg-secondary rounded-full animate-bounce delay-200 border-[3px] border-foreground shadow-[2px_2px_0px_#171717]"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-5 h-5 bg-white rounded-full animate-bounce delay-300 border-[3px] border-foreground shadow-[2px_2px_0px_#171717]"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}
