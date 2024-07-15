import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import searchTermReducer from "./searchTermReducer";

const myReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  searchTerm: searchTermReducer,
});

export default myReducer;
