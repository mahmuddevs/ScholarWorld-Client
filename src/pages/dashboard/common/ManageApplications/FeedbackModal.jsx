const FeedbackModal = ({ feedbackRef, formRef, handleFeedbackSubmit, id }) => {
    return (
        <dialog ref={feedbackRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Add Feedback</h3>
                <form ref={formRef} onSubmit={(e) => { handleFeedbackSubmit(e, id) }} className="space-y-4">
                    <textarea
                        name="feedback"
                        required
                        className="textarea textarea-bordered w-full"
                        placeholder="Write your feedback here..."
                        rows="4"
                    ></textarea>
                    <button type="submit" className="btn block w-full bg-brand-primary hover:bg-brand-accent text-white">Submit</button>
                </form>
                <div className="modal-action">
                    <button onClick={() => { feedbackRef.current.close() }} className="btn block w-full btn-active">Close</button>
                </div>
            </div>
        </dialog>
    )
}

export default FeedbackModal