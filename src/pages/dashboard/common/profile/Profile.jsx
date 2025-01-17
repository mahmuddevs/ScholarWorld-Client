import useAuth from "../../../../hooks/useAuth";
import useUser from "../../../../hooks/useUser";

const Profile = () => {
    const [userData, userLoading] = useUser()
    const { user } = useAuth()
    const { displayName, email, userType, photo = '' } = userData

    return (
        <div className="min-h-screen bg-brand-background flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-brand-primary p-8 flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                            <img
                                className="w-full h-full object-cover"
                                src={user?.photoURL || "/placeholder.svg"}
                                alt={displayName + 'avatar'}
                            />
                        </div>
                        <button className="w-full px-6 py-3 bg-white text-brand-primary font-semibold rounded-full hover:bg-brand-accent hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50">
                            Edit Profile
                        </button>
                    </div>
                    <div className="md:w-2/3 p-8">
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold text-brand-text mb-2">{displayName}</h1>
                            <p className="text-xl text-brand-secondary font-semibold">{userType === 'user' ? 'student' : userType}</p>
                        </div>
                        <div className="bg-brand-background rounded-lg p-6 mb-6">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Information</h2>
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-brand-text">{email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile