import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Scolarships from "../pages/all-scolarships/Scolarships";
import PrivateAlt from "./PrivateAlt";
import ScolarshipDetails from "../pages/scolarship-details/ScolarshipDetails";
import Private from "./Private";
import Checkout from "../pages/checkout/Checkout";
import Application from "../pages/application/Application";
import Dashboard from "../layouts/Dashboard";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/scolarships',
                element: <Scolarships />
            },
            {
                path: '/scolarship/:id',
                element: <Private><ScolarshipDetails /></Private>
            },
            {
                path: '/checkout/:id',
                element: <Private><Checkout /></Private>
            },
            {
                path: '/application/:id',
                element: <Private><Application /></Private>
            }
        ]

    },
    {
        path: '/auth',
        element: <Auth />,
        errorElement: <Error />,
        children: [
            {
                path: '/auth',
                element: <Navigate to='/auth/login' />
            },
            {
                path: '/auth/login',
                element: <PrivateAlt><Login /></PrivateAlt>
            },
            {
                path: '/auth/register',
                element: <PrivateAlt><Register /></PrivateAlt>
            },
        ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard/user',
                element: <h1>working</h1>
            },
            {
                path: '/dashboard/user/my-applications',
                element: <h1>working</h1>
            },
            {
                path: '/dashboard/user',
                element: <h1>working</h1>
            },
        ]
    }
])


export default router