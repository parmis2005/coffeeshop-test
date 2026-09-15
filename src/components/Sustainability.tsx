import Reveal from "./Reveal";

const FEATURES = [
  {
    n: "01",
    title: "Regionale Bäckerei-Partnerschaft",
    text: "Frische Lieferung am Morgen, kurze Wege und konstant hohe Produktqualität.",
  },
  {
    n: "02",
    title: "Alternative Milks inklusive",
    text: "Hafer-, Soja- und Mandeldrink ohne Aufpreis für mehr Flexibilität und Komfort.",
  },
  {
    n: "03",
    title: "Reuse-First Verpackung",
    text: "Bestellungen zum Mitnehmen werden in langlebige, nachhaltigere Verpackungen gesetzt.",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-[#fff9f2] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-2">Nachhaltigkeit</p>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">Weniger Abfall, mehr Geschmack.</h2>
          <p className="mt-4 text-muted">
            Mehrwegbecher, pflanzenbasierte Milchalternativen, regionale Partner und
            sorgfältig geplante Warenströme sind Teil unseres Alltags.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.1}>
              <article className="h-full rounded-3xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(36,24,16,0.06)]">
                <span className="font-display text-2xl text-accent-2">{f.n}</span>
                <h3 className="mt-3 font-display text-lg text-text">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
