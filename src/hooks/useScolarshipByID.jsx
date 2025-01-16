import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

const useScolarshipByID = (id) => {
    const axiosBase = useAxios()

    const { data: scolarship = {}, isLoading } = useQuery({
        queryKey: ['single-scolarship', id],
        queryFn: async () => {
            const res = await axiosBase.get(`/scolarship/single/${id}`)
            return res.data
        }
    })
    return [scolarship, isLoading]
}

export default useScolarshipByID