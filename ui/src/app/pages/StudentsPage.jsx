import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

import { actions } from "../modules/Courses/_redux/coursesRedux";

function getCardsList(list, size = 3) {
  let ans = [];
  for(let i=0; i < Math.ceil(list.length / size); i++) {
    ans.push(list.slice(i, i + size));
  }
  return ans;
} 

function StudentsPage() {
  const { coursesList } = useSelector(state => state.courses);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(actions.getCoursesList());
  }, [dispatch]);

  const handleCourse = (id) => {
    dispatch(actions.setCurrentCourse("id", id));
  };

  return (
    <div className="container">
      {/* title */}
      <div className="row pb-5">
        <h3 className="text-dark">Cursos</h3>
      </div>

      {/* Courses */}
      {getCardsList(coursesList).map((row, i) => (
        <div key={i} className="row my-3">
          {row.map((value, j) => (
            <div key={j} className="col">
              <NavLink to="/courses" >
                <div className="card custom-card" style={{height: "150px"}} onClick={() => handleCourse(value.ID)}>
                  <div className="d-flex card-body justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                      <FontAwesomeIcon icon={ faChalkboardTeacher } size="3x" />
                      <span className="mt-1">{ value.Name }</span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      ))}

    </div>
  );
}

export default StudentsPage;