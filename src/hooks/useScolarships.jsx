import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useScolarships = (currentPage, searchQuery) => {
    const axiosBase = useAxios()
    const { data: scholarships = {}, isLoading, refetch } = useQuery({
        queryKey: ['scolarships', currentPage, searchQuery],
        queryFn: async () => {
            const res = await axiosBase.get(`/scolarship?page=${currentPage}&search=${searchQuery}`)
            return res.data
        }
    })

    const { scolarshipData, totalPages } = scholarships

    return [scolarshipData, totalPages, isLoading, refetch]
}

export default useScolarships