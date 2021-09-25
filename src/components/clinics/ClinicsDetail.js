import React, { useContext, useEffect, useState } from "react"
import { ClinicContext } from "./ClinicProvider"
import { useHistory, useParams } from "react-router-dom"
import { ReviewsList } from "../reviews/ReviewsList"


export const ClinicDetail = () => {

    const { clinics, getClinics, getClinicFavorites, addClinicFavorite } = useContext(ClinicContext)
    const [clinic, setClinic] = useState({ reviews:[] })
    // const [favorite, setFavorite] = useState([])
    // const [favoriteClinicCount, setFavoriteClinicCount] = useState(0)
    const currentUser = parseInt(localStorage.getItem("VetExpress_user"));

    const { clinicId } = useParams();
    const history = useHistory()

    useEffect(() => {
        getClinics()
      .then(getClinicFavorites)}, [])

    useEffect(() => {
        const thisClinic = clinics.find(c => c.id === parseInt(clinicId)) || { reviews:[] }
        setClinic(thisClinic)
    }, [clinics])

    // useEffect(() => {
    //     const thisClinic = clinics.find(c => c.id === parseInt(clinicId)) || { reviews:[] }
    //     setClinic(thisClinic)
    // }, [])

    const handleClickSaveFavorite = () => {
        addClinicFavorite({
            clinicId:clinic.id,
            userId:currentUser
        } 
        )
        .then(() => {
            history.push("/myclinics")
        })
        
    }
    
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
            <button onClick={handleClickSaveFavorite}> favorites: </button>

        </section>
        
        <ReviewsList reviews={clinic.reviews} clinicId={clinic.id}/> 
        
        </>
    )
}