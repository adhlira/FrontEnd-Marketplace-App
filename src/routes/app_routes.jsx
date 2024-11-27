import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login.jsx";

const router = createBrowserRouter([{ path: "/", element: <Login /> }]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
