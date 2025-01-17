import { FaEye, FaComments, FaTrashAlt } from "react-icons/fa";

const ApplicationTable = ({ applications }) => {
    return (
        <div className="overflow-x-auto max-w-full">
            <div className="w-full">
                <table className="table table-zebra w-full min-w-max">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>University Name</th>
                            <th>Degree</th>
                            <th>Scholarship Category</th>
                            <th>Subject Category</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Apply Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0 ? (
                            applications.map((application, index) => (
                                <tr key={application.id} className="hover">
                                    <th>{index + 1}</th>
                                    <td className="whitespace-nowrap">{application.name}</td>
                                    <td className="whitespace-nowrap">{application.universityName}</td>
                                    <td className="whitespace-nowrap">{application.degree}</td>
                                    <td className="whitespace-nowrap">{application.scholarshipCategory}</td>
                                    <td className="whitespace-nowrap">{application.subjectCategory}</td>
                                    <td className="whitespace-nowrap">{application.email}</td>
                                    <td className="whitespace-nowrap">{application.phone}</td>
                                    <td className="whitespace-nowrap">{application.applyDate}</td>
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
                                    <td>
                                        <div className="flex gap-2 items-center justify-center">
                                            <button className="btn btn-sm bg-brand-primary text-white flex items-center justify-center">
                                                <FaEye />
                                            </button>
                                            <button className="btn btn-sm bg-brand-secondary text-white flex items-center justify-center">
                                                <FaComments />
                                            </button>
                                            <button className="btn btn-sm bg-red-600 text-white flex items-center justify-center">
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="11" className="text-center text-gray-500">
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationTable;
