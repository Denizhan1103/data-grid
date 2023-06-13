import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// TODO: fix relative path
import MainLayout from "../layouts/main";
import { Main } from "../view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

const RouterProviderAdapter = () => {
  return <RouterProvider router={router} />;
};

const RouterViewAdapter = () => {
  return <Outlet />;
};

export { RouterViewAdapter as RouterView };
export default RouterProviderAdapter;
