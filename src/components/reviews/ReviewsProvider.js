import React, { useState, createContext } from "react"

export const ReviewsContext = createContext()

export const ReviewsProvider = (props) => {
const [reviews, setReviews] = useState([])

const getReviews = () => {
    return fetch("http://localhost:8088/reviews")
        .then(res => res.json())
        .then(setReviews)
}

const addReview = reviewObj => {
    return fetch("http://localhost:8088/reviews/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
    .then(getReviews)
}


return (
    <ReviewsContext.Provider value={{
        reviews, getReviews, addReview 
    }}>
        {props.children}
    </ReviewsContext.Provider>
)
}