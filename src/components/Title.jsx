import { Helmet } from "react-helmet-async"

const Title = ({ title = 'Loading...' }) => {
    return (
        <Helmet>
            <title>{`${title}`} - ScollarWorld</title>
        </Helmet>
    )
}

export default Title