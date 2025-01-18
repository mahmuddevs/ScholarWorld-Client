import { useRef } from "react";
import useAxios from "../../../../hooks/useAxios";
import useGetData from "../../../../hooks/useGetData";
import ManageScholarshipTable from "./ManageScholarshipTable";
import Swal from 'sweetalert2'

const ManageScholarship = () => {
    const [fetchedData, isLoading, refetch] = useGetData('/scholarship')
    const modalRef = useRef()
    const axiosBase = useAxios()

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
                axiosBase.delete(`/scholarship/single/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    const handleUpdate = (id) => {

    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
            <ManageScholarshipTable scholarships={fetchedData} loading={isLoading} handleDelete={handleDelete} handleUpdate={handleUpdate} modalRef={modalRef} />
        </div>
    )
}

export default ManageScholarship