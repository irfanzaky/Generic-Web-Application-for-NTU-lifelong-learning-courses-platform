import Axios from "axios";
import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
} from "../constants/courseConstant";

const listCourses = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data } = await Axios.get("/api/courses");
    dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSE_LIST_FAIL, payload: error.message });
  }
};

const detailsCourse = (courseID) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST, payload: courseID });
    const { data } = await Axios.get("/api/courses/" + courseID);
    dispatch({ type: COURSE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSE_DETAILS_FAIL, payload: error.message });
  }
};

export { listCourses, detailsCourse };
