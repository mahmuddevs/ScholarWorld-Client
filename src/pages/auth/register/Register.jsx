import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";

const imagebb_key = import.meta.env.VITE_IMAGEBB_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${imagebb_key}`

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { loginWithGoogle, registerUser, loading, setLoading, updateDetails } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosBase = useAxios();

    const handleShowPass = () => {
        setShowPass((prev) => !prev);
    };

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
                                title: "User Created Successfully",
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

    const onSubmit = async (data) => {
        const { name, email, password } = data
        const img = { image: data.photo[0] }
        const res = await axios.post(hostingApi, img, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const image = res?.data?.data?.display_url

        if (image) {
            registerUser(email, password)
                .then(() => {
                    updateDetails(name, image)
                        .then(() => {
                            const userData = { email, displayName: name }
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
                                })
                        })
                }).catch((err) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Something Went Wrong",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
        }
    };

    return (
        <>
            <Title title="Register" />
            <div className="flex justify-center items-center pt-28 md:pt-36 mb-14 md:mb-24">
                <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow-lg w-full max-w-5xl pt-10 md:pt-0">
                    <div className="w-full md:w-1/2 px-8 py-10">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-80">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    {...register("name", { required: "Name is Required" })}
                                />
                                {errors.name && <span className="text-red-600 text-xs mt-1">{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    {...register("email", { required: "Email is Required" })}
                                />
                                {errors.email && <span className="text-red-600 text-xs mt-1">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Photo</span>
                                </label>
                                <input
                                    name='photo'
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                    {...register("photo", { required: "Photo is Required" })}
                                />
                                {errors.photoUrl && (
                                    <span className="text-red-600 text-xs mt-1">{errors.photoUrl.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        className="input input-bordered w-full"
                                        {...register("password", {
                                            required: "Password is Required",
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[\W])(?=.{6,}).*$/,
                                                message: "Password must have 6 characters, 1 uppercase, and 1 special character",
                                            },
                                        })}
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-gray-700"
                                    >
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                                {errors.password && (
                                    <span className="text-red-600 text-xs mt-1">{errors.password.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn text-white bg-light-primary bg-brand-primary hover:bg-brand-accent"
                                >
                                    {loading ? "Loading..." : "Register"}
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/auth/login"
                                className="text-blue-500 hover:underline dark:text-blue-400"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="divider">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="btn btn-ghost border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2 mx-auto"
                        >
                            <FcGoogle className="w-6 h-6" />
                            {loading ? "Signing in..." : "Sign in with Google"}
                        </button>
                    </div>
                    <div className="w-1/2 mx-auto md:mx-0">
                        <img
                            src="/gifs/signup.gif"
                            alt=""
                            className="rounded-full md:rounded-none md:rounded-r-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
