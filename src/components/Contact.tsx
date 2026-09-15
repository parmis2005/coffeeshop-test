import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fff9f2] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Kontakt</p>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Reservierungen, Catering oder Franchise-Anfragen.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Für Meetings, Events und größere Bestellungen planen wir individuell. Schreib
            uns oder ruf direkt an.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-8 shadow-[0_18px_60px_rgba(36,24,16,0.1)]">
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-text">
              Name
              <input
                type="text"
                placeholder="Dein Name"
                className="rounded-xl border border-line bg-[#fffaf6] px-4 py-3 text-sm font-normal text-text outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-text">
              E-Mail
              <input
                type="email"
                placeholder="name@beispiel.de"
                className="rounded-xl border border-line bg-[#fffaf6] px-4 py-3 text-sm font-normal text-text outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-text">
              Nachricht
              <textarea
                rows={4}
                placeholder="Worum geht es?"
                className="resize-none rounded-xl border border-line bg-[#fffaf6] px-4 py-3 text-sm font-normal text-text outline-none transition-colors focus:border-accent"
              />
            </label>
            <button
              type="button"
              className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(143,78,43,0.3)] transition-transform hover:-translate-y-0.5"
            >
              Anfrage senden
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
