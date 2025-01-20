import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://scholar-world.vercel.app'
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, async function (error) {
        await logOut()
        return Promise.reject(error);
    })

    instance.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        const status = error?.response?.status
        if (status === 401 || status === 403) {
            navigate('/auth/login')
        }
        return Promise.reject(error);
    })

    return instance
}

export default useAxiosSecure