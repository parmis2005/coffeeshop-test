"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#menu", label: "Menü" },
  { href: "#story", label: "Story" },
  { href: "#sustainability", label: "Nachhaltigkeit" },
  { href: "#locations", label: "Standorte" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 160 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-line px-5 py-3 backdrop-blur-md transition-all duration-300 ${
          scrolled || open ? "bg-[#fff9f2]/95 shadow-[0_18px_60px_rgba(36,24,16,0.12)]" : "bg-[#fff9f2]/80"
        }`}
      >
        <a href="#top" className="inline-flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-[#3a2417] font-display text-lg text-white">
            B
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <strong className="text-[0.96rem] tracking-wide">Bean & Bark</strong>
            <span className="text-[0.8rem] text-muted">coffee, bagels, community</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(143,78,43,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Reservieren
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Navigation öffnen"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-text lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 flex max-w-5xl flex-col gap-1 rounded-3xl border border-line bg-[#fff9f2] p-4 shadow-[0_18px_60px_rgba(36,24,16,0.12)] lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-text hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-white"
            >
              Reservieren
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
