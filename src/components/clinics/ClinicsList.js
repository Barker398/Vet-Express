import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { ClinicContext } from "./ClinicProvider"
import "./ClinicsList.css"

export const ClinicList = () => {
    const { getClinics, clinics } = useContext(ClinicContext)
    const history = useHistory()

    useEffect(() => {
        getClinics()
    }, [])

    return (
        <>
            <h1>Top Clinics</h1>
            <button onClick={
                () => history.push("/clinics/create")
            }>
                Add a Clinic
            </button>
            <section className="clinics">
                {
                    clinics.map(clinic => {
                        return (                          
                                <div className="clinic" id={`clinic--${clinic.id}`}>                                   
                                        <img src={clinic.url} alt="clinic pictures" />                                   
                                    <Link to={`/clinics/detail/${clinic.id}`}>
                                        Name of Clinic: {clinic.name}
                                    </Link>
                                </div>                          
                        )
                    })
                }
            </section>
        </>
    )
}
