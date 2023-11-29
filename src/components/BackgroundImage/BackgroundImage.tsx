import React from "react";
import { View } from "react-native";
import { HeroBgr } from "../../../assets";
import styles from "./BackgroundImage.styles";

const BackgroundImage = () => (
  <View style={styles.backgroundImage}>
    <HeroBgr />
  </View>
);
export default BackgroundImage;
