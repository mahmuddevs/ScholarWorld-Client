import { Outlet } from "react-router-dom"
import Header from "../components/dashboard/Header"
import Footer from "../components/dashboard/Footer"
import Sidebar from "../components/dashboard/Sidebar"
import { useState } from "react"

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div
                className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-44 md:ml-64" : "ml-16"
                    }`}
            >
                <Header />
                <div className="min-h-screen">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard