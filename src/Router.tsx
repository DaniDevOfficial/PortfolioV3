import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";




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
        element: <Project />,
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
