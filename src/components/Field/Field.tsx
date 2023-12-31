import React from "react";
import { Text, View } from "react-native";
import { FieldProps } from "../../interfaces/events";
import styles from "./Field.style";

const Field = ({
  dark = false,
  label = "",
  numberOfLines = 2,
  value,
}: FieldProps) => (
  <View style={styles.field}>
    {!!label && (
      <Text style={[styles.text, dark ? styles.textDark : styles.textLight]}>
        {label}
      </Text>
    )}
    <Text
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      style={[styles.text, dark ? styles.textDark : styles.textLight]}
    >
      {value?.toString()}
    </Text>
  </View>
);

export default Field;
