import Spinner from "../components/Spinner"
import useAuth from "../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"
import useUser from "../hooks/useUser"

const User = ({ children }) => {
    const { user, loading } = useAuth()
    const [userData, userLoading] = useUser({})

    const location = useLocation()

    if (loading || userLoading) {
        return <Spinner />
    }


    if (user && userData?.userType === 'user') {
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login' />
}

export default User