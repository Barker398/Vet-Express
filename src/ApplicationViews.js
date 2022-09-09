import React from "react"
import { Route } from "react-router-dom"
import { ClinicForm } from "./components/clinics/ClinicForm"
import { ClinicProvider } from "./components/clinics/ClinicProvider"
import { ClinicDetail } from "./components/clinics/ClinicsDetail"
import { ClinicList } from "./components/clinics/ClinicsList"
import { ReviewsProvider } from "./components/reviews/ReviewsProvider"
import { ReviewForm } from "./components/reviews/ReviewForm"
import { HomePage } from "./components/home/HomePage"
import { MyClinics } from "./components/profile/MyClinics"

export const ApplicationViews = () => {
    return (
        <>
            <ClinicProvider>
                <ReviewsProvider>
                    <Route exact path="/home">
                    <HomePage />
                    </Route>
                    <Route exact path="/clinics">
                        {/* ClinicList is a child component of the clinicProvider. */}
                        <ClinicList />
                    </Route>
                    <Route exact path="/clinics/detail/:clinicId(\d+)">
                        <ClinicDetail />
                    </Route>
                    <Route path="/clinics/create">
                        <ClinicForm />
                    </Route>
                    {/* reviewId is the parameter passed on the url. */}
                    <Route path="/reviews/edit/:reviewId(\d+)">
                        <ReviewForm />
                    </Route>
                    <Route path="/reviews/create">
                        <ReviewForm />
                    </Route>
                    <Route path="/myClinics">
                    <MyClinics />
                    </Route>
                </ReviewsProvider>
            </ClinicProvider>
        </>
    )
}