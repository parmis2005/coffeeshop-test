import { Leaf, MapPin, ShieldCheck, Sprout } from "lucide-react";

const ITEMS = [
  { icon: Sprout, label: "Fresh Roasts" },
  { icon: Leaf, label: "Vegan Friendly" },
  { icon: MapPin, label: "Urban Comfort" },
  { icon: ShieldCheck, label: "Fair Sourcing" },
];

export default function USPBar() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-20 overflow-hidden border-y border-line bg-[#fff9f2] py-4">
      <div className="flex w-max animate-marquee gap-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <item.icon className="h-5 w-5 text-accent" strokeWidth={2} />
            <span className="text-sm font-bold uppercase tracking-wide text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
