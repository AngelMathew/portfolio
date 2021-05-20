import * as React from "react";
import Home from "../pages/home";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Router } from "@reach/router";

const Main = () => {
  return (
    
    <>
     

      {/* <HashRouter basename="/">
          <Switch> */}
      <Router basepath="/">
          <Home path="/home"/> 
          </Router>
                
                
              
{/* </Switch>
      </HashRouter> */}
    </>
  )
}

export default Main;
