//Homepage Automatically returns all Jobs upon loading
//Nav Bar at top to either go to create job page or search

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AllJobsList from "../Components/List";
import SearchBox from "../Components/SearchBox";

import API from "../utils/API";


class Homepage extends Component  {
    constructor() {
        super();
        this.state = {
         jobs: [],
         search: ""
        };
      }
      componentDidMount(){
          this.loadJobs();
      }
      loadJobs = () =>{
          API.getAllJobs()
          .then((res) => {
            let savedJobs = res.data;
            this.setState({ jobs: savedJobs });
          })
          .catch((err) => console.log(err));
      };
      makeJobs = (jobs) => {
        return jobs.map(job => {
            return (
                <AllJobsList 
                key={job._id}
                job={job}/>
            )
        })
      };

      handleChange = (e) => {
        this.setState({search: e.target.value})
      }
    
      render(){
        const {jobs, search} = this.state
        const filteredJobs = jobs.filter(job => { return job.jobTitle.toLowerCase().includes(search.toLowerCase())})
        return (
      
        <Container>
          <SearchBox handleChange={this.handleChange}/>
          <div className="col-4 mt-4 ml-2 mb-2 d-flex">
  
    {this.makeJobs(filteredJobs)}
          
          </div>
    </Container>
    
    )
      }
    
}

export default Homepage