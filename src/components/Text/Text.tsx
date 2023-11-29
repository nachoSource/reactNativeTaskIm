import React, { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, Text as RNText } from "react-native";
import styles from "./Text.styles";

type TextProps = PropsWithChildren<{
  children: string | string[];
  style?: StyleSheet.NamedStyles<any>;
}>;

const Text = ({ children, style }: TextProps): ReactElement => (
  <RNText style={{ ...styles, ...style }}>{children}</RNText>
);

export default Text;
