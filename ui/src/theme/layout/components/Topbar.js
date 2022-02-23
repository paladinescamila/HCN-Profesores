import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default function Topbar() {
  return (
    <div className="d-flex flex-column flex-row-fluid fixed-top" id="kt_topbar">
      <Header />
      <SubHeader />
    </div>
  );
}