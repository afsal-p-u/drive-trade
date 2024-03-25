import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./pages";
import ZeroLayout from "./layout/zeroLayout";

const router = createBrowserRouter([
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