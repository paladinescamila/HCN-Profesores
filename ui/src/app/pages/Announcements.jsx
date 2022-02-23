import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import CreateAnnDialog from "../modules/Announcements/components/CreateAnnDialog.jsx";
import { actions } from "../modules/Announcements/_redux/annRedux";
import UpdateAnnDialog from "../modules/Announcements/components/UpdateAnnDialog.jsx";
import BaseCardSection from "../components/UI/BaseCardSection.jsx";

function Announcements() {
  const { announcementslist } = useSelector(state => state.announcements);
  const dispatch = useDispatch();

  const [ openCreateDialog, setOpenCreateDialog ] = React.useState(false);
  const [ openUpdateDialog, setOpenUpdateDialog ] = React.useState(false);
  const [ annValue, setAnnValue ] = React.useState(undefined);

  React.useEffect(() => {
    dispatch(actions.getAnnouncementsList());
  }, [dispatch]);

  const handleDelete = ({ ID }) => {
    dispatch(actions.deleteAnnouncement(ID))
    .then(() => dispatch(actions.getAnnouncementsList()));
  };
  
  const handleUpdate = (ann) => {
    setAnnValue(ann);
    setOpenUpdateDialog(true);
  }
  
  return (
    <BaseCardSection title="Anuncios"
      toolbar={[
        {
          className: "btn btn-primary btn-circle font-weight-bolder",
          onClick: () => setOpenCreateDialog(true),
          title: "+"
        }
      ]}
      style={{backgroundColor: "#f3f6f9"}}
    >
      <div className="container-fluid">
        {/* anuncios */}
        {announcementslist.map((value, index) => (
          <div key={index} className="row">
            {/* Card */}
            <div className="card custom-card p-3 mb-5 rounded">
              {/* Card::body */}
              <div className="card-body pt-3">
                {/* Card::body::title */}
                <div className="card-title">
                  <div className="row">
                    <div className="col">
                      <strong className="align-self-center">{ value.Title }</strong> 
                    </div>
                    <div className="col text-right">
                      <a className="btn btn-info font-weight-bolder font-size-sm mr-3"
                        onClick={ () => handleUpdate(value) }
                      >
                        editar
                      </a>
                      <a 
                        className="btn btn-danger font-weight-bolder font-size-sm mr-3"
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
              </div>
            </div> 
          </div>
        ))}
      </div>
      
      { 
        openCreateDialog &&
        <CreateAnnDialog
          open={ openCreateDialog }
          handleClose={ () => setOpenCreateDialog(false) }
        /> 
      }

      {
        openUpdateDialog &&
        <UpdateAnnDialog
          open={ openUpdateDialog }
          handleClose={ () => setOpenUpdateDialog(false) }
          announcement={ annValue }
        />
      }
    </BaseCardSection>
  );
}

export default Announcements;