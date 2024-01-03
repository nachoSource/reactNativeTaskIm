import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { BackButton, Field, Touchable } from "../../components";
import { getDate, getTime } from "../../helpers/events";
import { EventScreenProps } from "../../interfaces/screens";
import BaseLayout from "../BaseLayout";
import styles from "./EventScreen.styles";

const EventScreen = ({ navigation, event }: EventScreenProps): ReactElement => {
  const { id, date, url, title, imageUrl, description, isFree, location } =
    event;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isEventFavorite, setIsEventFavorite] = useState<Boolean>(false);

  const formattedDate = getDate(date);
  const time = getTime(date);

  useEffect(() => {
    AsyncStorage.getItem("favoriteEvents").then((fe) => {
      setIsEventFavorite(JSON.parse(fe)?.includes(id));
    });
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      delay: 300,
      toValue: 100,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleTouch = async () => {
    try {
      if (isEventFavorite) {
        const favoriteEvents = await AsyncStorage.getItem("favoriteEvents");
        const filteredEvents = JSON.parse(favoriteEvents).filter(
          (e) => e !== id
        );
        await AsyncStorage.setItem(
          "favoriteEvents",
          JSON.stringify(filteredEvents)
        );
      } else {
        const favoriteEvents = await AsyncStorage.getItem("favoriteEvents");
        let parsedEvents = JSON.parse(favoriteEvents);
        if (!!parsedEvents) {
          if (!parsedEvents.find((e) => e === id)) {
            parsedEvents = [...parsedEvents, id];
          }
        } else {
          parsedEvents = [id];
        }
        await AsyncStorage.setItem(
          "favoriteEvents",
          JSON.stringify(parsedEvents)
        );
      }
      // TODO improve this to avoid inconsistency
      setIsEventFavorite(!isEventFavorite);
    } catch (e) {
      console.log("Error while updating from AsyncStorage", e);
    }
  };

  return (
    <BaseLayout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.Image
            source={{ uri: imageUrl }}
            style={{ ...styles.img, opacity: fadeAnim }}
          />
          <View>
            <Field dark numberOfLines={3} value={title} />
            <Field dark label="Fecha:" value={formattedDate} />
            <Field dark label="Horario:" value={time} />
          </View>
        </View>
        <View style={styles.content}>
          <Field dark label="Código del evento:" value={id} />
          <Field dark value={description} />
          <Field dark value={isFree ? "GRATIS" : "PAGO"} />
          <Field dark label="Ubicación:" value={location} />

          <View style={styles.buttonsContainer}>
            <Touchable
              label={`${
                isEventFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"
              }`}
              style={styles.favTouchable}
              onTouch={handleTouch}
            />
          </View>
        </View>
      </View>
    </BaseLayout>
  );
};

export default connect((state: any) => {
  return {
    event: state.events.currentEvent || null,
  };
})(EventScreen);
