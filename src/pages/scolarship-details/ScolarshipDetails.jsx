import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReactStars from 'react-rating-stars-component';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import Spinner from '../../components/Spinner';
import moment from 'moment'

const ScholarshipDetails = () => {
    const { id } = useParams()
    const axiosBase = useAxios()
    const { data: scholarshipData = {}, isLoading } = useQuery({
        queryKey: ['single-scolarship', id],
        queryFn: async () => {
            const res = await axiosBase.get(`/scolarship/single/${id}`)
            return res.data
        }
    })

    const reviews = [
        {
            id: 1,
            name: "John Doe",
            image: "/placeholder.svg",
            date: "2023-05-15",
            rating: 4.5,
            comment: "Great opportunity! The application process was smooth."
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "/placeholder.svg",
            date: "2023-05-10",
            rating: 5,
            comment: "Excellent scholarship program. Highly recommended!"
        },
        {
            id: 3,
            name: "Bob Johnson",
            image: "/placeholder.svg",
            date: "2023-05-05",
            rating: 4,
            comment: "Good experience overall. Could improve communication."
        },
        {
            id: 4,
            name: "Bob Johnson",
            image: "/placeholder.svg",
            date: "2023-05-05",
            rating: 4,
            comment: "Good experience overall. Could improve communication."
        },
        {
            id: 5,
            name: "Bob Johnson",
            image: "/placeholder.svg",
            date: "2023-05-05",
            rating: 4,
            comment: "Good experience overall. Could improve communication."
        }
    ];

    return (
        <>
            <div className="w-11/12 md:container xl:w-9/12 mx-auto pt-28 md:pt-36 mb-14 md:mb-24">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {
                        isLoading && <Spinner />
                    }
                    {
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <img
                                    src={scholarshipData?.universityImage}
                                    alt="University Logo"
                                    className="w-16 h-16 object-contain mr-4"
                                />
                                <h1 className="text-3xl font-bold">{scholarshipData?.universityName}</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-lg"><strong>Category:</strong> {scholarshipData?.scholarshipCategory}</p>
                                    <p className="text-lg"><strong>Location:</strong> {scholarshipData?.location?.city},  {scholarshipData?.location?.country}</p>
                                    <p className="text-lg"><strong>Application Deadline:</strong> {scholarshipData?.applicationDeadline}</p>
                                    <p className="text-lg"><strong>Subject:</strong> {scholarshipData?.subjectCategory}</p>
                                </div>
                                <div>
                                    <p className="text-lg"><strong>Stipend:</strong> {scholarshipData?.stipend || 'N/A'}</p>
                                    <p className="text-lg"><strong>Post Date:</strong> {moment.utc(scholarshipData?.createdAt).local().format('YYYY-MM-DD')}</p>
                                    <p className="text-lg"><strong>Service Charge:</strong> {scholarshipData?.serviceCharge || 'N/A'}</p>
                                    <p className="text-lg"><strong>Application Fees:</strong> {scholarshipData?.applicationFees}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit deleniti minus reiciendis, in magnam officia nulla rem dolorem nemo. Beatae sequi voluptatem cum nisi, voluptates corrupti consectetur consequatur dolor?</p>
                            </div>
                            <div className="mt-6">
                                <Link to={`/checkout/${scholarshipData._id}`} className="bg-brand-primary text-white font-bold py-2 px-4 rounded hover:bg-brand-accent transition duration-300">
                                    Apply for Scholarship
                                </Link>
                            </div>
                        </div>
                    }
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
                    <Swiper
                        loop
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {reviews && reviews.length > 0 ? (
                            reviews.map((review) => (
                                <SwiperSlide key={review.id} className='pb-8'>
                                    <div className="bg-white shadow-lg rounded-lg p-6 min-h-56 flex flex-col justify-between">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={review.image || "/placeholder.svg"}
                                                alt={review.name}
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg">{review.name}</h3>
                                                <p className="text-sm text-gray-600">{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <ReactStars count={5} value={review.rating} size={24} edit={false} activeColor="#ffd700" />
                                        </div>
                                        <p className="text-gray-700 flex-grow">{review.comment}</p>
                                    </div>
                                </SwiperSlide>

                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ScholarshipDetails;
