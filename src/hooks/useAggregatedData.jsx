import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

const useAggregatedData = (id) => {
    const axiosBase = useAxios()
    const { data: aggregatedData = {}, isLoading } = useQuery({
        queryKey: ['applicationData', id],
        queryFn: async () => {
            const res = await axiosBase.get(`/application/single-with-scolarship/${id}`)
            return res.data
        },
        enabled: !!id
    })
    return [aggregatedData, isLoading]
}

export default useAggregatedData