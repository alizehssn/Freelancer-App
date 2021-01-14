import React from "react";

const JobForm = (props) => {
    return(
        <form className="mt-4" className="mt-4">
            <input
            className="input-shadow"
             name="jobTitle"
             placeholder="Enter Job"
             value={props.jobTitle}
             onChange={e => props.change(e)}
            />
            <br />
            <input className="mt-2 input-shadow"
            type="datetime-local"
             name="jobDate"
             placeholder="Date"
             value={props.jobDate}
             onChange={e => props.change(e)}
            />
            <br />
            <input className="mt-2 input-shadow"
             name="income"
             type="number"
             placeholder="Enter Income"
             value={props.income}
             onChange={e => props.change(e)}
            />
            <br />
            <input className="mt-2 input-shadow"
             name="expenses"
             type="number"
             placeholder="Enter Expenses"
             value={props.expenses}
             onChange={e => props.change(e)}
            />
            <br />
            <input className="mt-2 input-shadow"
             name="tip"
             type="number"
             placeholder="Tips"
             value={props.tip}
             onChange={e => props.change(e)}
            />
            <br />
            <button className="mt-2" onClick= {(e) => props.submit(e)}>Submit</button>
        </form>
    )
}

export default JobForm

