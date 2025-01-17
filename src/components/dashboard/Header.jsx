import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io"
import { Link, NavLink } from "react-router-dom"
import { Tooltip } from 'react-tooltip'
import { motion } from "motion/react"
import useAuth from "../../hooks/useAuth";


const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const { user, logOut } = useAuth()


    const navItems = (
        <>
            <li className="flex justify-between">
                <NavLink to='/'>Home</NavLink>
                <IoMdClose onClick={() => { setNavOpen(false) }} className="block lg:hidden cursor-pointer text-xl" />
            </li>
            <li>
                <NavLink to='/scolarships'>All Scholarship</NavLink>
            </li>
        </>
    )

    const handleLogout = () => {
        logOut().then(() => {
            console.log('user logged out')
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <header className="bg-brand-primary ">
            <div className="w-11/12 md:container xl:w-9/12 mx-auto h-20 flex justify-between items-center text-white">
                <nav className="flex gap-6 uppercase items-center ms-auto">
                    <motion.ul className={`uppercase flex flex-col lg:flex-row lg:items-center gap-6 font-extrabols fixed lg:static top-0 w-56 h-screen lg:h-auto lg:w-auto p-8 lg:p-0 bg-[#151515]/90 lg:bg-transparent z-50`}
                        initial={{ right: '-14rem' }}
                        animate={{ right: navOpen ? '0' : '-14rem' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {navItems}
                    </motion.ul>
                    <div className="flex items-center gap-4">
                        <div className="z-30 relative">
                            <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" id="profile-pic">
                                    <img
                                        alt={user?.displayName}
                                        src={user?.photoURL}
                                    />
                                </div>
                                <Tooltip
                                    anchorSelect="#profile-pic"
                                    place="bottom"
                                    className="!p-2 !rounded-lg !bg-gray-700 !text-white !w-40 !h-24" clickable
                                >
                                    <div className="flex flex-col justify-center items-center space-y-2 py-2">
                                        <p className="font-bold !text-sm">{user?.displayName}</p>
                                        <button
                                            onClick={handleLogout}
                                            className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaBarsStaggered onClick={() => { setNavOpen(true) }} className="block lg:hidden cursor-pointer fill-white stroke-white text-xl" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header