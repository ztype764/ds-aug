import Samplepage2 from "../Components/Samplepage2";
import Category from "../page/Category";
import DisplayProducts from "../page/DisplayProducts";
import Products from "../page/Products";
import Samplepage from "../page/Sample page";
import TenderForm from "../page/TenderForm";
import UpdateBanner from "../page/UpdateBanner";
import UserData from "../page/UserData";
import VarientForm from "../page/Varient Form";

const routes = [
  { path: `${process.env.PUBLIC_URL}/sample-page`, Component: <Samplepage /> },
  { path: `${process.env.PUBLIC_URL}/sample-page2`, Component: <Samplepage2 /> },
  { path: `${process.env.PUBLIC_URL}/category`, Component: <Category /> },
  { path: `${process.env.PUBLIC_URL}/product`, Component: <Products /> },
  { path: `${process.env.PUBLIC_URL}/varient`, Component: <VarientForm /> },
  { path: `${process.env.PUBLIC_URL}/productData`, Component: <DisplayProducts /> },
  { path: `${process.env.PUBLIC_URL}/userData`, Component: <UserData /> },
  { path: `${process.env.PUBLIC_URL}/tender`, Component: <TenderForm/> },
  { path: `${process.env.PUBLIC_URL}/banner`, Component: <UpdateBanner/> }
];
export default routes;
