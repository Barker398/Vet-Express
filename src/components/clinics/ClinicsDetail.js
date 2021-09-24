import React, { useContext, useEffect, useState } from "react"
import { ClinicContext } from "./ClinicProvider"
import { useParams } from "react-router-dom"
import { ReviewsList } from "../reviews/ReviewsList"


export const ClinicDetail = () => {

    const { clinics, getClinics, favorites, getClinicFavorites, addClinicFavorite } = useContext(ClinicContext)
    const [clinic, setClinic] = useState({ reviews:[] })
    // const [favorite, setFavorite] = useState([])
    const [favoriteClinicCount, setFavoriteClinicCount] = useState(0)
    const currentUser = parseInt(localStorage.getItem("VetExpress_user"));

    const { clinicId } = useParams();
   
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
       const count = favoriteClinicCount+1
        setFavoriteClinicCount(count)
        console.log("num: ", favoriteClinicCount)
    }
    
    return (
        <>
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