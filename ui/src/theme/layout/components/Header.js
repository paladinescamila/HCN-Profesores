import React from "react";
import { toAbsoluteUrl } from "../../helpers";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  return (
    /* Header */
    <div className="div-header" id="kt_header">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        {/* logo */}
        <div className="align-self-center">
          <img className="logo" src={toAbsoluteUrl("/media/logos/logo_v1.png")}/>
        </div>
        {/* toolbar */}
        <Dropdown className="align-self-center">
          <Dropdown.Toggle id="kt-profile-dropdown" variant="btn btn-outline-light">Benito fernandez</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Mi perfil</Dropdown.Item>
            <hr className="ml-4 mr-4"/>
            <Dropdown.Item>
              <button className="btn btn-danger">Cerrar sesión</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}