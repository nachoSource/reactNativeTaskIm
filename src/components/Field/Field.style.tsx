import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: { fontSize: 17, fontWeight: "bold" },
  textDark: { color: colors.black },
  textLight: { color: colors.white },
});

export default styles;
