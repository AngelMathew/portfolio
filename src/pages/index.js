import * as React from "react";
import Main from "../pages/main";
import Home from "../pages/home";
import { Router } from "@reach/router";

// import { Route, Switch, HashRouter } from "react-router-dom";
// markup
const IndexPage = () => {
  return (
    
    <main>
      <title>Angel Anna Mathew</title>

     {/* <Main path="/"/>  */}
     {/* <Router basepath="/"> */}
          <Home/> 
          {/* </Router> */}
              

     
    </main>
  )
}

export default IndexPage;
