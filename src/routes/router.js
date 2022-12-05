import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="home" />,
    },
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "services",
        element: <Home />,
    },
    {
        path: "blogs",
        element: <Home />,
    },
    {
        path: "contact",
        element: <Home />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
]);

export default router;