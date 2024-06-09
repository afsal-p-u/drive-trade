import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Searching } from "../pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Searching />,
  },
]);

export default router