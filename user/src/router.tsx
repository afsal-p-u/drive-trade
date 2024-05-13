import { createBrowserRouter } from "react-router-dom";
import Layout from "./_layout";
import { Chat, Home, ItemView, Search } from "./pages";

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
        path: '/search',
        element: <Search />
      },
      {
        path: '/view',
        element: <ItemView />
      },
      {
        path: '/chat',
        element: <Chat />
      },
    ]
  },
]);

export default router