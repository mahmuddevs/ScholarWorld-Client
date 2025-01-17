import { FaTrashAlt } from "react-icons/fa";
import Rating from 'react-rating-stars-component';

const ReviewsTable = ({ reviews }) => {
    return (
        <div className="overflow-x-auto">
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
                            <tr key={review.id} className="hover">
                                <th>{index + 1}</th>
                                <td>{review.universityName}</td>
                                <td>{review.subjectCategory}</td>
                                <td>
                                    <img
                                        src={review.reviewerImage}
                                        alt={review.reviewerName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td>{review.reviewerName}</td>
                                <td>{review.reviewDate}</td>
                                <td>
                                    <Rating
                                        value={review.rating}
                                        readOnly
                                        size={20}
                                        activeColor="#ffd700"
                                    />
                                </td>
                                <td>{review.comments}</td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => handleDeleteReview(review.id)}
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
        </div>
    );
};

export default ReviewsTable;
