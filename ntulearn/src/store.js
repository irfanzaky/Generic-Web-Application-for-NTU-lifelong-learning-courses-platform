import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { courseListReducer, courseDetailsReducer } from "./reducers/courseReducer";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  courseList: courseListReducer,
  courseDetails: courseDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;
