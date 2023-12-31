import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { TouchableProps } from "../../interfaces/components";
import Text from "../Text";
import styles from "./Touchable.style";

const Touchable = ({
  children,
  label = "",
  style,
  onPress = () => {},
}: TouchableProps): ReactElement => (
  <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
    {!!label && <Text style={styles.label}>{label}</Text>}
    {children}
  </TouchableOpacity>
);

export default Touchable;
