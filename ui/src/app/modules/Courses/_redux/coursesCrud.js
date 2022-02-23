import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

export const PATH_COURSES = "/Courses";

export const PATH_GET_ALL_COURSES = PATH_COURSES + "/GetAllCourses";
export const PATH_GET_COURSE = PATH_COURSES + "/GetCourse";
export const PATH_UPDATE_COURSE = PATH_COURSES + "/UpdateCourse";
export const PATH_CREATE_COURSE = PATH_COURSES + "/CreateCourse";
export const PATH_DELETE_COURSE = PATH_COURSES + "/DeleteCourse";

export const PATH_ADD_HCN_COURSE = PATH_COURSES + "/AddHCN";
export const PATH_GET_ALL_HCN_COURSE = PATH_COURSES + "/GetAllHCN";
export const PATH_REMOVE_HCN_COURSE = PATH_COURSES + "/RemoveHCN";
export const PATH_VISIBILITY_HCN_COURSE = PATH_COURSES + "/VisibilityHCN";

export const PATH_ADD_CC_COURSE = PATH_COURSES + "/AddClinicalCase";
export const PATH_GET_ALL_CC_COURSE = PATH_COURSES + "/GetAllClinicalCases";
export const PATH_REMOVE_CC_COURSE = PATH_COURSES + "/RemoveClinicalCase";
export const PATH_VISIBILITY_CC_COURSE = PATH_COURSES + "/VisibilityClinicalCase";

export const PATH_ADD_STUDENT_COURSE = PATH_COURSES + "/AddStudent";
export const PATH_GET_ALL_STUDENTS_COURSE = PATH_COURSES + "/GetAllStudentsCourse";
export const PATH_REMOVE_STUDENT_COURSE = PATH_COURSES + "/RemoveStudent";


export function getAllCourses(authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_COURSES, 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function getCourse(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_COURSE + getQueryParams(params), 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function updateStudent(props, authToken) {
  return makeRequest({
    path: PATH_UPDATE_COURSE, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID    : props.id,
      Name  : props.name,
      Email : props.email,
    }),
  });
}

export function createStudent(props, authToken) { 
  return makeRequest({
    path: PATH_CREATE_COURSE, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID    : props.id,
      Name  : props.name,
      Email : props.email,
    }),
  });
}

export function deleteStudent(authToken) {
  return makeRequest({
    path: PATH_DELETE_COURSE, 
    method: "DELETE",
    headers: new Headers(),
  });
}