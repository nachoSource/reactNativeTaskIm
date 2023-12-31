import { PropsWithChildren, ReactNode } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { StyleSheet } from "react-native";
import { EventItemProps } from "./events";

type BackButtonProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}>;

type EventListProps = PropsWithChildren<{
  data: [any] | [];
  error: boolean;
}>;

type FavEventsListProps = PropsWithChildren<{
  events: EventItemProps[];
  selectEvent: Function;
}>;

type LinkProps = PropsWithChildren<{
  url: string;
  label: string;
  style?: StyleSheet.NamedStyles<any>;
}>;

type TextProps = PropsWithChildren<{
  children: string | string[];
  style?: StyleSheet.NamedStyles<any>;
}>;

type TouchableProps = PropsWithChildren<{
  children?: ReactNode;
  label?: string;
  style?: StyleSheet.NamedStyles<any>;
  onTouch?: Function;
}>;

export type {
  BackButtonProps,
  EventListProps,
  FavEventsListProps,
  LinkProps,
  TextProps,
  TouchableProps,
};
