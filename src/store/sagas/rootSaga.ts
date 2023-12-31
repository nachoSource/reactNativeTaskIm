import { all } from "redux-saga/effects";
import eventsSaga from "./events";

function* rootSaga() {
  yield all([eventsSaga()]);
}

export default rootSaga;
