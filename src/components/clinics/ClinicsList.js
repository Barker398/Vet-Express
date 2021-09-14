import React, { useContext, useEffect } from "react"
import { ClinicContext } from "./ClinicProvider"
import "./ClinicsList.css"

export const ClinicList = () => {
    const { clinics, getClinics } = useContext(ClinicContext)

    useEffect(() => {
        console.log("ClinicList: useEffect - getClinics")
        getClinics()
    }, [])

    return (
        <>
            <h1>Top Clinics</h1>
            <section className="clinics">
                {
                    clinics.map(clinic => {
                        return (
                            <div className="clinic" id={`clinic--${clinic.id}`}>
                                <div className="clinic__name">
                                    Name of Clinic: {clinic.name}
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
