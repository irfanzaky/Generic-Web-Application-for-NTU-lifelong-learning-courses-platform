import Axios from "axios";
import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
  COURSE_DETAILS_FAIL,
  COURSE_DESC_UPDATE,
} from "../constants/courseConstant";

const listCourses = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data } = await Axios.get("http://localhost:5000/api/courses");
    dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSE_LIST_FAIL, payload: error.message });
  }
};

const detailsCourse = (courseID) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST, payload: courseID });
    const { data } = await Axios.get("http://localhost:5000/api/courses/get/" + courseID);
    dispatch({ type: COURSE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COURSE_DETAILS_FAIL, payload: error.message });
  }
};

const updateCourseDesc = (courseID, courseDesc) => async (dispatch) => {
  try {
    console.log("dispatch update", courseID, courseDesc);
    const { data } = await Axios.put("http://localhost:5000/api/courses/desc/" + courseID, {desc: courseDesc});
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

const updateCourseAnn = (courseID, courseAnn) => async (dispatch) => {
  try {
    console.log("dispatch update", courseID, courseAnn);
    const { data } = await Axios.put("http://localhost:5000/api/courses/ann/" + courseID, {ann: courseAnn});
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

const uploadAssignment = (courseID, assignment) => async (dispatch) => {
  try {
    console.log("dispatch update", courseID, assignment);
    const { data } = await Axios.post("http://localhost:5000/api/courses/assignment/" + courseID, assignment);
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
export { listCourses, detailsCourse, updateCourseDesc, updateCourseAnn, uploadAssignment };
