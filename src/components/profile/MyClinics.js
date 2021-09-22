import userEvent from "@testing-library/user-event"
import React from "react"
import { ClinicContext } from "../clinics/ClinicProvider"
import "./MyClinics.css"

export const MyClinics = () => {
    
    return (
        <> 
        <h1>My Clinic</h1>

        <h3>My pets</h3>
        <img src="images/Gypsy.jpg" alt="images" class="petPhoto" />

        </>
    )
}