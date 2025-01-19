import { FaTrashAlt } from "react-icons/fa";
import Rating from 'react-rating-stars-component';
import Spinner from "../../../../components/Spinner";
import moment from 'moment'

const ReviewsTable = ({ reviews, loading, handleDelete }) => {
    return (
        <div className="overflow-x-auto">
            {
                loading ? (
                    <Spinner />
                ) : (
                    <table className="table table-zebra w-full min-w-max">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>University Name</th>
                                <th>Subject Category</th>
                                <th>Reviewer Image</th>
                                <th>Reviewer Name</th>
                                <th>Review Date</th>
                                <th>Rating</th>
                                <th>Comments</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews?.length > 0 ? (
                                reviews?.map((review, index) => (
                                    <tr key={review._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{review.universityName}</td>
                                        <td>{review.subjectCategory}</td>
                                        <td>
                                            <img
                                                src={review.userPhoto}
                                                alt={review.userName}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        </td>
                                        <td>{review.userName}</td>
                                        <td>{moment(review.reviewDate).format("YYYY-MM-DD")}</td>
                                        <td>
                                            <Rating
                                                value={review.rating}
                                                edit={false}
                                                size={20}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </td>
                                        <td>{review.review}</td>
                                        <td className="flex gap-2">
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn btn-sm bg-red-600 text-white flex items-center"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center text-gray-500">
                                        No reviews found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
};

export default ReviewsTable;
