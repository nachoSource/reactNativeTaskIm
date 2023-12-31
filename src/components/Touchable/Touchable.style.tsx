import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  label: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  touchable: {
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default styles;
