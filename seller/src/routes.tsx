import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import ZeroLayout from "./layout/zeroLayout";
import ContentLayout from "./layout/contentLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ContentLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: '/',
        element: <ZeroLayout />,
        children: [
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
]);

export default router;