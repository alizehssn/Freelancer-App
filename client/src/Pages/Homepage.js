//Homepage Automatically returns all Jobs upon loading
//Nav Bar at top to either go to create job page or search

import React, { Component } from "react";
import AllJobsList from "../Components/List"

import API from "../utils/API";


class Homepage extends Component  {
    constructor() {
        super();
        this.state = {
         jobs: [],
        };
      }
      componentDidMount(){
          this.loadJobs();
          console.log(this.state.jobs)
      }
      loadJobs = () =>{
          API.getAllJobs()
          .then((res)=> {
              this.setState({jobs: res.data});
          })
          .catch((err)=> console.log(err));
      }

      render(){
        return(
            <AllJobsList/>
        )
      }
    
}

export default Homepage