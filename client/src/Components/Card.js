import React from "react";

 function JobCard(props){
  console.log(props)
  return(
      <div className="card">
      <div className="card-header">
          Job - {props.job.jobTitle}
      </div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Date: {props.job.jobDate}</li>
  <li className="list-group-item">Income: {props.job.income}</li>
  <li className="list-group-item">Expenses: {props.job.expenses}</li>
  <li className="list-group-item">Tips: {props.job.tip}</li>
</ul>
</div>
  )

}

export default JobCard