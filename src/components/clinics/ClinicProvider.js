// This code imports the main React library, and two functions that it exports.

import React, { useState, createContext } from "react"

// Create the context to be used by other components that need data.
export const ClinicContext = createContext()

export const ClinicProvider = (props) => {

    // We will useState to hold and set the array of clinics, and favorites.
    // Props are are how you pass data from one component to another, as parameters.
const [clinics, setClinics] = useState([])

// The square bracket is used to get the name of the event target and set the value to the state.
// The useState() hook defines a variable that holds the state of the component, and a function that updates it.
const [favorites, setFavorites] = useState([])

const getClinics = () => {
    return fetch("http://localhost:8088/clinics/?_embed=reviews")
    //  The res. json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON
        .then(res => res.json())
        .then(setClinics)
}

const addClinic = clinicObj => {
    // fetch() method starts the process of fetching a resource from the network,
    //  returning a promise which is fulfilled once the response is available. Want to get the Clinics object.
    return fetch("http://localhost:8088/clinics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clinicObj)
    })
    .then(getClinics)
}

const getClinicFavorites = () => {
    return fetch("http://localhost:8088/favorites?_expand=clinic")
        .then(res => res.json())
        .then(setFavorites)
}

const addClinicFavorite = clinicObj => {
    return fetch("http://localhost:8088/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clinicObj)
    })
    .then(getClinicFavorites)
}

const removeFavClinic = clinicId => {
    return fetch(`http://localhost:8088/clinics/${clinicId}`, {
        method: "DELETE"
    })
    .then(getClinicFavorites)
}

/*
        You return a context provider which has the
        `clinics` state, `getClinics` function,
        and the `addClinic` function as keys. This
        allows any child elements to access them.
    */
return (
    <ClinicContext.Provider value={{
        clinics, getClinics, addClinic, favorites, setFavorites, addClinicFavorite, getClinicFavorites,
        removeFavClinic
    }}>
        {props.children}
    </ClinicContext.Provider>
)
}