import React, { PropsWithChildren, ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../Text";
import styles from "./Touchable.style";

type TouchableProps = PropsWithChildren<{
  label: string;
  onPress: () => any;
}>;

const Touchable = ({ label, onPress }: TouchableProps): ReactElement => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default Touchable;
