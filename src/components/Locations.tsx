"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Clock, MapPin, Navigation } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import Reveal from "./Reveal";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#efe3d5] text-sm text-muted">
      Karte wird geladen...
    </div>
  ),
});

export default function Locations() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="locations" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Standorte</p>
        <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
          Finde deinen nächsten Bean & Bark Store.
        </h2>
        <p className="mt-4 text-muted">
          Klicke auf einen Standort, um ihn auf der Karte zu sehen &mdash; mit klaren
          Öffnungszeiten, Außenplätzen und schnellem Take-away-Service.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 0.08}>
              <button
                onClick={() => setActive(loc.id)}
                className={`group flex w-full flex-col gap-2 rounded-2xl border p-5 text-left transition-all ${
                  active === loc.id
                    ? "border-accent bg-accent/5 shadow-[0_10px_30px_rgba(143,78,43,0.12)]"
                    : "border-line bg-white hover:border-accent/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl text-text">{loc.name}</h3>
                  <Navigation
                    className={`h-4 w-4 shrink-0 transition-colors ${
                      active === loc.id ? "text-accent" : "text-muted/40"
                    }`}
                  />
                </div>
                <div className="flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {loc.street}, {loc.city}
                  </span>
                </div>
                <ul className="flex flex-col gap-1 text-sm text-muted">
                  {loc.hours.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-medium text-accent-2">{loc.perks}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="order-1 h-[380px] overflow-hidden rounded-3xl border border-line shadow-[0_18px_60px_rgba(36,24,16,0.12)] lg:order-2 lg:col-span-3 lg:h-auto lg:min-h-[480px]"
        >
          <MapView active={active} />
        </Reveal>
      </div>
    </section>
  );
}
