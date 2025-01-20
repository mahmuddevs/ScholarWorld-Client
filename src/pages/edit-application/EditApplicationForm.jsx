import Title from "../../components/Title"


const EditApplicationForm = ({ register, handleSubmit, errors, formRef }) => {

    return (
        <>
            <Title title="Edit Application" />
            <div className="grid place-items-center">
                <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl mb-20">
                    <form ref={formRef} onSubmit={handleSubmit} className="card-body grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10,15}$/,
                                        message: "Enter a valid phone number",
                                    },
                                })}
                                placeholder="Phone Number"
                                className="input input-bordered"
                            />
                            {errors.phone && <p className="text-red-500 text-sm font-semibold">{errors.phone.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Applicant Photo</span>
                            </label>
                            <input
                                name='photo'
                                type="file"
                                className="file-input file-input-bordered w-full"
                                {...register("photo")}
                            />
                            {errors.photo && <p className="text-red-500 text-sm font-semibold">{errors.photo.message}</p>}
                        </div>

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea
                                {...register("address", {
                                    required: "Address is required",
                                })}
                                placeholder="Village, District, Country"
                                className="textarea textarea-bordered"
                            ></textarea>
                            {errors.address && <p className="text-red-500 text-sm font-semibold">{errors.address.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select
                                {...register("gender", {
                                    required: "Gender is required",
                                    validate: (value) => value !== "" || "Please select an Option",
                                })}
                                className="select select-bordered"
                                defaultValue=""
                            >
                                <option value="">
                                    Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm font-semibold">{errors.gender.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Applying Degree</span>
                            </label>
                            <select
                                {...register("degree", {
                                    required: "Applying degree is required",
                                    validate: (value) => value !== "" || "Please select an Option",
                                })}
                                className="select select-bordered"
                                defaultValue=""
                            >
                                <option value="">
                                    Select Degree
                                </option>
                                <option value="diploma">Diploma</option>
                                <option value="bachelor">Bachelor</option>
                                <option value="masters">Masters</option>
                            </select>
                            {errors.degree && <p className="text-red-500 text-sm font-semibold">{errors.degree.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">SSC Result</span>
                            </label>
                            <input
                                type="text"
                                {...register("sscResult", {
                                    required: "SSC Result is required",
                                    min: {
                                        value: 1,
                                        message: "Must Be More Than 0",
                                    },
                                    max: {
                                        value: 5,
                                        message: "Max Value is 5",
                                    },
                                })}
                                placeholder="SSC Result (e.g., GPA)"
                                className="input input-bordered"
                                min={1}
                                max={5}
                            />
                            {errors.sscResult && <p className="text-red-500 text-sm font-semibold">{errors.sscResult.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HSC Result</span>
                            </label>
                            <input
                                type="text"
                                {...register("hscResult", {
                                    required: "HSC Result is required",
                                    min: {
                                        value: 1,
                                        message: "Must Be More Than 0",
                                    },
                                    max: {
                                        value: 5,
                                        message: "Max Value is 5",
                                    },
                                })}
                                placeholder="HSC Result (e.g., GPA)"
                                className="input input-bordered"
                                min={1}
                                max={5}
                            />
                            {errors.hscResult && <p className="text-red-500 text-sm font-semibold">{errors.hscResult.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Study Gap</span>
                            </label>
                            <select
                                {...register("studyGap")}
                                className="select select-bordered"
                                defaultValue=""
                            >
                                <option value="">
                                    Select Study Gap (if any)
                                </option>
                                <option value="1 year">1 Year</option>
                                <option value="2 years">2 Years</option>
                                <option value="3 years">3 Years</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">University Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("universityName")}
                                readOnly
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Scholarship Category</span>
                            </label>
                            <input
                                type="text"
                                {...register("scholarshipCategory")}
                                readOnly
                                className="input input-bordered"
                            />
                            {errors.scholarshipCategory && (
                                <p className="text-red-500 text-sm font-semibold">
                                    Scholarship category is required.
                                </p>
                            )}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject Category</span>
                            </label>
                            <input
                                type="text"
                                {...register("subjectCategory")}
                                readOnly
                                className="input input-bordered"
                            />
                            {errors.subjectCategory && (
                                <p className="text-red-500 text-sm font-semibold">
                                    Subject category is required.
                                </p>
                            )}
                        </div>

                        <div className="form-control mt-6 col-span-2">
                            <button type="submit" className="btn bg-brand-primary hover:bg-brand-accent text-white">
                                Update Appliction
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default EditApplicationForm