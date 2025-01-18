import { Outlet } from "react-router-dom"
import Header from "../components/dashboard/Header"
import Footer from "../components/dashboard/Footer"
import Sidebar from "../components/dashboard/Sidebar"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex min-h-screen w-full">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div
                className={`flex flex-col w-full overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-44 md:ml-64" : "ml-16"
                    }`}
            >
                <Header />
                <div className="min-h-[85vh]">
                    <div className="p-4 overflow-x-auto">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard