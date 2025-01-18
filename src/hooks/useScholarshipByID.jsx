import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

const useScholarshipByID = (id) => {
    const axiosBase = useAxios()

    const { data: scholarship = {}, isLoading: scolarshipLoading } = useQuery({
        queryKey: ['single-scholarship', id],
        queryFn: async () => {
            const res = await axiosBase.get(`/scholarship/single/${id}`)
            return res.data
        },
        enabled: !!id
    })
    return [scholarship, scolarshipLoading]
}

export default useScholarshipByID