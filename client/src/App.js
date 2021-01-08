import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav-Bar/Navbar";
import Homepage from "./Pages/Homepage";
import CreateJob from "./Pages/CreateJob";
import SearchResult from "./Pages/SearchResult";
import './App.css';

function App(){
  
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path= "/"
         render={ ()=> <Homepage/>
         }/>
         <Route exact path= "/jobs"
         render={ ()=> <CreateJob/>
         }/>
           <Route exact path= "/search"
         render={ ()=> <SearchResult/>
         }/>
      </Switch>
     
    </div>
    </Router>);
}

export default App;
