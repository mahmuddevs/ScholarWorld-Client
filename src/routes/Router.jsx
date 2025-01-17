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
import Profile from "../pages/dashboard/common/profile/Profile";
import AddScolarship from "../pages/dashboard/common/add-scolarship/AddScolarship";
import ManageScolarship from "../pages/dashboard/common/manage-scolarship/ManageScolarship";
import ManageApplications from "../pages/dashboard/common/ManageApplications/ManageApplications";
import ManageUsers from "../pages/dashboard/admin/manage-users/ManageUsers";
import ManageReview from "../pages/dashboard/common/manage-review/ManageReview";
import DashboardHome from "../pages/dashboard/admin/home/DashboardHome";
import MyApplications from "../pages/dashboard/user/my-applications/MyApplications";
import MyReviews from "../pages/dashboard/user/my-reviews/MyReviews";

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
            // user routes
            {
                path: '/dashboard',
                element: <Navigate to='/dashboard/my-profile' />
            },
            {
                path: '/dashboard/my-profile',
                element: <Profile />
            },
            {
                path: '/dashboard/my-applications',
                element: <MyApplications />
            },
            {
                path: '/dashboard/my-reviews',
                element: <MyReviews />
            },
            // moderator routes
            {
                path: 'dashboard/applied-scholarship',
                element: <>all applied scolarships</>
            },
            //admin routes
            {
                path: '/dashboard/home',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/admin-profile',
                element: <Profile />
            },
            {
                path: '/dashboard/manage-scolarship',
                element: <ManageScolarship />
            },

            {
                path: '/dashboard/manage-users',
                element: <ManageUsers />
            },
            //common
            {
                path: '/dashboard/add-scolarship',
                element: <AddScolarship />
            },
            {
                path: '/dashboard/manage-scolarship',
                element: <ManageScolarship />
            },
            {
                path: '/dashboard/manage-applied-applications',
                element: <ManageApplications />
            },
            //profile for user and moderator
            {
                path: '/dashboard/manage-review',
                element: <ManageReview />
            },
        ]
    }
])


export default router