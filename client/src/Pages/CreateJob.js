import React, { Component } from "react";
import JobForm from "../Components/Form";
import API from "../utils/API";

class CreateJob extends Component {
  constructor() {
    super();
    this.state = {
      jobTitle: "",
      jobDate: "",
      income: "",
      expenses: "",
      tip: "",
    };
  }

  change = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      console.log(this.state)
    );
  };

  submit = (e) => {
    e.preventDefault();
    const fields = this.state;
    API.saveJob(fields)
    .then((res)=>{
        alert("Job Created!")
    })
    .catch((err)=> {console.log(err)});
  };

  render() {
    return (
      <JobForm
        change={this.change}
        submit={this.submit}
      />
    );
  }
}

export default CreateJob;