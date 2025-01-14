import Card from "../../components/Card"
import SectionTitle from "../../components/SectionTitle"
import { Link } from 'react-router-dom'

const TopScolarships = () => {
    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <SectionTitle
                heading="Top Scholarships for You"
                subHeading="Find the best scholarships to study at leading universities worldwide."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full md:w-10/12 mx-auto gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="mt-8 flex justify-center">
                <Link to='/all-scolarships' className="btn rounded-xl border-0 bg-brand-primary hover:bg-brand-accent text-white px-8">All Scollarships</Link>
            </div>
        </section>
    )
}

export default TopScolarships