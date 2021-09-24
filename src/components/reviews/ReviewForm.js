import React, { useContext, useState, useEffect } from "react"
import { ReviewsContext } from "./ReviewsProvider"
import { useHistory, useLocation } from "react-router-dom"
// import {ClinicContext} from "../clinics/ClinicProvider"


export const ReviewForm = () => {
    const { addReview, getReviews, updateReview } = useContext(ReviewsContext)
    // const { clinic } = useContext(ClinicContext)

    const [review, setReview] = useState({
        userId: 0,
        clinicId: 0,
        comment: ""
    });

    // const [setIsLoading] = useState(true);

    useEffect(() => {
        getReviews()
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

    // const hnddleSaveReview = (event) => {
    //     event.preventDefault()

    //     const reviewId = parseInt(review.id)
    //     const userId = parseInt(localStorage.getItem("VetExpress_user"))
    //     const clinicId = parseInt(review.clinicIdd)
    //     if (reviewId === 0) {
    //         window.alert("Please leave a Review")
    //     } else {

    //         const newReview = {
    //             userId: userId,
    //             clinicId: clinicId,
    //             comment: review.comment
    //         }

    //         addReview(newReview)
    //             .then(() => history.push(`/clinics/detail/${clinic.id})`)

    const handleSaveReview = (event) => {
        event.preventDefault()
        // const reviewId = parseInt(review.id)
        const userId = parseInt(localStorage.getItem("VetExpress_user"))


        if (review.id === 0) {
            window.alert("Please leave a review")
        }
        else {
            //    setIsLoading(true);

            if (review.id) {
                updateReview({
                    id: review.id,
                    userId: review.userId,
                    clinicId: review.clinicId,
                    comment: review.comment
                })
                    .then(() => history.push(`/clinics/detail/${clinicId}`))
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
            <h2 className="reviewForm__title">New Review</h2>
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
