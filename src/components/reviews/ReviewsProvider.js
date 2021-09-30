import React, { useState, createContext } from "react"

export const ReviewsContext = createContext()

export const ReviewsProvider = (props) => {
    
const [reviews, setReviews] = useState([])


const getReviews = () => {
    return fetch("http://localhost:8088/reviews")
        .then(res => res.json())
        .then(setReviews)
}
// why does review/1 return an object and reviews?id=1 will return an array?
const getReviewById = (reviewId) => {
    return fetch(`http://localhost:8088/reviews/${reviewId}`)
    .then(res => res.json())
    
}

const addReview = reviewObj => {
    return fetch("http://localhost:8088/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
    .then(getReviews)
}

const removeReview = reviewId => {
    return fetch(`http://localhost:8088/reviews/${reviewId}`, {
        method: "DELETE"
    })
    .then(getReviews)
}

const updateReview = review => {
    return fetch(`http://localhost:8088/reviews/${review.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(getReviews)
}

return (
    <ReviewsContext.Provider value={{
        reviews, getReviews, addReview, removeReview, updateReview, getReviewById
    }}>
        {props.children}
    </ReviewsContext.Provider>
)
}