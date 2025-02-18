import Title from "../../components/Title"
import ApplicationTips from "./ApplicationTips"
import Banner from "./Banner"
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
            <NewsLetter />
        </>
    )
}

export default Home