import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { actions as ccasesRedux } from "./modules/ClinicalCases/_redux/ccasesRedux"; 
import { actions as hcnRedux } from "./modules/HCN/_redux/hcnRedux"; 
import Home from "./pages/Home.jsx";

const CoursesRoute = React.lazy(() =>
  import("./modules/Courses/CoursesRoute")
);

const CCasesRoute = React.lazy(() =>
  import("./modules/ClinicalCases/CCasesRoute.jsx")
);

export default function BasePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ccasesRedux.getCCasesList());
    dispatch(hcnRedux.getHcnList());
  }, []);

  return (
    <React.Suspense fallback={<h1>loading page...</h1>}>
      <Switch>
        <Redirect exact={true} from="/" to="/courses/all" />
        <Route exact={true} path="/home" component={Home} />
        <Route path="/courses" component={CoursesRoute} />
        <Route path="/clinical-cases" component={CCasesRoute} />
        <Redirect to="/error/404"/>
      </Switch>
    </React.Suspense>
    
  );
}