import React from "react";

 function JobCard(props){
  console.log(props)

  const date = new Date(props.job.jobDate).toLocaleString();

  const moolah = (props.job.income)

  const expenses =(props.job.expenses)

  const tips = (props.job.tip)

  const cashMoney = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(moolah)
  
  const Expense = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(expenses)

  const $$$ = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(tips)

  return(
      <div className="card">
      <div className="card-header">
          {props.job.jobTitle}
      </div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">{date}</li>
  <li className="list-group-item">Income: {cashMoney}</li>
  <li className="list-group-item">Expenses: {Expense}</li>
  <li className="list-group-item">Tips: {$$$}</li>
</ul>
</div>
  )

}

export default JobCard