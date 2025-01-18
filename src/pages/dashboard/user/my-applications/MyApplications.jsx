import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import useGetData from "../../../../hooks/useGetData";
import ApplicationTable from "./ApplicationTable";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const MyApplications = () => {
    const { user } = useAuth()
    const axiosBase = useAxios()
    const navigate = useNavigate()
    const [fetchedData, isLoading, refetch] = useGetData(`/application/my-applications/${user?.email}`)

    const handleEdit = (id) => {
        axiosBase.get(`/application/single/${id}`)
            .then((res) => {
                if (res.data.status !== 'pending') {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Can't edit.  Edit the application is processing.",
                        showConfirmButton: false,
                        timer: 1500
                    }); s
                } else {
                    navigate(`/edit-application/${res?.data?._id}`)
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
                axiosBase.delete(`/application/single/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Applications</h1>
            <ApplicationTable applications={fetchedData} loading={isLoading}
                handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
}

export default MyApplications