"use client";

import React, { useEffect, useState } from "react";

const LOADING_DURATION_MS = 1300;
const REVEAL_DURATION_MS = 600;
const STATUS_MESSAGES = [
  "Preparing fresh vibes",
  "Mixing signature flavors",
  "Plating visual experience",
];

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
  const [progress, setProgress] = useState(8);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return prev;
        const step = prev < 40 ? 4 : prev < 70 ? 3 : 2;
        return Math.min(prev + step, 92);
      });
    }, 90);

    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 480);

    const beginRevealTimer = setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      setPhase("revealing");
    }, LOADING_DURATION_MS);

    const unmountTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "unset";
    }, LOADING_DURATION_MS + REVEAL_DURATION_MS);

    return () => {
      clearInterval(progressTimer);
      clearInterval(statusTimer);
      clearTimeout(beginRevealTimer);
      clearTimeout(unmountTimer);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-100 overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center bg-[#f45b26] transition-opacity duration-300 ${
          phase === "revealing" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_35%),radial-gradient(circle_at_90%_85%,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0)_45%)]" />

        <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-8">
          <p className="font-barlow text-sm font-bold uppercase tracking-[0.32em] text-[#1f1f1f]">
            Mac And Yuk
          </p>
          <h1
            className="mt-4 text-center font-londrina text-6xl uppercase leading-[0.9] text-[#f8de22] drop-shadow-[4px_4px_0px_#171717] md:text-8xl"
            aria-live="polite"
          >
            Opening Store
          </h1>

          <p className="mt-6 min-h-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#fff7ec]">
            {STATUS_MESSAGES[statusIndex]}
          </p>

          <div className="mt-7 h-3 w-full overflow-hidden rounded-full border-2 border-[#171717] bg-[#171717]/15 p-[2px]">
            <div
              className="loading-progress h-full rounded-full bg-[#f8de22] shadow-[0_0_0_1px_#171717,inset_0_-2px_0_rgba(0,0,0,0.2)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-xs font-black tracking-[0.22em] text-[#171717]">
            {progress}%
          </p>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 origin-top bg-[#f7f2e8] shadow-[0_22px_48px_rgba(0,0,0,0.28)] ${
          phase === "revealing"
            ? "animate-[paper-unfold_600ms_cubic-bezier(0.28,0.84,0.42,1)_forwards]"
            : ""
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-18 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(23,23,23,0.06)_0px,rgba(23,23,23,0.06)_2px,transparent_2px,transparent_10px)] opacity-45" />
      </div>
    </div>
  );
}
