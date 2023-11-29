import { combineReducers } from "redux";
import participantsReducer from "./participants";

export const combinedReducers = combineReducers({
  participants: participantsReducer,
});
