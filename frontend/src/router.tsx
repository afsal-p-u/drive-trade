import { createBrowserRouter } from "react-router-dom";
import { Auth, Chat, ForgotPassword, Home, Login, Register, VehicleInfo, Vehicles } from "./pages";
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
      {
        path: '/chat',
        element: <Chat />
      },
    ]
  },
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
    ]
  },
]);

export default router