import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { ReviewsContext } from "./ReviewsProvider"
import { ReviewDetail } from "./ReviewDetail"
import "./ReviewList.css"

export const ReviewsList = (props) => {

    const { removeReview } = useContext(ReviewsContext)

    const history = useHistory()

    const handleDelete = (reviewId) => {
        removeReview(reviewId)
            .then(() => {
                history.push("/reviews")
            })
    }

    return (
        <>
            <h3>Clinic Reviews</h3>
            <button onClick={
                // history.push needs to be edited.
                () => history.push(`/reviews/create?clinicId=${props.clinicId}`)
            }>
                Add a Review Here!
            </button>

            <section className="reviews">
                {
                    props.reviews.map(review => {
                        return ( <div className="review" key={`review--${review.id}`}>
                                <ReviewDetail key={review.id} clinicId={review.clinicId} review={review} />
                                <button onClick={ () => handleDelete(review.id)}>
                                    Delete Review
                                </button>

                                <button onClick={() => {
                                   history.push(`/reviews/create?clinicId=${props.clinicId}`)
                                }}>Edit Review</button>
                            </div>
                        )
                    })
                }
            </section>

        </>
    )
}