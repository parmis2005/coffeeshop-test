import Image from "next/image";
import { MENU } from "@/data/menu";
import Reveal from "./Reveal";

export default function Menu() {
  return (
    <section id="menu" className="relative bg-[#fff9f2] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Menü</p>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">Unsere Favoriten des Hauses</h2>
          <p className="mt-4 text-muted">
            Eine fokussierte Auswahl, klar kuratiert. Kein überladenes Sortiment, sondern
            Signature-Produkte mit hoher Qualität und hohem Wiedererkennungswert.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {MENU.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_10px_30px_rgba(36,24,16,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(36,24,16,0.16)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-accent">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-text">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{item.description}</p>
                  <strong className="mt-4 text-lg text-accent">{item.price}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
