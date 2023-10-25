import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";
import { nanoid } from "nanoid";

const sublinks = [
  {
    pageId: nanoid(),
    page: "team",
    links: [
      {
        id: nanoid(),
        label: "Bakers",
        url: "/team/bakers",
      },
      {
        id: nanoid(),
        label: "Cake Decorators",
        url: "/team/decorators",
      },
      {
        id: nanoid(),
        label: "Pastry Chefs",
        url: "/team/pastry-chefs",
      },
      {
        id: nanoid(),
        label: "Designers",
        url: "/team/designers",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Selection",
    links: [
      {
        id: nanoid(),
        label: "Wedding Cakes",
        url: "/selection/wedding-cakes",
      },
      {
        id: nanoid(),
        label: "Custom Cakes",
        url: "/selection/custom-cakes",
      },
      {
        id: nanoid(),
        label: "Cupcakes Sets",
        url: "/selection/cupcakes",
      },
      {
        id: nanoid(),
        label: "Gourmet Cookies",
        url: "/selection/gourmet-cookies",
      },
    ],
  },
  {
    page: "events",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "Cake Artistry Classes",
        url: "/events/cake-artistry-classes",
      },
      {
        id: nanoid(),
        label: "Tasting Events",
        url: "/events/tasting-events",
      },
    ],
  },
  {
    page: "order",
    pageId: nanoid(),
    url: "/order/online-order",
    links: [
      {
        id: nanoid(),
        label: "Order Online",
        url: "/order/online-order",
      },
      {
        id: nanoid(),
        label: "Contact Us",
        url: "/order/contact",
      },
    ],
  },
];

export default sublinks;
