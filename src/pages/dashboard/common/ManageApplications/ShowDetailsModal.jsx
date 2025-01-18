const ShowDetailsModal = ({ universityName, degree, scholarshipCategory, detailsRef, handleShowModal }) => {
    return (
        <dialog ref={detailsRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Application Details
                </h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase">University Name</p>
                        <p className="text-lg text-gray-800 font-medium">{universityName || "Not Provided"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase">Applied Degree</p>
                        <p className="text-lg text-gray-800 font-medium">{degree || "Not Provided"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase">Scholarship Category</p>
                        <p className="text-lg text-gray-800 font-medium">{scholarshipCategory || "Not Provided"}</p>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ShowDetailsModal