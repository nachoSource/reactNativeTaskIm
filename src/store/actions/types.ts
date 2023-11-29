export interface IAction {
  type: string;
  payload?: any;
}

export const FETCH_PARTICIPANTS_REQUEST =
  "[Participants] Fetch participants request";
export const FETCH_PARTICIPANTS_SUCCESS =
  "[Participants] Fetch participants success";
export const FETCH_PARTICIPANTS_FAILURE =
  "[Participants] Fetch participants failure";
