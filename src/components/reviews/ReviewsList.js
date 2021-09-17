import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {ReviewsContext} from "./ReviewsProvider"
import "./ReviewList.css"

export const ReviewsList = (props) => {

    const { getReviews, reviews, removeReview } = useContext(ReviewsContext)

    const history = useHistory()
    useEffect(() => {
        getReviews()
    }, [])

    const handleDelete = () => {
        removeReview(reviews.id)
          .then(() => {
            history.push("/reviews")
          })
        }

    return ( 
        <>
            <h3>Clinic Reviews</h3>
            <button onClick={
                () => history.push("/reviews/create")
            }>
                Add a Review Here!
            </button>
            <button onClick={handleDelete}>
             Delete Review
             </button>
             <button onClick={() => {
                history.push(`/reviews/edit/${props.review.id}`)
            }}>Edit Review</button>

            <section className="reviews">
                {
                    reviews.map(review => {
                        return (
                            <div className="review" id={`review--${review.comment}`}>
                                {review.comment}
                            </div>
                            
                        
                            )
                    })
                }
            </section>
            
        </>
    )
}