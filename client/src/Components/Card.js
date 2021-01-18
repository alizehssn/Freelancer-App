import React from "react";

 function JobCard(props){
  console.log(props)
  const dateObject = new Date(props.job.jobDate)
  console.log(dateObject)
  return(
      <div className="card">
      <div className="card-header">
           {props.job.jobTitle}
      </div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Date: {dateObject.toString().slice(0, 15)} </li>
  <li className="list-group-item">Income: ${props.job.income}</li>
  <li className="list-group-item">Expenses: ${props.job.expenses}</li>
  <li className="list-group-item">Tips: ${props.job.tip}</li>
</ul>

</div>
  )
}
export default JobCard