import { combineReducers } from "redux";
import eventsReducer from "./events";

export const combinedReducers = combineReducers({
  events: eventsReducer,
});
