// import userEvent from "@testing-library/user-event"
import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
// import { ClinicContext } from "../clinics/ClinicProvider"
// 
import { ClinicContext } from "../clinics/ClinicProvider"
import "./MyClinics.css"

export const MyClinics = () => {
    const { clinics, getClinics, favorites, getClinicFavorites } = useContext(ClinicContext)
    // const { clinicId } = useParams()
    const [clinicFavorites, setFavorites] = useState([])
    const [favClinics, setFavClinics] = useState([])

    useEffect(() => {
        getClinics().then(getClinicFavorites())
    }, [])
    const findFavorite = () => {
        const currentFavorites = favorites.filter(clinic => {
            if (clinic.userId === parseInt(localStorage.getItem("VetExpress_user"))) {
                return (clinic)
            }
        })
        setFavorites(currentFavorites)
    }
    useEffect(() => {
        findFavorite()
    //     .then(() => {
    //     const currentClinics = clinicFavorites.filter((clinic) => {
    //         return (clinic.clinicId)
    //     })
    //     const favoriteClinics = clinics.filter((clinic) => {
    //         if (clinic.id in currentClinics) {
    //             return (clinic)
    //         }
    //     })
    //     setFavClinics(favoriteClinics)
    // })
}, [favorites])


// debugger
return (
    <>
        <h1>My Clinics</h1>

        <h3>My pets</h3>
        <img src="images/Gypsy.jpg" alt="images" class="petPhoto" />

        <section className="myClinics">
            {
                favClinics.map(clinic => {

                    return (
                        <>
                            <h2>Clinic Information</h2>
                            <section className="clinic">
                                <h3 className="clinic__name">{clinic.name}</h3>
                                <img src={clinics.url} />
                                <div className="clinic__address">Address: {clinic.address}</div>
                                <div className="clinic__services">Services Provided: {clinic.services}</div>
                                <div className="clinic__hours">Hours of Operation: {clinic.hours}</div>
                                <div className="clinic__phoneNumber">Contact: {clinic.phoneNumber}</div>
                            </section>
                        </>

                    )
                })
            }

        </section>

    </>
)
}