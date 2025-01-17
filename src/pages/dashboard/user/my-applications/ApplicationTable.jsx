import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ApplicationTable = ({ applications }) => {
    return (
        <div className="overflow-x-auto">
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
                    {applications.length > 0 ? (
                        applications.map((application, index) => (
                            <tr key={application.id} className="hover">
                                <th>{index + 1}</th>
                                <td className="hidden md:table-cell">{application.universityName}</td>
                                <td className="hidden md:table-cell">{application.universityAddress}</td>
                                <td className="whitespace-normal">{application.feedback || "N/A"}</td>
                                <td className="hidden sm:table-cell">{application.subjectCategory}</td>
                                <td>{application.appliedDegree}</td>
                                <td className="hidden lg:table-cell">${application.applicationFees}</td>
                                <td className="hidden lg:table-cell">${application.serviceCharge}</td>
                                <td>
                                    <span
                                        className={`badge ${application.status === "pending"
                                            ? "badge-warning"
                                            : application.status === "processing"
                                                ? "badge-info"
                                                : application.status === "completed"
                                                    ? "badge-success"
                                                    : "badge-error"
                                            }`}
                                    >
                                        {application.status}
                                    </span>
                                </td>
                                <td className="flex flex-wrap gap-2">
                                    <Link
                                        to={`/applications/${application.id}`}
                                        className="btn btn-sm bg-brand-primary text-white"
                                    >
                                        <FaEye />
                                    </Link>
                                    <button className="btn btn-sm bg-brand-secondary text-white">
                                        <FaEdit />
                                    </button>
                                    <button className="btn btn-sm bg-red-600 text-white">
                                        Cancel
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
        </div>
    );
};

export default ApplicationTable;
