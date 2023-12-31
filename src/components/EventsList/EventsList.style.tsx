import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  element: { borderRadius: 15, padding: 15, marginBottom: 5, width: "100%" },
  elementDark: { backgroundColor: colors.primary },
  elementLight: { backgroundColor: colors.secondary },
  elementHeader: {
    display: "flex",
    flexDirection: "row",
  },
  elementTitle: { flex: 1, marginLeft: 8 },
  error: { padding: 15, color: colors.error },
  img: { height: 100, width: 100 },
  list: {
    backgroundColor: colors.white,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: colors.white,
    borderWidth: 10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default styles;
