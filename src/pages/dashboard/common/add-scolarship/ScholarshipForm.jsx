const ScholarshipForm = ({ register, handleSubmit, errors, reset }) => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Scholarship</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Scholarship Name</label>
                        <input
                            type="text"
                            {...register("scholarshipName", { required: "Scholarship Name is required." })}
                            className={`input input-bordered w-full ${errors.scholarshipName ? "border-red-500" : ""}`}
                        />
                        {errors.scholarshipName && (
                            <p className="text-red-500 text-sm mt-1">{errors.scholarshipName.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">University Name</label>
                        <input
                            type="text"
                            {...register("universityName", { required: "University Name is required." })}
                            className={`input input-bordered w-full ${errors.universityName ? "border-red-500" : ""}`}
                        />
                        {errors.universityName && (
                            <p className="text-red-500 text-sm mt-1">{errors.universityName.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">University Image/Logo</label>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register("universityImage", { required: "Image is required" })}
                            className={`file-input w-full ${errors.universityImage ? "border-red-500" : ""}`}
                        />
                        {errors.universityImage && (
                            <p className="text-red-500 text-sm mt-1">{errors.universityImage.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">University Country</label>
                        <input
                            type="text"
                            {...register("universityCountry", { required: "Country is required." })}
                            className={`input input-bordered w-full ${errors.universityCountry ? "border-red-500" : ""}`}
                        />
                        {errors.universityCountry && (
                            <p className="text-red-500 text-sm mt-1">{errors.universityCountry.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">University City</label>
                        <input
                            type="text"
                            {...register("universityCity", { required: "City is required." })}
                            className={`input input-bordered w-full ${errors.universityCity ? "border-red-500" : ""}`}
                        />
                        {errors.universityCity && (
                            <p className="text-red-500 text-sm mt-1">{errors.universityCity.message}</p>
                        )}
                    </div>
                </div>
                {/* Right Column */}
                <div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">University World Rank</label>
                        <input
                            type="number"
                            {...register("universityRank", { required: "Rank is required.", min: 1 })}
                            className={`input input-bordered w-full ${errors.universityRank ? "border-red-500" : ""}`}
                        />
                        {errors.universityRank && (
                            <p className="text-red-500 text-sm mt-1">{errors.universityRank.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Degree</label>
                        <select
                            {...register("degree", { required: "Degree is required." })}
                            className={`select select-bordered w-full ${errors.degree ? "border-red-500" : ""}`}
                        >
                            <option value="">Select Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                        {errors.degree && (
                            <p className="text-red-500 text-sm mt-1">{errors.degree.message}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Scholarship Category</label>
                            <select
                                {...register("scholarshipCategory", { required: "Scholarship Category is required." })}
                                className={`select select-bordered w-full ${errors.scholarshipCategory ? "border-red-500" : ""}`}
                            >
                                <option value="">Select Category</option>
                                <option value="Full fund">Full fund</option>
                                <option value="Partial">Partial</option>
                                <option value="Self-fund">Self-fund</option>
                            </select>
                            {errors.scholarshipCategory && (
                                <p className="text-red-500 text-sm mt-1">{errors.scholarshipCategory.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Tuition Fees</label>
                            <input
                                type="number"
                                {...register("tuitionFees")}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Application Fees</label>
                            <input
                                type="number"
                                {...register("applicationFees", { required: "Application Fees are required." })}
                                className={`input input-bordered w-full ${errors.applicationFees ? "border-red-500" : ""}`}
                            />
                            {errors.applicationFees && (
                                <p className="text-red-500 text-sm mt-1">{errors.applicationFees.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Application Deadline</label>
                            <input
                                type="date"
                                {...register("applicationDeadline", { required: "Deadline is required." })}
                                className={`input input-bordered w-full ${errors.applicationDeadline ? "border-red-500" : ""}`}
                            />
                            {errors.applicationDeadline && (
                                <p className="text-red-500 text-sm mt-1">{errors.applicationDeadline.message}</p>
                            )}
                        </div>

                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Subject Category</label>
                        <select
                            {...register("subjectCategory", { required: "Subject Category is required." })}
                            className={`select select-bordered w-full ${errors.subjectCategory ? "border-red-500" : ""}`}
                        >
                            <option value="">Select Category</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                        {errors.subjectCategory && (
                            <p className="text-red-500 text-sm mt-1">{errors.subjectCategory.message}</p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn bg-brand-primary hover:bg-brand-accent text-white w-full lg:col-span-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ScholarshipForm;
