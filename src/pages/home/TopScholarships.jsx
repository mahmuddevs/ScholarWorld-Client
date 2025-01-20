import Card from "../../components/Card"
import SectionTitle from "../../components/SectionTitle"
import { Link } from 'react-router-dom'
import useAxios from "../../hooks/useAxios"
import { useQuery } from "@tanstack/react-query"
import Spinner from "../../components/Spinner"

const TopScholarships = () => {
    const axiosBase = useAxios()
    const { data: scholarships = [], isLoading } = useQuery({
        queryKey: ['top-scolarships'],
        queryFn: async () => {
            const res = await axiosBase.get(`/scholarship/top-scholarships`)
            return res.data
        }
    })
    return (
        <section id="top-scholarships" className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <SectionTitle
                heading="Top Scholarships for You"
                subHeading="Find the best scholarships to study at leading universities worldwide."
            />
            <div>
                {isLoading && <Spinner />}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full md:w-10/12 mx-auto gap-6">
                    {
                        scholarships?.map((scholarship) => {
                            return <Card key={scholarship._id} {...scholarship} />
                        })
                    }
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <Link to='/scholarships' className="btn rounded-xl border-0 bg-brand-primary hover:bg-brand-accent text-white px-8">All Scholarships</Link>
            </div>
        </section>
    )
}

export default TopScholarships