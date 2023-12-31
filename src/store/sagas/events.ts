import { call, put, takeLeading, delay } from "redux-saga/effects";
import { parseEventsData } from "../../helpers/events";
import { fetchEvents } from "../../services/events";
import * as actions from "../actions/events";

function* fetchEventsRequest() {
  try {
    yield delay(2000);

    // @ts-ignore
    const response = yield call(fetchEvents);

    if (!response.error) {
      yield put(
        actions.fetchEventsSuccess({
          ...response,
          data: parseEventsData(response.data),
        })
      );
    } else {
      yield put(actions.fetchEventsFailure(response.error));
    }
  } catch (e) {
    yield put(actions.fetchEventsFailure(e));
  }
}

export default function* eventsSaga() {
  yield takeLeading(actions.fetchEventsRequest, fetchEventsRequest);
}
