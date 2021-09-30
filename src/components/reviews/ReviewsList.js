import { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ReviewsContext } from "./ReviewsProvider"
import { ReviewDetail } from "./ReviewDetail"
import "./ReviewList.css"


export const ReviewsList = (props) => {

    const { getReviews } = useContext(ReviewsContext)
    const { removeReview } = useContext(ReviewsContext)
   
  
    // const { clinicId } = useParams();
    const history = useHistory()
    
    useEffect(() => {
        getReviews()
    }, [])

    const handleDelete = (reviewId) => {
        removeReview(reviewId)
        .then(props.func)
            // .then(() => {
            //     history.push(`/clinics/detail/${clinicId}`)
                
            // })
    }
    
    return (
        <>
            <h3>Clinic Reviews</h3>
            <button onClick={
    
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
                                   history.push(`/reviews/edit/${review.id}`)
                                }}>Edit Review</button>
                            </div>
                        )
                    })
                }
            </section>

        </>
    )
}