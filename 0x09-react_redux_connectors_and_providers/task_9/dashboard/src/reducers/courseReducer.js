import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { Map, fromJS } from "immutable";
import { coursesNormalizer } from "../schema/courses";

const initialState = Map({
  courses: Map(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.set("courses", fromJS(normalizedData.entities.courses)); // Merge normalized data with state

    case SELECT_COURSE:
      return state.setIn(["courses", action.index, "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn(["courses", action.index, "isSelected"], false);

    default:
      return state;
  }
};

export default courseReducer;
