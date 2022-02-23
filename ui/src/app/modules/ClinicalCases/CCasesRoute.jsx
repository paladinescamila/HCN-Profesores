import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ClinicalCasesDetails from "./pages/ClinicalCasesDetails";

function CCasesRoute() {
  return (
    <Switch>
      <Redirect exact={true} from="/clinical-cases" to="/clinical-cases/all" />
      <Route 
        exact={true} 
        path="/clinical-cases/:id" 
        component={ props => <ClinicalCasesDetails { ...props } /> } 
      />
      <Redirect to="/error/404"/> 
    </Switch>
  );
}

export default CCasesRoute;