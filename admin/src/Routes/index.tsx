import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import PrivateRoute from "./PrivateRoute";
import Logins from "../Auth";

const Routers = () => {
  const login = localStorage.getItem("login");

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {login ? (
          <>
            <Route path={`${process.env.PUBLIC_URL}`} element={<Navigate to={`${process.env.PUBLIC_URL}/category`} />}/>
            <Route
              path={`/`}
              element={
                <Navigate to={`${process.env.PUBLIC_URL}/category`} />
              }
            />
          </>
        ) : (
          ""
        )}
        <Route path={"/"} element={<PrivateRoute />}>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Logins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
