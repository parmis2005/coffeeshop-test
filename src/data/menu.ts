export type MenuItem = {
  tag: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const MENU: MenuItem[] = [
  {
    tag: "Espresso",
    name: "House Blend Cappuccino",
    description: "Kräftig, samtig und mit feinporigem Milchschaum serviert.",
    price: "3,80 €",
    image: "/images/menu-espresso.jpg",
  },
  {
    tag: "Cold Brew",
    name: "Vanilla Almond Shaker",
    description: "Kaltextraktion, Vanille, Mandeldrink und ein cremiger Finish.",
    price: "5,20 €",
    image: "/images/menu-cold-brew.jpg",
  },
  {
    tag: "Bagel",
    name: "Truffle Mushroom Bagel",
    description: "Champignons, Kräutercreme, Rucola und leichter Trüffel-Akzent.",
    price: "6,40 €",
    image: "/images/bagels.jpg",
  },
  {
    tag: "Sweet Treat",
    name: "Salted Caramel Croissant",
    description: "Buttrig, knusprig, warm serviert und perfekt zum Nachmittagskaffee.",
    price: "4,20 €",
    image: "/images/menu-salted-caramel-croissant.jpg",
  },
];
