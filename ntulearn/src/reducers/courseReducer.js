import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  CONTENT_FAIL,
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

function contentDetailsReducer(state = { content: {} }, action) {
  switch (action.type) {
    case CONTENT_REQUEST:
      return { loading: true, content: [] };
    case CONTENT_SUCCESS:
      return { loading: false, content: action.payload };
    case CONTENT_FAIL:
      return { loading: false, content: [], error: action.payload };
    default:
      return state;
  }
}

export { courseListReducer, courseDetailsReducer, contentDetailsReducer };
