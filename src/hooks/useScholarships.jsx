import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useScholarships = (currentPage, searchQuery) => {
    const axiosBase = useAxios()
    const { data: scholarships = {}, isLoading, refetch } = useQuery({
        queryKey: ['scolarships', currentPage, searchQuery],
        queryFn: async () => {
            const res = await axiosBase.get(`/scholarship?page=${currentPage}&search=${searchQuery}`)
            return res.data
        }
    })

    const { scolarshipData, totalPages } = scholarships

    return [scolarshipData, totalPages, isLoading, refetch]
}

export default useScholarships