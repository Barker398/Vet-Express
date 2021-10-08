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
            <button onClick={
                () => history.push("/clinics/create")
            }>
                Add a Clinic
            </button>
            <section className="clinics">
                {
                    // .map() array method iterates the array of clinics and generate HTML for each one.
                    clinics.map(clinic => {
                        return (

                            
                            <div className="clinic" key={`clinic--${clinic.id}`}>
                                
                               
                                 <img src={clinic.url} alt="clinic pictures" class="center" />

                                 <Link  to={`/clinics/detail/${clinic.id}`}>
                                    <button className="clinicName">{clinic.name} </button>
                                </Link>
                                {/* <Link to={`/recipes/${props.recipe.id}`}>
                    <button >Recipe</button>
                </Link> */}
                              
                                {/* <div className="clinic__address">
                                    Location: {clinic.address}
                                </div>
                                <div className="clinic__services">
                                    Provided Services: {clinic.services}
                                </div>
                                <div className="clinic__hours">
                                    Hours of Operation: {clinic.hours}
                                </div>
                                <div className="clinic__phoneNumber">
                                    Contact: {clinic.phoneNumber}
                                </div> */}

                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
