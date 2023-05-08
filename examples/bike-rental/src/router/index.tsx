import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { HomePage, BikePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/bike/:id",
    element: <BikePage />,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
