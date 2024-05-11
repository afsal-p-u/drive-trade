import { createBrowserRouter } from "react-router-dom";
import Layout from "./_layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: []
  },
]);

export default router