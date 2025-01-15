import SectionTitle from "../../components/SectionTitle"
import Title from "../../components/Title"
import ShowAll from "./ShowAll"

const Scolarships = () => {
    return (
        <>
            <Title title='All Scolarships' />
            <section className="w-11/12 md:container xl:w-9/12 mx-auto pt-24 lg:pt-36">
                <SectionTitle
                    heading='Explore All Scholarships'
                    subHeading='Find the perfect scholarship to support your educational journey.'
                />
            </section>
            <ShowAll />
        </>
    )
}

export default Scolarships