import React, { useContext, useEffect } from "react"
import { ClinicContext } from "../clinics/ClinicProvider"
import "./MyClinics.css"

export const MyClinics = () => {
    const { clinics, getClinics, favorites, getClinicFavorites } = useContext(ClinicContext)
 
    useEffect(() => {
        getClinics()
        getClinicFavorites()
    }, [])

    useEffect(() => {
    }, [clinics, favorites])

    return (
        <>
            <h1>My Clinics</h1>

            <h3>My pets</h3>
            <img src="images/Gypsy.jpg" alt="images" class="petPhoto" />

            <section className="myClinics">

                {favorites.length ?

                    favorites.map(favClinic => {

                        return (

                            <section className="clinic">

                                <h3 className="clinic__name">{favClinic.clinic.name}</h3>
                                <img src={favClinic.clinic.url} />
                                <div className="clinic__address">Address: {favClinic.clinic.address}</div>
                                <div className="clinic__services">Services Provided: {favClinic.clinic.services}</div>
                                <div className="clinic__hours">Hours of Operation: {favClinic.clinic.hours}</div>
                                <div className="clinic__phoneNumber">Contact: {favClinic.clinic.phoneNumber}</div>
                            </section>
                        )
                    })
                    : <p>No Favorites</p>}
            </section>

        </>
    )
}