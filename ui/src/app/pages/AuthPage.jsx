import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Login from "../modules/Auth/components/Login";

function AuthPage() {
  return (
    <div 
      className="container-fluid"
      style={{
        backgroundColor: "#1B7B52",
        height: "100vh",
        padding: "0px"
      }}
      >
        <div className="d-flex flex-column flex-row-fluid p-3 overflow-hidden h-100">
        {/* col-4 d-flex justify-content-center align-self-center */}
          <div className="d-flex flex-column-fluid flex-center justify-content-center align-self-center h-100">
            <Switch>
              <Route path="/auth/login" component={Login} />
              <Redirect from="/auth" exact={true} to="/auth/login" />
              <Redirect to="/auth/login" />
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default AuthPage;