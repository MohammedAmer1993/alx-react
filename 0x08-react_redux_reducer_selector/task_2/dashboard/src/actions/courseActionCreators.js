import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";
import { bindActionCreators } from "redux";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export const boundCourseActionCreators = (dispatch) =>
  bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
    },
    dispatch
  );

export const fetchCourseSuccess = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data,
});
