import React from "react";
import { Link } from "react-router-dom";
import Login from '../Auth0/Auth-btn'



 function Nav() {
    return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            Freelancer
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className= "nav-link" to = "/"> Home </Link>
        </li>
        <li className="nav-item">
        <Link className= "nav-link" to = "/jobs"> Create Job </Link>
        </li>
        <li className="nav-item">
            <Login />
        </li>
        </ul>
    </nav>
        
    );
}

export default Nav;