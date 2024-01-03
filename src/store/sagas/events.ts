import { call, put, delay, select, takeLeading } from "redux-saga/effects";
import { parseEventsData } from "../../helpers/events";
import { EventItemProps } from "../../interfaces/events";
import { fetchEvents } from "../../services/events";
import * as actions from "../actions/events";

function* fetchEventsRequest({ page = 0, reset = true }) {
  try {
    yield delay(2000);

    // @ts-ignore
    const response = yield call(fetchEvents, page);

    // TODO move this to a selectors/ directory
    const currentEvents: EventItemProps[] = yield select(
      (state) => state.events.data || []
    );

    if (!response.error) {
      const events = reset
        ? parseEventsData(response.data)
        : [...currentEvents, ...parseEventsData(response.data)];
      yield put(
        actions.fetchEventsSuccess({
          ...response,
          data: events,
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
