import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Spinner from "../../../../components/Spinner";

const ApplicationTable = ({ applications, loading, handleDelete, handleEdit }) => {
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
                                <th className="hidden md:table-cell">University Name</th>
                                <th className="hidden md:table-cell">Address</th>
                                <th>Feedback</th>
                                <th className="hidden sm:table-cell">Category</th>
                                <th>Degree</th>
                                <th className="hidden lg:table-cell">Fees</th>
                                <th className="hidden lg:table-cell">Service Charge</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.length > 0 ? (
                                applications.map((application, index) => (
                                    <tr key={application._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td className="hidden md:table-cell">{application?.universityName}</td>
                                        <td className="hidden md:table-cell">{application?.address}</td>
                                        <td className="whitespace-normal">{application?.feedback || "N/A"}</td>
                                        <td className="hidden sm:table-cell">{application?.subjectCategory}</td>
                                        <td>{application.degree}</td>
                                        <td className="hidden lg:table-cell">${application?.applicationFees}</td>
                                        <td className="hidden lg:table-cell">${application?.serviceCharge}</td>
                                        <td>
                                            <span
                                                className={`badge ${application?.status === "pending"
                                                    ? "badge-warning"
                                                    : application?.status === "processing"
                                                        ? "badge-info"
                                                        : application?.status === "completed"
                                                            ? "badge-success"
                                                            : "badge-error"
                                                    }`}
                                            >
                                                {application?.status}
                                            </span>
                                        </td>
                                        <td className="flex flex-wrap gap-2">
                                            <Link
                                                to={`/scholarship/${application?.scholarshipID}`}
                                                className="btn btn-sm bg-brand-primary text-white"
                                            >
                                                <FaEye />
                                            </Link>
                                            <button onClick={() => { handleEdit(application._id) }} className="btn btn-sm bg-brand-secondary text-white">
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => { handleDelete(application._id) }} className="btn btn-sm bg-red-600 text-white">
                                                <FaTrash />
                                            </button>
                                            <button className="btn btn-sm bg-accent text-white">
                                                Add Review
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-center text-gray-500">
                                        No applications found.
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

export default ApplicationTable;
