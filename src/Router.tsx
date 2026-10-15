import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import { Projects } from "./pages/Projects";





const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // same path as parent: "/"
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectName",
        element: <Navigate to="/projects" replace />, // this will maybe be used later on
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
