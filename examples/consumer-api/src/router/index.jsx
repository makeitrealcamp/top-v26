import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/Login";
import { GestorList } from "../components/GestorList";
import Upload from "../components/Upload";

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
  },
  {
    path: "/upload",
    element: <Upload />,
  }
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };