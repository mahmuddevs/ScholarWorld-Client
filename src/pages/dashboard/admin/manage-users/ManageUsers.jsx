import UsersTable from "./UsersTable"


const ManageUsers = () => {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "user" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "moderator" },
        { id: 3, name: "Admin User", email: "admin@example.com", role: "admin" },
    ];
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <UsersTable users={users} />
        </div>
    )
}

export default ManageUsers