import SectionTitle from '../../components/SectionTitle'
import ReactStars from 'react-rating-stars-component';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SuccessStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get("/success.json")
            .then(res => setStories(res.data))
    }, []);

    console.log(stories)

    return (
        <section className="w-11/12 md:container xl:w-9/12 mx-auto mb-14 lg:mb-24">
            <SectionTitle
                heading="Real Stories, Real Success"
                subHeading="Thousands of students have turned their dreams into reality with the help of our platform. Read their inspiring stories!"
            />
            <div>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                        768: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
                        1024: { slidesPerView: 4, spaceBetween: 40, centeredSlides: false },
                    }}
                    className="mySwiper"
                >
                    {stories?.map((story, index) => (
                        <SwiperSlide key={index} className="pb-14 h-full hover:cursor-grab">
                            <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 my-4 h-full flex flex-col py-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src={story.image}
                                        alt={story.name + ' image'}
                                        className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                                    />
                                </div>
                                <div className="px-6 py-2 text-center flex-1 flex flex-col justify-between">
                                    <h3 className="font-semibold text-xl text-brand-text">{story.name}</h3>
                                    <p className="text-sm text-gray-500">{story.location}</p>
                                    <div className="flex justify-center">
                                        <ReactStars count={5} value={story.rating} size={24} edit={false} activeColor="#ffd700" />
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base mt-2">
                                        {story.testimonial}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default SuccessStories