import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage, AuthPage, HomePage, NotesPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/notes",
    element: <NotesPage />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
