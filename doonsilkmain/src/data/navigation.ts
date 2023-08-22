import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";




export const MEGAMENU_TEMPLATES: NavItemType[] = [
 
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Page",
   
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    
  },
  
  


];




const OTHER_PAGE_CHILD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Fabrics",
  },{
    id: ncNanoId(),
    href: "/collection",
    name: "Waistcoats",
  },{
    id: ncNanoId(),
    href: "/collection",
    name: "Sarees",
  },
  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "Muffers",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Stoles",
  },

  {
    id: ncNanoId(),
    href: "/collection-2",
    name: "Shawls",
  },
 
];
export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "Main Site",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Categories",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
  
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
  },
  {
    id: ncNanoId(),
    href: "/tender",
    name: "Tender",
  },
 
 

];
