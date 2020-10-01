import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
} from "../constants/courseConstant";

function courseListReducer(state = { courses: [] }, action) {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { loading: true };
    case COURSE_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSE_LIST_FAIL:
      return { loading: false, courses: [], error: action.payload };
    default:
      return state;
  }
}

function courseDetailsReducer(state = { courses: {} }, action) {
  switch (action.type) {
    case COURSE_DETAILS_REQUEST:
      return { loading: true, course: [] };
    case COURSE_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case COURSE_DETAILS_FAIL:
      return { loading: false, course: [], error: action.payload };
    default:
      return state;
  }
}

export { courseListReducer, courseDetailsReducer };
