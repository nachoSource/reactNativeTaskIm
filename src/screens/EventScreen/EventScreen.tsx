import React, { ReactElement } from "react";
import { Image, View } from "react-native";
import { connect } from "react-redux";
import { BackButton, Field, Link } from "../../components";
import { EventScreenProps } from "../../interfaces/screens";
import BaseLayout from "../BaseLayout";
import styles from "./EventScreen.styles";

const EventScreen = ({ navigation, event }: EventScreenProps): ReactElement => {
  const { id, date, url, title, imageUrl, description, isFree, location } =
    event;

  return (
    <BaseLayout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <View>
            <Field dark numberOfLines={3} value={title} />
            <Field dark label="Fecha:" value={date} />
          </View>
        </View>
        <View style={styles.content}>
          <Field dark label="Código del evento:" value={id} />
          <Field dark value={description} />
          <Field dark value={isFree ? "GRATIS" : "PAGO"} />
          <Field dark label="Ubicación:" value={location} />

          <View style={styles.linkContainer}>
            <Link url={url} label="+ Info" style={styles.link} />
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
