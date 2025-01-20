import { useState } from "react"
import Title from "../../../../components/Title"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import useGetData from "../../../../hooks/useGetData"
import UsersTable from "./UsersTable"
import Swal from 'sweetalert2'

const ManageUsers = () => {
    const [role, setRole] = useState('')
    const [fetchedData, isLoading, refetch] = useGetData(`/users/all-users?role=${role}`)
    const axiosSecure = useAxiosSecure()

    const handleChangeRole = (e, id) => {
        const updatedRole = e.target.value
        axiosSecure.patch(`/users/${id}`, { userType: updatedRole })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Role Changed to ${updatedRole}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
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
                axiosSecure.delete(`/users/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    const handleFetchByRole = (e) => {
        const role = e.target.value
        setRole(role)
        refetch
    }

    return (
        <div className="p-4">
            <Title title="Manage Users" />
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="flex justify-end gap-4">
                <select onChange={handleFetchByRole} defaultValue="" className="select select-bordered w-full max-w-xs">
                    <option value="">Sort By Role</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="user">User</option>
                </select>
            </div>
            <UsersTable users={fetchedData} loading={isLoading} handleDelete={handleDelete} handleChangeRole={handleChangeRole} />
        </div>
    )
}

export default ManageUsers