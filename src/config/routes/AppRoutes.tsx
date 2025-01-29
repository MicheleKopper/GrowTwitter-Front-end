import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
