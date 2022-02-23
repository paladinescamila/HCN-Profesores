import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

import { PATH_COURSES } from "../../Courses/_redux/coursesCrud";

export const PATH_HCN = "/HCN";

export const PATH_GET_ALL_HCN = PATH_HCN + "/GetAllHCN";
export const PATH_GET_HCN = PATH_HCN + "/GetHCN";

export const PATH_GET_ALL_HCN_BY_COURSE = PATH_COURSES + "/GetAllHCN";

export function getAllHcn(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_HCN + getQueryParams(params), 
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

export function getHcn(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_HCN + getQueryParams(params), 
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

export function getAllHcnByCourse(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_HCN_BY_COURSE + getQueryParams(params), 
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