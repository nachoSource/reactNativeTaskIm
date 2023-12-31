import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  button: { backgroundColor: colors.primary, borderRadius: 30 },
  buttonText: { color: colors.white },
  selectedOption: { backgroundColor: colors.primary },
  title: { color: colors.secondary, fontSize: 17 },
});

export default styles;
