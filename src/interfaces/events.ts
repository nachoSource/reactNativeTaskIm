import { PropsWithChildren } from "react";

type EventComponentProps = PropsWithChildren<{
  dark?: boolean;
  item: EventItemProps;
  selectEvent: Function;
}>;

type EventItemProps = PropsWithChildren<{
  id: Number;
  date: Date;
  description: string;
  imageUrl: string;
  isFree: boolean;
  location: string;
  title: string;
  url: string;
}>;

type FieldProps = PropsWithChildren<{
  dark?: boolean;
  label?: string;
  numberOfLines?: number;
  value: String | Number | Date | Boolean;
}>;

export type { EventComponentProps, EventItemProps, FieldProps };
