import { useEffect, useRef, useState } from "react"
import useAuth from "../../../../hooks/useAuth"
import useAxios from "../../../../hooks/useAxios"
import useGetData from "../../../../hooks/useGetData"
import EditReviewModal from "./EditReviewModal"
import ReviewTable from "./ReviewTable"
import Swal from "sweetalert2"

const MyReviews = () => {
    const { user } = useAuth();
    const axiosBase = useAxios();
    const [fetchedData, isLoading, refetch] = useGetData(`/reviews/get-reviews/${user?.email}`);
    const [review, setReview] = useState({});
    const reviewModal = useRef();
    const reviewForm = useRef();
    const [rating, setRating] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    const resetForm = () => {
        setRating(0);
        setResetKey((prev) => prev + 1);
        reviewForm.current.reset()
        reviewModal.current.close()
    };

    const modalprops = { rating, resetKey, handleRatingChange, resetForm, review };

    const handleReviewModal = (review) => {
        setReview(review)
        setRating(review.rating)
        reviewModal.current.showModal()
    };

    const handleReviewSubmit = (e, rating) => {
        e.preventDefault()
        const reviewComment = e.target.review.value

        axiosBase.patch(`/reviews/update-review/${review?._id}`, { review: reviewComment, rating })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resetForm();
                    refetch()
                }
            });
    };

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
                axiosBase.delete(`/reviews/delete-review/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    });
            }
        })
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
            <EditReviewModal reviewModal={reviewModal} reviewForm={reviewForm} reviewSubmit={handleReviewSubmit} {...modalprops} />
            <ReviewTable reviews={fetchedData} loading={isLoading} handleDelete={handleDelete} handleReview={handleReviewModal} />
        </div>
    )
}

export default MyReviews;
