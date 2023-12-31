import { StyleSheet } from "react-native";

const colors = {
  black: "#1A1A1A",
  error: "red",
  link: "#3b99fc",
  primary: "#949494",
  secondary: "#b50938",
  white: "#f8f9fa",
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  container: {
    padding: 25,
  },
});

export { styles, colors };
