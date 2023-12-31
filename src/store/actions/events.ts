import { EventComponentProps } from "../../interfaces/events";
import * as types from "./types";

export const fetchEventsRequest = (data: number) => ({
  type: types.FETCH_EVENTS_REQUEST,
  payload: data,
});

export const fetchEventsSuccess = (data: EventComponentProps[]) => ({
  type: types.FETCH_EVENTS_SUCCESS,
  payload: data,
});

export const fetchEventsFailure = (e: any) => ({
  type: types.FETCH_EVENTS_FAILURE,
  payload: e,
});

export const saveCurrentEvent = (data: EventComponentProps) => ({
  type: types.SAVE_CURRENT_EVENT,
  payload: data,
});
