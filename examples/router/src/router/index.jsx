import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty, Pokemon, RAMDetails } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hhhh</div>,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/rickandmorty",
    element: <RickAndMorty />,
  },
  {
    path: "/rickandmorty/:id",
    element: <RAMDetails />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
