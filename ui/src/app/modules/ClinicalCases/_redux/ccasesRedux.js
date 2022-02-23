import { createSlice } from "@reduxjs/toolkit";

import * as requestFromServer from "./ccasesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { CCASES } from "../../../const/data";

const initCCasesState = {
  ccasesList: [],
  ccasesListByCourse: [],
};

const actionTypes = {
  set_list: "SET_LIST",
  set_list_by_course: "SET_LIST_BY_COURSE",
};

const getCCasesList = () => (dispatch, getState) => {
  return requestFromServer.getAllCCases()
  .then(data => {
    dispatch(ccasesSlice.actions.setList(
      { type: actionTypes.set_list, list: data.filter(value => value.TeacherID === 50001) }
    ));
  })
  .catch(err => {
    console.log(err);
    dispatch(ccasesSlice.actions.setList({ type: actionTypes.set_list, list: CCASES }));
  });
};

const getCCasesListByCourse = () => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.getAllCCasesByCourse({ id: CourseID })
  .then(async data => {
    dispatch(ccasesSlice.actions.setListByCourse({ type: actionTypes.set_list, list: [] }));
    await Promise.all(data.map(async value => {
      let ccase = await requestFromServer.getCCase({ id: value.ClinicalCaseID });
      dispatch(ccasesSlice.actions.addListByCourse({ type: actionTypes.set_list, value: ccase }));
    }))
  })
  .catch(err => {
    console.log(err);
    dispatch(ccasesSlice.actions.setListByCourse({ 
      type: actionTypes.set_list, list: CCASES.filter(value => value.CourseID === CourseID) 
    }));
  });
};

const addCCaseToCourse = id => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.addCCaseToCourse({ ClinicalCaseID: id, CourseID })
  .then(() => {
    dispatch(getCCasesListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

const createCCase = props => (dispatch, getState) => {
  return requestFromServer.createCCase({ ...props, TeacherID: 50001 })
  .then(() => {
    dispatch(getCCasesList());
  })
  .catch(err => {
    console.log(err);
  });
};

const updateCCase = props => (dispatch, getState) => {
  return requestFromServer.updateCCase({ ...props, TeacherID: 50001 })
  .then(() => {
    dispatch(getCCasesList());
    dispatch(getCCasesListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

const deleteCCaseByCourse = id => (dispatch, getState) => {
  return dispatch(removeCCase(id))
  .then(() => requestFromServer.deleteCCase({ ID: id }))
  .then(() => {
    dispatch(getCCasesList());
    dispatch(getCCasesListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

const removeCCase = id => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.removeCCaseToCourse({ ClinicalCaseID: id, CourseID })
  .then(() => {
    dispatch(getCCasesListByCourse());
  })
  .catch(err => {
    console.log(err);
  });
};

export const actions = {
  getCCasesListByCourse,
  getCCasesList,
  addCCaseToCourse,
  createCCase,
  updateCCase,
  removeCCase,
  deleteCCaseByCourse
};

export const ccasesSlice = createSlice({
  name: "clinical-cases",
  initialState: initCCasesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.ccasesList = list;
    },
    setListByCourse: (state, action) => {
      const { list } = action.payload;
      state.ccasesListByCourse = list;
    },
    addListByCourse: (state, action) => {
      const { value } = action.payload;
      state.ccasesListByCourse.push(value);
    },
  }
});