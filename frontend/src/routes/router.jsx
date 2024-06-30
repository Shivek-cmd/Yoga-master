import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layout/MainLayout.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
