import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../_redux/annRedux";

import BaseModal from "../../../components/UI/BaseModal.jsx";

function UpdateAnnDialog({ open, handleClose, announcement }) {
  const dispatch = useDispatch();
  const initInputData = {
    Title: announcement.Title,
    Description: announcement.Description,
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
      ok = ok && inputs_data[to_validate[i]].length;
      i++;
    }
    return ok;
  };

  const handleInputsChange = event => {
    const { name, value } = event.target;
    setInputData({ ...inputs_data, [name]: value })
  };

  const handleUpdate = () => {
    if(!validateInputs()) return;
    dispatch(actions.updateAnnouncement({ ...announcement, ...inputs_data }))
    .then(() => handleClose());
  };

  const actionButtons = [
    {
      content: "Actualizar anuncio",
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
      title="Actualizar anuncio"
      open={open}
      actions={actionButtons}
      handleClose={handleClose}
    >
      <form className={`${!state.wadSubmited ? "needs-validation" : "was-validated"}`} noValidate>
        <div className="form-group">
          <label htmlFor="Title">Título del anuncio</label>
          <input 
            type="text"
            name="Title"
            className="form-control"
            value={inputs_data.Title}
            onChange={handleInputsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Contenido del anuncio</label>
          <textarea  
            type="text"
            name="Description"
            className="form-control"
            style={{minHeight: "150px"}}
            value={inputs_data.Description}
            onChange={handleInputsChange}
          />
        </div>
      </form>
    </BaseModal>
  );
}

export default UpdateAnnDialog;