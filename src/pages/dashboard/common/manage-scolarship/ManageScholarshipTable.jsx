import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageScholarshipTable = ({ scholarships }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full min-w-max">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Scholarship Name</th>
                        <th>University Name</th>
                        <th>Subject Category</th>
                        <th>Degree</th>
                        <th>Application Fees</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarships.length > 0 ? (
                        scholarships.map((scholarship, index) => (
                            <tr key={scholarship.id} className="hover">
                                <th>{index + 1}</th>
                                <td>{scholarship.scholarshipName}</td>
                                <td>{scholarship.universityName}</td>
                                <td>{scholarship.subjectCategory}</td>
                                <td>{scholarship.degree}</td>
                                <td>${scholarship.applicationFees}</td>
                                <td className="flex gap-2">
                                    <Link
                                        to={`/scholarships/${scholarship.id}`}
                                        className="btn btn-sm bg-brand-primary text-white"
                                    >
                                        <FaEye className="text-lg" />
                                    </Link>
                                    <button className="btn btn-sm bg-brand-secondary text-white">
                                        <FaEdit className="text-lg" />
                                    </button>
                                    <button className="btn btn-sm bg-red-600 text-white">
                                        <FaTrash className="text-lg" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center text-gray-500">
                                No scholarships found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageScholarshipTable;
