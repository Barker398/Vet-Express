import React from "react"
import { Route } from "react-router-dom"
import { ClinicProvider } from "./components/clinics/ClinicProvider"
import { ClinicList } from "./components/clinics/ClinicsList"

export const ApplicationViews = () => {
    return (
        <>
            <ClinicProvider>
                <Route exact path="/clinics">
                    <ClinicList />   
                </Route>
            </ClinicProvider>
        </>
    )
}