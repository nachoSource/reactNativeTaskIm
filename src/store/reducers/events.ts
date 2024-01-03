import * as types from "../actions/types";
import { EventsIState, IAction } from "../../interfaces/store";

const initialState: EventsIState = {
  currentEvent: null,
  data: [],
  pagination: null,
  pending: false,
  error: null,
};

const eventsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.FETCH_EVENTS_REQUEST: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case types.FETCH_EVENTS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.pagination,
        pending: false,
        error: false,
      };
    }
    case types.FETCH_EVENTS_FAILURE: {
      return {
        ...state,
        data: null,
        pagination: null,
        pending: false,
        error: true,
      };
    }
    case types.SAVE_CURRENT_EVENT: {
      return {
        ...state,
        currentEvent: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default eventsReducer;
