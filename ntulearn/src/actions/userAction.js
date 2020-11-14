import Axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstant";

const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    const { data } = await Axios.post("http://irfanzakyharlen.com:5000/api/users/signin/", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password } });
    const { data } = await Axios.post("http://irfanzakyharlen.com:5000/api/users/register/", { username, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

export { signin, register };
