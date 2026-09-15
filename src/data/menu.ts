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
    image: "/images/menu-espresso.png",
  },
  {
    tag: "Cold Brew",
    name: "Vanilla Almond Shaker",
    description: "Kaltextraktion, Vanille, Mandeldrink und ein cremiger Finish.",
    price: "5,20 €",
    image: "/images/menu-cold-brew.png",
  },
  {
    tag: "Bagel",
    name: "Truffle Mushroom Bagel",
    description: "Champignons, Kräutercreme, Rucola und leichter Trüffel-Akzent.",
    price: "6,40 €",
    image: "/images/bagels.png",
  },
  {
    tag: "Sweet Treat",
    name: "Salted Caramel Croissant",
    description: "Buttrig, knusprig, warm serviert und perfekt zum Nachmittagskaffee.",
    price: "4,20 €",
    image: "/images/menu-salted-caramel-croissant.png",
  },
];
