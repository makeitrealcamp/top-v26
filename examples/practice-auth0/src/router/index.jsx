import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HomePage, UserPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
