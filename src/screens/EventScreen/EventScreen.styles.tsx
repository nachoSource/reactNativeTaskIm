import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 25,
    display: "flex",
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 15,
    padding: 15,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    paddingBottom: 5,
    width: "100%",
  },
  img: { width: "100%", height: 200 },
  link: { width: "25%" },
});

export default styles;
