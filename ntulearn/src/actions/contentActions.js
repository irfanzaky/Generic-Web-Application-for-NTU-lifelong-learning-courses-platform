import Axios from "axios";
import {
  CONTENT_REQUEST,
  CONTENT_SUCCESS,
  CONTENT_FAIL,
} from "../constants/courseConstant";

const detailsContent = (courseID) => async (dispatch) => {
  try {
    dispatch({ type: CONTENT_REQUEST, payload: courseID });
    const { data } = await Axios.get("/api/courses/content/" + courseID);
    dispatch({ type: CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONTENT_FAIL, payload: error.message });
  }
};

export { detailsContent };
