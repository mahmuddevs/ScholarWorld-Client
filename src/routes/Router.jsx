import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/home/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Scholarships from "../pages/all-scolarships/Scholarships";
import PrivateAlt from "./PrivateAlt";
import Private from "./Private";
import Checkout from "../pages/checkout/Checkout";
import Application from "../pages/application/Application";
import Dashboard from "../layouts/Dashboard";
import Error from "../pages/Error/Error";
import Profile from "../pages/dashboard/common/profile/Profile";
import ManageApplications from "../pages/dashboard/common/ManageApplications/ManageApplications";
import ManageUsers from "../pages/dashboard/admin/manage-users/ManageUsers";
import ManageReview from "../pages/dashboard/common/manage-review/ManageReview";
import DashboardHome from "../pages/dashboard/admin/home/DashboardHome";
import MyApplications from "../pages/dashboard/user/my-applications/MyApplications";
import MyReviews from "../pages/dashboard/user/my-reviews/MyReviews";
import ScholarshipDetails from "../pages/scolarship-details/ScholarshipDetails";
import AddScholarship from "../pages/dashboard/common/add-scolarship/AddScholarship";
import ManageScholarship from "../pages/dashboard/common/manage-scolarship/ManageScholarship";
import EditApplication from "../pages/edit-application/EditApplication";
import Admin from "./Admin";
import Moderator from "./Moderator";
import User from "./User";

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
                path: '/scholarships',
                element: <Scholarships />
            },
            {
                path: '/scholarship/:id',
                element: <Private><ScholarshipDetails /></Private>
            },
            {
                path: '/checkout/:id',
                element: <Private><Checkout /></Private>
            },
            {
                path: '/application/:id',
                element: <Private><Application /></Private>
            },
            {
                path: '/edit-application/:id',
                element: <Private><EditApplication /></Private>
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
                element: <Private><Profile /></Private>
            },
            {
                path: '/dashboard/my-applications',
                element: <User><MyApplications /></User>
            },
            {
                path: '/dashboard/my-reviews',
                element: <User><MyReviews /></User>
            },
            //admin routes
            {
                path: '/dashboard/home',
                element: <Admin><DashboardHome /></Admin>
            },
            {
                path: '/dashboard/admin-profile',
                element: <Admin><Profile /></Admin>
            },
            {
                path: '/dashboard/manage-users',
                element: <Admin><ManageUsers /></Admin>
            },
            //admin and moderator
            {
                path: '/dashboard/add-scholarship',
                element: <Moderator><AddScholarship /></Moderator>
            },
            {
                path: '/dashboard/manage-scholarship',
                element: <Moderator><ManageScholarship /></Moderator>
            },
            {
                path: '/dashboard/manage-applied-applications',
                element: <Moderator><ManageApplications /></Moderator>
            },
            {
                path: '/dashboard/manage-review',
                element: <Moderator><ManageReview /></Moderator>
            },
        ]
    }
])


export default router