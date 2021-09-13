import React, { useContext, useEffect } from "react"
import { ClinicContext } from "./ClinicProvider"

export const ClinicList = () => {
    const { clinics, getClinics } = useContext(ClinicContext)

    useEffect(() => {
        console.log("ClinicList: useEffect - getClinics")
        getClinics()
    }, [])

    return (
        <section className="clinics">
            {
                clinics.map(clinic => {
                    return (
                        <div className="clinic" id={`clinic--${clinic.id}`}>
                            <div className="clinic__name">
                                Name of Clinic: { clinic.name }
                            </div>
                            <div className="clinic__address">
                                Location: { clinic.address }
                            </div>
                            <div className="clinic__services">
                                Provided Services: { clinic.services }
                            </div>
                            <div className="clinic__hours">
                                Hours of Operation: { clinic.hours }
                            </div>
                            <div className="clinic__phoneNumber">
                                Contact: { clinic.phoneNumber }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
