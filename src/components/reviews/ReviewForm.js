import React, { useContext, useState, useEffect } from "react"
import { ReviewsContext } from "./ReviewsProvider"
import { useHistory, useLocation, useParams } from "react-router-dom"



export const ReviewForm = () => {
    const { addReview, getReviewById, updateReview } = useContext(ReviewsContext)
    const params = useParams()
    const editMode = params.hasOwnProperty("reviewId")

    const [review, setReview] = useState({
        userId: 0,
        clinicId: 0,
        comment: ""
    });

    useEffect(() => {
        if (editMode) {
            getReviewById(parseInt(params.reviewId))
                .then(setReview)
                .then("useEffectReview", review)
        }
    }, [])

    // useEffect(() => {
    //     const thisReview = reviews.find(c => c.id === parseInt(review.id)) || { reviews:[] }
    //     setReview(thisReview)
    // }, [])

    const query = new URLSearchParams(useLocation().search);

    const clinicId = parseInt(query.get("clinicId"))

    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newReview = { ...review }

        newReview[event.target.id] = event.target.value

        setReview(newReview)
    }

    const handleSaveReview = (event) => {
        event.preventDefault()

        const userId = parseInt(localStorage.getItem("VetExpress_user"))

        if (review.id === 0) {
            window.alert("Please leave a review")
        }
        else {

            if (editMode) {
                updateReview({
                    id: parseInt(params.reviewId),
                    userId: review.userId,
                    clinicId: review.clinicId,
                    comment: review.comment
                })
                    .then(() => history.push(`/clinics/detail/${review.clinicId}`))
            }
            
            else {
                const newReview = {
                    userId: userId,
                    clinicId: clinicId,
                    comment: review.comment

                }
                addReview(newReview)
                    .then(() => {
                        history.push(`/clinics/detail/${clinicId}`)
                    })

            }

        }
    }

    return (
        <form className="reviewForm">
            <h2>{review.id ? <>Edit Review</> : <>New Review</>}</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <input type="text" id="comment" required autoFocus className="form-control" placeholder="comment" value={review.comment} onChange={handleControlledInputChange} />
                </div>
                <div id="clinicId" value={review.clinicId}></div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleSaveReview}>
                Save My Review
            </button>
        </form>
    )
}
