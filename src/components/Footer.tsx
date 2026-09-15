const LINKS = [
  { href: "#menu", label: "Menü" },
  { href: "#story", label: "Story" },
  { href: "#locations", label: "Standorte" },
  { href: "#contact", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d130d] py-14 text-[#f6efe7]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <strong className="font-display text-xl tracking-wide">Bean & Bark</strong>
          <p className="mt-2 max-w-xs text-sm text-white/60">
            Coffee Shop Experience mit Charakter, Ruhe und Qualität.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M14 8.5h2V5.5h-2c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5V19h3v-6h2l.5-3h-2.5V9c0-.3.2-.5.5-.5z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Bean & Bark. Alle Angaben sind Demo-Inhalte zu
        Vorführzwecken.
      </p>
    </footer>
  );
}
