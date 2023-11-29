import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  element: { borderRadius: 15, padding: 15, marginBottom: 5 },
  elementDark: { backgroundColor: colors.primary },
  elementLight: { backgroundColor: colors.secondary },
  error: { padding: 15, color: colors.error },
  field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    backgroundColor: colors.white,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: colors.white,
    borderWidth: 10,
    marginHorizontal: 30,
    marginTop: 10,
    // TODO fix this
    marginBottom: 160,
  },
  text: { fontSize: 17, fontWeight: "bold" },
  textDark: { color: colors.white },
  textLight: { color: colors.primary },
});

export default styles;
