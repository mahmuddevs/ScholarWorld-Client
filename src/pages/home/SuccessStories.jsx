import SectionTitle from "../../components/SectionTitle"

const SuccessStories = () => {
    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <SectionTitle
                heading="Real Stories, Real Success"
                subHeading="Thousands of students have turned their dreams into reality with the help of our platform. Read their inspiring stories!"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="lg:flex-col bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4">
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Emily Carter" className="w-24 h-24 rounded-full object-cover mr-4 self-start" />
                    <div>
                        <h3 className="font-semibold text-lg text-brand-text">Emily Carter</h3>
                        <p className="text-sm text-gray-500">USA to Canada</p>
                        <p className="text-gray-600 mt-2 text-base sm:text-sm md:text-base">"Thanks to this platform, I received a full scholarship for my Master's in Computer Science at the University of Toronto. The process was easy and stress-free!"</p>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4 lg:flex-col">
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Omar Ibrahim" className="w-24 h-24 rounded-full object-cover mr-4 self-start" />
                    <div>
                        <h3 className="font-semibold text-lg text-brand-text">Omar Ibrahim</h3>
                        <p className="text-sm text-gray-500">Egypt to Germany</p>
                        <p className="text-gray-600 mt-2 text-base sm:text-sm md:text-base">"I was awarded a scholarship to study Engineering in Germany. The platform helped me find the perfect scholarship and guided me through every step!"</p>
                    </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden flex lg:flex-col items-center p-4">
                    <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Isabella Martinez" className="w-24 h-24 rounded-full object-cover mr-4" />
                    <div>
                        <h3 className="font-semibold text-lg text-brand-text">Isabella Martinez</h3>
                        <p className="text-sm text-gray-500">Mexico to the UK</p>
                        <p className="text-gray-600 mt-2 text-base sm:text-sm md:text-base">"I never thought studying abroad would be possible for me, but this platform helped me secure a scholarship for my Master's in London. I'm forever grateful!"</p>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4 lg:flex-col ">
                    <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="David Williams" className="w-24 h-24 rounded-full object-cover mr-4 self-start" />
                    <div>
                        <h3 className="font-semibold text-lg text-brand-text">David Williams</h3>
                        <p className="text-sm text-gray-500">Australia to France</p>
                        <p className="text-gray-600 mt-2 text-base sm:text-sm md:text-base">"I found the ideal scholarship program in France with this platform. I couldn’t have asked for an easier process or more support along the way!"</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex lg:flex-col items-center p-4">
                    <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Chiamaka Okafor" className="w-24 h-24 rounded-full object-cover mr-4 self-start" />
                    <div>
                        <h3 className="font-semibold text-lg text-brand-text">Chiamaka Okafor</h3>
                        <p className="text-sm text-gray-500">Nigeria to Canada</p>
                        <p className="text-gray-600 mt-2 text-base sm:text-sm md:text-base">"I always dreamed of studying in Canada, and this platform made it possible. I received a full scholarship for my undergraduate studies at the University of Alberta!"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
