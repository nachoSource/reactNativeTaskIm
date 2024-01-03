import { PropsWithChildren } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { EventItemProps, EventComponentProps } from "./events";

type EventScreenProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  event: EventItemProps;
}>;

type HomeScreenProps = PropsWithChildren<{
  error: boolean;
  events: EventComponentProps | [];
  pagination: any | null;
  pending: boolean;
  fetchEvents: Function;
}>;

export type { EventScreenProps, HomeScreenProps };
