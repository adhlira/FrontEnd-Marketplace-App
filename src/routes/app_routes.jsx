import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login.jsx";
import Sign_up from "../pages/sign_up.jsx";
import IndexSeller from "../pages/seller/index.jsx";
import Home from "../pages/buyer/home.jsx";
import ProductSellerPage from "../pages/seller/products_page.jsx";
import DetailProductSellerPage from "../pages/seller/detail_product_page.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/sign_up", element: <Sign_up /> },
  { path: "/index-seller", element: <IndexSeller /> },
  { path: "/home", element: <Home /> },
  { path: "/products-seller", element: <ProductSellerPage /> },
  { path: "/product/user/:id", element: <DetailProductSellerPage /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
