import { Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Lena M.",
    role: "Design Lead",
    text: "Elegant, ruhig und trotzdem lebendig. Genau so sollte ein moderner Coffee Shop wirken.",
  },
  {
    name: "Tom K.",
    role: "Freelancer",
    text: "Guter Kaffee, schneller Service und genug Platz für einen ganzen Arbeitstag.",
  },
  {
    name: "Amira B.",
    role: "Stammgast",
    text: "Die veganen Optionen sind genauso liebevoll gemacht wie alles andere. Fühlt sich an wie Wohnzimmer.",
  },
  {
    name: "Jonas R.",
    role: "Student",
    text: "Perfekter Ort zum Lernen: entspannte Atmosphäre, freundliches Team und richtig guter Cold Brew.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fff9f2] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Stimmen aus dem Alltag</p>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Das sagen unsere <span className="text-accent">Gäste</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(36,24,16,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(36,24,16,0.12)]">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent-soft text-accent-soft" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-display text-sm text-accent">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text">{review.name}</div>
                    <div className="text-xs text-muted">{review.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
