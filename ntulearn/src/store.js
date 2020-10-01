import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { courseListReducer, courseDetailsReducer } from "./reducers/courseReducer";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
  courseList: courseListReducer,
  courseDetails: courseDetailsReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;
