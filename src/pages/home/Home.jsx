import Title from "../../components/Title"
import ApplicationTips from "./ApplicationTips"
import Banner from "./Banner"
import SuccessStories from "./SuccessStories"
import TopScolarships from "./TopScolarships"

const Home = () => {
    return (
        <>
            <Title title="Home" />
            <Banner />
            <TopScolarships />
            <ApplicationTips />
            <SuccessStories />
        </>
    )
}

export default Home