import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    const data = [
        {
            "title": "Prepare for Your Success Abroad!",
            "description": "Get a free study abroad preparation guide with every application. From packing tips to academic advice, we’ve got you covered!",
            "image": "/images/home/b3.jpg"
        },
        {
            "title": "Explore Top International Scholarships!",
            "description": "Discover the best scholarship opportunities around the world. Your dream university is just a click away!",
            "image": "/images/home/b1.jpg"
        },
        {
            "title": "Affordable Study Abroad Applications!",
            "description": "Apply to international universities with reduced fees. Start your journey today without breaking the bank!",
            "image": "/images/home/b2.jpg"
        }
    ]

    return (
        <section className='mb-14 lg:mb-24'>
            <Swiper
                loop
                modules={[Navigation, Autoplay]}
                navigation={{
                    enabled: window.innerWidth > 640,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper">
                {
                    data?.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <div
                                style={{ backgroundImage: `url(${slide.image})` }}
                                className='min-h-[55vh] md:min-h-[85vh] bg-cover bg-no-repeat bg-center flex justify-center items-center text-white'>
                                <div className='text-center bg-black/30 p-6 md:p-16 space-y-1.5 md:space-y-4'>
                                    <h1 className='text-2xl md:text-4xl font-bold drop-shadow-lg w-10/12 mx-auto'>{slide.title}</h1>
                                    <p className='text-sm md:text-lg font-medium w-full sm:w-9/12 mx-auto drop-shadow-lg'>{slide.description}</p>
                                    <a href='#top-scholarships' className='btn bg-brand-primary hover:bg-brand-accent border-0 text-white'>Apply Now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    )
}

export default Banner