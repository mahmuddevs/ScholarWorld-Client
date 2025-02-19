const UpdateModal = ({ modalRef, handleUpdate }) => {
    return (
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Information</h3>
                <p className="py-2 text-gray-600">Enter the details below to update.</p>

                {/* Input Fields */}
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input
                            type="file"
                            name="photo"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button type="submit" className="btn bg-brand-primary hover:bg-brand-accent text-white w-full">Save</button>
                </form>

                {/* Modal Actions */}
                <div className="modal-action">
                    <button className="btn btn-block" onClick={() => { modalRef.current.close() }}>Close</button>
                </div>
            </div>
        </dialog>
    )
}

export default UpdateModal;
