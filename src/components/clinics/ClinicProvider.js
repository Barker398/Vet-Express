import React, { useState, createContext } from "react"

export const ClinicContext = createContext()

export const ClinicProvider = (props) => {
const [clinics, setClinics] = useState([])

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


return (
    <ClinicContext.Provider value={{
        clinics, getClinics, addClinic 
    }}>
        {props.children}
    </ClinicContext.Provider>
)
}