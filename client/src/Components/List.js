import React from "react";
import JobCard from "./Card";

const JobCardList = (props) => {
    return(
        <div className="ml-4">
            <JobCard job={props.job}/>
        </div>
    )
}

export default JobCardList
