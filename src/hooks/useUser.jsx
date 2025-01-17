import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
import useAuth from "./useAuth"

const useUser = () => {
    const { user } = useAuth()
    const axiosBase = useAxios()

    const { data: userData = {}, isLoading: userLoading } = useQuery({
        queryKey: ['single-user', user?.email],
        queryFn: async () => {
            const res = await axiosBase.get(`/users/${user?.email}`)
            return res.data
        }
    })

    return [userData, userLoading]
}

export default useUser