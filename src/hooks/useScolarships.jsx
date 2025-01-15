import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useScolarships = (currentPage) => {
    const axiosBase = useAxios()
    const { data: scholarships = {}, isLoading } = useQuery({
        queryKey: ['scolarships', currentPage],
        queryFn: async () => {
            const res = await axiosBase.get(`/scolarship?page=${currentPage}`)
            return res.data
        }
    })

    const { scolarshipData, totalPages } = scholarships

    return [scolarshipData, totalPages, isLoading]
}

export default useScolarships