import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Scolarships from "../pages/all-scolarships/Scolarships";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-scolarships',
                element: <Scolarships />
            },
        ]

    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: '/auth',
                element: <Navigate to='/auth/login' />
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]

    },
])


export default router