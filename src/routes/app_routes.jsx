import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login.jsx";
import Sign_up from "../pages/sign_up.jsx";
import IndexSeller from "../pages/seller/index.jsx";
import Home from "../pages/buyer/home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/sign_up", element: <Sign_up /> },
  { path: "/index-seller", element: <IndexSeller /> },
  { path: "/home", element: <Home /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
