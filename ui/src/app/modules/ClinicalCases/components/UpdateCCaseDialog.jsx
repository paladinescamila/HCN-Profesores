import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/ccasesRedux";
import BaseModal from "../../../components/UI/BaseModal.jsx";

function UpdateCCaseDialog({ open, handleClose, clinical_case }) {
  const dispatch = useDispatch();
  const initInputData = {
    Title: clinical_case.Title,
    Description: clinical_case.Description,
    Media: ""
  };

  const [ inputs_data, setInputData ] = React.useState(initInputData);

  const handleInputsChange = event => {
    const { name, value } = event.target;
    setInputData({
      ...inputs_data,
      [name]: value
    })
  };

  const validateInputs = () => {
    let to_validate = Object.keys(initInputData);
    let [ i, ok ] = [ 0, true ];
    while(i < to_validate.length && ok) {
      ok = ok && inputs_data[to_validate[i]].length;
      i++;
    }
    return ok;
  };
  
  const handleUpdate = () => {  
    console.log(inputs_data);
    if(!validateInputs()) return;
    dispatch(actions.updateCCase({ ID: clinical_case.ID, ...inputs_data }))
    .then(() => handleClose())
  };

  const actionButtons = [
    {
      content: "Actualizar Caso Clínico",
      onClick: () => handleUpdate()
    },
    {
      content: "Cancelar",
      onClick: () => handleClose(),
      className: "btn btn-secondary"
    }
  ];

  return (
    <BaseModal 
      title="Actualizar caso clínico"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
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
          <label htmlFor="Media">Archivo</label>
          <input  
            type="file"
            name="Media"
            className="ml-2"
            value={inputs_data.Media}
            onChange={handleInputsChange}
          />
        </div>
      </form>
    </BaseModal>
  );
}

export default UpdateCCaseDialog;