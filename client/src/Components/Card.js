import React from "react";

 function JobCard(props){
  console.log(props)

  const date = new Date(props.job.jobDate).toLocaleString();

  // const formattedDate= new Intl.DateTimeFormat('en-US', { dateStlye: 'full', timeStyle: 'short' }).format(date) ;

  // const formattedDay = new Intl.DateTimeFormat('en-US').format(date);
  

  return(
      <div className="card">
      <div className="card-header">
          {props.job.jobTitle}
      </div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">{date}</li>
  <li className="list-group-item">Income: {props.job.income}</li>
  <li className="list-group-item">Expenses: {props.job.expenses}</li>
  <li className="list-group-item">Tips: {props.job.tip}</li>
</ul>
</div>
  )

}

export default JobCard