import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty, Pokemon, RAMDetails,PokemonDetails} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Veremos el loader......</div>,
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
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
