import React, { useCallback } from "react";
import { Linking, Text } from "react-native";
import { LinkProps } from "../../interfaces/components";
import Touchable from "../Touchable";
import styles from "./Link.styles";

const Link = ({ url, label, style }: LinkProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <Touchable style={[styles.container, style]} onPress={handlePress}>
      <Text style={styles.url}>{label}</Text>
    </Touchable>
  );
};

export default Link;
