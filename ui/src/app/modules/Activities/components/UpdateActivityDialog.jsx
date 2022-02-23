import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/activitiesRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";

function UpdateActivityDialog({ open, handleClose, activity }) {
  const { hcnList, ccasesList } = useSelector(
    ({ hcn, clinicalCases }) => ({
      hcnList: hcn.hcnList,
      ccasesList: clinicalCases.ccasesList
    })
  );
  const dispatch = useDispatch();
  const initInputData = {
    Title: activity.Title,
    Description: activity.Description,
    Type: activity.Type,
    LimitDate: activity.LimitDate,
    HCNID: activity.HCNID,
    ClinicalCaseID: activity.ClinicalCaseID,
    Difficulty: activity.Difficulty
  };

  const [ state, setState ] = React.useState({
    wadSubmited: false,
  });

  const [ inputs_data, setInputData ] = React.useState(initInputData);
  
  const handleStateChange = (field, value) => setState({...state, [field]: value});

  const validateInputs = () => {
    let to_validate = Object.keys(initInputData);
    let [ i, ok ] = [ 0, true ];
    while(i < to_validate.length && ok) {
      ok = ok && (inputs_data[to_validate[i]].length || inputs_data[to_validate[i]]);
      i++;
    }
    return ok;
  };

  const handleInputsChange = event => {
    let { name, value } = event.target;
    if(name == "ClinicalCaseID" || name == "HCNID" || name == "Difficulty") value = parseInt(value);
    setInputData({
      ...inputs_data,
      [name]: value
    })
  };

  const handleCreate = () => {
    if(!validateInputs()) return;
    dispatch(actions.updateActivity({ ...inputs_data, ID: activity.ID }))
    .then(() => handleClose())
  };

  const actionButtons = [
    {
      content: "Publicar actividad",
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
            name="Title"
            className="form-control"
            value={inputs_data.Title}
            onChange={handleInputsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Descripción</label>
          <textarea  
            type="text"
            name="Description"
            className="form-control"
            style={{minHeight: "100px"}}
            value={inputs_data.Description}
            onChange={handleInputsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Type">Tipo</label>
          <select 
            name="Type" 
            id="Type" 
            className="form-control"
            value={inputs_data.Type}
            onChange={handleInputsChange}
          >
            <option value="">Seleccionar</option>
            <option value="Calificable">Calificable</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="LimitDate">Fecha de entrega</label>
          <input  
            type="datetime-local"
            name="LimitDate"
            className="form-control"
            value={inputs_data.LimitDate}
            onChange={handleInputsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="HCNID">Historia Clínica Nutricional asociada</label>
          <select 
            name="HCNID" 
            id="HCNID" 
            className="form-control"
            value={inputs_data.HCNID}
            onChange={handleInputsChange}
          >
            <option value="">Seleccionar</option>
            {hcnList.map(({ ID }) => (
              <option value={ ID } key= { ID }>{ ID }</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ClinicalCaseID">Caso Clínico asociado</label>
          <select 
            name="ClinicalCaseID" 
            id="ClinicalCaseID" 
            className="form-control"
            value={inputs_data.ClinicalCaseID}
            onChange={handleInputsChange}
          >
            <option value="">Seleccionar</option>
            {ccasesList.map(({ ID, Title }) => (
              <option value={ ID } key={ ID }>{ Title }</option>
            ))}
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Difficulty">Dificultad</label>
          <select 
            name="Difficulty" 
            id="Difficulty" 
            className="form-control"
            value={inputs_data.Difficulty}
            onChange={handleInputsChange}
          >
            {[1,2,3,4,5].map(value => (
              <option value={value} key={value}>{value}</option>
            ))}
          </select>
        </div>
      </form>
      
    </BaseModal>
  );
}

export default UpdateActivityDialog;