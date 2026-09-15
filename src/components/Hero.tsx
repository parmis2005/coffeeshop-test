"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Wifi } from "lucide-react";
import SplitText from "./SplitText";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-36 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-44"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft"
        >
          Specialty Coffee in warmem Premium-Design
        </motion.p>

        <h1 className="mt-5 break-words font-display text-4xl leading-[1.05] text-text sm:text-5xl lg:text-5xl xl:text-6xl">
          <SplitText text="Ein Coffee Shop" delay={0.1} />
          <br />
          <SplitText text="mit Wohnzimmergefühl." delay={0.35} className="text-accent" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
        >
          Frisch gerösteter Kaffee, handgefertigte Bagels, saisonale Signatures und ein
          Ort für fokussierte Arbeit, entspannte Gespräche und kleine Auszeiten im Alltag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent-soft text-accent-soft" />
            ))}
          </div>
          <span className="text-sm font-semibold text-muted">4.8 · 900+ Bewertungen</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <a
            href="#menu"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_18px_40px_rgba(143,78,43,0.35)] transition-transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Menü entdecken</span>
          </a>
          <a href="#locations" className="text-sm font-bold text-text underline underline-offset-4">
            Store finden
          </a>
        </motion.div>
      </div>

      <motion.div style={{ y: contentY }} className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_18px_60px_rgba(36,24,16,0.12)]"
        >
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image
              src="/images/hero-interior.png"
              alt="Warmes Interior eines modernen Specialty-Coffee-Shops"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute -top-5 left-6 flex items-center gap-2 rounded-full border border-line bg-[#fffaf6]/95 px-4 py-2 text-xs font-bold text-text shadow-[0_10px_30px_rgba(36,24,16,0.12)] backdrop-blur-sm"
        >
          <Wifi className="h-4 w-4 text-accent-2" />
          Free Wi-Fi
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="absolute -bottom-8 right-4 w-64 rounded-3xl border border-line bg-[#fffaf6] p-5 shadow-[0_18px_60px_rgba(36,24,16,0.18)] sm:right-8"
        >
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-accent">
            Heute empfohlen
          </span>
          <h2 className="mt-2 font-display text-xl text-text">Cherry Cloud Latte</h2>
          <p className="mt-1 text-xs text-muted">Espresso, Kirschsirup, Hafermilch und cremiger Cold Foam.</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <strong className="text-accent">4,90 €</strong>
            <span className="text-xs text-muted">mit Hafermilch inklusive</span>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-accent-soft/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 -z-10 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />
      </motion.div>
    </section>
  );
}
