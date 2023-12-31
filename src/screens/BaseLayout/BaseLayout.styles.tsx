import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.secondary,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
});

export default styles;
