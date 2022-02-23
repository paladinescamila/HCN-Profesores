import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./coursesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";
import * as annRedux from "../../Announcements/_redux/annRedux";

import { COURSES } from "../../../const/data";

const initCoursesState = {
  coursesList: [],
  currentCourse: {
    id: undefined,
    data: {},
    announcementsList: [],
    activitiesList: [],
  }
};

const actionTypes = {
  set_list: "SET_LIST",
  set_current_course: "SET_CURRENT_COURSE"
};

const setCurrentCourse = (field, data) => dispatch => {
  dispatch(coursesSlice.actions.setCurrentCourse({ type: actionTypes.setCurrentCourse, field, data }));
};

/**
 * Get all courses list
 */
const getCoursesList = () => (dispatch, getState) => {
  return requestFromServer.getAllCourses()
  .then(data => {
    dispatch(coursesSlice.actions.setCoursesList({ type: actionTypes.set_list, list: data }));
  })
  .catch(err => {
    console.log(err);
    dispatch(coursesSlice.actions.setCoursesList({ type: actionTypes.set_list, list: COURSES }));
  });
};


/**
 * 
 * @param {*} id 
 */
const getCourseData = id => (dispatch, getState) => {
  return requestFromServer.getCourse({ id })
  .then(data => {
    dispatch(coursesSlice.actions.setCurrentCourse({ 
      type: actionTypes.set_current_course, field: "data", data 
    }));
  })
  .catch(err => {
    console.log(err);
    dispatch(coursesSlice.actions.setCurrentCourse({ 
      type: actionTypes.set_current_course, field: "data", data: COURSES.find(value => value.ID === id)
    }));
  });
};

export const actions = {
  setCurrentCourse,
  getCoursesList,
  getCourseData,
};

export const getters = {
  getCurrentCourse: () => () => {
    
  }
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState: initCoursesState,
  reducers: {
    setCoursesList: (state, action) => {
      const { list } = action.payload;
      state.coursesList = list;
    },
    setCurrentCourse: (state, action) => {
      const { field, data } = action.payload;
      state.currentCourse[field] = data;
    },
  }
});