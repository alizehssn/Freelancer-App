import React from "react";
import { Link } from "react-router-dom";
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
            <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </li>
        </ul>
    </nav>
        
    );
}

export default Nav