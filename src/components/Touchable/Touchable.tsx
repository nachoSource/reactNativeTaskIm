import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import { TouchableProps } from "../../interfaces/components";
import Text from "../Text";
import styles from "./Touchable.style";

const Touchable = ({
  children,
  label = "",
  style,
  onTouch = () => {},
}: TouchableProps): ReactElement => (
  <TouchableOpacity onPress={onTouch} style={[styles.touchable, style]}>
    {!!label && <Text style={styles.label}>{label}</Text>}
    {children}
  </TouchableOpacity>
);

export default Touchable;
