import Card from "../../components/Card"
import SectionTitle from "../../components/SectionTitle"

const TopScolarships = () => {
    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto">
            <SectionTitle
                heading="Top Scholarships for You"
                subHeading="Find the best scholarships to study at leading universities worldwide."
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default TopScolarships