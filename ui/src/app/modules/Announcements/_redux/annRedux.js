import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./annCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { ANNOUNCEMENTS } from "../../../const/data";

const initAnnState = {
  announcementslist: [],
  annState: {
    loading: false
  }
};

const actionTypes = {
  set_list: "SET_LIST"
};


const setList = list => dispatch => {
  dispatch(annSlice.actions.setList({ type: actionTypes.set_list, list }));
};

const getAnnouncementsList = () => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.getAllAnnouncements({ CourseID })
  .then(data => {
    dispatch(annSlice.actions.setList({
      type: actionTypes.set_list, 
      list: data
        .filter(value => (value.CourseID === CourseID && value.TeacherID === 50001))
        .sort((a, b) => new Date(b.CreationDate) - new Date(a.CreationDate))
    }));
  })
  .catch(err => {
    console.log(err);
    dispatch(annSlice.actions.setList({ 
      type: actionTypes.set_list, list: ANNOUNCEMENTS.filter(value => value.CourseID === CourseID) 
    }));
  });
};

const updateAnnouncement = props => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.updateAnnouncement({ ...props, CourseID })
  .then(() => {
    dispatch(getAnnouncementsList());
  })
  .catch(err => {
    console.log(err);
  });
};

const createAnnouncement = props => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.createAnnouncement({ ...props, CourseID })
  .then(() => {
    dispatch(getAnnouncementsList());
  })
  .catch(err => {
    console.log(err);
  });
};

const deleteAnnouncement = id => (dispatch, getState) => {
  return requestFromServer.deleteAnnouncement(id)
  .then(() => {
    dispatch(getAnnouncementsList());
  })
  .catch(err => {
    console.log(err);
    /*
    dispatch(annSlice.actions.setList({ 
      type: actionTypes.set_list, list: ANNOUNCEMENTS.filter(value => value.ID !== id) 
    }));
    */
  });
};

export const actions = {
  setList,
  getAnnouncementsList,
  updateAnnouncement,
  createAnnouncement,
  deleteAnnouncement,
};

export const annSlice = createSlice({
  name: "Adv",
  initialState: initAnnState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.announcementslist = list;
    },
  }
});