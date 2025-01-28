import { Map } from "immutable";
import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  const initialState = Map({
    courses: Map(),
  });

  it("should return the initial state when no action is passed", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle FETCH_COURSE_SUCCESS and normalize course data", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
      ],
    };
    const state = courseReducer(initialState, action);
    expect(state.getIn(["courses", "1", "name"])).toEqual("Course 1");
    expect(state.getIn(["courses", "2", "name"])).toEqual("Course 2");
  });

  it("should handle SELECT_COURSE and update isSelected", () => {
    const stateWithCourses = Map({
      courses: Map({
        1: Map({ id: 1, name: "Course 1", isSelected: false }),
        2: Map({ id: 2, name: "Course 2", isSelected: false }),
      }),
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(stateWithCourses, action);
    expect(state.getIn(["courses", "1", "isSelected"])).toBe(true);
  });

  it("should handle UNSELECT_COURSE and update isSelected", () => {
    const stateWithCourses = Map({
      courses: Map({
        1: Map({ id: 1, name: "Course 1", isSelected: true }),
        2: Map({ id: 2, name: "Course 2", isSelected: false }),
      }),
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const state = courseReducer(stateWithCourses, action);
    expect(state.getIn(["courses", "1", "isSelected"])).toBe(false);
  });
});
