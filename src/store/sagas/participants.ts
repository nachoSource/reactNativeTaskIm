import { call, put, take, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../actions/participants";
import { fetchParticipants } from "../../services/participants";

function* fetchParticipantsRequest() {
  try {
    yield delay(2000);

    // @ts-ignore
    const response = yield call(fetchParticipants);

    if (!response.error) {
      yield put(actions.fetchParticipantsSuccess(response));
    } else {
      yield put(actions.fetchParticipantsFailure(response.error));
    }
  } catch (e) {
    yield put(actions.fetchParticipantsFailure(e));
  }
}

export default function* participantsSaga() {
  yield takeLatest(actions.fetchParticipantsRequest, fetchParticipantsRequest);
}
