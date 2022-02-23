import React from "react";
import { useSelector } from "react-redux";
import Aside from "./Aside";
import CustomNavbar from "./CustomNavbar";

export function Layout({ children }) {
  const { layoutProps } = useSelector(
    ({ layout }) => ({
      layoutProps: layout.config,
    })
  );

  return (
    <div className="d-flex flex-column">
      <CustomNavbar />
      <div className="d-flex flex-row">
        { layoutProps.aside && <Aside /> }
        <div className="content">
          { children }
        </div>
      </div>
    </div>
  );
}