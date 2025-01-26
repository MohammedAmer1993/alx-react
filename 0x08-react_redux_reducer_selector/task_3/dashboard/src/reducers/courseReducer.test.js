import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  const initialCourses = [
    { id: 1, name: "Course 1", isSelected: false },
    { id: 2, name: "Course 2", isSelected: false },
  ];

  it("should handle SELECT_COURSE and set isSelected to true for the specified course", () => {
    const state = courseReducer(initialCourses, {
      type: SELECT_COURSE,
      index: 1,
    });
    const expectedState = [
      { id: 1, name: "Course 1", isSelected: true },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    expect(state).toEqual(expectedState);
  });

  it("should handle UNSELECT_COURSE and set isSelected to false for the specified course", () => {
    const modifiedCourses = [
      { id: 1, name: "Course 1", isSelected: true },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    const state = courseReducer(modifiedCourses, {
      type: UNSELECT_COURSE,
      index: 1,
    });
    const expectedState = [
      { id: 1, name: "Course 1", isSelected: false },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    expect(state).toEqual(expectedState);
  });
  it("should return the default state when no action is passed", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it("should return the default state when an unrelated action is passed", () => {
    const state = courseReducer(undefined, { type: "UNRELATED_ACTION" });
    expect(state).toEqual([]);
  });

  it("should handle FETCH_COURSE_SUCCESS correctly and set isSelected to false", () => {
    const courses = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
    ];
    const state = courseReducer([], {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    });

    const expectedState = [
      { id: 1, name: "Course 1", isSelected: false },
      { id: 2, name: "Course 2", isSelected: false },
    ];
    expect(state).toEqual(expectedState);
  });
});
