import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../theme/layout";
import BasePage from "./BasePage";
import ErrorsPage from "./modules/ErrorPages/ErrorPage";
import AuthPage from "./pages/AuthPage";

export default function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  return (
    <Switch>
      { !isAuthorized ? (
        <Route>
          <AuthPage />
        </Route>
      ) : (
        <Redirect from="/auth" to="/" />
      ) }

      <Route path="/error" component={ErrorsPage}/>

      { !isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}