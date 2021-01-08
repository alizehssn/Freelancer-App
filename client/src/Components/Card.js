import React from "react";

 function JobCard(props){
    return(
        <div class="card">
        <div class="card-header">
            Sample Job Title
        </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Date</li>
    <li class="list-group-item">Income</li>
    <li class="list-group-item">Expense</li>
    <li class="list-group-item">Tips</li>
  </ul>
</div>
    )

}

export default JobCard