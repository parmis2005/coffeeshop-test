import Counter from "./Counter";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const STATS = [
  { to: 2019, suffix: "", label: "gegründet mit Fokus auf Specialty Coffee" },
  { to: 36, suffix: "", label: "Stunden ruhige Nachbarschaftsatmosphäre pro Woche" },
  { to: 12, suffix: "", label: "vegane Optionen ohne Aufpreis verfügbar" },
];

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Unsere Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-text sm:text-5xl">
            <SplitText text="Ein Café mit klarer Haltung und einer starken, warmen Identität." />
          </h2>
          <p className="mt-6 text-muted">
            Bean & Bark verbindet präzise Kaffeezubereitung mit einem einladenden, urbanen
            Raumgefühl. Wir setzen auf ehrliche Zutaten, kurze Wege und ein Erlebnis, das
            morgens genauso gut funktioniert wie am Abend.
          </p>
          <p className="mt-4 text-muted">
            Das Ergebnis ist ein Ort, an dem Gäste nicht nur schnell etwas holen, sondern
            gern bleiben, arbeiten, lesen oder sich mit Freunden treffen.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 gap-6 rounded-3xl border border-line bg-[#fff9f2] p-8 shadow-[0_10px_30px_rgba(36,24,16,0.08)]">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl text-accent sm:text-4xl">
                  <Counter to={stat.to} suffix={stat.suffix} grouped={stat.to < 1000} />
                </div>
                <div className="mt-2 text-xs font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
