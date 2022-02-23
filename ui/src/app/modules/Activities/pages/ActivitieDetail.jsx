import React from "react";
import BaseModal from "../../../components/UI/BaseModal.jsx";

function ActivitieDetail({ open, handleClose }) {
  
  const handleCreate = () => {

  };

  const actionButtons = [
    {
      content: "Crear actividad",
      onClick: () => handleCreate()
    },
    {
      content: "Cancelar",
      onClick: () => handleClose(),
      className: "btn btn-secondary"
    }
  ];

  return (
    <BaseModal 
      title="Crear nueva actividad"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
      size="lg"
    >
      <form>
        <div className="form-group">
          <label htmlFor="Title">Título</label>
          <input 
            type="text"
            id="Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Descripción</label>
          <textarea  
            type="text"
            id="Description"
            className="form-control"
            style={{minHeight: "100px"}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Type">Tipo</label>
          <select name="Type" id="Type" className="form-control">
          <option value="">Seleccionar</option>
            <option value="Calificable">Calificable</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="LimitDate">Fecha de entrega</label>
          <input  
            type="date"
            id="LimitDate"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="HCNID">Historia Clínica Nutricional asociada</label>
          <select name="Type" id="HCNID" className="form-control">
            <option value="">Seleccionar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ClinicalCaseID">Caso Clínico asociado</label>
          <select name="Type" id="ClinicalCaseID" className="form-control">
            <option value="">Seleccionar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Difficulty">Dificultad</label>
          <select name="Type" id="Difficulty" className="form-control">
            {[1,2,3,4,5].map(value => (
              <option value={value} key={value}>{value}</option>
            ))}
          </select>
        </div>
      </form>
      
    </BaseModal>
  );
}

export default ActivitieDetail;