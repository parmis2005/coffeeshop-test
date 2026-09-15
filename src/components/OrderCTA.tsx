import Reveal from "./Reveal";

export default function OrderCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-[32px] bg-gradient-to-br from-accent to-[#3a2417] p-10 text-center shadow-[0_24px_60px_rgba(143,78,43,0.35)] sm:p-14">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Lust auf deinen nächsten Bean & Bark Moment?
          </h2>
          <p className="max-w-xl text-white/80">
            Entdecke unser Menü oder sichere dir direkt einen Platz für deinen nächsten
            Besuch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Menü entdecken</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Platz reservieren
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
