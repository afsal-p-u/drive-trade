import { createBrowserRouter } from "react-router-dom";
import { Chat, Home, LandingPage, Searching, VehicleView } from "../pages";
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
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/view",
        element: <VehicleView />
      }
    ]
  },
]);

export default router