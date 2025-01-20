import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import useGetData from "../../../../hooks/useGetData"
import ReviewsTable from "./ReviewsTable"
import Swal from "sweetalert2"

const ManageReview = () => {
    const axiosSecure = useAxiosSecure()
    const [fetchedData, isLoading, refetch] = useGetData('/reviews')

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
                axiosSecure.delete(`/reviews/delete-review/${id}`)
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
            <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
            <ReviewsTable reviews={fetchedData} loading={isLoading} handleDelete={handleDelete} />
        </div>
    )
}

export default ManageReview