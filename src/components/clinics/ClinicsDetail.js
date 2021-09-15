import React, { useContext, useEffect, useState } from "react"
import { ClinicContext } from "./ClinicProvider"
import { useParams } from "react-router-dom"

export const ClinicDetail = () => {
    const { clinics } = useContext(ClinicContext)
    const [clinic, setClinic] = useState([])

    const { clinicId } = useParams();


    useEffect(() => {
        const thisClinic = clinics.find(c => c.id === parseInt(clinicId)) || { clinic: {} }
        setClinic(thisClinic)
    }, [clinicId])

    return (
        <section className="clinic">
            <h3 className="clinic__name">{clinic.name}</h3>
            <picture>
                <img src={clinic.url} alt="clinic pictures" />
            </picture>
            <div className="clinic__address">Address: {clinic.address}</div>
            <div className="clinic__services">Services Provided: {clinic.services}</div>
            <div className="clinic__hours">Hours of Operation: {clinic.hours}</div>
            <div className="clinic__phoneNumber">Contact: {clinic.phoneNumber}</div>
        </section>
    )
}