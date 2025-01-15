import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useScolarships = () => {
    const axiosBase = useAxios()
    const { data: scholarships, isLoading, refetch } = useQuery({
        queryKey: ['scolarships'],
        queryFn: async () => {
            const res = await axiosBase.get('/scolarship')
            return res.data
        }
    })

    return [scholarships, isLoading, refetch]
}

export default useScolarships