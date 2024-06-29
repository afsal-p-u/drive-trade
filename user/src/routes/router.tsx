import { createBrowserRouter } from "react-router-dom";
import { AboutUs, Chat, ContactUs, Home, LandingPage, Searching, VehicleView } from "../pages";
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
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
    ]
  },
]);

export default router