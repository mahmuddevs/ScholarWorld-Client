import { FaEye, FaComments, FaTrashAlt } from "react-icons/fa";
import Spinner from "../../../../components/Spinner";
import moment from 'moment'

const ApplicationTable = ({ applications, loading, handleDelete, handleShowModal, handleFeedBack, handleStatusChange }) => {
    return (
        <div className="overflow-x-auto max-w-full">
            <div className="w-full">
                {
                    loading ? (
                        <Spinner />
                    ) : (
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
                            </thead >
                            <tbody>
                                {applications.length > 0 ? (
                                    applications.map((application, index) => (
                                        <tr key={application._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td className="whitespace-nowrap">{application?.displayName}</td>
                                            <td className="whitespace-nowrap">{application?.universityName}</td>
                                            <td className="whitespace-nowrap">{application?.degree}</td>
                                            <td className="whitespace-nowrap">{application?.scholarshipCategory}</td>
                                            <td className="whitespace-nowrap">{application?.subjectCategory}</td>
                                            <td className="whitespace-nowrap">{application?.email}</td>
                                            <td className="whitespace-nowrap">{application?.phone}</td>
                                            <td className="whitespace-nowrap">{moment(application.applyDate).format("YYYY-MM-DD")}</td>
                                            <td>
                                                <select value={application?.status} onChange={(e) => { handleStatusChange(e, application._id) }} className="select select-bordered w-full max-w-xs">
                                                    <option value="">Select Status</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="processing">Processing</option>
                                                    <option value="approved">Approved</option>
                                                    <option value="canceled">Canceled</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div className="flex gap-2 items-center justify-center">
                                                    <button onClick={() => { handleShowModal(application?._id) }} className="btn btn-sm bg-brand-primary text-white flex items-center justify-center">
                                                        <FaEye />
                                                    </button>
                                                    <button onClick={() => { handleFeedBack(application?._id) }} className="btn btn-sm bg-brand-secondary text-white flex items-center justify-center">
                                                        <FaComments />
                                                    </button>
                                                    <button onClick={() => { handleDelete(application?._id) }} className="btn btn-sm bg-red-600 text-white flex items-center justify-center">
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
                        </table >
                    )
                }
            </div >
        </div >
    );
};

export default ApplicationTable;
