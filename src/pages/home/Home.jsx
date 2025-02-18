import Title from "../../components/Title"
import ApplicationTips from "./ApplicationTips"
import Banner from "./Banner"
import BookAppointment from "./BookAppointment"
import FAQ from "./FAQ"
import NewsLetter from "./NewsLetter"
import SuccessStories from "./SuccessStories"
import TopScholarships from "./TopScholarships"

const Home = () => {
    return (
        <>
            <Title title="Home" />
            <Banner />
            <TopScholarships />
            <ApplicationTips />
            <SuccessStories />
            <BookAppointment />
            <FAQ />
            <NewsLetter />
        </>
    )
}

export default Home