import Image from "next/image";
import Reveal from "./Reveal";

const IMAGES = [
  { src: "/images/hero-interior.png", alt: "Warmes Interior eines modernen Specialty-Coffee-Shops", caption: "Coffee Shop Atmosphere", wide: true },
  { src: "/images/drinks.png", alt: "Cappuccino und Cold Brew im warmen Licht", caption: "Signature Drinks" },
  { src: "/images/cafe-interior.png", alt: "Stilvoller Coffee-Shop-Tisch mit Cappuccino und Pflanzen", caption: "Coffee Moments" },
  { src: "/images/bagels.png", alt: "Artisan Bagel Sandwich und Croissant auf einem Keramikteller", caption: "Bagels & Snacks" },
  { src: "/images/sweets.png", alt: "Matcha Cake und Iced Matcha Latte in ästhetischer Präsentation", caption: "Sweet Treats" },
  { src: "/images/cocktails.png", alt: "Warmes Coffee-und-Cocktail-Stillleben", caption: "Cocktails" },
  { src: "/images/breakfast-bowl.png", alt: "Frühstücksbowl mit Früchten, Granola und Kaffee", caption: "Breakfast Bowls" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">Fotowelt</p>
        <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
          Bildwelten, die den Coffee-Shop lebendig machen.
        </h2>
        <p className="mt-4 text-muted">
          Warmes Licht, natürliche Farben und echte Produktmomente bringen Atmosphäre in
          die Seite und geben Getränken, Snacks und Specials mehr Präsenz.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 0.08}
            className={img.wide ? "col-span-2 sm:col-span-2" : ""}
          >
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[0_10px_30px_rgba(36,24,16,0.08)]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d130d]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {img.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
