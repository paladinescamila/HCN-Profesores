import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { actions } from "../modules/ClinicalCases/_redux/ccasesRedux";
import CreateCCaseDialog from "../modules/ClinicalCases/components/CreateCCaseDialog.jsx";
import AddCCaseDialog from "../modules/ClinicalCases/components/AddCCaseDialog";
import UpdateCCaseDialog from "../modules/ClinicalCases/components/UpdateCCaseDialog";
import BaseCardSection from "../components/UI/BaseCardSection";

function CCasesPage() {
  const { ccasesListByCourse } = useSelector(state => state.clinicalCases);
  const dispatch = useDispatch();
  const history = useHistory();

  const [ openCreateDialog, setOpenCreateDialog ] = React.useState(false);
  const [ openUpdateDialog, setOpenUpdateDialog ] = React.useState(false);
  const [ openAddDialog, setOpenAddDialog ] = React.useState(false);
  const [ ccaseValue, setCcaseValue ] = React.useState(undefined);

  React.useEffect(() => {
    dispatch(actions.getCCasesListByCourse());
  }, [dispatch]);

  const handleUpdate = (data) => {
    setCcaseValue(data);
    console.log(data);
    setOpenUpdateDialog(true);
  };

  const handleDelete = ({ ID }) => {
    dispatch(actions.deleteCCaseByCourse(ID));
  };

  const handleRemove = ({ ID }) => {
    dispatch(actions.removeCCase(ID));
  };

  return (
    <BaseCardSection title="Casos Clínicos"
      toolbar={[
        {
          title: "Agregar",
          className: "btn btn-primary btn-circle font-weight-bolder",
          onClick: () => setOpenAddDialog(true)
        },
        {
          title: "+",
          className: "btn btn-primary btn-circle font-weight-bolder ml-2",
          onClick: () => setOpenCreateDialog(true)
        }
      ]}
      style={{backgroundColor: "#f3f6f9"}}
    >
      
      <div className="container-fluid">
      {ccasesListByCourse.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 bg-white rounded">
            {/* Card::body */}
            <div className="card-body pt-3">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <strong className="align-self-center">{ value.Title }</strong>
                  </div>
                  <div className="col text-right">
                    <a className="btn btn-primary font-weight-bolder font-size-sm mr-3"
                      onClick={() => {history.push(`/clinical-cases/${value.ID}`)}}
                    >
                      ver
                    </a>
                    <a className="btn btn-info font-weight-bolder font-size-sm mr-3"
                      onClick={ () => handleUpdate(value) }
                    >
                      editar
                    </a>
                    <a className="btn btn-danger font-weight-bolder font-size-sm mr-3"
                      onClick={ () => handleRemove(value) }
                    >
                      Remover
                    </a>
                    <a className="btn btn-danger font-weight-bolder font-size-sm mr-3"
                      onClick={ () => handleDelete(value) }
                    >
                      eliminar
                    </a>
                  </div>
                </div>
              </div>
              {/* Card::body::info */}
              <div className="card-body p-0">
                { value.Description }
              </div>
              <div className="card-body p-0 pt-2">
                <small className="text-muted font-weight-bold d-block">
                  { moment(value.CreationDate).format("DD-MM-YYYY") }
                </small>
              </div>
              <div className="card-body p-0 pt-2">
                <strong>Contiene:</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      {
        openCreateDialog &&
        <CreateCCaseDialog
          open={openCreateDialog}
          handleClose={() => setOpenCreateDialog(false)}
        />
      }

      {
        openAddDialog &&
        <AddCCaseDialog 
          open={openAddDialog}
          handleClose={() => setOpenAddDialog(false)}
        />
      }

      {
        openUpdateDialog &&
        <UpdateCCaseDialog 
          open={openUpdateDialog}
          handleClose={() => setOpenUpdateDialog(false)}
          clinical_case={ccaseValue}
        />
      }
    </BaseCardSection>
  );
}

export default CCasesPage;