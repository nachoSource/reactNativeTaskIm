import * as types from "./types";
import { ParticipantProps } from "../../components/ParticipantsList/Participant";

export const fetchParticipantsRequest = (data: number) => ({
  type: types.FETCH_PARTICIPANTS_REQUEST,
  payload: data,
});

export const fetchParticipantsSuccess = (data: ParticipantProps[]) => ({
  type: types.FETCH_PARTICIPANTS_SUCCESS,
  payload: data,
});

export const fetchParticipantsFailure = (e: any) => ({
  type: types.FETCH_PARTICIPANTS_FAILURE,
  payload: e,
});
