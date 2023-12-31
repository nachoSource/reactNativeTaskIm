import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { EventComponentProps } from "../../interfaces/events";
import { SAVE_CURRENT_EVENT } from "../../store/actions/types";
import Field from "../Field";
import styles from "./EventsList.style";

const Event = ({ dark = false, item, selectEvent }: EventComponentProps) => {
  const navigation = useNavigation();
  const { date, description, imageUrl, isFree, location, title } = item;

  const handlePress = () => {
    selectEvent(item);
    navigation.navigate("Event");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.element,
          dark ? styles.elementDark : styles.elementLight,
        ]}
      >
        <View style={styles.elementHeader}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <View style={styles.elementTitle}>
            <Field dark={dark} numberOfLines={3} value={title} />
            <Field dark={dark} label="Fecha:" value={date} />
          </View>
        </View>
        <Field dark={dark} value={description} />
        <Field dark={dark} value={isFree ? "GRATIS" : "PAGO"} />
        <Field dark={dark} label="Ubicación:" value={location} />
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  () => ({}),
  (dispatch) => {
    return {
      selectEvent: (data: EventComponentProps) =>
        dispatch({ type: SAVE_CURRENT_EVENT, payload: data }),
    };
  }
)(Event);
