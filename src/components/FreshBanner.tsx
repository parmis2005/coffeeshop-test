import Image from "next/image";
import { Flame } from "lucide-react";
import Reveal from "./Reveal";

export default function FreshBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-accent/10 via-[#fff9f2] to-transparent p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="relative hidden h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:block">
              <Image src="/images/menu-espresso.png" alt="" fill sizes="64px" className="object-cover" />
            </span>
            <div className="flex items-center gap-3">
              <Flame className="h-6 w-6 shrink-0 text-accent" />
              <p className="text-sm text-text sm:text-base">
                Täglich frisch geröstet, täglich frisch serviert &mdash; direkt aus unserer Rösterei
                in die Tasse.
              </p>
            </div>
          </div>
          <a
            href="#menu"
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(143,78,43,0.3)] transition-transform hover:-translate-y-0.5"
          >
            Menü ansehen
          </a>
        </div>
      </Reveal>
    </section>
  );
}
