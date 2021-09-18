import React, { useContext, useEffect, useState } from "react"
import { ReviewsContext } from "./ReviewsProvider"
import { useHistory } from "react-router-dom"

export const ReviewForm = () => {
    const { addReview } = useContext(ReviewsContext)
    const { getReviews } = useContext(ReviewsContext)

    const [review, setReview] = useState({
        userId: 0,
        clinicId: 0,
        comment: ""
    });

    const history = useHistory();

    useEffect(() => {
        getReviews()
    }, [])

    const handleControlledInputChange = (event) => {

        const newReview = { ...review }

        newReview[event.target.id] = event.target.value

        setReview(newReview)
    }

    const saveReview = (event) => {
        event.preventDefault()

        const reviewId = parseInt(review.id)

        if (reviewId === 0) {
            window.alert("Please leave a Review")
        } else {

            const newReview = {
                userId: review.userId,
                clinicId: review.clinicId,
                comment: review.comment
            }
            addReview(newReview)
                .then(() => history.push("/clinics"))
        }
    }

    return (
        <form className="reviewForm">
            <h2 className="reviewForm__title">New Review</h2>
            <fieldset>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <input type="text" id="comment" required autoFocus className="form-control" placeholder="comment" value={review.comment} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
            
                <button className="btn btn-primary" 
                onClick={saveReview}>
                    Save My Review
                </button>
        </form>
            )
}