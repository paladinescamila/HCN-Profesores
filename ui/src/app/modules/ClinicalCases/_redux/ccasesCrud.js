import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_CCASES = "/ClinicalCases";

export const PATH_GET_ALL_CCASES = PATH_CCASES + "/GetAllClinicalCases";
export const PATH_GET_CCASE = PATH_CCASES + "/GetClinicalCase";
export const PATH_CREATE_CCASE = PATH_CCASES + "/CreateClinicalCase";
export const PATH_UPDATE_CCASE = PATH_CCASES + "/UpdateClinicalCase";
export const PATH_DELETE_CCASE = PATH_CCASES + "/DeleteClinicalCase";

export const PATH_GET_ALL_CCASES_BY_COURSE = PATH_COURSES + "/GetAllClinicalCases";
export const PATH_ADD_CCASE_TO_COURSE = PATH_COURSES + "/AddClinicalCase";
export const PATH_REMOVE_CCASE_TO_COURSE = PATH_COURSES + "/RemoveClinicalCase";


export function getAllCCases(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_CCASES + getQueryParams(params), 
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

export function getCCase(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_CCASE + getQueryParams(params), 
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

export function getAllCCasesByCourse(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_CCASES_BY_COURSE + getQueryParams(params), 
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

export function addCCaseToCourse(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_ADD_CCASE_TO_COURSE, 
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({
        CourseID: props.CourseID,
        ClinicalCaseID: props.ClinicalCaseID,
        Displayable: 1,
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return "It works!";
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function removeCCaseToCourse(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_REMOVE_CCASE_TO_COURSE, 
      method: "DELETE",
      headers: new Headers(),
      body: JSON.stringify({
        CourseID:       props.CourseID,
        ClinicalCaseID: props.ClinicalCaseID,
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return "It works!";
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function createCCase(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_CREATE_CCASE, 
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({
        Title:        props.Title,
        Description:  props.Description,
        Media:        props.Media,
        TeacherID:    props.TeacherID
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return "It works!";
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function updateCCase(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_UPDATE_CCASE, 
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({
        ID:           props.ID,
        Title:        props.Title,
        Description:  props.Description,
        Media:        props.Media,
        TeacherID:    props.TeacherID
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return "It works!";
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function deleteCCase(props, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_DELETE_CCASE, 
      method: "DELETE",
      headers: new Headers(),
      body: JSON.stringify({
        ID: props.ID
      })
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return "It works!";
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}