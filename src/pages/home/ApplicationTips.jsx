import SectionTitle from "../../components/SectionTitle"
import { FaPencilAlt, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const ApplicationTips = () => {
    const tipsData = [
        {
            icon: <FaPencilAlt />,
            heading: "Tailor Your Application",
            description: "Make sure your application is personalized to each scholarship. Highlight relevant skills and experiences that match the scholarship's criteria."
        },
        {
            icon: <FaCalendarCheck />,
            heading: "Meet Deadlines",
            description: "Stay organized and ensure that all your documents are submitted before the deadline. Late submissions are often disqualified!"
        },
        {
            icon: <FaCheckCircle />,
            heading: "Proofread Your Application",
            description: "Ensure your essay and application are error-free. Typos or grammatical mistakes can make a poor impression on the selection committee."
        }
    ];

    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <SectionTitle
                heading="Scholarship Application Tips"
                subHeading="Boost your chances with these essential tips for a successful application."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    tipsData?.map((tip, index) => {
                        return <div key={index} className={`bg-card-accent flex flex-col items-center p-6 rounded-lg shadow-lg text-center ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                            <div className="text-brand-accent mb-4 text-4xl">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{tip.heading}</h3>
                            <p className="text-gray-600 mt-3 text-sm md:text-base">{tip.description}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default ApplicationTips