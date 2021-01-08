import React from "react";
import JobCard from "./Card";

const JobCardList = (props) => {
    return(
        <div>
            <JobCard job={props.job}/>
        </div>
    )
}

export default JobCardList
