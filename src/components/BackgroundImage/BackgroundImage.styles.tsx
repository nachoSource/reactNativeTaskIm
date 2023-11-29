import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default styles;
