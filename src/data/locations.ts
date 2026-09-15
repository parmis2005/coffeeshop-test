export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
  hours: string[];
  perks: string;
  coords: [number, number];
};

export const LOCATIONS: Location[] = [
  {
    id: "berlin",
    name: "Berlin Mitte",
    street: "Torstraße 92",
    city: "10119 Berlin",
    hours: ["Mo - Fr: 07:00 - 19:00", "Sa - So: 08:00 - 18:00"],
    perks: "Free Wi-Fi, Seating, Pickup",
    coords: [52.5293, 13.4021],
  },
  {
    id: "hamburg",
    name: "Hamburg Eppendorf",
    street: "Eppendorfer Weg 181",
    city: "20253 Hamburg",
    hours: ["Mo - Fr: 07:30 - 18:30", "Sa: 08:00 - 18:00"],
    perks: "Outdoor Tables, Bakery Counter",
    coords: [53.5847, 9.9767],
  },
  {
    id: "muenchen",
    name: "München Glockenbach",
    street: "Fraunhoferstraße 28",
    city: "80469 München",
    hours: ["Mo - Fr: 07:00 - 20:00", "Sa - So: 08:00 - 19:00"],
    perks: "Order Ahead, Vegan Friendly",
    coords: [48.1257, 11.5717],
  },
];
