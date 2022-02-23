import React from "react";
import {NavLink}  from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faBriefcase, faClinicMedical, faNotesMedical } from "@fortawesome/free-solid-svg-icons";

function Aside() {
  const menuItem = (icon, children) => (
    <div>
      <div className="col">

      </div>
    </div>
  );
    
  return (
    /* begin::aside-manu */
    <div id="kt_aside" className="sidebar d-flex flex-column flex-row-auto">
      <div id="kt_aside_menu" className="my-4 scroll ps ps--active-y" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
        <ul className="nav">
          <li aria-haspopup="true" className="nav-item">
            <NavLink to="/courses/announcements" className="nav-link"> 
              <FontAwesomeIcon icon={faBullhorn} className="nav-icon" />
              <span>Anuncios</span>
            </NavLink>
          </li>
          <li aria-haspopup="true" className="nav-item">
            <NavLink to="/courses/activities" className="nav-link">
              <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
              <span className="menu-text">Actividades</span>
            </NavLink>
          </li>
          <li aria-haspopup="true">
            <NavLink to="/courses/clinical-cases">
              <FontAwesomeIcon icon={faClinicMedical} />
              <span className="menu-text">Casos clínicos</span>
            </NavLink>
          </li>
          <li aria-haspopup="true" className="nav-item">
            <NavLink to="/courses/hcn" className="nav-link">
              <FontAwesomeIcon icon={faNotesMedical} className="nav-icon" />
              <span className="menu-text">HCN</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;