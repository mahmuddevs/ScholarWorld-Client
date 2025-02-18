import { section } from "motion/react-client"
import { useState } from "react"
import { FaCalendar, FaClock, FaUser, FaEnvelope } from "react-icons/fa"
import Swal from "sweetalert2"

const BookAppointment = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const appointmentData = Object.fromEntries(formData)
        if (appointmentData) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Thank You ${appointmentData.name}. We Will Notify You Soon.`,
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset()
        }
    }

    return (
        <section className="bg-slate-300">
            <div className="w-11/12 md:container xl:w-7/12 mx-auto py-14 lg:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Book Your Appointment</h2>
                        <p className="text-lg text-gray-600">
                            Ready to take the next step? Book your appointment now and let us help you achieve your goals. Our expert
                            team is here to provide personalized service tailored to your needs. Don't wait, secure your spot today and
                            start your journey towards success!
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-lg shadow-xl p-6">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Schedule Now</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <FaUser className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <FaEnvelope className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <FaCalendar className="text-gray-400 mr-2" />
                                    <input
                                        type="date"
                                        name="date"
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                                >
                                    Book Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment

