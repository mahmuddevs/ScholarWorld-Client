import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner";

const ManageScholarshipTable = ({ scholarships, loading, handleDelete }) => {
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
                                    <tr key={scholarship?._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{scholarship?.scholarshipName || 'N/A'}  </td>
                                        <td>{scholarship?.universityName || 'N/A'}  </td>
                                        <td>{scholarship?.subjectCategory || 'N/A'}  </td>
                                        <td>{scholarship?.degree || 'N/A'}  </td>
                                        <td>${scholarship?.applicationFees || 'N/A'}  </td>
                                        <td className="flex gap-2">
                                            <Link
                                                to={`/scholarship/${scholarship._id}`}
                                                className="btn btn-sm bg-brand-primary text-white"
                                            >
                                                <FaEye className="text-lg" />
                                            </Link>
                                            <button className="btn btn-sm bg-brand-secondary text-white">
                                                <FaEdit className="text-lg" />
                                            </button>
                                            <button onClick={() => { handleDelete(scholarship._id) }} className="btn btn-sm bg-red-600 text-white">
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
                )
            }

        </div>
    );
};

export default ManageScholarshipTable;
