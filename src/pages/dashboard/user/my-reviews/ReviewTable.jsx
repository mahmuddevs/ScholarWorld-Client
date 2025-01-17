import { FaEdit, FaTrash } from "react-icons/fa";

const ReviewTable = ({ reviews, onDelete, onEdit }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full min-w-max">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Scholarship Name</th>
                        <th>University Name</th>
                        <th>Review Comments</th>
                        <th>Review Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <tr key={review.id} className="hover">
                                <th>{index + 1}</th>
                                <td>{review.scholarshipName}</td>
                                <td>{review.universityName}</td>
                                <td className="whitespace-normal">{review.comments}</td>
                                <td>{new Date(review.date).toLocaleDateString()}</td>
                                <td>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            className="btn btn-sm bg-brand-primary text-white"
                                            onClick={() => onEdit(review.id)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="btn btn-sm bg-red-600 text-white"
                                            onClick={() => onDelete(review.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center text-gray-500">
                                No reviews available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;
