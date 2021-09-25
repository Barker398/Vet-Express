import React, { useState, createContext } from "react"

export const ClinicContext = createContext()

export const ClinicProvider = (props) => {
const [clinics, setClinics] = useState([])
const [favorites, setFavorites] = useState([])

const getClinics = () => {
    return fetch("http://localhost:8088/clinics/?_embed=reviews")
        .then(res => res.json())
        .then(setClinics)
}

const addClinic = clinicObj => {
    return fetch("http://localhost:8088/clinics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clinicObj)
    })
    .then(getClinics)
}
// debugger
const getClinicFavorites = () => {
    return fetch("http://localhost:8088/favorites")
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


return (
    <ClinicContext.Provider value={{
        clinics, getClinics, addClinic, favorites, setFavorites, addClinicFavorite, getClinicFavorites
    }}>
        {props.children}
    </ClinicContext.Provider>
)
}