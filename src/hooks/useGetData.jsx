import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

const useGetData = (url) => {
    const axiosBase = useAxios()
    const { data: fetchedData = [], isLoading, refetch } = useQuery({
        queryKey: ['table-data', url],
        queryFn: async () => {
            const res = await axiosBase.get(url)
            return res.data
        }
    })

    return [fetchedData, isLoading, refetch]
}

export default useGetData