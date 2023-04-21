import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { GestorList } from "../components/GestorList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/gestor",
    element: <GestorList />,
  }
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };