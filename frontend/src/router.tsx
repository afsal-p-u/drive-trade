import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, VehicleInfo, Vehicles } from "./pages";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/vehicles',
        element: <Vehicles />
      },
      {
        path: '/vehicle',
        element: <VehicleInfo />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
]);

export default router