import React from "react";

function Jumbotron() {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Freelancer Pro</h1>
            <p className="lead">A New Financial Tracking application designed for the gig economy. 
            Track earnings,expenses, and tips from all your jobs on one platform </p>
        </div>
    );
}

export default Jumbotron;