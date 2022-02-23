import React from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../Courses/_redux/coursesRedux";

import Activities from "../../pages/Activities.jsx";
import Announcements from "../../pages/Announcements.jsx";
import CoursesPage from "../../pages/CoursesPage.jsx";
import CCasesPage from "../../pages/CCasesPage.jsx";
import HcnPage from "../../pages/HcnPage.jsx";
import ClinicalCasesDetails from "../ClinicalCases/pages/ClinicalCasesDetails";

export default function CoursesRoute() {
  const { currentCourse } = useSelector(state => state.courses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(currentCourse.id) {
      dispatch(actions.getCourseData(currentCourse.id));
    }
  }, [dispatch]);

  return (
    <Switch>
      <Redirect exact={true} from="/courses" to="/courses/announcements" />
      <Route exact={true} path="/courses/all" component={CoursesPage} />
      {currentCourse.id ? (
        <>
        <Route exact={true} path="/courses/activities" component={Activities} />
        <Route exact={true} path="/courses/announcements" component={Announcements} />
        <Route exact={true} path="/courses/clinical-cases" component={CCasesPage} />
        <Route exact={true} path="/courses/hcn" component={HcnPage} />
        </>
      ) : (
        <Redirect to="/courses/all" />
      )}

      
      {/* <Route exact={true} path="/courses/:id" component={(props) => <MainCoursePage {...props}/>} /> */}
      <Redirect to="/error/404"/> 
    </Switch>
  );
}