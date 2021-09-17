import React from "react"
import { Route } from "react-router-dom"
import { ClinicForm } from "./components/clinics/ClinicForm"
import { ClinicProvider } from "./components/clinics/ClinicProvider"
import { ClinicDetail } from "./components/clinics/ClinicsDetail"
import { ClinicList } from "./components/clinics/ClinicsList"
import { ReviewsProvider } from "./components/reviews/ReviewsProvider"
import { ReviewsList } from "./components/reviews/ReviewsList"
import { ReviewForm } from "./components/reviews/ReviewForm"

export const ApplicationViews = () => {
    return (
        <>
            <ClinicProvider>
                <ReviewsProvider>
                    <Route exact path="/clinics">
                        <ClinicList />
                    </Route>
                    <Route exact path="/clinics/detail/:clinicId(\d+)">
                        <ClinicDetail />
                    </Route>
                    <Route path="/clinics/create">
                        <ClinicForm />
                    </Route>
                    <Route exact path="/clinics/detail/:clinicId(\d+)">
                        <ReviewsList />
                    </Route>
                    <Route path="/reviews/create">
                        <ReviewForm />
                    </Route>
                </ReviewsProvider>
            </ClinicProvider>
        </>
    )
}