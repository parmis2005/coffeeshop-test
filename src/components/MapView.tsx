"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { Coffee } from "lucide-react";
import { LOCATIONS } from "@/data/locations";

const markerIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8f4e2b]/40" />
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#8f4e2b] shadow-lg">
        <Coffee className="h-4 w-4 text-white" />
      </span>
    </div>
  ),
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -18],
});

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 14, { duration: 1.2 });
  }, [target, map]);
  return null;
}

export default function MapView({ active }: { active: string | null }) {
  const target = LOCATIONS.find((l) => l.id === active)?.coords ?? null;

  return (
    <MapContainer center={[51.16, 10.45]} zoom={5.5} scrollWheelZoom={false} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo target={target} />
      {LOCATIONS.map((loc) => (
        <Marker key={loc.id} position={loc.coords} icon={markerIcon}>
          <Popup>
            <div>
              <strong className="font-display text-base">{loc.name}</strong>
              <br />
              {loc.street}, {loc.city}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
