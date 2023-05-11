import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
    errorElement: <div> Hubo un error!!</div>
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
