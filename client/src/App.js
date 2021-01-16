import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav-Bar/Navbar";
import Homepage from "./Pages/Homepage";
import CreateJob from "./Pages/CreateJob";
import {useAuth0} from '@auth0/auth0-react'
import Auth0Provider from './Components/auth0/auth0'
import './App.css';

function App(){
  
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  // if (isLoading) {
  //   return <div> Loading...</div>;
  // }


  return (
   
    
    <div className="App">
      <Auth0Provider><Nav/>
      <Switch>
        <Route exact path= "/"
         render={ ()=> <Homepage/>
         }/>
         <Route exact path= "/jobs"
         render={ ()=> <CreateJob/>
         }/>
      </Switch>
      </Auth0Provider>
      
    </div>
    
  )
}

export default App;
