import { EventComponentProps } from "./events";

interface IAction {
  type: string;
  payload?: any;
}

interface EventsIState {
  currentEvent: EventComponentProps | null;
  pagination: any | null; // TODO fill this
  data: EventComponentProps | [];
  pending: boolean;
  error: any;
}

export type { IAction, EventsIState };
