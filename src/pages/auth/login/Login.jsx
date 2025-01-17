import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import Title from "../../../components/Title"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import Swal from 'sweetalert2'
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const { loginUser, loginWithGoogle, setLoading } = useAuth()
    const [showPass, setShowPass] = useState(false);
    const axiosBase = useAxios()
    const navigate = useNavigate()

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)

        const { email, password } = formValues
        loginUser(email, password)
            .then(res => {
                if (res.user) {
                    e.target.reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Welcome Back",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : "/");
                }
            }).catch((err) => {
                setLoading(false)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Wrong Credentials",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                const email = res?.user?.email
                const displayName = res?.user?.displayName
                const userData = { email, displayName }

                axiosBase.post('/users/add', userData)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Welcome",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(location?.state ? location.state : "/");
                        }
                        if (res.data.oldUser) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Welcome Back",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(location?.state ? location.state : "/");
                        }
                    })
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something Went Wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoading(false);
            });
    };

    return (
        <>
            <Title title="Login" />
            <div className="flex justify-center items-center pt-28 md:pt-36 mb-14 md:mb-24">
                <div className="card w-full max-w-4xl bg-white shadow-xl flex flex-col md:flex-row rounded-lg  pt-10 md:pt-0">
                    <div className="w-1/2 mx-auto md:mx-0">
                        <img
                            src="/gifs/login.gif"
                            alt=""
                            className="rounded-full md:rounded-none md:rounded-l-lg w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                                    >
                                        {showPass ? (
                                            <FaEyeSlash className="text-lg" />
                                        ) : (
                                            <FaEye className="text-lg" />
                                        )}
                                    </div>
                                </div>
                                <label className="label">
                                    <a className="label-text hover:underline cursor-pointer">
                                        Forgot Password?
                                    </a>
                                </label>
                                <label className="label text-sm">
                                    Don't Have an Account?{" "}
                                    <Link to="/auth/register" className="label-text-alt link link-hover">
                                        Register
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn  bg-brand-primary hover:bg-brand-accent text-white">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-sm mt-4">Or Sign In With</div>
                        <div className="form-control mt-2">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-ghost border border-gray-400"
                            >
                                <FcGoogle className="w-8 h-8" />
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login