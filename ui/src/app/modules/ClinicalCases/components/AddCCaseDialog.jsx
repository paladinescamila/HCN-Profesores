import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../_redux/ccasesRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";

function AddCCaseDialog({ open, handleClose }) {
  const { ccasesList } = useSelector(state => state.clinicalCases);
  const dispatch = useDispatch();

  const [ ccase_id, setCCaseId ] = React.useState(undefined);

  const validateInputs = () => {
    let ok = true;
    ok = ok && (ccase_id);
    return ok;
  };

  const handleAdd = () => {
    if(!validateInputs()) return;
    dispatch(actions.addCCaseToCourse(parseInt(ccase_id)))
    .then(() => handleClose())
  };


  return (
    <BaseModal
      title="Agregar caso clínico"
      open={open}
      handleClose={() => handleClose()}
      actions={[
        {
          content: "Añadir",
          onClick: () => handleAdd()
        },
        {
          content: "Cancelar",
          onClick: () => handleClose(),
          className: "btn btn-secondary"
        }
      ] }
    >
      <form>
        <div className="form-group">
          <label htmlFor="Description">Casos clínicos</label>
          <select 
            name="Type" 
            id="Type" 
            className="form-control"
            value={ccase_id}
            onChange={event => setCCaseId(event.target.value)}
          >
            <option value="">Seleccionar</option>
            {ccasesList.map(({ ID, Title }) => (
              <option value={ ID } key={ ID }>{ Title }</option>
            ))}
          </select>
        </div>
      </form>
    </BaseModal>
  )
}

export default AddCCaseDialog;