import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { ClinicContext } from "./ClinicProvider"
import "./ClinicsList.css"

export const ClinicList = () => {
    // Used by UI components that need data stored in the context, and exposed by the provider component.
    const { clinics, getClinics } = useContext(ClinicContext)
    const history = useHistory()

    useEffect(() => {
        getClinics()
    }, [])

    return (
        <>
            <h2>Top Vet Clinics</h2>

            <section className="clinics">
                {
                    // .map() array method iterates the array of clinics and generate HTML for each one.
                    clinics.map(clinic => {
                        return (
                            <div className="clinic" key={`clinic--${clinic.id}`}>
<<<<<<< HEAD
                                <Link to={`/clinics/detail/${clinic.id}`}>
                                    {clinic.name}
                                </Link>
                                <img className="list" src={clinic.url} alt="clinic pictures" />
=======
                                <img className="list" src={clinic.url} alt="clinic pictures" />

                                <Link to={`/clinics/detail/${clinic.id}`}>
                                    {clinic.name}
                                </Link>
>>>>>>> mvp-working
                            </div>
                        )
                    })
                }
            </section>
            <button className="add" onClick={
                () => history.push("/clinics/create")
            }>
                Add a Clinic
            </button>
        </>
    )
}
