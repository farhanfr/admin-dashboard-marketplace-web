import { IconMenuOrder, IconMessage, IconPackages, IconShoppingCart } from "@tabler/icons-react";
import {
  IconAperture,
  IconBox,
  IconBoxMultiple,
  IconBoxSeam,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconPackage,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
   {
    navlabel: true,
    subheader: "Dashboard Tenant",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Kelola Produk",
  },
  {
    id: uniqueId(),
    title: "Produk",
    icon: IconBox,
    href: "/product",
  },
  {
    id: uniqueId(),
    title: "Persediaan Produk",
    icon: IconPackages,
    href: "/s",
  },
  {
    navlabel: true,
    subheader: "Kelola Pesanan",
  },
  {
    id: uniqueId(),
    title: "Pesanan",
    icon: IconShoppingCart,
    href: "/order",
  },
  {
    navlabel: true,
    subheader: "Utilitas",
  },
  {
    id: uniqueId(),
    title: "Percakapan",
    icon: IconMessage,
    href: "/d",
  },
  // {
  //   navlabel: true,
  //   subheader: "Home",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Dashboard",
  //   icon: IconLayoutDashboard,
  //   href: "/",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Typography",
  //   icon: IconTypography,
  //   href: "/utilities/typography",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/utilities/shadow",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
