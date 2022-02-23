import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { layoutActions } from "../../../app/modules/General/_redux/fileRedux";
import * as CoursesRedux from "../../../app/modules/Courses/_redux/coursesRedux";

export default function SubHeader() {
  const { layoutProps, courseName } = useSelector(
    ({ layout, courses }) => ({
      layoutProps: layout.config,
      courseName: courses.currentCourse.data.Name ? courses.currentCourse.data.Name : "" 
    })
  );
  const dispatch = useDispatch();

  return (
    /* Subheader */
    <div className="div-subheader" id="kt_subheader">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <button 
          className="btn text-white"
          onClick={() => {
            dispatch(layoutActions.setConfig("aside", !layoutProps.aside));
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        
        {/* title */}
        <div>
          <h4 className="text-white">{ courseName }</h4>
        </div>
        <NavLink to="/courses">
          <button className="btn text-white font-weight-bold" onClick={() => {
            dispatch(CoursesRedux.actions.setCurrentCourse("id", undefined));
          }}>
            Cursos
          </button>
        </NavLink>
      </div>
    </div>
  );
}