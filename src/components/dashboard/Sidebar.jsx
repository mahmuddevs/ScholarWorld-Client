import { FaBars, FaClipboard, FaClipboardList, FaFile, FaGraduationCap, FaPlus, FaStar, FaUser, FaUserShield } from "react-icons/fa6";
import { FaHome, FaTasks, FaUsersCog } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [userData, userLoading] = useUser()
    const role = userData?.userType

    return (
        <aside
            className={`fixed top-0 left-0 h-full bg-brand-primary text-white transition-all duration-300 ${isOpen ? "w-44 md:w-64" : "w-16"
                }`}
        >
            <div className="h-20 flex items-center justify-between px-4 border-b border-gray-700 ">
                <Link to="/" className="text:base md:text-xl font-bold block">
                    {isOpen && "ScholarWorld"}
                </Link>
                <button
                    className={`text-white text-2xl`}
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </button>
            </div>
            {
                userLoading ? '' : (
                    <nav className="mt-4 space-y-2 text-sm admin-sidebar">
                        {/* user */}
                        {
                            role === 'user' && <>
                                <NavLink
                                    to="/dashboard/my-profile"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaUser className="text-xl md:text-2xl" />
                                    {isOpen && 'My Profile'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/my-applications"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaFile className="text-xl md:text-2xl" />
                                    {isOpen && 'My Applications'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/my-reviews"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaStar className="text-xl md:text-2xl" />
                                    {isOpen && 'My Reviews'}
                                </NavLink>
                            </>
                        }
                        {/* moderator */}
                        {
                            role === 'moderator' && <>
                                <NavLink
                                    to="/dashboard/my-profile"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaUser className="text-xl md:text-2xl" />
                                    {isOpen && 'My Profile'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-scolarship"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaGraduationCap className="text-xl md:text-2xl" />
                                    {isOpen && 'Manage Scholarships'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-review"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <GiStarsStack className="text-xl md:text-2xl" />
                                    {isOpen && 'All Reviews'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-applied-applications"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaClipboardList className="text-xl md:text-2xl" />
                                    {isOpen && 'All Applied Scholarship'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/add-scolarship"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaPlus className="text-xl md:text-2xl" />
                                    {isOpen && 'Add Scholarship'}
                                </NavLink>
                            </>
                        }
                        {/* admin */}
                        {
                            role === 'admin' && <>
                                <NavLink
                                    to="/dashboard/home"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaHome className="text-xl md:text-2xl" />
                                    {isOpen && 'Home'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/admin-profile"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaUserShield className="text-xl md:text-2xl" />
                                    {isOpen && 'Admin Profile'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/add-scolarship"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaPlus className="text-xl md:text-2xl" />
                                    {isOpen && 'Add Scholarship'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-scolarship"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaTasks className="text-xl md:text-2xl" />
                                    {isOpen && 'Manage Scholarship'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-applied-applications"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaClipboard className="text-xl md:text-2xl" />
                                    {isOpen && 'Manage Applied Application'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-users"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <FaUsersCog className="text-xl md:text-2xl" />
                                    {isOpen && 'Manage Users'}
                                </NavLink>
                                <NavLink
                                    to="/dashboard/manage-review"
                                    className={`flex items-center ${isOpen ? '' : 'justify-center'} gap-4 py-2 px-4 hover:bg-gray-700 transition`}
                                >
                                    <GiStarsStack className="text-xl md:text-2xl" />
                                    {isOpen && 'Manage Review'}
                                </NavLink>
                            </>
                        }

                    </nav>
                )
            }
        </aside>
    );
};

export default Sidebar