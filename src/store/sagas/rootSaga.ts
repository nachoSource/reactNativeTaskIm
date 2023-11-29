import { all } from "redux-saga/effects";
import participantsSaga from "./participants";

function* rootSaga() {
  yield all([participantsSaga()]);
}

export default rootSaga;
