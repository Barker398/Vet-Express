import React from "react"
import { Link, useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

// exporting the NavBar function.
export const NavBar = () => {
  
  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push("/login")

  }
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <img className="logo" src="/images/vetLogo.png" alt="vetLogo"/>

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clinics">Clinics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myclinics">My Clinics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/login" onClick={handleLogout}>Logout</Link>

        </li>
      </ul>
    </nav>
  )
}
