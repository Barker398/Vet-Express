import React, { useState, createContext } from "react"

export const ReviewsContext = createContext()

export const ReviewsProvider = (props) => {
const [reviews, setReviews] = useState([])


const getReviews = () => {
    return fetch("http://localhost:8088/reviews")
        .then(res => res.json())
        .then(setReviews)
}
// const getReviews = async () => {
//     try {
//         const response = await fetch(`http://localhost:8080/reviews`);
//         const reviewClinic = await response.json()
//         setReviews(reviewClinic)
//     } catch (error) {
//         console.error(error)
//     }
// };


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

return (
    <ReviewsContext.Provider value={{
        reviews, getReviews, addReview, removeReview
    }}>
        {props.children}
    </ReviewsContext.Provider>
)
}