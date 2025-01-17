import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

const useScholarshipByID = (id) => {
    const axiosBase = useAxios()

    const { data: scholarship = {}, isLoading } = useQuery({
        queryKey: ['single-scholarship', id],
        queryFn: async () => {
            const res = await axiosBase.get(`/scholarship/single/${id}`)
            return res.data
        }
    })
    return [scholarship, isLoading]
}

export default useScholarshipByID