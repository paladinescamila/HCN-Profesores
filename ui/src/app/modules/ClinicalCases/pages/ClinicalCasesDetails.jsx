import React from "react";

import BaseCardSection from "../../../components/UI/BaseCardSection";

import { getCCase } from "../_redux/ccasesCrud";
import { base64ToBlob } from "../../../const";

function ClinicalCasesDetails(props) {
  const { id } = props.match.params;
  const [ ccase, setCCase ] = React.useState({
    ID: "",
    Title: "",
    Description: "",
    Media: null,
  });

  React.useEffect(() => {
    getCCase({ id })
      .then(data => {
        console.log(data);
        setCCase(data);
      });
  }, [id]);

  const mediaOpen = () => {
    let datablob = base64ToBlob(ccase.Media);
    let data = window.URL.createObjectURL(datablob);
    window.open(data);
  };

  return (
    <BaseCardSection title="Caso clínico">
      <form>
        <div className="form-group">
          <label htmlFor="Title">Título</label>
          <input 
            type="text"
            name="Title"
            className="form-control"
            defaultValue={ ccase.Title }
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Descripción</label>
          <textarea  
            type="text"
            name="Description"
            className="form-control"
            style={{minHeight: "100px"}}
            defaultValue={ ccase.Description }
          />
        </div>
        <div className="form-group">
          <label htmlFor="Media">Archivo</label>
          <button className="btn btn-primary" onClick={mediaOpen}>Ver archivo</button>
        </div>
      </form>
    </BaseCardSection>
  );
}

export default ClinicalCasesDetails;