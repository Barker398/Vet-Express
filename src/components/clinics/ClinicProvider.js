import React, { useState, createContext } from "react"

export const ClinicContext = createContext()

export const ClinicProvider = (props) => {
const [clinics, setClinics] = useState([])

const getClinics = () => {
    return fetch("http://localhost:8088/clinics")
        .then(res => res.json())
        .then(setClinics)
}    


return (
    <ClinicContext.Provider value={{
        clinics, getClinics
    }}>
        {props.children}
    </ClinicContext.Provider>
)
}