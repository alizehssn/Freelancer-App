import axios from "axios";
const API = {saveJob: (jobData)=>{
    return axios.post("/api/jobs", jobData )
},
getAllJobs: ()=>{
    return axios.get("/api/jobs")
},

} 
export default API;