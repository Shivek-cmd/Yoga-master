import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";
import Instructors from "../pages/Instructors/Instructors.jsx";
import Classes from "../pages/Classes/Classes.jsx";
import Home from "../pages/Home/Home.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
]);
