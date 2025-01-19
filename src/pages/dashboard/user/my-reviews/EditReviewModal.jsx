import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const EditReviewModal = ({ reviewModal, reviewForm, reviewSubmit, rating, resetKey, handleRatingChange, resetForm, review }) => {
    const [ratingState, setRatingState] = useState(0)
    useEffect(() => {
        if (rating) {
            setRatingState(rating)
        }
    }, [rating])

    return (
        <dialog ref={reviewModal} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Rate and Review</h3>
                <p className="py-4">Please provide your rating and leave a comment below.</p>

                <form
                    ref={reviewForm}
                    onSubmit={(e) => reviewSubmit(e, rating)}
                    className="space-y-4"
                >
                    <div>
                        <label className="font-semibold">Rating:</label>
                        {
                            ratingState > 0 && <ReactStars
                                key={resetKey}
                                count={5}
                                onChange={handleRatingChange}
                                size={30}
                                isHalf={true}
                                activeColor="#ffd700"
                                value={ratingState}
                            />
                        }
                    </div>
                    <div>
                        <label className="font-semibold">Comment:</label>
                        <textarea
                            required
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write your review..."
                            name="review"
                            defaultValue={review?.review || ""}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn w-full bg-brand-primary hover:bg-brand-accent text-white">
                        Update
                    </button>
                </form>
                <div className="modal-action block w-full">
                    <button type="button" className="btn w-full" onClick={resetForm}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default EditReviewModal;
