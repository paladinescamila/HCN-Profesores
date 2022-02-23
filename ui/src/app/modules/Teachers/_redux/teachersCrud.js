import makeRequest from "../../General/_redux/Crud";
import { getQueryParams } from "../../../const";

export const PATH_TEACHERS = "/Teachers";

export const PATH_GET_ALL_TEACHERS = PATH_TEACHERS + "/GetAllTeachers";
export const PATH_GET_TEACHER = PATH_TEACHERS + "/GetTeacher";
export const PATH_UPDATE_TEACHER = PATH_TEACHERS + "/UpdateTeacher";
export const PATH_CREATE_TEACHER = PATH_TEACHERS + "/CreateTeacher";
export const PATH_DELETE_TEACHER = PATH_TEACHERS + "/DeleteTeacher";

export function getAllTeachers(authToken) {
  return makeRequest({
    path: PATH_GET_ALL_TEACHERS, 
    method: "GET",
    headers: new Headers(),
  });
}

export function getTeacher(params, authToken) {
  return makeRequest({
    path: PATH_GET_TEACHER + getQueryParams(params), 
    method: "GET",
    headers: new Headers(),
  });
}

export function updateTeacher(props, authToken) {
  return makeRequest({
    path: PATH_UPDATE_TEACHER, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID    : props.id,
      Name  : props.name,
      Email : props.email,
    }),
  });
}

export function createTeacher(props, authToken) {
  return makeRequest({
    path: PATH_CREATE_TEACHER, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID    : props.id,
      Name  : props.name,
      Email : props.email,
    }),
  });
}

export function deleteTeacher(authToken) {
  return makeRequest({
    path: PATH_DELETE_TEACHER, 
    method: "DELETE",
    headers: new Headers(),
  });
}