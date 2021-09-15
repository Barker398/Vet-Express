import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = () => {
  return (
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Clinics</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">My Clinics</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Logout</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

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
    </nav>
  )
}
