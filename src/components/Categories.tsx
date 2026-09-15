"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, CupSoda, Croissant, Salad, Sandwich, Wine } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  { icon: Coffee, label: "Espresso", sub: "Kräftig & samtig", image: "/images/menu-espresso.png" },
  { icon: CupSoda, label: "Cold Brew", sub: "Sommerlich kalt", image: "/images/menu-cold-brew.png" },
  { icon: Sandwich, label: "Bagels", sub: "Herzhaft belegt", image: "/images/bagels.png" },
  { icon: Croissant, label: "Sweets", sub: "Süße Auszeit", image: "/images/sweets.png" },
  { icon: Salad, label: "Breakfast", sub: "Frisch & bunt", image: "/images/breakfast-bowl.png" },
  { icon: Wine, label: "Cocktails", sub: "Für den Abend", image: "/images/cocktails.png" },
];

export default function Categories() {
  return (
    <section className="relative py-20 sm:py-28" id="categories">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Entdecke unsere Auswahl</p>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Unsere <span className="text-accent">Kategorien</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.label}
              href="#menu"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-[#fff9f2] shadow-[0_10px_30px_rgba(36,24,16,0.08)]"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d130d]/85 via-[#1d130d]/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 p-4 text-center">
                <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent">
                  <cat.icon className="h-5 w-5" />
                </span>
                <div className="font-display text-xl tracking-wide text-white">{cat.label}</div>
                <div className="text-xs font-medium uppercase tracking-wide text-white/70">{cat.sub}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
