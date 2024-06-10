import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Searching } from "../pages";
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
      }
    ]
  },
]);

export default router