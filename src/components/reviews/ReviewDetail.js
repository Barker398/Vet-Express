import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ReviewsContext } from "./ReviewsProvider"

export const ReviewDetail = (props) => {


    return (
        <>

            <section className="review" key={`review--${props.review.id}`}>
                <div className="review__comment">Review: {props.review.comment}</div>
            </section>

        </>
    )
}