import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {ReviewsContext} from "./ReviewsProvider"

export const ReviewsList = () => {

    const { getReviews, reviews } = useContext(ReviewsContext)
    const history = useHistory()
    useEffect(() => {
        getReviews()
    }, [])

    return ( 
        <>
            <h3>Clinic Reviews</h3>
            <button onClick={
                () => history.push("/reviews/create")
            }>
                Add a Review Here!
            </button>
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