import { FaTrashAlt } from "react-icons/fa";

const UsersTable = ({ users, handleRoleChange }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full min-w-max">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users?.map((user, index) => (
                            <tr key={user.id} className="hover">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <select
                                        defaultValue={user.role}
                                        className="select select-bordered w-full max-w-xs"
                                    >
                                        <option value="user">User</option>
                                        <option value="moderator">Moderator</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="flex items-center">
                                    <button className="btn self-center btn-sm bg-red-600 text-white">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center text-gray-500">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
