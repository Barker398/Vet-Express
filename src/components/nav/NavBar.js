import React from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    // <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clinics">Clinics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/my clinics">My Clinics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    // </nav>
  )
}
