import { createBrowserRouter } from "react-router-dom";
import { Home, LandingPage, Searching } from "../pages";
import Layout from "../layouts/_layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/search",
        element: <Searching />
      },
      {
        path: "/home",
        element: <Home />
      }
    ]
  },
]);

export default router