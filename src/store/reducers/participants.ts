import * as types from "../actions/types";
import { IAction } from "../actions/types";
import { ParticipantProps } from "../../components/ParticipantsList/Participant";

interface IState {
  data: ParticipantProps | [];
  pending: boolean;
  error: any;
}

const initialState: IState = {
  pending: false,
  data: [],
  error: null,
};

const participantsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.FETCH_PARTICIPANTS_REQUEST: {
      return { ...state, pending: true, error: false };
    }
    case types.FETCH_PARTICIPANTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        pending: false,
        error: false,
      };
    }
    case types.FETCH_PARTICIPANTS_FAILURE: {
      return { ...state, pending: false, error: true };
    }
    default: {
      return state;
    }
  }
};

export default participantsReducer;
