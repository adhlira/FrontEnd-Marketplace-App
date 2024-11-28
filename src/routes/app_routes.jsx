import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login.jsx";
import Sign_up from "../pages/sign_up.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/sign_up", element: <Sign_up /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
