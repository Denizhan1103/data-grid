import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// TODO: fix relative path
import MainLayout from "../layouts/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
