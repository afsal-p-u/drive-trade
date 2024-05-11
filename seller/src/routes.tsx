import { createBrowserRouter } from "react-router-dom";
import { AddProduct, Home, Login, Products, Register } from "./pages";
import ZeroLayout from "./layout/ZeroLayout";
import ContentLayout from "./layout/ContentLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <ContentLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/chats",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/products",
                element: <Products />
            },
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