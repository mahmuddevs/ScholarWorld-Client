import Spinner from "../components/Spinner"
import useAuth from "../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"
import useUser from "../hooks/useUser"

const Admin = ({ children }) => {
    const { user, loading } = useAuth()
    const [userData, userLoading] = useUser({})

    const location = useLocation()

    if (loading || userLoading) {
        return <Spinner />
    }


    if (user && userData?.userType === 'admin') {
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login' />
}

export default Admin