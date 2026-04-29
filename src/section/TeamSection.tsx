"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "Semua",
  "Leadership",
  "Creative",
  "Production",
  "Logistic",
  "Finance",
];

const TEAM_MEMBERS = [
  {
    name: "Mawan",
    role: "Team Leader",
    category: "Leadership",
    image: "/team/mawan.webp",
  },
  {
    name: "Adriyan",
    role: "Team Member",
    category: "Finance",
    image: "/team/adriyan.webp",
  },
  {
    name: "Fidi",
    role: "Team Member",
    category: "Logistic",
    image: "/team/fidi.webp",
  },
  {
    name: "Insang",
    role: "Team Member",
    category: "Creative",
    image: "/team/insang.webp",
  },
  {
    name: "Keysha",
    role: "Team Member",
    category: "Production",
    image: "/team/keysha.webp",
  },
  {
    name: "Ladea",
    role: "Team Member",
    category: "Production",
    image: "/team/ladea.webp",
  },
  {
    name: "Lexskuy",
    role: "Team Member",
    category: "Logistic",
    image: "/team/lexskuy.webp",
  },
  {
    name: "Payme",
    role: "Team Member",
    category: "Creative",
    image: "/team/payme.webp",
  },
  {
    name: "Ramfly",
    role: "Team Member",
    category: "Logistic",
    image: "/team/ramfly.webp",
  },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredMembers = TEAM_MEMBERS.filter(
    (member) => activeTab === "Semua" || member.category === activeTab,
  );

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-1 md:gap-4 mb-16 bg-white py-5 px-6 md:py-2 md:px-2 rounded-[2.5rem] md:rounded-full border border-neutral-100 max-w-[90%] md:max-w-max mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors z-10 w-fit`}
            >
              <span
                className={`relative z-10 whitespace-nowrap ${
                  activeTab === cat
                    ? "text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {cat}
              </span>
              {activeTab === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                layout
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col p-4 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative mb-4 aspect-4/5 w-full overflow-hidden rounded-2xl bg-neutral-100">
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1.5 bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors duration-300 group-hover:bg-primary/90 shadow-sm border border-white/10">
                      {member.category}
                    </span>
                  </div>

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/5 transition-colors duration-500 z-10" />
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold font-barlow text-neutral-900 leading-none">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-700">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
