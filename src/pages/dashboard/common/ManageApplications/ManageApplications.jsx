import ApplicationTable from "./ApplicationTable";
import useGetData from "../../../../hooks/useGetData";
import Swal from 'sweetalert2'
import { useRef, useState } from "react";
import ShowDetailsModal from "./ShowDetailsModal";
import FeedbackModal from "./FeedbackModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Title from "../../../../components/Title";

const ManageApplications = () => {
    const [deadline, setDeadline] = useState(0)
    const [applied, setApplied] = useState(0)

    const [fetchedData, isLoading, refetch] = useGetData(`/application/all-applications?deadline=${deadline}&applied=${applied}`)

    const [details, setDetails] = useState({})
    const detailsRef = useRef()
    const feedbackRef = useRef()
    const feedbackFormRef = useRef()
    const axiosSecure = useAxiosSecure()

    const handleFeedbackSubmit = (e, id) => {
        e.preventDefault()
        const value = e.target.feedback.value
        axiosSecure.patch(`/application/update/${id}`, { feedback: value })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Feedback Sent Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    feedbackRef.current.close()
                    feedbackFormRef.current.reset()
                    refetch()
                }
            })
    }
    const handleFeedBack = (id) => {
        axiosSecure.get(`/application/single/${id}`)
            .then((res) => {
                if (res?.data) {
                    setDetails(res?.data)
                    feedbackRef.current.showModal()
                }
            })

    }

    const handleShowModal = (id) => {
        axiosSecure.get(`/application/single/${id}`)
            .then((res) => {
                if (res?.data) {
                    setDetails(res?.data)
                    detailsRef.current.showModal()
                }
            })
    }

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
                axiosSecure.delete(`/application/single/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Application has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    const handleStatusChange = (e, id) => {
        const status = e.target.value
        axiosSecure.patch(`/application/update/${id}`, { status })
            .then((res) => {
                if (res?.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })

    }

    const handleDeadline = (e) => {
        const value = e.target.value
        setDeadline(value)
        refetch()
    }
    const handleApplied = (e) => {
        const value = e.target.value
        setApplied(value)
        refetch()
    }


    console.log(deadline, applied)

    return (
        <div className="p-4">
            <Title title="Manage Applications" />
            <h1 className="text-2xl font-bold mb-4">Applications</h1>
            <FeedbackModal feedbackRef={feedbackRef} id={details?._id} handleFeedbackSubmit={handleFeedbackSubmit} formRef={feedbackFormRef} />
            <ShowDetailsModal detailsRef={detailsRef} {...details} />
            <div className="flex justify-end gap-4">
                <select onChange={handleDeadline} defaultValue="" className="select select-bordered w-full max-w-xs">
                    <option disabled value="">Sort By Deadline</option>
                    <option value="1">Low to High</option>
                    <option value="-1">High to Low</option>
                </select>
                <select onChange={handleApplied} defaultValue="" className="select select-bordered w-full max-w-xs">
                    <option disabled value="">Sort By Applied Date</option>
                    <option value="1">Low to High</option>
                    <option value="-1">High to Low</option>
                </select>
            </div>
            <ApplicationTable applications={fetchedData} loading={isLoading} handleDelete={handleDelete} handleShowModal={handleShowModal} handleFeedBack={handleFeedBack} handleStatusChange={handleStatusChange} />
        </div>
    )
}

export default ManageApplications