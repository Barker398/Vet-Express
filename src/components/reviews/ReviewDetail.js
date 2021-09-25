
export const ReviewDetail = (props) => {


    return (
        <>

            <section className="review" key={`review--${props.review.id}`}>
                <div className="review__comment">{props.review.comment}</div>
            </section>

        </>
    )
}