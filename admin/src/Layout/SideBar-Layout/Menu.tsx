import { Grid,Image,ShoppingCart,Tag,UserCheck} from "react-feather";


const MENUITEMS = [
  {
    title: "Category",
    icon: <ShoppingCart/>,
    url: `${process.env.PUBLIC_URL}/category`,
  
  },
  {
    title: "Product Form",
    icon: <Tag/>,
    url: `${process.env.PUBLIC_URL}/product`,
  
  },
  {
    title: "Product",
    icon: <Grid />,
    url:`${process.env.PUBLIC_URL}/productData`
  },
  {
    title: "Varient Form",
    icon: <Tag/>,
    url:`${process.env.PUBLIC_URL}/varient`
  },
  {
    title: "User Data",
    icon: <UserCheck/>,
    url:`${process.env.PUBLIC_URL}/userData`
  },
  {
    title: "Tender",
    icon: <Tag/>,
    url:`${process.env.PUBLIC_URL}/tender`
  },
  {
    title: "Banner",
    icon: <Image/>,
    url:`${process.env.PUBLIC_URL}/banner`
  },
];

export default MENUITEMS;
