import React from "react";

const JobForm = (props) => {
    return(
        <form>
            <input
             name="jobTitle"
             placeholder="Enter Job"
             value={props.jobTitle}
             onChange={e => props.change(e)}
            />
            <br />
            <input
             name="jobDate"
             placeholder="Date"
             value={props.jobDate}
             onChange={e => props.change(e)}
            />
            <br />
            <input
             name="income"
             placeholder="Enter Income"
             value={props.income}
             onChange={e => props.change(e)}
            />
            <br />
            <input
             name="expenses"
             placeholder="Enter Expenses"
             value={props.expenses}
             onChange={e => props.change(e)}
            />
            <br />
            <input
             name="tip"
             placeholder="Tips"
             value={props.tip}
             onChange={e => props.change(e)}
            />
            <br />
            <button onClick= {(e) => props.submit(e)}>Submit</button>
        </form>
    )
}

export default JobForm

