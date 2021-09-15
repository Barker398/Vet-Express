import React, { useContext, useEffect, useState } from "react"
import { ClinicContext } from "../clinics/ClinicProvider"
import { useHistory } from 'react-router-dom';

export const ClinicForm = () => {
  const { addClinic } = useContext(ClinicContext)
  const { getClinics } = useContext(ClinicContext)
  

  const [clinic, setClinic] = useState({
    name: "",
    address: "",
    services: "",
    hours: "",
    phoneNumber: "",
  });

  const history = useHistory();

  /*
  Reach out to  get clinics state
   on initialization.
  */
  useEffect(() => {
    getClinics()
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newClinic = { ...clinic }
    /* Clinic is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newClinic[event.target.id] = event.target.value
    // update state
    setClinic(newClinic)
  }

  const handleClickSaveClinic = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const clinicId = parseInt(clinic.id)
    

    if (clinicId === 0) {
      window.alert("Please add a Clinic")
    } else {
    
      const newClinic = {
       name: clinic.name,
       address: clinic.address,
       services: clinic.services,
       hours: clinic.hours,
       phoneNumber: clinic.phoneNumber
      }
      addClinic(newClinic)
        .then(() => history.push("/clinics"))
    }
  }

  return (
    <form className="clinicForm">
      <h2 className="clinicForm__title">New Clinic</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Clinic Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Clinic name" value={clinic.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Clinic Address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Clinic address" value={clinic.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="services">Services Provided: </label>
          <input type="text" id="services" required autoFocus className="form-control" placeholder="Clinic services" value={clinic.services} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="hours">Hours of Operation: </label>
          <input type="text" id="hours" required autoFocus className="form-control" placeholder="Clinic hours" value={clinic.hours} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="phoneNumber">Contact: </label>
          <input type="text" id="phoneNumer" required autoFocus className="form-control" placeholder="Clinic phoneNumber" value={clinic.phoneNumber} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveClinic}>
        Save My Clinic
          </button>
    </form>
  )
}
