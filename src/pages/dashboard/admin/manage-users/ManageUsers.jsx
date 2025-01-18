import useAxios from "../../../../hooks/useAxios"
import useGetData from "../../../../hooks/useGetData"
import UsersTable from "./UsersTable"
import Swal from 'sweetalert2'

const ManageUsers = () => {
    const [fetchedData, isLoading, refetch] = useGetData('/users/all-users')
    const axiosBase = useAxios()

    const handleChangeRole = (e, id) => {
        const updatedRole = e.target.value
        axiosBase.patch(`/users/${id}`, { userType: updatedRole })
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
                axiosBase.delete(`/users/${id}`)
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

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <UsersTable users={fetchedData} loading={isLoading} handleDelete={handleDelete} handleChangeRole={handleChangeRole} />
        </div>
    )
}

export default ManageUsers