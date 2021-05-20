import * as React from "react";
import Home from "../pages/home";
import { Route, Switch, HashRouter } from "react-router-dom";
// markup
const IndexPage = () => {
  return (
    
    <main>
      <title>Angel Anna Mathew</title>

      <HashRouter basename="/">
      <Route
                path="/home"
                render={() => <Home/> }
              />

      </HashRouter>
    </main>
  )
}

export default IndexPage
