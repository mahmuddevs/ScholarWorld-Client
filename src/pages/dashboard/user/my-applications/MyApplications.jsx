import { useRef, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useGetData from "../../../../hooks/useGetData";
import ApplicationTable from "./ApplicationTable";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import AddReviewModal from "./AddReviewModal";
import Title from "../../../../components/Title";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyApplications = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const reviewModal = useRef()
    const reviewForm = useRef()
    const [fetchedData, isLoading, refetch] = useGetData(`/application/my-applications/${user?.email}`)
    const [application, setApplication] = useState({})

    const [rating, setRating] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const resetForm = () => {
        setRating(0);
        setResetKey((prev) => prev + 1);
        reviewForm.current.reset();
        reviewModal.current.close();
    };

    const modalprops = { rating, resetKey, handleRatingChange, resetForm }


    const handleReviewModal = (appliction) => {
        reviewModal.current.showModal()
        setApplication(appliction)
    }

    const handleReviewSubmit = (e, rating) => {
        e.preventDefault()
        const review = e.target.review.value
        const userName = user?.displayName
        const userEmail = user?.email
        const userPhoto = user?.photoURL

        const { scholarshipName, universityName, scholarshipID, subjectCategory } = application

        const reviewData = { rating, review, scholarshipName, universityName, subjectCategory, scholarshipID, userPhoto, userName, userEmail }

        axiosSecure.post('/reviews/add-review', reviewData)
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (res.data.existing) {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Reviw Already Given",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                resetForm()
            })
    }

    const handleEdit = (id) => {
        axiosSecure.get(`/application/single/${id}`)
            .then((res) => {
                if (res.data.status !== 'pending') {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Can't edit. Edit the application is processing.",
                        showConfirmButton: false,
                        timer: 1500
                    }); s
                } else {
                    navigate(`/edit-application/${res?.data?._id}`)
                }
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/application/single/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }



    return (
        <div className="p-4">
            <Title title="My Applications" />
            <h1 className="text-2xl font-bold mb-4">Applications</h1>
            <AddReviewModal reviewModal={reviewModal} reviewForm={reviewForm} reviewSubmit={handleReviewSubmit} {...modalprops} />
            <ApplicationTable applications={fetchedData} loading={isLoading}
                handleDelete={handleDelete} handleEdit={handleEdit} reviewModal={handleReviewModal} />
        </div>
    );
}

export default MyApplications